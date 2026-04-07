"use client";

import Link from "next/link";
import { NavbarZh, FooterZh } from "@/components/LayoutZh";

export default function SuccessPageZh() {
  return (
    <>
      <NavbarZh />
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto px-6 py-32 text-center">
          <div className="w-20 h-20 rounded-full bg-blue-primary/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-blue-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            一切就绪！
          </h1>
          <p className="text-foreground-muted text-lg leading-relaxed mb-8">
            你的报名和付款已确认。请查收邮件获取详情与后续安排。
          </p>
          <p className="text-sm text-foreground-muted/60 mb-10">
            活动临近时，我们会向你发送提醒。
          </p>
          <Link
            href="/zh"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full transition-all duration-200
              bg-blue-deep hover:bg-blue-primary hover:-translate-y-0.5 active:translate-y-0"
          >
            返回首页
          </Link>
        </div>
      </main>
      <FooterZh />
    </>
  );
}
