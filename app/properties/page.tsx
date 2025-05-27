
import { properties } from "../assets/properties";

import Link from "next/link";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-10 text-center">נכסים פתוחים להשקעה</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/properties/${property.id}`}
            className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${property.image})` }}
            />
            <div className="p-4">
              <h2 className="font-bold text-lg text-blue-700 mb-2">{property.address}</h2>
              <p>💰 מחיר רכישה: ${property.price.toLocaleString()}</p>
              <p>🛠️ עלות שיפוץ: ${property.renovation.toLocaleString()}</p>
              <p>📈 שווי עתידי: ${property.arv.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}