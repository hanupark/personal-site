"use client";

import { useState, useEffect } from "react";

/**
 * Server-side password protection component.
 * Uses a server action to verify passwords stored in environment variables.
 * Persists unlock state in sessionStorage so users don't have to re-enter password.
 */
interface ServerPasswordProtectProps {
  children: React.ReactNode;
  verifyPassword: (password: string) => Promise<{ success: boolean; error?: string }>;
  pageId: string; // Unique identifier for this page (for sessionStorage)
}

export default function ServerPasswordProtect({
  children,
  verifyPassword,
  pageId,
}: ServerPasswordProtectProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if this page was previously unlocked in this session
    const unlocked = sessionStorage.getItem(`unlocked-${pageId}`);
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, [pageId]);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const result = await verifyPassword(password);

    if (result.success) {
      setIsUnlocked(true);
      setPassword("");
      // Store unlock status in session storage
      sessionStorage.setItem(`unlocked-${pageId}`, "true");
    } else {
      setError(result.error || "Incorrect password");
      setPassword("");
    }

    setIsLoading(false);
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="w-full max-w-md">
        <h1 className="text-6xl font-black text-solid mb-6 text-center">
          Password Required
        </h1>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 text-lg font-black border-2 border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            autoFocus
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 text-lg font-black bg-[var(--color-primary)] text-white hover:rotate-1 disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Unlock"}
          </button>
          {error && (
            <p className="text-lg font-black text-[var(--color-primary)] text-center">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
