import ContactForm from "../components/contactForm";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-900 px-4 py-16">
      {/* כותרת ראשית + פתיחה */}
      <section className="max-w-3xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-4xl font-bold text-blue-700">נשמח לשמוע ממך</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          יש לך שאלה? מתלבט לגבי השקעה? מרגיש שאתה מוכן לעשות צעד אבל רוצה עוד קצת מידע?  
          אנחנו כאן בדיוק בשביל זה.  
          עשרות ישראלים פנו אלינו בחודשים האחרונים – והיום הם עם נכס מניב בארה״ב, בלי כאבי ראש ובלי לחשוש מהבלתי נודע.
        </p>
      </section>

      {/* למה לפנות אלינו */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">מה יקרה אחרי שתשאיר פרטים?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-right text-sm sm:text-base">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-blue-800 mb-2">שיחה אישית</h3>
            <p>נבין יחד מה רמת ההשקעה שאתה מחפש ואיזה אזורים בארה״ב הכי מתאימים לך.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-blue-800 mb-2">סקירה אמיתית של הזדמנויות</h3>
            <p>תקבל מאיתנו מידע אמיתי, עסקאות אמיתיות, והערכות מחיר מבוססות – לא ספינים.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="font-bold text-blue-800 mb-2">שלב אחרי שלב</h3>
            <p>אם תחליט להתקדם – אנחנו נבנה איתך תוכנית מסודרת לעסקה מניבה כולל מימון, שיפוץ והשכרה.</p>
          </div>
        </div>
      </section>

      {/* טופס */}
      <section className="max-w-xl mx-auto">
        <div className="bg-blue-50 p-8 rounded-xl shadow text-center space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">השאירו פרטים – ונחזור אליכם בהקדם</h2>
          <p className="text-gray-600 text-sm">לא שולחים ספאם, לא מתחייבים לדברים באוויר – רק נדבר ונבדוק אם זה מתאים.</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
