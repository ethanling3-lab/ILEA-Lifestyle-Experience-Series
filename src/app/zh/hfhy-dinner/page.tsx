"use client";

import { useState, useEffect } from "react";
import { NavbarZh, FooterZh } from "@/components/LayoutZh";

/* ──────────────────────────────────────────────
   Countdown Timer (Chinese)
   ────────────────────────────────────────────── */

function CountdownTimer({ targetDate, label }: { targetDate: string; label?: string }) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return null;
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = timeLeft
    ? [{ value: timeLeft.days, label: "天" }, { value: timeLeft.hours, label: "时" }, { value: timeLeft.minutes, label: "分" }, { value: timeLeft.seconds, label: "秒" }]
    : [{ value: 0, label: "天" }, { value: 0, label: "时" }, { value: 0, label: "分" }, { value: 0, label: "秒" }];

  return (
    <div>
      {label && <p className="mb-6 text-center text-sm tracking-wider text-white/60">{label}</p>}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
            <div className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm sm:h-20 sm:w-20">
                <span className="font-heading text-2xl font-bold tabular-nums text-white sm:text-3xl">{mounted && timeLeft ? String(unit.value).padStart(2, "0") : "--"}</span>
              </div>
              <p className="mt-2 text-xs tracking-wider text-white/50">{unit.label}</p>
            </div>
            {i < units.length - 1 && <span className="mb-6 text-xl font-light text-white/30">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Registration Form (Dinner - Chinese)
   ────────────────────────────────────────────── */

function DinnerRegistrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSuccess(true); }, 1500);
  };

  if (success) {
    return (
      <div className="rounded-2xl border border-gold/20 bg-gold/5 px-8 py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
          <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="mb-2 font-heading text-2xl font-semibold text-foreground">预订成功！</h3>
        <p className="text-foreground-muted">感谢你加入这场体验。请查收邮件获取确认详情。</p>
      </div>
    );
  }

  const ic = "w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-foreground placeholder:text-foreground-muted/40 transition-all duration-200 focus:border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/10";
  const lc = "mb-1.5 block text-sm font-medium text-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div><label className={lc}>姓名</label><input required placeholder="请输入您的全名" className={ic} /></div>
      <div><label className={lc}>电子邮箱</label><input required type="email" placeholder="you@example.com" className={ic} /></div>
      <div><label className={lc}>手机号码（选填）</label><input type="tel" placeholder="+65 9123 4567" className={ic} /></div>
      <div>
        <label className={lc}>票种</label>
        <select className={ic}>
          <option value="standard">标准席</option>
          <option value="premium">尊享席</option>
          <option value="vip">VIP 席</option>
        </select>
      </div>
      <div>
        <label className={lc}>饮食偏好</label>
        <select className={ic}>
          <option value="">请选择</option>
          <option value="no_restriction">无特殊要求</option>
          <option value="vegetarian">素食</option>
          <option value="vegan">纯素</option>
          <option value="pescatarian">海鲜素</option>
          <option value="halal">清真</option>
          <option value="gluten_free">无麸质</option>
        </select>
      </div>
      <div><label className={lc}>过敏信息（选填）</label><input placeholder="是否有任何食物过敏？" className={ic} /></div>
      <div><label className={lc}>同行宾客人数</label><input type="number" min={0} max={5} placeholder="0" className={ic} /></div>
      <button type="submit" disabled={submitting} className="w-full rounded-full bg-gradient-to-r from-gold to-[#9ACBEB] px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(126,184,224,0.35)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? <span className="flex items-center justify-center gap-2"><svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>处理中...</span> : "预订席位"}
      </button>
    </form>
  );
}

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const features = [
  { icon: "🕯️", title: "优雅氛围", description: "精致的户外场地，温暖灯光、烛台、鲜花与音乐交织，营造如梦般的场景。" },
  { icon: "🥗", title: "健康美食", description: "轻盈、均衡、营养密集的菜单，以蔬菜、优质脂肪和精选蛋白质为主。" },
  { icon: "🍷", title: "用心饮品", description: "酒精可选，提供低糖饮品选择。尽情享受，无需妥协。" },
  { icon: "🤝", title: "真挚连接", description: "长桌共席的设计，引发真实的对话与温暖的人际纽带。" },
];

