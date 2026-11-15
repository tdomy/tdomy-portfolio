import { ImageResponse } from "next/og";
export const alt = "Tdomy — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#101412",
        color: "#f1f3ed",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 30 }}>
        Tdomy<span style={{ color: "#b7db53" }}>.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, letterSpacing: -3 }}>Backend depth.</div>
        <div style={{ fontSize: 76, letterSpacing: -3 }}>
          Full-stack perspective.
        </div>
        <div style={{ fontSize: 28, color: "#a5aaa4", marginTop: 24 }}>
          Software Engineer / Backend Engineer / Tech Lead
        </div>
      </div>
    </div>,
  );
}
