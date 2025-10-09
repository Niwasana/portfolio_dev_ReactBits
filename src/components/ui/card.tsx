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
