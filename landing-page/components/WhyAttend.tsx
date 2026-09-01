import AnimSection from "@/components/AnimSection";
import {
  ageDevelopmentData,
  brainDevelopmentFacts,
  COLORS,
} from "@/data/eventData";

const { PINK, BLUE, LIGHT_PINK, LIGHT_BLUE } = COLORS;

export default function WhyAttend() {
  return (
    <section className="why-attend">
      <div className="why-attend__container">
        <AnimSection>
          <div className="why-attend__heading">
            <div className="why-attend__badge">Vì sao nên tham dự?</div>

            <h2>
              Não bộ của bé phát triển <span>nhanh đến mức nào?</span>
            </h2>
          </div>
        </AnimSection>

        <div className="why-attend__content">
          <AnimSection delay={100}>
            <div className="development-card">
              <h3>🧠 Giai đoạn vàng phát triển não bộ</h3>

              {ageDevelopmentData.map(({ age, pct }) => (
                <div className="development-item" key={age}>
                  <div className="development-label">
                    <span>{age}</span>

                    <span
                      className={
                        pct >= 80
                          ? "development-percent development-percent--pink"
                          : "development-percent"
                      }
                    >
                      {pct}%
                    </span>
                  </div>

                  <div className="progress">
                    <div
                      className={`progress__bar ${
                        pct >= 80
                          ? "progress__bar--pink"
                          : "progress__bar--blue"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}

              <p>
                Từ 0–5 tuổi là giai đoạn vàng để phát triển não bộ, đặc biệt là
                giai đoạn 0–2 tuổi.
              </p>
            </div>
          </AnimSection>

          <div className="facts">
            {brainDevelopmentFacts.map(
              ({ icon, title, desc, color }, index) => (
                <AnimSection key={title} delay={index * 120}>
                  <div className="fact-card">
                    <div
                      className="fact-icon"
                      style={{
                        background: `${color}18`,
                      }}
                    >
                      {icon}
                    </div>

                    <div className="fact-content">
                      <div className="fact-title" style={{ color }}>
                        {title}
                      </div>

                      <div className="fact-desc">{desc}</div>
                    </div>
                  </div>
                </AnimSection>
              ),
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-attend {
          background: linear-gradient(
            135deg,
            ${LIGHT_BLUE} 0%,
            ${LIGHT_PINK} 100%
          );
          padding: 80px 24px;
        }

        .why-attend__container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .why-attend__heading {
          text-align: center;
          margin-bottom: 50px;
        }

        .why-attend__badge {
          display: inline-block;
          background: ${BLUE};
          color: white;
          border-radius: 30px;
          padding: 6px 20px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .why-attend__heading h2 {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.2;
          color: ${BLUE};
          margin: 0;
        }

        .why-attend__heading h2 span {
          color: ${PINK};
        }

        .why-attend__content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 40px;
          align-items: center;
        }

        .development-card {
          background: white;
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 8px 32px rgba(26, 60, 143, 0.1);
        }

        .development-card h3 {
          font-weight: 800;
          font-size: 1.1rem;
          color: ${BLUE};
          margin: 0 0 24px;
        }

        .development-item {
          margin-bottom: 14px;
        }

        .development-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: #444;
        }

        .development-percent {
          color: ${BLUE};
          flex-shrink: 0;
        }

        .development-percent--pink {
          color: ${PINK};
        }

        .progress {
          background: #f0f0f0;
          border-radius: 10px;
          height: 10px;
          overflow: hidden;
        }

        .progress__bar {
          height: 100%;
          border-radius: 10px;
          transition: width 1s ease;
        }

        .progress__bar--pink {
          background: linear-gradient(90deg, ${PINK}, #7c3aed);
        }

        .progress__bar--blue {
          background: linear-gradient(90deg, ${BLUE}, #0891b2);
        }

        .development-card p {
          margin: 20px 0 0;
          font-size: 0.85rem;
          color: #888;
          font-style: italic;
          line-height: 1.6;
        }

        .facts {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
        }

        .fact-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .fact-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .fact-content {
          min-width: 0;
          flex: 1;
        }

        .fact-title {
          font-weight: 800;
          font-size: 0.95rem;
          line-height: 1.35;
          margin-bottom: 6px;
        }

        .fact-desc {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.6;
          overflow-wrap: break-word;
        }

        @media (max-width: 800px) {
          .why-attend__content {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .why-attend__heading {
            margin-bottom: 36px;
          }
        }

        @media (max-width: 480px) {
          .why-attend {
            padding: 52px 16px;
          }

          .why-attend__heading {
            margin-bottom: 30px;
          }

          .why-attend__badge {
            font-size: 0.7rem;
            padding: 6px 16px;
            margin-bottom: 12px;
          }

          .why-attend__heading h2 {
            font-size: 1.8rem;
            line-height: 1.22;
          }

          .development-card {
            border-radius: 20px;
            padding: 24px 20px;
          }

          .development-card h3 {
            font-size: 1rem;
            line-height: 1.4;
            margin-bottom: 20px;
          }

          .development-card p {
            font-size: 0.8rem;
            line-height: 1.55;
          }

          .facts {
            gap: 14px;
          }

          .fact-card {
            border-radius: 18px;
            padding: 18px;
            gap: 12px;
          }

          .fact-icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            font-size: 1.3rem;
          }

          .fact-title {
            font-size: 0.9rem;
            line-height: 1.35;
          }

          .fact-desc {
            font-size: 0.82rem;
            line-height: 1.55;
          }
        }

        @media (max-width: 360px) {
          .why-attend {
            padding-left: 12px;
            padding-right: 12px;
          }

          .why-attend__heading h2 {
            font-size: 1.65rem;
          }

          .development-card {
            padding: 20px 16px;
          }

          .fact-card {
            padding: 16px;
          }

          .fact-icon {
            width: 38px;
            height: 38px;
            font-size: 1.15rem;
          }

          .fact-desc {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
