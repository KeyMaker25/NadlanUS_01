export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 px-4 py-16">
      <section className="max-w-3xl mx-auto text-center mb-12 space-y-6">
        <h1 className="text-4xl font-bold text-blue-700">מי אנחנו?</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          אנחנו צוות של ישראלים עם ניסיון אמיתי בשטח – רכישות, שיפוצים, השכרות ומכירות של נכסים בארה״ב.
          לא עוד קורס תאורטי או הרצאה בזום, אלא אנשים שבאמת נגעו בנדל״ן, חוו הצלחות, תקלות, ויודעים בדיוק איך להימנע מהמלכודות שהשוק האמריקאי מציב למשקיע המתחיל.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-10">מה אנחנו עושים בפועל?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-right text-sm sm:text-base">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-blue-800 mb-2">איתור עסקאות</h3>
            <p>אנחנו עובדים ישירות עם ספקי עסקאות (wholesalers) ומזהים הזדמנויות מתחת למחיר שוק.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-blue-800 mb-2">בדיקת נכסים בשטח</h3>
            <p>הערכת שווי, מצב הנכס, שיפוץ דרוש, ותיעוד מלא עם תמונות ווידאו.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-blue-800 mb-2">ליווי בעסקה</h3>
            <p>חיבור לעורכי דין, נוטריון, קבלנים, חברות ניהול, והגשת משכנתאות אם צריך.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">למה בכלל אנחנו עושים את זה?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          כי הבנו שיש פער עצום בין מה שמספרים לישראלים – לבין מה שבאמת עובד.
          ראינו יותר מדי אנשים שקנו דירה "מניבה" ונפלו עם קבלן או דייר.
          המטרה שלנו היא ליצור שקיפות, ליווי אישי, ותוצאות אמיתיות.  
          בלי שיווק אגרסיבי, בלי למכור לך חלום – אלא הזדמנויות אמיתיות שאתה יכול להבין ולשלוט בהן.
        </p>
      </section>
    </div>
  );
}
