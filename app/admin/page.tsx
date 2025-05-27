"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, app } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  const [form, setForm] = useState({
    address: "",
    price: "",
    renovation: "",
    arv: "",
    image: "",
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) router.push("/login");
      else setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, "properties"));
      setProperties(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const handleUploadImage = async (file: File) => {
    const storageRef = ref(storage, `images/${file.name}-${Date.now()}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setForm((f) => ({ ...f, image: url }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      address: form.address,
      price: Number(form.price),
      renovation: Number(form.renovation),
      arv: Number(form.arv),
      image: form.image,
    };

    if (editId) {
      await updateDoc(doc(db, "properties", editId), data);
      setProperties(properties.map((p) => (p.id === editId ? { id: editId, ...data } : p)));
      setEditId(null);
    } else {
      const newDoc = await addDoc(collection(db, "properties"), data);
      setProperties([...properties, { id: newDoc.id, ...data }]);
    }

    setForm({ address: "", price: "", renovation: "", arv: "", image: "" });
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "properties", id));
    setProperties(properties.filter((p) => p.id !== id));
  };

  const handleEdit = (property: any) => {
    setForm({
      address: property.address,
      price: property.price.toString(),
      renovation: property.renovation.toString(),
      arv: property.arv.toString(),
      image: property.image,
    });
    setEditId(property.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <div className="p-10">טוען...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 text-right">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">ניהול נכסים</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input className="w-full border p-2 rounded" placeholder="כתובת" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />
        <input className="w-full border p-2 rounded" placeholder="מחיר" value={form.price} type="number" onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        <input className="w-full border p-2 rounded" placeholder="עלות שיפוץ" value={form.renovation} type="number" onChange={(e) => setForm({ ...form, renovation: e.target.value })} required />
        <input className="w-full border p-2 rounded" placeholder="שווי עתידי (ARV)" value={form.arv} type="number" onChange={(e) => setForm({ ...form, arv: e.target.value })} required />
        <input type="file" onChange={(e) => e.target.files?.[0] && handleUploadImage(e.target.files[0])} />
        {form.image && <img src={form.image} alt="preview" className="h-24 mt-2 rounded" />}
        <button className="bg-blue-600 text-white py-2 px-4 rounded">{editId ? "עדכן נכס" : "הוסף נכס"}</button>
      </form>

      <h2 className="text-xl font-semibold mb-4">רשימת נכסים</h2>
      <ul className="space-y-3">
        {properties.map((p) => (
          <li key={p.id} className="border rounded p-3">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <p className="font-bold">{p.address}</p>
                <p className="text-sm text-gray-600">
                  מחיר: ${p.price} | שיפוץ: ${p.renovation} | ARV: ${p.arv}
                </p>
              </div>
              {p.image && (
                <img
                  src={p.image}
                  alt={p.address}
                  className="w-24 h-16 object-cover rounded"
                />
              )}
            </div>

            <div className="flex gap-3 mt-2">
              <button onClick={() => handleEdit(p)} className="text-blue-600 hover:underline">ערוך</button>
              <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline">מחק</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
