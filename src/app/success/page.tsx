"use client";

import Link from "next/link";
import { Navbar, Footer } from "@/components/Layout";

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto px-6 py-32 text-center">
          <div className="w-20 h-20 rounded-full bg-blue-primary/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-blue-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            You&apos;re All Set!
          </h1>
          <p className="text-foreground-muted text-lg leading-relaxed mb-8">
            Your registration and payment have been confirmed. Check your email for the details and next steps.
          </p>
          <p className="text-sm text-foreground-muted/60 mb-10">
            We&apos;ll send you a reminder as the event approaches.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full transition-all duration-200
              bg-blue-deep hover:bg-blue-primary hover:-translate-y-0.5 active:translate-y-0"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
