"use client";
import { properties } from "../../assets/properties";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ContactForm from "../../components/contactForm";

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const match = properties.find((p) => p.id === params.id);
    if (!match) return router.push("/properties");
    setProperty(match);
  }, [params.id, router]);

  if (!property) return <div className="p-10 text-center">טוען נכס...</div>;

  const totalCost = property.price + property.renovation;
  const profit = property.arv - totalCost;
  const profitPercent = Math.round((profit / totalCost) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-4">{property.address}</h1>
      <img src={property.image} alt={property.address} className="w-full h-64 object-cover rounded-lg mb-6" />

      <div className="space-y-3 text-lg text-center mb-10">
        <p>💰 <strong>מחיר רכישה:</strong> ${property.price.toLocaleString()}</p>
        <p>🛠️ <strong>עלות שיפוץ:</strong> ${property.renovation.toLocaleString()}</p>
        <p>📈 <strong>שווי עתידי:</strong> ${property.arv.toLocaleString()}</p>
        <p>📊 <strong>רווח צפוי:</strong> ${profit.toLocaleString()} ({profitPercent}%)</p>
      </div>

      {/* CTA 1 - טופס */}
      <div className="bg-blue-50 rounded-lg p-6 shadow mb-10 text-right">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">רוצה לקבל מידע נוסף על הנכס הזה?</h2>     
        <ContactForm/>
      </div>

      {/* CTA 2 - וואטסאפ */}
      <div className="text-center">
        <a
          href={`https://wa.me/972526733636?text=שלום, אני מתעניין בנכס: ${encodeURIComponent(property.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded hover:bg-green-600 transition"
        >
          📱 דברו איתנו בוואטסאפ
        </a>
      </div>
    </div>
  );
}




