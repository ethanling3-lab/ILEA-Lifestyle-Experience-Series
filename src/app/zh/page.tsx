import Link from "next/link";
import { NavbarZh, FooterZh } from "@/components/LayoutZh";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const coreBeliefs = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    title: "健康，应当被感受",
    description: "不是在课堂上被教导，而是在运动、连接与共同经历中被真切体会。",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "连接即是幸福",
    description: "社交连接不是奢侈品，而是美好生活中不可或缺的一部分。",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    title: "美感激发参与",
    description: "优美的环境与精心的设计，激发人们全身心地投入其中。",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "小体验，大改变",
    description: "一次有意义的体验，便足以开启通往更健康、更有意识的生活。",
  },
];

const testimonials = [
  { quote: "这是我从未有过的体验。行走、人群、能量——仿佛为我的生活按下了重启键。", name: "Sarah L.", role: "Walk The World 参与者" },
  { quote: "晚宴美得令人屏息，食物更是出乎意料。但最令我感动的，是结束时每个人之间那份真切的连接。", name: "David T.", role: "快乐盛餐 嘉宾" },
  { quote: "ILEA 创造的体验，让人发自内心地想要过得更好。没有说教，只有启发。", name: "Michelle K.", role: "回归参与者" },
];

/* ──────────────────────────────────────────────
   Homepage (Chinese)
   ────────────────────────────────────────────── */

