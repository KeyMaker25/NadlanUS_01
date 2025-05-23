"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "בית" },
    { href: "/landing", label: "נחיתה" },
    { href: "/properties", label: "נכסים" },
    { href: "/contact", label: "צור קשר" },
    { href: "/login", label: "התחברות" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">NadlanUS</Link> <p>גרסת בדיקה בלבד</p>
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`flex-col sm:flex-row sm:flex gap-4 rtl:gap-4 ${open ? "flex" : "hidden"} sm:!flex`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block sm:inline-block px-3 py-1 rounded hover:underline transition ${
                pathname === link.href ? "bg-white text-blue-600 font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}