export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-500">
        © {new Date().getFullYear()} Amamiya_Ain. Built with Next.js & Tailwind.
      </div>
    </footer>
  );
}

// === src/components/ui/card.tsx ===
import * as React from "react";
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`rounded-2xl border shadow-sm p-5 ${className}`}>{children}</div>;
}
