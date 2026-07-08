import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jonathan Avni - Product Leader & AI Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              fontFamily: "serif",
            }}
          >
            Jonathan Avni
          </div>
          <div
            style={{
              width: 80,
              height: 2,
              background: "#E8A849",
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: "#E8A849",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
            }}
          >
            Product Leader & AI Builder
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#888888",
              marginTop: "8px",
            }}
          >
            jonathanavni.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
