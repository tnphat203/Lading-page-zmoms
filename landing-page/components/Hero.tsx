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
    <section className="hero">
      <div className="hero-blob hero-blob--pink" style={{ background: PINK }} />
      <div className="hero-blob hero-blob--blue" style={{ background: BLUE }} />
      <div className="hero-blob hero-blob--gold" style={{ background: GOLD }} />

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-ring" style={{ background: PINK }} />
            CHUỖI SỰ KIỆN CỘNG ĐỒNG 2026 · 12 TỈNH THÀNH
          </div>

          <h1>
            <span className="gradient-text">Ngày Hội</span>
            <br />
            <span className="hero-title-blue">1.000 Ngày Vàng</span>
            <br />
            <span className="hero-title-dark">Đầu Đời</span>
          </h1>

          <p className="hero-festival">
            <span>BABY INTELLIGENCE FESTIVAL</span>
          </p>

          <p className="hero-description">
            Đánh thức thiên tài trong mỗi em bé — Sự kiện giáo dục cộng đồng về
            phát triển trí thông minh của trẻ từ trong bụng mẹ đến 2 tuổi.
          </p>

          <div className="hero-actions">
            <button onClick={handleRegister} className="btn-pink">
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

          <div className="hero-highlights">
            {eventHighlights.map(({ icon, label }) => (
              <div key={label} className="hero-highlight">
                <span>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <div className="hero-right-heading">
            <h2>Một ngày hội. Ngàn khoảnh khắc yêu thương.</h2>

            <p>
              Nơi ba mẹ cùng học hỏi, con được khám phá và cả gia đình có thêm
              những kỷ niệm đáng nhớ.
            </p>
          </div>

          <div className="hero-image">
            <Image
              src="/IMG/TRANG 1/Be_332.jpeg"
              alt="Khoảnh khắc tại Ngày hội 1.000 Ngày Vàng"
              width={840}
              height={600}
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 92vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(
            150deg,
            #fff0f7 0%,
            #eef3ff 50%,
            #fffbf0 100%
          );
        }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          pointer-events: none;
        }

        .hero-blob--pink {
          width: 600px;
          height: 600px;
          top: -200px;
          right: -100px;
        }

        .hero-blob--blue {
          width: 400px;
          height: 400px;
          bottom: -100px;
          left: -100px;
        }

        .hero-blob--gold {
          width: 300px;
          height: 300px;
          top: 40%;
          left: 30%;
        }

        .hero-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 60px 24px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 60px;
          align-items: center;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          min-width: 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          border-radius: 30px;
          padding: 8px 18px;
          margin-bottom: 24px;
          box-shadow: 0 4px 16px rgba(233, 30, 140, 0.15);
          font-size: 0.85rem;
          font-weight: 700;
          color: ${PINK};
          line-height: 1.3;
        }

        .pulse-ring {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .hero h1 {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.15;
          margin: 0 0 16px;
        }

        .gradient-text {
          background: linear-gradient(90deg, ${PINK}, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-title-blue {
          color: ${BLUE};
        }

        .hero-title-dark {
          color: #333;
        }

        .hero-festival {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.7;
          margin: 0 0 12px;
          font-weight: 600;
        }

        .hero-festival span {
          color: ${PINK};
          font-weight: 800;
        }

        .hero-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.7;
          margin: 0 0 32px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .hero-actions :global(.btn-pink),
        .hero-actions :global(.btn-outline) {
          box-sizing: border-box;
        }

        .hero-actions :global(.btn-pink) {
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        .hero-highlights {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-highlight {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: #555;
          font-weight: 600;
          line-height: 1.4;
        }

        .hero-highlight span {
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        /* RIGHT CONTENT */

        .hero-right {
          min-width: 0;
        }

        .hero-right-heading {
          text-align: center;
          margin-bottom: 8px;
        }

        .hero-right-heading h2 {
          color: ${PINK};
          font-size: clamp(1.2rem, 2vw, 1.55rem);
          font-weight: 800;
          line-height: 1.4;
          margin: 0 0 4px;
        }

        .hero-right-heading p {
          color: ${BLUE};
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
          margin: 0;
        }

        .hero-image {
          width: 100%;
          aspect-ratio: 1.38 / 1;
          overflow: hidden;
          position: relative;
        }

        .hero-image :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 900px) {
          .hero-container {
            gap: 36px;
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .hero-badge {
            font-size: 0.75rem;
          }

          .hero-description {
            font-size: 0.95rem;
          }

          .hero-right-heading h2 {
            font-size: 1.2rem;
          }

          .hero-right-heading p {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 800px) {
          .hero {
            min-height: auto;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 56px 24px 48px;
          }

          .hero-content {
            text-align: center;
          }

          .hero-badge {
            margin-bottom: 20px;
          }

          .hero h1 {
            font-size: clamp(2rem, 8vw, 2.8rem);
          }

          .hero-description {
            max-width: 620px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-highlights {
            justify-content: center;
          }

          .hero-right {
            width: 100%;
          }

          .hero-right-heading {
            margin-bottom: 12px;
          }

          .hero-image {
            aspect-ratio: 1.38 / 1;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 42px 16px 44px;
            gap: 28px;
          }

          .hero-blob--pink {
            width: 320px;
            height: 320px;
            top: -120px;
            right: -140px;
          }

          .hero-blob--blue {
            width: 260px;
            height: 260px;
            bottom: -100px;
            left: -120px;
          }

          .hero-blob--gold {
            width: 180px;
            height: 180px;
            top: 45%;
            left: 35%;
          }

          .hero-badge {
            max-width: 100%;
            padding: 7px 14px;
            margin-bottom: 18px;
            font-size: 0.68rem;
            justify-content: center;
          }

          .hero h1 {
            font-size: 2rem;
            line-height: 1.18;
            margin-bottom: 14px;
          }

          .hero-festival {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 10px;
          }

          .hero-description {
            font-size: 0.88rem;
            line-height: 1.65;
            margin-bottom: 24px;
          }

          .hero-actions {
            flex-direction: column;
            gap: 10px;
            width: 100%;
            margin-bottom: 28px;
          }

          .hero-actions :global(.btn-pink),
          .hero-actions :global(.btn-outline) {
            width: 100%;
            min-height: 52px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
          }

          .hero-highlights {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            width: fit-content;
            max-width: 100%;
            margin: 0 auto;
            text-align: left;
          }

          .hero-highlight {
            font-size: 0.82rem;
          }

          .hero-right-heading h2 {
            font-size: 1.15rem;
          }

          .hero-right-heading p {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 360px) {
          .hero-container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .hero h1 {
            font-size: 1.8rem;
          }

          .hero-badge {
            font-size: 0.62rem;
            padding: 6px 12px;
          }

          .hero-description {
            font-size: 0.84rem;
          }

          .hero-highlight {
            font-size: 0.78rem;
          }
        }
      `}</style>
    </section>
  );
}
