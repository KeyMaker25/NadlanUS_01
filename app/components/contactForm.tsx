"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().split(" ").length < 2) {
      alert("נא להזין שם מלא (שם פרטי ושם משפחה)");
      return;
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 9) {
      alert("נא להזין מספר טלפון תקני (לפחות 9 ספרות)");
      return;
    }

    const data = { name, phone, message };

    // שליחה ל-Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbxZXs4RQDENDEMyWrwTWcuK4oULgGVeeGLw9TcpeZIqxi-wvsoY-GKd8tQeJAOoJuhR/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, number: phone, message }),
    });

    // שליחה ל-API פנימי (אם תרצה)
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // WhatsApp
    const waMsg = `שם: ${name}%0aטלפון: ${phone}%0aהודעה: ${message}`;
    window.open(`https://wa.me/972526733636?text=${encodeURIComponent(waMsg)}`, "_blank");

    alert("הפרטים נשלחו בהצלחה!");
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <form className="space-y-4 text-right" onSubmit={sendForm}>
      <input
        className="w-full border p-3 rounded"
        placeholder="שם מלא"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="w-full border p-3 rounded"
        placeholder="טלפון"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <textarea
        className="w-full border p-3 rounded"
        placeholder="מה מעניין אותך?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        שלחו לי פרטים
      </button>
    </form>
  );
}
