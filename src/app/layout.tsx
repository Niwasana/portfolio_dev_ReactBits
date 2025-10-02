// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sana | Portfolio",
  description: "C言語を核に“安定×堅実”で積み上げるエンジニアのポートフォリオ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <a href="/" className="font-bold">Sana</a>
            <div className="flex gap-4 text-sm">
              <a href="/works">Works</a>
              <a href="/skills">Skills</a>
              <a href="/research">Research</a>
              <a href="/resume">Resume</a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}

