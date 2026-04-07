import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";

const notoSerif = Noto_Serif_SC({
  variable: "--font-zh-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans_SC({
  variable: "--font-zh-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "走世界 | ILEA 精品生活体验系列",
  description:
    "融合运动、自然与社区的户外行走体验，穿越世界标志性景观。",
};

export default function ZhLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="zh-Hans" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <style>{`
        [lang="zh-Hans"] .font-heading {
          font-family: var(--font-zh-heading), var(--font-playfair), serif;
        }
        [lang="zh-Hans"] .font-body,
        [lang="zh-Hans"] p,
        [lang="zh-Hans"] li,
        [lang="zh-Hans"] label,
        [lang="zh-Hans"] input,
        [lang="zh-Hans"] select,
        [lang="zh-Hans"] button,
        [lang="zh-Hans"] span {
          font-family: var(--font-zh-body), var(--font-inter), sans-serif;
        }
      `}</style>
      {children}
    </div>
  );
}
