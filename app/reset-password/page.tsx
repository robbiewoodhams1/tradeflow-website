"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

function ResetPasswordInner() {
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    // 1. Try query params (?type=recovery)
    const queryType = searchParams.get("type");
    if (queryType) {
      setType(queryType);
      return;
    }

    // 2. Try hash fragment (#access_token=...&type=recovery)
    const hash = window.location.hash;
    if (hash.includes("type=recovery")) {
      setType("recovery");
    }
  }, [searchParams]);

  const handleReset = async () => {
    if (!password) return setMessage("Please enter a password");

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password updated! You can now log in.");
    }
  };

  return (
    <div className="w-full flex flex-col bg-white items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Reset Password</h1>
      {type === "recovery" ? (
        <>
            <input
            type="password"
            placeholder="New password"
            className="
                p-3 border rounded w-64 mb-5
                text-black        
                placeholder-gray-500 
            "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

          <button
            onClick={handleReset}
            className="bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-700"
          >
            Save New Password
          </button>
        </>
      ) : (
        <p className="text-gray-700">Invalid or expired reset link</p>
      )}

      {message && <p className="mt-4 text-sm text-gray-800">{message}</p>}
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="text-black">Loading...</div>}>
      <ResetPasswordInner />
    </Suspense>
  );
}
