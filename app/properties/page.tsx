const properties = [
  {
    address: "123 Maple St, Maple Heights, אוהיו",
    price: "$54,000",
    arv: "$140,000",
    image: "https://i.imgur.com/E2M7OYv.jpg"
  },
  {
    address: "456 Elm St, Akron, אוהיו",
    price: "$48,000",
    arv: "$125,000",
    image: "https://i.imgur.com/1XkUJ1g.jpg"
  },
  {
    address: "789 Oak Ave, Detroit, מישיגן",
    price: "$60,000",
    arv: "$135,000",
    image: "https://i.imgur.com/BShUlps.jpg"
  },
  {
    address: "321 Cedar Dr, Cleveland, אוהיו",
    price: "$52,000",
    arv: "$118,000",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364"
  },
  {
    address: "101 Pine St, Buffalo, ניו יורק",
    price: "$67,000",
    arv: "$142,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  },
  {
    address: "88 River Rd, Toledo, אוהיו",
    price: "$43,000",
    arv: "$110,000",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
  },
  {
    address: "99 Lake Shore Dr, Chicago, אילינוי",
    price: "$75,000",
    arv: "$160,000",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
  },
  {
    address: "77 Main St, St. Louis, מיזורי",
    price: "$58,000",
    arv: "$127,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    address: "2020 Forest Dr, Indianapolis, אינדיאנה",
    price: "$49,500",
    arv: "$122,000",
    image: "https://images.unsplash.com/photo-1560185127-6a8c25f9c1f5"
  },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-700">נכסים פתוחים להשקעה</h1>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {properties.map((property, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden h-[300px] flex flex-col justify-end shadow-lg text-white"
            style={{
              backgroundImage: `url(${property.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative p-4 z-10 text-center">
              <h3 className="font-bold text-lg">{property.address}</h3>
              <p>מחיר רכישה: {property.price}</p>
              <p>שווי עתידי: {property.arv}</p>
              <a
                href="https://wa.me/972526733636"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition"
              >
                צור קשר
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}