"use client";
import { useState, useEffect } from "react";

import QRCode from "qrcode";
import {
  COLORS,
  brainDevelopmentFacts,
  stats,
  ageDevelopmentData,
} from "@/data/eventData";

const { PINK, BLUE, GOLD, LIGHT_PINK, LIGHT_BLUE } = COLORS;
import AnimSection from "@/components/AnimSection";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Organizers from "@/components/Organizers";
import Schedule from "@/components/Schedule";
import EventZones from "@/components/EventZones";
export default function Home() {
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL("https://1000ngayvang.z-moms.com")
      .then(setQrUrl)
      .catch(console.error);
  }, []);
  return (
    <main
      style={{
        fontFamily: "'Nunito', 'Be Vietnam Pro', sans-serif",
        background: "#FAFAFA",
        color: "#1a1a1a",
        overflowX: "hidden",
        paddingTop: "84px",
      }}
    >
      <Navbar />
      <Hero />

      {/* STATS */}
      <section style={{ background: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimSection>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20,
              }}
              className="stats-grid"
            >
              {stats.map(({ value, label, icon }, i) => (
                <AnimSection key={label} delay={i * 100}>
                  <div
                    className="stat-card"
                    style={{
                      borderTop: `4px solid ${[PINK, BLUE, GOLD, "#7C3AED"][i]}`,
                    }}
                  >
                    <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>
                      {icon}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Baloo 2', cursive",
                        fontWeight: 800,
                        fontSize: "1.8rem",
                        color: [PINK, BLUE, GOLD, "#7C3AED"][i],
                        lineHeight: 1.1,
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#666",
                        marginTop: 6,
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* WHY */}
      <section
        style={{
          background: `linear-gradient(135deg, ${LIGHT_BLUE} 0%, ${LIGHT_PINK} 100%)`,
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <div
                style={{
                  display: "inline-block",
                  background: BLUE,
                  color: "white",
                  borderRadius: 30,
                  padding: "6px 20px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  marginBottom: 16,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Vì sao nên tham dự?
              </div>
              <h2
                style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  color: BLUE,
                }}
              >
                Não bộ của bé phát triển
                <br />
                <span style={{ color: PINK }}>nhanh đến mức nào?</span>
              </h2>
            </div>
          </AnimSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
            }}
          >
            <AnimSection delay={100}>
              <div
                style={{
                  background: "white",
                  borderRadius: 24,
                  padding: 36,
                  boxShadow: "0 8px 32px rgba(26,60,143,0.1)",
                }}
              >
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: BLUE,
                    marginBottom: 24,
                  }}
                >
                  🧠 Giai đoạn vàng phát triển não bộ
                </h3>
                {ageDevelopmentData.map(({ age, pct }) => (
                  <div key={age} style={{ marginBottom: 14 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        marginBottom: 6,
                        color: "#444",
                      }}
                    >
                      <span>{age}</span>
                      <span style={{ color: pct >= 80 ? PINK : BLUE }}>
                        {pct}%
                      </span>
                    </div>

                    <div
                      style={{
                        background: "#f0f0f0",
                        borderRadius: 10,
                        height: 10,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${pct}%`,
                          height: "100%",
                          borderRadius: 10,
                          background:
                            pct >= 80
                              ? `linear-gradient(90deg, ${PINK}, #7C3AED)`
                              : `linear-gradient(90deg, ${BLUE}, #0891B2)`,
                          transition: "width 1s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
                <p
                  style={{
                    marginTop: 20,
                    fontSize: "0.85rem",
                    color: "#888",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  Từ 0–5 tuổi là giai đoạn vàng để phát triển não bộ, đặc biệt
                  là giai đoạn 0–2 tuổi.
                </p>
              </div>
            </AnimSection>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {brainDevelopmentFacts.map(({ icon, title, desc, color }, i) => (
                <AnimSection key={title} delay={i * 120}>
                  <div
                    style={{
                      background: "white",
                      borderRadius: 20,
                      padding: 24,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: `${color}18`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: "0.95rem",
                          color,
                          marginBottom: 6,
                        }}
                      >
                        {title}
                      </div>

                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          lineHeight: 1.6,
                        }}
                      >
                        {desc}
                      </div>
                    </div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      <EventZones />

      <Schedule />
      <Organizers />

      <CTA />
      <Footer qrUrl={qrUrl} />
    </main>
  );
}
