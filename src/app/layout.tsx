import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/layout/site-header";
import { SiteFooter } from "../components/layout/site-footer";
import ClickSpark from "../components/reactbits/click-spark";

export const metadata: Metadata = {
  title: {
    default: "Sana | Portfolio",
    template: "%s | Sana",
  },
  description: "Cを核に“安定×堅実”。自動運転×聴覚/認知、AtCoder緑、ハッカソン2位＋観客賞。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <SiteFooter />
        <ClickSpark global eventType="pointerdown" className="z-50" />
      </body>
    </html>
  );
}
