"use client";
import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("התחברת בהצלחה!");
      // router.push("/dashboard");
    } catch (err: any) {
      setError("אימייל או סיסמה שגויים");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("התחברת בהצלחה עם Google!");
      // router.push("/dashboard");
    } catch (err: any) {
      setError("ההתחברות עם Google נכשלה");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">התחברות</h2>

        {error && (
          <p className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </p>
        )}

        <form className="space-y-4 text-right" onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="אימייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-3 rounded"
          />
          <input
            type="password"
            placeholder="סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border p-3 rounded"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            התחבר
          </button>
        </form>
        <div className="my-6 text-center text-gray-500 text-sm">או</div>
        <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white text-gray-700 py-3 rounded hover:shadow-md transition font-semibold"
            >
            <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
            />
            התחבר עם Google
        </button>
      </div>
    </div>
  );
}
