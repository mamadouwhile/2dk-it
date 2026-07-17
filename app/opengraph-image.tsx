import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};


export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at top left, #0A84FF4D, transparent 30%), linear-gradient(180deg, #04060a 0%, #070b15 100%)",
          color: "#f4f7fb",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "720px" }}>
          <div
            style={{
              display: "inline-flex",
              width: "96px",
              height: "96px",
              borderRadius: "28px",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "0.28em",
            }}
          >
            2DK
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ fontSize: "22px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9aa4b2" }}>
              Site vitrine corporate
            </div>
            <div style={{ fontSize: "64px", lineHeight: 1, fontWeight: 700, letterSpacing: "-0.05em" }}>
              Sites web et services IT pour entreprises B2B
            </div>
            <div style={{ fontSize: "28px", lineHeight: 1.35, color: "#dbe5f2", maxWidth: "640px" }}>
              Une présence claire, un support fiable et une image crédible dès le premier regard.
            </div>
          </div>
        </div>

        <div
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "40px",
            border: "1px solid rgba(255,255,255,0.10)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#0A84FF" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#64748b" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#1f2937" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "18px", color: "#9aa4b2", textTransform: "uppercase", letterSpacing: "0.22em" }}>2DK IT</div>
            <div style={{ fontSize: "28px", lineHeight: 1.15, fontWeight: 700 }}>Web. IT. Conversion.</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
