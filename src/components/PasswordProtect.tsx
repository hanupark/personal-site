"use client";

import { useState, useEffect } from "react";

interface PasswordProtectProps {
  children: React.ReactNode;
  password: string;
  pageId: string; // Unique identifier for this page
}

export default function PasswordProtect({
  children,
  password,
  pageId,
}: PasswordProtectProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if this page was previously unlocked
    const unlocked = sessionStorage.getItem(`unlocked-${pageId}`);
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, [pageId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsUnlocked(true);
      setError(false);
      // Store unlock status in session storage
      sessionStorage.setItem(`unlocked-${pageId}`, "true");
    } else {
      setError(true);
      setInputPassword("");
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="w-full max-w-md">
        <h1 className="text-6xl font-black text-solid mb-8 text-center">
          Password Required
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 text-lg font-black border-2 border-[#DC143C] focus:outline-none focus:ring-2 focus:ring-[#DC143C]"
            autoFocus
          />
          <button
            type="submit"
            className="w-full px-4 py-3 mt-2 text-lg font-black bg-[#DC143C] text-white hover:rotate-1"
          >
            Unlock
          </button>
          {error && (
            <p className="text-lg font-black text-[#DC143C]">
              Incorrect password.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
