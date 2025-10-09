// src/app/api/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge"; // OGはEdgeで

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1e293b, #0f172a)",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
          fontWeight: 700,
        }}
      >
        Portfolio
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
