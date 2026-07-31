import AnimSection from "@/components/AnimSection";
import { partnerCommunities, COLORS } from "@/data/eventData";

const { PINK, BLUE } = COLORS;

export default function Organizers() {
  return (
    <section
      style={{
        background: "white",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <AnimSection>
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                display: "inline-block",
                background: "#f0f0f0",
                color: "#666",
                borderRadius: 30,
                padding: "6px 20px",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Đơn vị tổ chức
            </div>
          </div>

          <h2
            style={{
              fontFamily: "'Baloo 2', cursive",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: BLUE,
              marginBottom: 40,
            }}
          >
            Cùng nhau vì <span style={{ color: PINK }}>1.000 ngày vàng</span>{" "}
            của bé
          </h2>
        </AnimSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {partnerCommunities.map(({ name, tagline, emoji, color, desc }) => (
            <AnimSection key={name}>
              <div
                style={{
                  background: `${color}08`,
                  borderRadius: 24,
                  padding: 32,
                  border: `2px solid ${color}20`,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: 12,
                  }}
                >
                  {emoji}
                </div>

                <div
                  style={{
                    fontFamily: "'Baloo 2', cursive",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    color,
                    marginBottom: 4,
                  }}
                >
                  {name}
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#888",
                    fontWeight: 700,
                    marginBottom: 12,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {tagline}
                </div>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
