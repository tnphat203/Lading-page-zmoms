import AnimSection from "@/components/AnimSection";
import { stats, COLORS } from "@/data/eventData";

const { PINK, BLUE, GOLD } = COLORS;

const STAT_COLORS = [PINK, BLUE, GOLD, "#7C3AED"];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <AnimSection>
          <div className="stats-grid">
            {stats.map(({ value, label, icon }, index) => {
              const color = STAT_COLORS[index];

              return (
                <AnimSection key={label} delay={index * 100}>
                  <div
                    className="stat-card"
                    style={{
                      borderTopColor: color,
                    }}
                  >
                    <div className="stat-icon">{icon}</div>

                    <div className="stat-value" style={{ color }}>
                      {value}
                    </div>

                    <div className="stat-label">{label}</div>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </AnimSection>
      </div>

      <style jsx>{`
        .stats-section {
          background: white;
          padding: 60px 24px;
        }

        .stats-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .stat-card {
          border-top: 4px solid;
          border-radius: 0 0 16px 16px;
          padding: 24px 20px;
          text-align: center;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          height: 100%;
          box-sizing: border-box;
        }

        .stat-icon {
          font-size: 2.5rem;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-value {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: 1.8rem;
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #666;
          margin-top: 6px;
          font-weight: 600;
          line-height: 1.4;
        }

        @media (max-width: 800px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .stat-card {
            padding: 22px 16px;
          }
        }

        @media (max-width: 480px) {
          .stats-section {
            padding: 48px 16px;
          }

          .stats-grid {
            gap: 12px;
          }

          .stat-card {
            padding: 20px 12px;
            border-top-width: 3px;
            border-radius: 0 0 14px 14px;
          }

          .stat-icon {
            font-size: 2rem;
            margin-bottom: 8px;
          }

          .stat-value {
            font-size: 1.5rem;
          }

          .stat-label {
            font-size: 0.78rem;
            line-height: 1.4;
          }
        }

        @media (max-width: 360px) {
          .stats-section {
            padding: 44px 12px;
          }

          .stats-grid {
            gap: 10px;
          }

          .stat-card {
            padding: 18px 10px;
          }

          .stat-icon {
            font-size: 1.8rem;
          }

          .stat-value {
            font-size: 1.35rem;
          }

          .stat-label {
            font-size: 0.74rem;
          }
        }
      `}</style>
    </section>
  );
}
