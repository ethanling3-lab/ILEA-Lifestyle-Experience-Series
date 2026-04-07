"use client";

import { useState } from "react";
import { NavbarZh, FooterZh } from "@/components/LayoutZh";

/* ──────────────────────────────────────────────
   FAQ Accordion
   ────────────────────────────────────────────── */

function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-foreground/5 bg-white transition-all duration-200 hover:border-blue-primary/10">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="pr-4 font-medium text-foreground">{item.question}</span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-foreground-muted transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"}`}>
            <p className="px-6 text-sm leading-relaxed text-foreground-muted">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   FAQ Data
   ────────────────────────────────────────────── */

const generalFAQ = [
  { question: "什么是 ILEA 精品生活体验系列？", answer: "这是一个精心策划的生活方式平台，将运动、身心健康与社交连接融合为有意义的高品质体验。目前提供两项子体验：Walk The World（户外行走）和 HFHY Dinner（健康餐宴）。" },
  { question: "适合什么样的人参加？", answer: "任何重视健康、有意义的社交连接和美好体验的人。我们的活动精致但亲和——专为那些想要更有意识地生活，同时不觉得像上课或训练营的人而设计。" },
  { question: "如何报名？", answer: "请访问 Walk The World 或 HFHY Dinner 的活动页面，填写报名表。完成报名和付款后，你将收到确认邮件。" },
  { question: "可以退款吗？", answer: "如需退款，请直接联系我们。我们会逐案处理，力求公平合理地解决每一个请求。" },
];

const walkFAQ = [
  { question: "行走路线有多长？", answer: "风景路线全长约 5 公里，适合所有体能水平。这不是一场比赛，而是一次体验。我们以舒适的、社交化的步伐行走。" },
  { question: "需要带什么？", answer: "舒适的步行鞋、水壶、防晒霜和帽子。签到时我们会提供包含必需品的欢迎礼包。" },
  { question: "适合各种体能水平吗？", answer: "当然！行走体验的设计让每个人都能乐在其中。沿途设有休息站，整体节奏轻松且注重社交。" },
  { question: "下雨怎么办？", answer: "我们会密切关注天气状况。如果条件不安全，我们将改期并在活动前至少 24 小时通过邮件通知所有已报名的参与者。" },
];

const dinnerFAQ = [
  { question: "着装要求是什么？", answer: "全白着装——优雅且舒适。想象夏日花园派对的感觉。统一的着装要求为集体氛围和视觉体验增添了独特的仪式感。" },
  { question: "能否满足特殊饮食需求？", answer: "可以。我们提供素食、纯素、海鲜素、清真和无麸质选择。请在报名时选择你的偏好并注明任何过敏信息。" },
  { question: "提供酒精饮品吗？", answer: "我们提供酒精可选菜单，包括低糖饮品、草本花茶和冷压果汁。有需要的嘉宾也可选择葡萄酒搭配。" },
  { question: "晚宴在哪里举办？", answer: "场地是一处精心挑选的户外场所，将在活动日期临近时揭晓。已报名的嘉宾将在晚宴前 48 小时通过邮件收到确切地点。" },
];

/* ──────────────────────────────────────────────
   FAQ Page (Chinese)
   ────────────────────────────────────────────── */

export default function FAQPageZh() {
  return (
    <>
      <NavbarZh />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pb-10 pt-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C7C] via-[#1E6FD9] to-[#1558B0]" />
            <div className="grain absolute inset-0" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">常见问题</p>
            <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-5xl">常见问题解答</h1>
            <p className="text-lg text-white/70">关于我们体验活动的一切，你想了解的都在这里。</p>
          </div>
        </section>

        {/* General */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">通用问题</h2>
            <FAQAccordion items={generalFAQ} />
          </div>
        </section>

        {/* Walk The World */}
        <section className="bg-background-soft py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Walk The World · 走世界</h2>
            <FAQAccordion items={walkFAQ} />
          </div>
        </section>

        {/* HFHY Dinner */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">HFHY Dinner · 快乐盛餐</h2>
            <FAQAccordion items={dinnerFAQ} />
          </div>
        </section>
      </main>
      <FooterZh />
    </>
  );
}
