"use client";

import { NavbarZh, FooterZh } from "@/components/LayoutZh";

const beliefs = [
  "健康应当被感受，而非被教导",
  "环境塑造行为",
  "社交连接是身心健康的一部分",
  "美感激发参与",
  "小小的体验也能引发深远的改变",
];

const team = [
  { name: "团队成员", role: "创始人兼总监", bio: "致力于将生活方式与身心健康融合为有意义的体验。" },
  { name: "团队成员", role: "体验设计师", bio: "打造激发连接与蜕变的沉浸式环境。" },
  { name: "团队成员", role: "运营总监", bio: "确保每一个细节都精心安排，每一场体验都流畅无间。" },
  { name: "团队成员", role: "社区经理", bio: "在所有触点上建立和维护 ILEA 社区。" },
];

export default function AboutPageZh() {
  return (
    <>
      <NavbarZh />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C7C] via-[#1E6FD9] to-[#1558B0]" />
            <div className="grain absolute inset-0" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="whitespace-nowrap font-heading text-[12vw] font-bold uppercase leading-none tracking-tight text-white/[0.04]">关于 ILEA</span>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">关于 ILEA</p>
            <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">启发更有意识的生活方式</h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
              ILEA 精品生活体验系列是一个精心策划的平台，将运动、身心健康与社交连接融合为有意义的高品质体验。
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary">我们的使命</p>
                <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  从被动生活到 <span className="text-blue-primary">有意识的生活</span>
                </h2>
                <p className="mb-6 leading-relaxed text-foreground-muted">
                  我们的使命，是启发每一个人从被动的日常中觉醒，走向更有意识、更健康、更有社交连接的生活方式。不通过讲座或课程——而是通过美好的、精心策划的体验，让你<em>发自内心地</em>想要过得更好。
                </p>
                <p className="leading-relaxed text-foreground-muted">
                  我们的定位很简单：精致但不排他，生活方式驱动而非活动驱动，体验式而非说教式。
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-foreground/5 bg-background-soft p-8">
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">双重原则</h3>
                  <p className="mb-4 text-sm text-foreground-muted">我们所创造的一切，都在两极之间寻求平衡：</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[["精致", "亲和"], ["优雅", "自然"], ["秩序", "情感"], ["健康", "生活方式"]].map(([left, right]) => (
                      <div key={left} className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{left}</span>
                        <span className="mx-2 text-foreground-muted/40">&harr;</span>
                        <span className="text-foreground-muted">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Beliefs */}
        <section className="relative overflow-hidden bg-blue-deep py-24 lg:py-32">
          <div className="grain absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">核心信念</p>
            <h2 className="mb-12 font-heading text-3xl font-bold text-white md:text-4xl">我们所相信的</h2>
            <div className="space-y-4">
              {beliefs.map((belief, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold">{i + 1}</span>
                  <p className="text-base text-white/80">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">我们的团队</p>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">ILEA 背后的人</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.role} className="group rounded-2xl border border-foreground/5 bg-background-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-primary/10">
                    <svg className="h-8 w-8 text-blue-primary/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </div>
                  <h3 className="mb-1 font-heading text-base font-semibold text-foreground">{member.name}</h3>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gold">{member.role}</p>
                  <p className="text-sm leading-relaxed text-foreground-muted">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-background-soft py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-primary">愿景</p>
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">构建生活方式生态</h2>
            <p className="mb-10 text-lg leading-relaxed text-foreground-muted">
              ILEA 的设计从一开始就面向未来——多元活动生态、健康管理项目、生活方式社区，以及旅行体验。每一步建设都可复用，每一位参与者都是长期的伙伴。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["多元活动生态", "健康管理项目 (HLCC)", "生活方式社区", "旅行体验"].map((item) => (
                <span key={item} className="rounded-full bg-blue-primary/5 px-4 py-2 text-sm font-medium text-blue-primary">{item}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterZh />
    </>
  );
}