const menuHighlights = [
  { category: "前菜", items: ["时令花园沙拉佐柑橘油醋汁", "每日冷压时蔬浓汤"] },
  { category: "主菜", items: ["香草焗可持续海鲜", "植物优先谷物碗配中东芝麻酱"] },
  { category: "甜品", items: ["生可可牛油果慕斯", "时令鲜果拼盘配蜂蜜细淋"] },
  { category: "饮品", items: ["草本花茶浸泡水", "冷压鲜榨果汁", "可选葡萄酒搭配"] },
];

/* ──────────────────────────────────────────────
   HFHY Dinner Page (Chinese)
   ────────────────────────────────────────────── */

export default function HFHYDinnerPageZh() {
  return (
    <>
      <NavbarZh />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#2D2036] to-[#0B3C7C]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(126,184,224,0.15)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(234,219,200,0.1)_0%,transparent_50%)]" />
            <div className="grain absolute inset-0" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="whitespace-nowrap font-heading text-[14vw] font-bold uppercase leading-none tracking-tight text-white/[0.03]">快乐盛餐</span>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 text-center lg:px-8">
            <p className="mb-6 inline-block rounded-full border border-gold/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm">快乐盛餐 · 连接</p>
            <h1 className="mb-6 font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">HFHY Dinner · 快乐盛餐</h1>
            <p className="mx-auto mb-4 max-w-2xl text-lg text-white/60 md:text-xl">灵感源自 Dîner en Blanc 的健康餐宴体验。当优雅遇见身心健康，在长桌之间相遇。</p>
            <p className="mb-12 text-sm italic text-gold-light/70">Happy Food, Happy You · 快乐盛餐</p>
            <CountdownTimer targetDate="2026-07-20T18:00:00+08:00" label="餐宴倒计时" />
          </div>
        </section>

        {/* Concept */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">理念</p>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">当优雅<br /><span className="text-gold">遇见身心健康</span></h2>
                <p className="mb-6 leading-relaxed text-foreground-muted">灵感源自 Dîner en Blanc 的全白野餐形式，重新诠释为一场关于健康、平衡与长期身心健康的庆典。我们保留了它的优雅与美感，但以更健康的美食和更有深度的体验取而代之。</p>
                <div className="space-y-4">
                  {["精致户外场地，长桌共席", "轻盈、营养密集的菜单，附清晰营养标示", "从高不可攀到触手可及——亲和而不失品位的定价"].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <svg className="h-3 w-3 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                      <p className="text-sm text-foreground-muted">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="group rounded-2xl border border-gold/10 bg-background-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-elevated">
                    <div className="mb-4 text-2xl">{f.icon}</div>
                    <h3 className="mb-2 font-heading text-sm font-semibold text-foreground">{f.title}</h3>
                    <p className="text-xs leading-relaxed text-foreground-muted">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">菜单预览</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">精心策划的健康餐宴</h2>
              <p className="mx-auto mt-4 max-w-lg text-foreground-muted">以蔬菜、优质脂肪和精选蛋白质为核心。每一道菜都兼具美味与健康。</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {menuHighlights.map((s) => (
                <div key={s.category} className="rounded-2xl border border-gold/10 bg-white p-8 shadow-elevated">
                  <h3 className="mb-4 border-b border-gold/10 pb-3 font-heading text-lg font-semibold text-foreground">{s.category}</h3>
                  <ul className="space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground-muted">
                        <span className="mt-0.5 text-gold">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-gold/10 bg-background-soft p-8 text-center shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">日期</p>
                <p className="font-heading text-2xl font-bold text-foreground">2026年7月20日</p>
                <p className="mt-1 text-sm text-foreground-muted">周六傍晚</p>
              </div>
              <div className="rounded-2xl border border-gold/10 bg-background-soft p-8 text-center shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">时间</p>
                <p className="font-heading text-2xl font-bold text-foreground">下午 6:00</p>
                <p className="mt-1 text-sm text-foreground-muted">日落时分入场</p>
              </div>
              <div className="rounded-2xl border border-gold/10 bg-background-soft p-8 text-center shadow-elevated">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted">着装要求</p>
                <p className="font-heading text-2xl font-bold text-foreground">全白着装</p>
                <p className="mt-1 text-sm text-foreground-muted">优雅且舒适</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section id="register" className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">报名参与</p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">预订你的席位</h2>
              <p className="text-foreground-muted">长桌席位有限。立即锁定你在这场难忘之夜的位置。</p>
            </div>
            <div className="rounded-2xl border border-gold/10 bg-white p-8 shadow-elevated">
              <DinnerRegistrationForm />
            </div>
          </div>
        </section>
      </main>
      <FooterZh />
    </>
  );
}
