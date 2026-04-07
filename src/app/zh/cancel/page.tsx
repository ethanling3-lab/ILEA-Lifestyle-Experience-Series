"use client";

import Link from "next/link";
import { NavbarZh, FooterZh } from "@/components/LayoutZh";

export default function CancelPageZh() {
  return (
    <>
      <NavbarZh />
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto px-6 py-32 text-center">
          <div className="w-20 h-20 rounded-full bg-gold-light/30 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            付款未完成
          </h1>
          <p className="text-foreground-muted text-lg leading-relaxed mb-8">
            你的报名信息已保存，但付款尚未完成。你可以重新尝试，或联系我们获取帮助。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/zh"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full transition-all duration-200
                bg-blue-deep hover:bg-blue-primary hover:-translate-y-0.5 active:translate-y-0"
            >
              重新尝试
            </Link>
            <Link
              href="/zh"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-foreground rounded-full border border-foreground/10 hover:border-blue-primary/20 transition-all duration-200"
            >
              返回首页
            </Link>
          </div>
        </div>
      </main>
      <FooterZh />
    </>
  );
}