export default function HomeZh() {
  return (
    <>
      <NavbarZh />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C7C] via-[#1E6FD9] to-[#2E8B57]" />
            <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(126,184,224,0.15)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(143,175,155,0.2)_0%,transparent_70%)]" />
            <div className="grain absolute inset-0" />
          </div>

          {/* Watermark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="whitespace-nowrap font-heading text-[10vw] font-bold uppercase leading-none tracking-tight text-white/[0.04]">
              ILEA LIFESTYLE
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 text-center lg:px-8">
            <p className="mb-8 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm border border-white/10">
              ILEA 精品生活体验系列
            </p>
            <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              运动。{" "}
              <span className="text-gold-light">连接。</span>{" "}
              <span className="bg-gradient-to-r from-gold to-[#9ACBEB] bg-clip-text text-transparent">
                蜕变。
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              一场精心策划的旅程，将运动、社交与身心健康融为一体——启发你拥抱更有意识、更优雅的生活方式。
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#experiences"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-deep transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(255,255,255,0.3)] active:translate-y-0"
              >
                探索体验
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <Link
                href="/zh/about"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
              >
                我们的故事
              </Link>
            </div>
            <div className="mt-20 animate-bounce">
              <svg className="mx-auto h-6 w-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
          </div>
        </section>

        {/* Events Showcase */}
        <section id="experiences" className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">我们的体验</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">两段旅程，一个愿景</h2>
              <p className="mx-auto mt-4 max-w-lg text-foreground-muted">每一场体验，激活身心健康的不同维度——相互呼应，共同构成完整的生活方式之旅。</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Walk The World Card */}
              <Link href="/zh/walk-the-world" className="group relative block rounded-2xl border border-sage/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage/60 hover:shadow-floating lg:p-10">
                <div className="mb-6 text-3xl">🌿</div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-muted/60">天行健 · 唤醒</p>
                <h3 className="mb-4 font-heading text-2xl font-semibold text-foreground lg:text-3xl">Walk The World · 走世界</h3>
                <p className="mb-6 leading-relaxed text-foreground-muted">一场户外行走体验，将运动、自然与社区融为一体。在晨光中出发，感受清新能量与有意识的连接。</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {["运动", "户外", "健康", "能量"].map(t => <span key={t} className="rounded-full bg-sage/10 px-3 py-1 text-xs font-medium text-sage">{t}</span>)}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-primary transition-all duration-200 group-hover:gap-3">
                  了解更多 <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
              {/* HFHY Dinner Card */}
              <Link href="/zh/hfhy-dinner" className="group relative block rounded-2xl border border-gold/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-floating lg:p-10">
                <div className="mb-6 text-3xl">✨</div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-muted/60">快乐盛餐 · 连接</p>
                <h3 className="mb-4 font-heading text-2xl font-semibold text-foreground lg:text-3xl">HFHY Dinner · 快乐盛餐</h3>
                <p className="mb-6 leading-relaxed text-foreground-muted">一场精心策划的健康餐宴，灵感源自 Dîner en Blanc。优雅的桌席、温柔的灯光，以及滋养身心的美食。</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {["餐宴", "社交", "氛围", "健康"].map(t => <span key={t} className="rounded-full bg-gold-light/40 px-3 py-1 text-xs font-medium text-gold">{t}</span>)}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-primary transition-all duration-200 group-hover:gap-3">
                  了解更多 <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">我们的理念</p>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  精致，但不排他。<br />
                  <span className="text-blue-primary">体验式，而非说教式。</span>
                </h2>
                <p className="mb-8 leading-relaxed text-foreground-muted">
                  ILEA 精品生活体验系列不仅仅是一系列活动。它是一场精心策划的旅程，将运动、社交与身心健康融为一体——启发你拥抱更有意识、更优雅的生活方式。
                </p>
                <p className="leading-relaxed text-foreground-muted">
                  我们相信：环境塑造行为，美感激发参与，小小的体验也能引发深远的改变。每一个细节都经过深思熟虑，每一个瞬间都精心设计。
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {coreBeliefs.map((belief) => (
                  <div key={belief.title} className="rounded-xl border border-foreground/5 bg-background-soft p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-primary/5 text-blue-primary">{belief.icon}</div>
                    <h4 className="mb-2 font-heading text-base font-semibold text-foreground">{belief.title}</h4>
                    <p className="text-sm leading-relaxed text-foreground-muted">{belief.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary">参与者心声</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">他们这样说</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl border border-blue-primary/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <svg className="mb-4 h-8 w-8 text-blue-primary/30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" /></svg>
                  <p className="mb-6 italic leading-relaxed text-foreground-muted">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="mt-0.5 text-xs text-foreground-muted">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C7C] via-[#1E6FD9] to-[#2E8B57]" />
          <div className="grain absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">旅程从此开始</p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">选择你的体验</h2>
              <p className="mx-auto max-w-xl text-lg text-white/60">
                两条路径，一个愿景。选择与你共鸣的体验——或两者皆选。
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Walk The World Card */}
              <Link href="/zh/walk-the-world" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 lg:p-10">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sage/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-sage/30" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/20 text-2xl transition-transform duration-300 group-hover:scale-110">
                    🌿
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">天行健 · 唤醒</p>
                  <h3 className="mb-3 font-heading text-2xl font-bold text-white">Walk The World · 走世界</h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/60">
                    一场户外行走体验，融合运动、自然与社区。滨海湾花园 5 公里风景路线。
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {["运动", "户外", "健康"].map(t => <span key={t} className="rounded-full bg-sage/15 px-3 py-1 text-xs font-medium text-sage">{t}</span>)}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 group-hover:gap-3 group-hover:shadow-[0_4px_20px_rgba(143,175,155,0.4)]">
                    加入行走
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>

              {/* HFHY Dinner Card */}
              <Link href="/zh/hfhy-dinner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 lg:p-10">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-gold/30" />
                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-2xl transition-transform duration-300 group-hover:scale-110">
                    ✨
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">快乐盛餐 · 连接</p>
                  <h3 className="mb-3 font-heading text-2xl font-bold text-white">HFHY Dinner · 快乐盛餐</h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/60">
                    灵感源自 Dîner en Blanc 的健康餐宴。全白着装、长桌共席、日落时分入场。
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {["餐宴", "社交", "氛围"].map(t => <span key={t} className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold-light">{t}</span>)}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 group-hover:gap-3 group-hover:shadow-[0_4px_20px_rgba(126,184,224,0.4)]">
                    预订席位
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterZh />
    </>
  );
}
