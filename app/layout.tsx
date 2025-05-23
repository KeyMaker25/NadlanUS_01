import "../styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "NadlanUS",
  description: "השקעות נדל״ן בארה״ב לישראלים",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-gray-50 font-sans">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
