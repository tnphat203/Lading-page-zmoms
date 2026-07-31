import AnimSection from "@/components/AnimSection";
import { schedule, COLORS } from "@/data/eventData";

const { PINK, GOLD } = COLORS;

export default function Schedule() {
  return (
    <section
      id="schedule"
      style={{
        background:
          "linear-gradient(135deg, #EC0A7D 0%, #D10C73 35%, #173B8F 100%)",
        padding: "80px 24px",
        color: "white",
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
              marginBottom: 56,
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,.18)",
                color: "#fff",
                borderRadius: 999,
                padding: "8px 22px",
                fontSize: "0.8rem",
                fontWeight: 700,
                marginBottom: 18,
                border: "1px solid rgba(255,255,255,.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              DỰ KIẾN TỔ CHỨC 2026
            </div>

            <h2
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3vw, 2.7rem)",
                lineHeight: 1.3,
              }}
            >
              Đăng ký tham dự tại{" "}
              <span style={{ color: GOLD }}>các bệnh viện đồng hành</span>
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,.82)",
                marginTop: 14,
                fontSize: "1rem",
              }}
            >
              Chọn bệnh viện gần bạn để đăng ký tham gia sự kiện
            </p>
          </div>
        </AnimSection>

        {schedule.map((month, index) => (
          <AnimSection key={month.month} delay={index * 100}>
            <div
              style={{
                marginBottom: 48,
              }}
            >
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: GOLD,
                  marginBottom: 20,
                }}
              >
                {month.month}
              </h3>

              <div
                className="schedule-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: 18,
                }}
              >
                {month.hospitals.map((hospital) => (
                  <div
                    key={hospital.hospital}
                    style={{
                      background: "rgba(255,255,255,.12)",
                      borderRadius: 20,
                      padding: 22,
                      border: "1px solid rgba(255,255,255,.18)",
                      backdropFilter: "blur(14px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,.12)",
                      transition: "all .3s ease",
                    }}
                  >
                    <div
                      style={{
                        color: GOLD,
                        fontWeight: 800,
                        fontSize: "1rem",
                        marginBottom: 6,
                      }}
                    >
                      📍 {hospital.city}
                    </div>

                    <div
                      style={{
                        color: "rgba(255,255,255,.92)",
                        fontSize: ".95rem",
                        lineHeight: 1.5,
                        minHeight: 48,
                        marginBottom: 20,
                      }}
                    >
                      {hospital.hospital}
                    </div>

                    {hospital.formUrl ? (
                      <a
                        href={hospital.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          background: PINK,
                          color: "#fff",
                          padding: "10px 22px",
                          borderRadius: 999,
                          fontWeight: 700,
                          fontSize: ".9rem",
                          textDecoration: "none",
                          boxShadow: "0 8px 20px rgba(236,10,125,.35)",
                          transition: "all .3s ease",
                        }}
                      >
                        Đăng ký tham dự →
                      </a>
                    ) : (
                      <span
                        style={{
                          display: "inline-block",
                          background: "rgba(255,255,255,.18)",
                          color: "rgba(255,255,255,.85)",
                          padding: "10px 22px",
                          borderRadius: 999,
                          fontWeight: 700,
                          fontSize: ".9rem",
                          border: "1px solid rgba(255,255,255,.2)",
                          cursor: "default",
                        }}
                      >
                        Dự kiến
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
