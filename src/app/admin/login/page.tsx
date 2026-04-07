"use client";

import { useState } from "react";
import { createBrowserClient } from "@/lib/supabase";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createBrowserClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-soft px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Image
            src="/logo-black.png"
            alt="ILEA"
            width={140}
            height={42}
            className="h-10 w-auto mx-auto mb-6"
          />
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Admin Dashboard
          </h1>
          <p className="text-sm text-foreground-muted mt-1">
            Sign in to manage registrations
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-white text-foreground placeholder:text-foreground-muted/40 transition-all duration-200 focus:border-blue-primary/30 focus:ring-2 focus:ring-blue-primary/10 focus:outline-none"
              placeholder="admin@ilea.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-white text-foreground placeholder:text-foreground-muted/40 transition-all duration-200 focus:border-blue-primary/30 focus:ring-2 focus:ring-blue-primary/10 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-8 rounded-full text-sm font-medium text-white transition-all duration-200
              bg-blue-deep hover:bg-blue-primary disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
