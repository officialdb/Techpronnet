import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#181B1E",
          borderRadius: "36px",
          color: "#8EDE35",
          fontSize: "112px",
          fontWeight: 900,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        T
      </div>
    ),
    {
      ...size,
    }
  );
}
