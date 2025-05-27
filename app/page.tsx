import AboutPage from './about/page'

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white text-gray-900">
      {/* Hero */}
      <header
        className="relative bg-cover bg-center text-white text-center py-24 px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,123,255,0.6), rgba(0,86,179,0.6)), url('https://source.unsplash.com/1600x500/?real-estate')",
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold mb-4">השקעות נדל״ן בארה״ב – גם בלי ניסיון קודם</h1>
          <p className="text-lg bg-black bg-opacity-50 inline-block px-4 py-2 rounded">
            ליווי אישי, עסקאות מתחת למחיר שוק, וגישה לכלים אמיתיים להצלחה
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="/landing" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded shadow hover:scale-105 transition">
              🏠 למד על השיטה
            </a>
            <a href="/properties" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded shadow hover:scale-105 transition">
              🏠 צפה בנכסים
            </a>
          </div>
        </div>
        {/* Google Analytics  */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FD2F93246J"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FD2F93246J');
              `,
            }}>
        </script>
      </header>

      {/* למה לבחור בנו */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">למה לבחור בנו?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "✔ ניסיון מוכח",
              text: "מעל 5 שנות ניסיון בליווי והשקעות נדל\"ן בשוק האמריקאי.",
            },
            {
              title: "✔ עסקאות סודיות",
              text: "גישה למאגר נכסים שמוצעים מתחת למחיר שוק – למשקיעים בלבד.",
            },
            {
              title: "✔ ליווי אישי",
              text: "אנחנו איתך מהשיחה הראשונה ועד לרגע בו הנכס שלך מניב הכנסה.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* המלצות */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">מה אומרים עלינו?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "״לא האמנתי שאוכל לקנות נכס בארה״ב בלי להבין כלום. הם נתנו לי ביטחון מלא – והיום אני עם שוכר פעיל!״",
              name: "דניאל מ.",
            },
            {
              text: "״השירות הכי אישי שקיבלתי בעסק. מהרגע הראשון הרגשתי שיש על מי לסמוך.״",
              name: "טלי ש.",
            },
            {
              text: "״בדקו לי את העסקה, סייעו בשיפוץ, וניהלו הכול. חוויה פשוט מדהימה.״",
              name: "אייל כ.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <p className="mb-4">"{item.text}"</p>
              <strong className="text-blue-800">{item.name}</strong>
            </div>
          ))}
        </div>
      </section>
      <AboutPage/>
    </div>
  );
}