"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function HomePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) return null;

  return (
    <div className="text-center mt-10">
      <h1 className="mb-10">Welcome, {user.email}</h1>
      <button onClick={logout} className="bg-blue-500 text-white px-3 py-1">Logout</button>
    </div>
  );
}