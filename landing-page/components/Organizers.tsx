import Image from "next/image";
import AnimSection from "@/components/AnimSection";
import { partnerCommunities, COLORS } from "@/data/eventData";

const { PINK, BLUE } = COLORS;

export default function Organizers() {
  return (
    <section className="organizers-section">
      <div className="organizers-container">
        <AnimSection>
          <div className="organizers-heading">
            <div className="organizers-badge">Đơn vị tổ chức</div>

            <h2>
              Cùng nhau vì <span>1.000 ngày vàng</span> của bé
            </h2>
          </div>
        </AnimSection>

        <div className="organizers-grid">
          {partnerCommunities.map(({ name, tagline, logo, color, desc }) => (
            <AnimSection key={name}>
              <div
                className="organizer-card"
                style={{
                  background: `${color}08`,
                  borderColor: `${color}20`,
                }}
              >
                <div className="organizer-logo">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={180}
                    height={90}
                  />
                </div>

                <div className="organizer-name" style={{ color }}>
                  {name}
                </div>

                <div className="organizer-tagline">{tagline}</div>

                <p className="organizer-desc">{desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>

      <style jsx>{`
        .organizers-section {
          background: white;
          padding: 80px 24px;
        }

        .organizers-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .organizers-heading {
          margin-bottom: 40px;
        }

        .organizers-badge {
          display: inline-block;
          background: #f0f0f0;
          color: #666;
          border-radius: 30px;
          padding: 6px 20px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .organizers-heading h2 {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          line-height: 1.25;
          color: ${BLUE};
          margin: 0;
        }

        .organizers-heading h2 span {
          color: ${PINK};
        }

        .organizers-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        .organizer-card {
          height: 100%;
          box-sizing: border-box;
          border-radius: 24px;
          padding: 28px 24px;
          border: 2px solid;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .organizer-logo {
          width: 100%;
          height: 110px;
          background: white;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          box-sizing: border-box;
          margin-bottom: 20px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }

        .organizer-logo :global(img) {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 82px;
          object-fit: contain;
        }

        .organizer-name {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: 1.35rem;
          line-height: 1.25;
          margin-bottom: 4px;
        }

        .organizer-tagline {
          font-size: 0.78rem;
          color: #888;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .organizer-desc {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 800px) {
          .organizers-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .organizer-card {
            padding: 24px;
          }

          .organizer-logo {
            max-width: 380px;
          }
        }

        @media (max-width: 480px) {
          .organizers-section {
            padding: 52px 16px;
          }

          .organizers-heading {
            margin-bottom: 28px;
          }

          .organizers-badge {
            font-size: 0.7rem;
            padding: 6px 16px;
            margin-bottom: 12px;
          }

          .organizers-heading h2 {
            font-size: 1.75rem;
            line-height: 1.25;
          }

          .organizers-grid {
            gap: 14px;
          }

          .organizer-card {
            padding: 20px 18px;
            border-radius: 20px;
          }

          .organizer-logo {
            height: 86px;
            padding: 8px 18px;
            margin-bottom: 16px;
            border-radius: 14px;
          }

          .organizer-logo :global(img) {
            max-height: 64px;
          }

          .organizer-name {
            font-size: 1.2rem;
          }

          .organizer-tagline {
            font-size: 0.7rem;
            margin-bottom: 10px;
          }

          .organizer-desc {
            font-size: 0.82rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 360px) {
          .organizers-section {
            padding: 48px 12px;
          }

          .organizers-heading h2 {
            font-size: 1.6rem;
          }

          .organizer-card {
            padding: 18px 16px;
          }

          .organizer-logo {
            height: 78px;
          }

          .organizer-logo :global(img) {
            max-height: 58px;
          }

          .organizer-desc {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
