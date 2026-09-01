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
    <section className="cta-section">
      <div className="cta-circle cta-circle--top" />
      <div className="cta-circle cta-circle--bottom" />

      <AnimSection>
        <div className="cta-content">
          <div className="float-anim cta-icon">🌟</div>

          <h2>
            Mỗi em bé sinh ra đều là <span>một thiên tài tiềm năng</span>
          </h2>

          <p>
            1.000 ngày đầu đời là khoảng thời gian vàng để đánh thức tiềm năng
            ấy. Đừng bỏ lỡ cơ hội cùng con trải qua hành trình đặc biệt này.
          </p>

          <div className="cta-actions">
            <button
              onClick={handleRegister}
              className="cta-button cta-button--primary"
            >
              🎉 Đăng ký tham dự ngay
            </button>

            <a
              href="https://www.facebook.com/congdongbauzmoms/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button--secondary"
            >
              Tìm hiểu thêm về Z-moms
            </a>
          </div>
        </div>
      </AnimSection>

      <style jsx>{`
        .cta-section {
          background: linear-gradient(
            135deg,
            ${PINK} 0%,
            #7c3aed 50%,
            ${BLUE} 100%
          );
          padding: 90px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          pointer-events: none;
        }

        .cta-circle--top {
          top: -80px;
          right: -80px;
          width: 350px;
          height: 350px;
        }

        .cta-circle--bottom {
          bottom: -60px;
          left: -60px;
          width: 250px;
          height: 250px;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-icon {
          font-size: 3.5rem;
          margin-bottom: 16px;
        }

        .cta-content h2 {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: clamp(1.8rem, 4vw, 3rem);
          color: white;
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .cta-content h2 span {
          color: ${GOLD};
        }

        .cta-content p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .cta-button {
          min-height: 58px;
          padding: 16px 44px;
          border-radius: 50px;
          font-family: inherit;
          font-weight: 800;
          font-size: 1.05rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
          box-sizing: border-box;
        }

        .cta-button:hover {
          transform: translateY(-3px);
        }

        .cta-button--primary {
          background: white;
          color: ${PINK};
          border: none;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .cta-button--secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button--secondary:hover {
          background: white;
          color: ${BLUE};
        }

        @media (max-width: 800px) {
          .cta-section {
            padding: 70px 24px;
          }

          .cta-content {
            max-width: 680px;
          }

          .cta-content p {
            max-width: 560px;
          }

          .cta-button {
            padding-left: 32px;
            padding-right: 32px;
          }
        }

        @media (max-width: 480px) {
          .cta-section {
            padding: 56px 16px;
          }

          .cta-circle--top {
            top: -100px;
            right: -120px;
            width: 280px;
            height: 280px;
          }

          .cta-circle--bottom {
            bottom: -90px;
            left: -100px;
            width: 220px;
            height: 220px;
          }

          .cta-icon {
            font-size: 2.8rem;
            margin-bottom: 12px;
          }

          .cta-content h2 {
            font-size: 1.85rem;
            line-height: 1.25;
            margin-bottom: 16px;
          }

          .cta-content p {
            font-size: 0.92rem;
            line-height: 1.65;
            margin-bottom: 28px;
            padding: 0 4px;
          }

          .cta-actions {
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }

          .cta-button {
            width: 100%;
            min-height: 54px;
            padding: 14px 20px;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 360px) {
          .cta-section {
            padding: 48px 12px;
          }

          .cta-content h2 {
            font-size: 1.65rem;
          }

          .cta-content p {
            font-size: 0.86rem;
          }

          .cta-button {
            font-size: 0.9rem;
            min-height: 52px;
          }
        }
      `}</style>
    </section>
  );
}
