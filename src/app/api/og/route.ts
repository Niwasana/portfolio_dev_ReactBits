// src/app/api/og/route.ts
import { ImageResponse } from "next/server";

export const runtime = "edge"; // 必須。OGはEdgeで動く

export async function GET() {
  try {
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
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
