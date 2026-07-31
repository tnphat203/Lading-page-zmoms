"use client";

import AnimSection from "@/components/AnimSection";
import { COLORS } from "@/data/eventData";

const { PINK, BLUE, GOLD } = COLORS;

export default function CTA() {
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
        background: `linear-gradient(135deg, ${PINK} 0%, #7C3AED 50%, ${BLUE} 100%)`,
        padding: "90px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />

      <AnimSection>
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="float-anim"
            style={{
              fontSize: "3.5rem",
              marginBottom: 16,
            }}
          >
            🌟
          </div>

          <h2
            style={{
              fontFamily: "'Baloo 2', cursive",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "white",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Mỗi em bé sinh ra đều là
            <br />
            <span style={{ color: GOLD }}>một thiên tài tiềm năng</span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.1rem",
              maxWidth: 600,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            1.000 ngày đầu đời là khoảng thời gian vàng để đánh thức tiềm năng
            ấy. Đừng bỏ lỡ cơ hội cùng con trải qua hành trình đặc biệt này.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={handleRegister}
              style={{
                background: "white",
                color: PINK,
                padding: "18px 44px",
                borderRadius: 50,
                fontWeight: 800,
                fontSize: "1.05rem",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              🎉 Đăng ký tham dự ngay
            </button>

            <a
              href="https://www.facebook.com/congdongbauzmoms/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "white",
                padding: "16px 44px",
                borderRadius: 50,
                fontWeight: 800,
                fontSize: "1.05rem",
                textDecoration: "none",
                border: "2px solid white",
                display: "inline-block",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = BLUE;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "white";
              }}
            >
              Tìm hiểu thêm về Z-moms
            </a>
          </div>
        </div>
      </AnimSection>
    </section>
  );
}
