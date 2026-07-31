"use client";

import Image from "next/image";
import { useState } from "react";

import AnimSection from "@/components/AnimSection";
import { zones, COLORS } from "@/data/eventData";
const { BLUE, PINK } = COLORS;

export default function EventZones() {
  const [activeZone, setActiveZone] = useState(0);

  const currentZone = zones[activeZone];

  return (
    <section
      style={{
        background: "white",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <AnimSection>
          <div
            style={{
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: PINK,
                color: "white",
                borderRadius: 30,
                padding: "6px 20px",
                fontSize: "0.8rem",
                fontWeight: 700,
                marginBottom: 16,
                letterSpacing: 1,
              }}
            >
              5 KHU VỰC TRẢI NGHIỆM
            </div>

            <h2
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: BLUE,
              }}
            >
              Sự kiện được thiết kế như
              <br />
              <span style={{ color: PINK }}>một lễ hội gia đình</span>
            </h2>
          </div>
        </AnimSection>

        <AnimSection delay={100}>
          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 30,
              overflowX: "auto",
              paddingBottom: 8,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {zones.map((z, i) => (
              <button
                key={z.title}
                className={`zone-tab${activeZone === i ? " active" : ""}`}
                onClick={() => setActiveZone(i)}
                style={{
                  background: activeZone === i ? z.color : `${z.color}15`,
                  color: activeZone === i ? "white" : z.color,
                }}
              >
                {z.icon} {z.subtitle}
              </button>
            ))}
          </div>
        </AnimSection>

        <AnimSection delay={200}>
          <div
            style={{
              background: currentZone.bg,
              borderRadius: 28,
              padding: 48,
              border: `2px solid ${currentZone.color}25`,
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "4rem",
                    marginBottom: 16,
                  }}
                >
                  {currentZone.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Baloo 2', cursive",
                    fontWeight: 800,
                    fontSize: "1.8rem",
                    color: currentZone.color,
                    marginBottom: 8,
                  }}
                >
                  {currentZone.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 16,
                  }}
                >
                  {currentZone.subtitle}
                </p>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "#555",
                    lineHeight: 1.8,
                  }}
                >
                  {currentZone.desc}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    background: `${currentZone.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "8rem",
                    border: `3px dashed ${currentZone.color}40`,
                  }}
                >
                  {currentZone.icon}
                </div>
              </div>
            </div>
          </div>
        </AnimSection>

        <AnimSection delay={300}>
          <div
            style={{
              marginTop: 40,
              background: "white",
              borderRadius: 28,
              padding: 20,
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: BLUE,
                  marginBottom: 6,
                }}
              >
                🗺️ Sơ đồ bố cục sự kiện
              </div>

              <p
                style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                Không gian được thiết kế thân thiện cho mẹ và bé với các khu vực
                trải nghiệm, giáo dục và kết nối cộng đồng.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <Image
                src="/Bo-cuc.png"
                alt="Sơ đồ bố cục sự kiện"
                width={1400}
                height={900}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: 20,
                }}
              />
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
