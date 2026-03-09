"use client"
import { useState } from "react";

const EmailSubscription = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        if (!email) return setMessage("Please enter email");

        try {
            setLoading(true);

            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            setMessage(data.message);
            setEmail("");
        } catch (err) {
            setMessage("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-md mb-16">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-[#0B1238]/30 bg-transparent placeholder-[#0B1238]/60 outline-none focus:ring-2 focus:ring-[#0B1238]"
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-6 py-2 bg-[#0B1238] text-[#B7C3CF] rounded-md hover:bg-[#070d2e] transition"
                >
                    {loading ? "Saving..." : "Notify Me"}
                </button>
            </div>

            {message && (
                <p className=" self-start text-sm text-[#0B1238] block">{message}</p>
            )}
        </div>
    );
};

export default EmailSubscription;