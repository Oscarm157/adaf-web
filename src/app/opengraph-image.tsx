import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ADAF · Asesoría y Defensa Aduanera Fiscal · Tijuana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "#FAFAF7",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#5A5853",
            fontSize: 16,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <span>ADAF · Tijuana · Frontera norte</span>
          <span>25 años</span>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#9B8F2E",
              fontStyle: "italic",
              fontSize: 22,
              marginBottom: 28,
            }}
          >
            <span>I</span>
            <span style={{ width: 80, height: 1, background: "#E2DED5" }} />
            <span style={{ color: "#5A5853", fontStyle: "normal", fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Despacho jurídico
            </span>
          </div>

          <div
            style={{
              fontSize: 76,
              lineHeight: 1.04,
              fontWeight: 600,
              color: "#0F2A47",
              letterSpacing: "-0.018em",
              maxWidth: 980,
            }}
          >
            Defensa fiscal, aduanera y administrativa
            <br />
            <span style={{ color: "#7A1F38", fontStyle: "italic" }}>
              en la frontera norte de México.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#5A5853",
            fontSize: 18,
            borderTop: "1px solid #E2DED5",
            paddingTop: 24,
          }}
        >
          <span style={{ fontStyle: "italic" }}>Veinticinco años · Tijuana, BC</span>
          <span style={{ fontWeight: 700, color: "#0F2A47", fontSize: 24 }}>
            adafsolucionesfiscales.com
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
