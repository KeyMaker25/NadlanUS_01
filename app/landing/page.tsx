"use client";
import { useState } from "react";
import ContactForm from "../components/contactForm";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 px-4 py-16">
          <div className="bg-white text-gray-900 px-4 py-16">
      {/* כותרת ראשית ופסקת פתיחה */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-700">
          השקעות נדל״ן בארה״ב – גם בלי ניסיון, וגם בלי להסתבך
        </h1>
        <p className="text-lg text-gray-700">
          מחפש השקעה חכמה שתעבוד בשבילך? <br />
          אנחנו מחברים בין ישראלים עם הון פנוי – להזדמנויות אמיתיות של נכסים בארה״ב,
          במחירים שמתחת למחיר השוק. <br />
          עם מאגר סודי שנבנה לאורך שנים, קשרים עם קבלנים מקומיים וליווי צמוד – תוכל להשקיע בנדל״ן מניב בלי לטוס, ובלי להרגיש לבד.
        </p>
      </section>

      {/* יתרונות */}
      <section className="max-w-4xl mx-auto py-16 text-right">
        <ul className="space-y-4 text-lg">
          <li>✔ גישה למאגר נכסים פרטי שלא מופיע באינטרנט</li>
          <li>✔ נכסים שנבדקו ומוצעים <strong>מתחת למחיר שוק</strong></li>
          <li>✔ חיבורים ישירים לקבלנים ואנשי מקצוע – בלי חאפרים</li>
          <li>✔ ליווי אישי – מרגע הבדיקה ועד להשכרה או מכירה</li>
          <li>✔ בלי סיכונים מיותרים: אנחנו איתך בכל שלב בתהליך</li>
        </ul>
      </section>

      {/* הרגעה וקריאה לפעולה */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-gray-700 text-lg">
          אנחנו יודעים – השקעות בארה״ב נשמעות מסובכות.<br />
          אבל עם תהליך ברור, ליווי אישי וגישה להזדמנויות אמיתיות – אתה בשליטה מלאה.<br />
          המאגר שלנו פתוח רק למי שיש לו רצון אמיתי לבנות לעצמו רווח משמעותי.
        </p>
        <h2 className="text-2xl font-bold text-blue-700">
          רוצה לדעת איזה נכסים פתוחים עכשיו להשקעה?
        </h2>
        <p className="text-lg">מלא את הפרטים שלך או שלח לנו וואטסאפ – ונחזור אליך עם הצעה שתשנה את התמונה:</p>
      </section>
    </div>

      <section className="max-w-xl mx-auto mt-10 bg-blue-50 p-8 rounded-xl shadow">

        <ContactForm />

      </section>
    </div>
  );
}



