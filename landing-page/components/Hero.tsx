"use client";

import Image from "next/image";
import { COLORS, eventHighlights } from "../data/eventData";

const { PINK, BLUE, GOLD } = COLORS;

export default function Hero() {
  const handleRegister = () => {
    const section = document.getElementById("schedule");

    if (!section) return;

    const y = section.getBoundingClientRect().top + window.pageYOffset - 90;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{
        minHeight: "92vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(150deg, #FFF0F7 0%, #EEF3FF 50%, #FFFBF0 100%)",
      }}
    >
      <div
        className="hero-blob"
        style={{
          width: 600,
          height: 600,
          background: PINK,
          top: -200,
          right: -100,
        }}
      />

      <div
        className="hero-blob"
        style={{
          width: 400,
          height: 400,
          background: BLUE,
          bottom: -100,
          left: -100,
        }}
      />

      <div
        className="hero-blob"
        style={{
          width: 300,
          height: 300,
          background: GOLD,
          top: "40%",
          left: "30%",
        }}
      />

      <div
        className="hero-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "white",
              borderRadius: 30,
              padding: "8px 18px",
              marginBottom: 24,
              boxShadow: "0 4px 16px rgba(233,30,140,0.15)",
              fontSize: "0.85rem",
              fontWeight: 700,
              color: PINK,
            }}
          >
            <span
              className="pulse-ring"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: PINK,
                display: "inline-block",
              }}
            />
            CHUỖI SỰ KIỆN CỘNG ĐỒNG 2026 · 12 TỈNH THÀNH
          </div>

          <h1
            style={{
              fontFamily: "'Baloo 2', cursive",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            <span className="gradient-text">Ngày Hội</span>
            <br />
            <span style={{ color: BLUE }}>1.000 Ngày Vàng</span>
            <br />
            <span style={{ color: "#333" }}>Đầu Đời</span>
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: 1.7,
              marginBottom: 12,
              fontWeight: 600,
            }}
          >
            <span style={{ color: PINK, fontWeight: 800 }}>
              BABY INTELLIGENCE FESTIVAL
            </span>
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Đánh thức thiên tài trong mỗi em bé — Sự kiện giáo dục cộng đồng về
            phát triển trí thông minh của trẻ từ trong bụng mẹ đến 2 tuổi.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 36,
            }}
          >
            <button
              onClick={handleRegister}
              className="btn-pink"
              style={{
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              🎉 Đăng ký tham dự
            </button>

            <a
              href="https://www.facebook.com/congdongbauzmoms/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Tìm hiểu Z-moms →
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {eventHighlights.map(({ icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: "0.9rem",
                  color: "#555",
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div
          className="float-anim"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Image
            src="/hero-event.png"
            alt="Ngày hội 1.000 Ngày Vàng"
            width={520}
            height={520}
            style={{
              width: "100%",
              maxWidth: 520,
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 20px 40px rgba(233,30,140,0.25))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
