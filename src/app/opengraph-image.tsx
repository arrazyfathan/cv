/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

// Minimal data for OG image generation to avoid importing assets not needed in the edge runtime.
const OG_RESUME_DATA = {
  name: "Ar Razy Fathan Rabbani",
  about:
    "Mobile Engineer with 3 years of experience in Android and cross-platform development.",
  avatarUrl: "/profile-image.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "arrazy.rabbani266@gmail.com",
  },
};

export const runtime = "edge";

export const alt = "Minimalist Resume";
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
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Inter"',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src={OG_RESUME_DATA.avatarUrl}
            alt={OG_RESUME_DATA.name}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10%",
              marginBottom: "2rem",
            }}
          />
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            {OG_RESUME_DATA.name}
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              color: "#666",
              maxWidth: "600px",
              lineHeight: "1.4",
            }}
          >
            {OG_RESUME_DATA.about}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "1rem",
            }}
          >
            {OG_RESUME_DATA.contact.email && (
              <div style={{ fontSize: "1rem", color: "#666" }}>
                {OG_RESUME_DATA.personalWebsiteUrl}
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
