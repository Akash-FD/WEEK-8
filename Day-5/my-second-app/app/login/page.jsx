"use client"

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form onSubmit={handleLogin} className="w-80 text-center py-5 mx-auto border p-10">
            <h1 className="py-5">Login</h1>
            <div className="flex flex-col gap-5">
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="border p-1" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required className="border p-1" />
                <button type="submit" className="px-3 py-1 bg-yellow-500 rounded-lg">Login</button>
            </div>
        </form>
    );
}
