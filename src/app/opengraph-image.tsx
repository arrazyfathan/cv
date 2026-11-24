import { ImageResponse } from "next/og";

export const alt = "Ar Razy Fathan Rabbani — Resume (Mobile Engineer)";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FBFAF7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px 136px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#17150F",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "26px",
            color: "#524E46",
            marginBottom: "26px",
          }}
        >
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              background: "#0380FC",
              display: "flex",
            }}
          />
          <span>Curriculum Vitae</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "84px",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            color: "#17150F",
          }}
        >
          <span>Ar Razy Fathan</span>
          <span>Rabbani</span>
        </div>

        <div
          style={{
            width: "64px",
            height: "6px",
            borderRadius: "999px",
            background: "#0380FC",
            marginTop: "26px",
            marginBottom: "26px",
          }}
        />

        <div
          style={{
            fontSize: "28px",
            color: "#7C776D",
            marginBottom: "46px",
          }}
        >
          Mobile Engineer · Android &amp; iOS · Surakarta, Indonesia
        </div>

        <div
          style={{
            fontSize: "22px",
            fontWeight: 600,
            color: "#17150F",
          }}
        >
          cv.arrazyfathan.com
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
