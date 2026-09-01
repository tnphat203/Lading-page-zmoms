import AnimSection from "@/components/AnimSection";
import { schedule, COLORS } from "@/data/eventData";

const { PINK, GOLD } = COLORS;

const buttonStyle = {
  display: "inline-block",
  textAlign: "center" as const,
  padding: "10px 22px",
  borderRadius: 999,
  fontSize: ".9rem",
  textDecoration: "none",
  transition: "all .3s ease",
};

const mutedButton = {
  ...buttonStyle,
  background: "rgba(255,255,255,.18)",
  color: "rgba(255,255,255,.85)",
  border: "1px solid rgba(255,255,255,.2)",
  fontWeight: 700,
};

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
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <AnimSection>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,.18)",
                color: "#fff",
                borderRadius: 999,
                padding: "8px 22px",
                fontSize: ".8rem",
                fontWeight: 700,
                marginBottom: 18,
                border: "1px solid rgba(255,255,255,.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              HÀNH TRÌNH 2026
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
              Chọn bệnh viện gần bạn để đăng ký tham gia hoặc khám phá hành
              trình các sự kiện đã diễn ra
            </p>
          </div>
        </AnimSection>

        {/* Schedule */}
        {schedule.map((month, index) => (
          <AnimSection key={month.month} delay={index * 100}>
            <div style={{ marginBottom: 48 }}>
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
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 18,
                }}
              >
                {month.hospitals.map((hospital, hospitalIndex) => {
                  const completed = hospital.status === "completed";
                  const registering = hospital.status === "registering";

                  return (
                    <div
                      key={`${month.month}-${hospital.city}-${hospitalIndex}`}
                      style={{
                        background: completed
                          ? "rgba(255,255,255,.18)"
                          : "rgba(255,255,255,.12)",
                        borderRadius: 20,
                        padding: 22,
                        border: completed
                          ? `1px solid ${GOLD}`
                          : "1px solid rgba(255,255,255,.18)",
                        backdropFilter: "blur(14px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,.12)",
                        transition: "all .3s ease",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Status */}
                      {completed && (
                        <div
                          style={{
                            display: "inline-flex",
                            alignSelf: "flex-start",
                            alignItems: "center",
                            background: "rgba(255,209,102,.18)",
                            color: GOLD,
                            border: "1px solid rgba(255,209,102,.45)",
                            padding: "5px 12px",
                            borderRadius: 999,
                            fontSize: ".72rem",
                            fontWeight: 800,
                            marginBottom: 12,
                          }}
                        >
                          ✓ ĐÃ HOÀN THÀNH
                        </div>
                      )}

                      {/* City */}
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

                      {/* Hospital */}
                      <div
                        style={{
                          color: "rgba(255,255,255,.92)",
                          fontSize: ".95rem",
                          lineHeight: 1.5,
                          minHeight: 48,
                          marginBottom: 20,
                          flexGrow: 1,
                        }}
                      >
                        {hospital.hospital || "Đang cập nhật"}
                      </div>

                      {/* Action */}
                      {completed ? (
                        hospital.recapUrl ? (
                          <a
                            href={hospital.recapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              ...buttonStyle,
                              background: GOLD,
                              color: "#173B8F",
                              fontWeight: 800,
                              boxShadow: "0 8px 20px rgba(0,0,0,.2)",
                            }}
                          >
                            Xem hành trình →
                          </a>
                        ) : (
                          <span
                            style={{
                              ...buttonStyle,
                              background: "rgba(255,209,102,.12)",
                              color: GOLD,
                              fontWeight: 700,
                              border: "1px solid rgba(255,209,102,.3)",
                              cursor: "default",
                            }}
                          >
                            Hành trình sắp cập nhật
                          </span>
                        )
                      ) : registering ? (
                        hospital.formUrl ? (
                          <a
                            href={hospital.formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              ...buttonStyle,
                              background: PINK,
                              color: "#fff",
                              fontWeight: 700,
                              boxShadow: "0 8px 20px rgba(236,10,125,.35)",
                            }}
                          >
                            Đăng ký tham dự →
                          </a>
                        ) : (
                          <span style={mutedButton}>Sắp mở đăng ký</span>
                        )
                      ) : (
                        <span style={mutedButton}>Dự kiến</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
