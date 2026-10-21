import { ImageResponse } from "next/og";

export const alt = "Techpronnet Technologies — Software Built Around Your Business";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF9F6",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "16px solid #181B1E",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#181B1E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8EDE35",
                fontSize: "24px",
                fontWeight: 900,
              }}
            >
              T
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: 900,
                  color: "#181B1E",
                  letterSpacing: "-0.03em",
                }}
              >
                Techpronnet Technologies
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#73766F",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Software Engineering · Est. 2019
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#8EDE35",
              color: "#181B1E",
              padding: "8px 18px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 800,
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Enterprise Grade
          </div>
        </div>

        {/* Center Main Value Proposition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#181B1E",
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            Software Built Around Your Business.
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#4B5563",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "960px",
            }}
          >
            Custom websites, client portals, native mobile apps, and automated workflows engineered for measurable operational impact.
          </p>
        </div>

        {/* Footer Technical Trust Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #E5E7EB",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "32px", fontSize: "15px", fontFamily: "monospace", color: "#181B1E", fontWeight: 700 }}>
            <span>• 100% Code Ownership</span>
            <span>• Neon Postgres Reliability</span>
            <span>• Dedicated SLA Support</span>
          </div>
          <span style={{ fontSize: "16px", fontFamily: "monospace", color: "#4D9218", fontWeight: 800 }}>
            techpronnet.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
