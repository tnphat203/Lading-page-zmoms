"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import QRCode from "qrcode";

const PINK = "#E91E8C";
const BLUE = "#1A3C8F";
const GOLD = "#FFB800";
const LIGHT_PINK = "#FFF0F7";
const LIGHT_BLUE = "#EEF3FF";

const zones = [
  {
    icon: "🎤",
    title: "Khu Tri Thức",
    subtitle: "Knowledge Stage",
    desc: "Talkshow với bác sĩ nhi khoa & chuyên gia giáo dục sớm. Chủ đề: Phát triển trí thông minh của trẻ trong 1.000 ngày đầu đời.",
    color: "#E91E8C",
    bg: "#FFF0F7",
  },
  {
    icon: "✨",
    title: "Khu Trải Nghiệm Giác Quan",
    subtitle: "Sensory Experience Zone",
    desc: "Hoạt động cho trẻ >3 tháng tuổi: Nhận biết ánh sáng, âm thanh, vận động thăng bằng, Tummy Time.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: "🛍️",
    title: "Khu Thương Hiệu Mẹ & Bé",
    subtitle: "Baby Care Market",
    desc: "Các thương hiệu trưng bày sản phẩm, phát mẫu thử và bán hàng ưu đãi tại sự kiện.",
    color: "#0891B2",
    bg: "#ECFEFF",
  },
  {
    icon: "🌳",
    title: "Khu Cây Điều Ước",
    subtitle: "Wish Tree",
    desc: "Cha mẹ viết điều ước cho con, gắn lên cây điều ước — khoảnh khắc đầy cảm xúc và ý nghĩa.",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    icon: "🎮",
    title: "Khu Minigame Gia Đình",
    subtitle: "Family Game Zone",
    desc: "Thử thách bố mẹ, vận động cho bé, bốc thăm trúng thưởng — vui nhộn cho cả gia đình.",
    color: "#EA580C",
    bg: "#FFF7ED",
  },
];

const schedule = [
  { city: "Hà Nội", hospital: "BV Phụ sản Hà Nội", month: "Tháng 8", order: 1 },
  { city: "Hồ Chí Minh", hospital: "BV Hạnh Phúc", month: "Tháng 8", order: 2 },
  { city: "Hồ Chí Minh", hospital: "BV Quốc Tế City", month: "Tháng 9", order: 3 },
  { city: "Hải Phòng", hospital: "BV Đa Khoa Green HP", month: "Tháng 9", order: 4 },
  { city: "Hà Nội", hospital: "BV Nhi Hà Nội", month: "Tháng 10", order: 5 },
  { city: "Cần Thơ", hospital: "BV Hoàn Mỹ Cửu Long", month: "Tháng 10", order: 6 },
  { city: "Hải Dương", hospital: "BV Phụ sản Hải Dương", month: "Tháng 10", order: 7 },
  { city: "Đồng Nai", hospital: "BV Shingmark", month: "Tháng 11", order: 8 },
  { city: "Hà Nội", hospital: "BV Phụ sản TW", month: "Tháng 11", order: 9 },
  { city: "Đà Nẵng", hospital: "BV Hoàn Mỹ Đà Nẵng", month: "Tháng 12", order: 10 },
  { city: "Hồ Chí Minh", hospital: "BV Hoàn Mỹ HCM", month: "Tháng 11", order: 11 },
  { city: "Hà Nội", hospital: "BV Quốc Tế HN (Phenika)", month: "Tháng 12", order: 12 },
];

const stats = [
  { value: "6.000–12.000", label: "Mẹ & gia đình tham dự", icon: "👨‍👩‍👧" },
  { value: "500K+", label: "Lượt tiếp cận online", icon: "📱" },
  { value: "12", label: "Tỉnh thành trên cả nước", icon: "📍" },
  { value: "80%", label: "Não bộ phát triển trong 1.000 ngày đầu", icon: "🧠" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [activeZone, setActiveZone] = useState(0);
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL("https://1000ngayvang.z-moms.com")
      .then(setQrUrl)
      .catch(console.error);
  }, []);
  return (
    <main
      style={{
        fontFamily: "'Nunito', 'Be Vietnam Pro', sans-serif",
        background: "#FAFAFA",
        color: "#1a1a1a",
        overflowX: "hidden",
        paddingTop: "84px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .btn-pink {
          background: linear-gradient(135deg, #E91E8C 0%, #c01070 100%);
          color: white; padding: 16px 36px; border-radius: 50px; font-weight: 800;
          font-size: 1rem; text-decoration: none; display: inline-block;
          box-shadow: 0 8px 24px rgba(233,30,140,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          border: none; cursor: pointer; letter-spacing: 0.3px;
        }
        .btn-pink:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(233,30,140,0.45); }
        .btn-outline {
          background: white; color: #1A3C8F; padding: 14px 34px; border-radius: 50px;
          font-weight: 800; font-size: 1rem; text-decoration: none; display: inline-block;
          border: 2.5px solid #1A3C8F; transition: all 0.2s; cursor: pointer;
        }
        .btn-outline:hover { background: #1A3C8F; color: white; transform: translateY(-3px); }
        .zone-tab { cursor: pointer; padding: 10px 20px; border-radius: 30px; font-weight: 700;
          transition: all 0.2s; font-size: 0.85rem; white-space: nowrap; border: none; background: transparent; }
        .zone-tab.active { color: white; }
        .stat-card { background: white; border-radius: 20px; padding: 28px 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07); text-align: center; }
        .schedule-item { background: white; border-radius: 16px; padding: 18px 20px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 14px; }
        .hero-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; pointer-events: none; }
        .float-anim { animation: floatY 3.5s ease-in-out infinite; }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .pulse-ring { animation: pulseRing 2s ease-in-out infinite; }
        @keyframes pulseRing { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.1);opacity:1} }
        .gradient-text {
          background: linear-gradient(135deg, #E91E8C, #7C3AED, #1A3C8F);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .schedule-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,

          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(233,30,140,0.12)",

          padding: "14px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "16px",
              background: "linear-gradient(135deg, #E91E8C, #7C3AED)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(233,30,140,0.25)",
              padding: 6,
            }}
          >
            <Image
              src="/logo.png"
              alt="Z-moms Logo"
              width={38}
              height={38}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, color: BLUE, fontSize: "1rem", lineHeight: 1 }}>Z-moms × IPD8</div>
            <div style={{ fontSize: "0.65rem", color: "#888", letterSpacing: 1, textTransform: "uppercase" }}>Baby Intelligence Festival</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="https://www.facebook.com/congdongbauzmoms/" target="_blank" className="btn-outline" style={{ padding: "8px 20px", fontSize: "0.85rem" }}>Về Z-moms</a>
          <a href="https://forms.gle/7GkDppQmdNpfP3TK9" target="_blank" className="btn-pink" style={{ padding: "8px 20px", fontSize: "0.85rem" }}>Đăng ký</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "92vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", background: "linear-gradient(150deg, #FFF0F7 0%, #EEF3FF 50%, #FFFBF0 100%)" }}>
        <div className="hero-blob" style={{ width: 600, height: 600, background: PINK, top: -200, right: -100 }} />
        <div className="hero-blob" style={{ width: 400, height: 400, background: BLUE, bottom: -100, left: -100 }} />
        <div className="hero-blob" style={{ width: 300, height: 300, background: GOLD, top: "40%", left: "30%" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", borderRadius: 30, padding: "8px 18px", marginBottom: 24, boxShadow: "0 4px 16px rgba(233,30,140,0.15)", fontSize: "0.85rem", fontWeight: 700, color: PINK }}>
              <span className="pulse-ring" style={{ width: 8, height: 8, borderRadius: "50%", background: PINK, display: "inline-block" }} />
              CHUỖI SỰ KIỆN CỘNG ĐỒNG 2026 · 12 TỈNH THÀNH
            </div>

            <h1 style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15, marginBottom: 16 }}>
              <span className="gradient-text">Ngày Hội</span><br />
              <span style={{ color: BLUE }}>1.000 Ngày Vàng</span><br />
              <span style={{ color: "#333" }}>Đầu Đời</span>
            </h1>

            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.7, marginBottom: 12, fontWeight: 600 }}>
              <span style={{ color: PINK, fontWeight: 800 }}>BABY INTELLIGENCE FESTIVAL</span>
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.7, marginBottom: 32 }}>
              Đánh thức thiên tài trong mỗi em bé — Sự kiện giáo dục cộng đồng về phát triển trí thông minh của trẻ từ trong bụng mẹ đến 2 tuổi.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
              <a href="https://forms.gle/7GkDppQmdNpfP3TK9" target="_blank" className="btn-pink">🎉 Đăng ký tham dự</a>
              <a href="https://www.facebook.com/congdongbauzmoms/" target="_blank" className="btn-outline">Tìm hiểu Z-moms →</a>
            </div>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[["👩‍⚕️", "Chuyên gia & Bác sĩ"], ["🏥", "12 Bệnh viện"], ["👨‍👩‍👧", "6.000+ Gia đình"]].map(([icon, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.9rem", color: "#555", fontWeight: 600 }}>
                  <span style={{ fontSize: "1.1rem" }}>{icon}</span> {label}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            {/* Big decorative circle */}
            <div style={{ width: 380, height: 380, borderRadius: "50%", background: "linear-gradient(135deg, rgba(233,30,140,0.12), rgba(26,60,143,0.12))", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div className="float-anim" style={{ fontSize: "10rem", lineHeight: 1, userSelect: "none", filter: "drop-shadow(0 20px 40px rgba(233,30,140,0.3))" }}>👶</div>
              {/* Orbiting badges */}
              {[
                { emoji: "🧠", label: "80% não bộ", angle: -30, r: 190 },
                { emoji: "⭐", label: "1.000 ngày vàng", angle: 90, r: 190 },
                { emoji: "🌱", label: "Phát triển toàn diện", angle: 210, r: 190 },
              ].map(({ emoji, label, angle, r }) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <div key={label} style={{
                    position: "absolute",
                    left: `calc(50% + ${Math.cos(rad) * r}px - 56px)`,
                    top: `calc(50% + ${Math.sin(rad) * r}px - 26px)`,
                    background: "white",
                    borderRadius: 20,
                    padding: "8px 14px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: BLUE,
                    whiteSpace: "nowrap",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <span>{emoji}</span>{label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="stats-grid">
              {stats.map(({ value, label, icon }, i) => (
                <AnimSection key={label} delay={i * 100}>
                  <div className="stat-card" style={{ borderTop: `4px solid ${[PINK, BLUE, GOLD, "#7C3AED"][i]}` }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>{icon}</div>
                    <div style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "1.8rem", color: [PINK, BLUE, GOLD, "#7C3AED"][i], lineHeight: 1.1 }}>{value}</div>
                    <div style={{ fontSize: "0.85rem", color: "#666", marginTop: 6, fontWeight: 600, lineHeight: 1.4 }}>{label}</div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* WHY */}
      <section style={{ background: `linear-gradient(135deg, ${LIGHT_BLUE} 0%, ${LIGHT_PINK} 100%)`, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <div style={{ display: "inline-block", background: BLUE, color: "white", borderRadius: 30, padding: "6px 20px", fontSize: "0.8rem", fontWeight: 700, marginBottom: 16, letterSpacing: 1, textTransform: "uppercase" }}>
                Vì sao nên tham dự?
              </div>
              <h2 style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: BLUE }}>
                Não bộ của bé phát triển<br /><span style={{ color: PINK }}>nhanh đến mức nào?</span>
              </h2>
            </div>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
            <AnimSection delay={100}>
              <div style={{ background: "white", borderRadius: 24, padding: 36, boxShadow: "0 8px 32px rgba(26,60,143,0.1)" }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: BLUE, marginBottom: 24 }}>🧠 Giai đoạn vàng phát triển não bộ</h3>
                {[
                  { age: "Sơ sinh", pct: 25 },
                  { age: "1 tuổi", pct: 50 },
                  { age: "2 tuổi", pct: 80 },
                  { age: "5 tuổi", pct: 90 },
                  { age: "6 tuổi", pct: 95 },
                ].map(({ age, pct }) => (
                  <div key={age} style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: 700, marginBottom: 6, color: "#444" }}>
                      <span>{age}</span><span style={{ color: pct >= 80 ? PINK : BLUE }}>{pct}%</span>
                    </div>
                    <div style={{ background: "#f0f0f0", borderRadius: 10, height: 10, overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", borderRadius: 10, background: pct >= 80 ? `linear-gradient(90deg, ${PINK}, #7C3AED)` : `linear-gradient(90deg, ${BLUE}, #0891B2)`, transition: "width 1s ease" }} />
                    </div>
                  </div>
                ))}
                <p style={{ marginTop: 20, fontSize: "0.85rem", color: "#888", fontStyle: "italic", lineHeight: 1.6 }}>
                  Từ 0–5 tuổi là giai đoạn vàng để phát triển não bộ, đặc biệt là giai đoạn 0–2 tuổi.
                </p>
              </div>
            </AnimSection>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "⚡", title: "700–1.000 kết nối thần kinh/giây", desc: "Theo UNICEF & WHO, trong 1.000 ngày đầu đời, mỗi giây não trẻ hình thành 700–1.000 kết nối thần kinh mới. Đây là tốc độ nhanh nhất não từng đạt được.", color: PINK },
                { icon: "💡", title: "Nền tảng trọn đời", desc: "Đây là giai đoạn quyết định nền tảng: Trí tuệ · Cảm xúc · Sức khỏe · Khả năng học tập của trẻ suốt cuộc đời.", color: BLUE },
                { icon: "📚", title: "Cha mẹ Việt cần kiến thức", desc: "Phần lớn cha mẹ Việt Nam chưa được trang bị đầy đủ kiến thức khoa học về chăm sóc và phát triển trẻ trong giai đoạn quan trọng này.", color: "#7C3AED" },
              ].map(({ icon, title, desc, color }, i) => (
                <AnimSection key={title} delay={i * 120}>
                  <div style={{ background: "white", borderRadius: 20, padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.07)", display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.95rem", color, marginBottom: 6 }}>{title}</div>
                      <div style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENT ZONES */}
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ display: "inline-block", background: PINK, color: "white", borderRadius: 30, padding: "6px 20px", fontSize: "0.8rem", fontWeight: 700, marginBottom: 16, letterSpacing: 1 }}>5 KHU VỰC TRẢI NGHIỆM</div>
              <h2 style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: BLUE }}>
                Sự kiện được thiết kế như<br /><span style={{ color: PINK }}>một lễ hội gia đình</span>
              </h2>
            </div>
          </AnimSection>

          <AnimSection delay={100}>
            <div style={{ display: "flex", gap: 10, marginBottom: 30, overflowX: "auto", paddingBottom: 8, justifyContent: "center", flexWrap: "wrap" }}>
              {zones.map((z, i) => (
                <button key={z.title} className={`zone-tab${activeZone === i ? " active" : ""}`}
                  onClick={() => setActiveZone(i)}
                  style={{
                    background: activeZone === i ? z.color : `${z.color}15`,
                    color: activeZone === i ? "white" : z.color,
                  }}>
                  {z.icon} {z.subtitle}
                </button>
              ))}
            </div>
          </AnimSection>

          <AnimSection delay={200}>
            <div style={{ background: zones[activeZone].bg, borderRadius: 28, padding: 48, border: `2px solid ${zones[activeZone].color}25`, transition: "all 0.3s" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "4rem", marginBottom: 16 }}>{zones[activeZone].icon}</div>
                  <h3 style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "1.8rem", color: zones[activeZone].color, marginBottom: 8 }}>{zones[activeZone].title}</h3>
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>{zones[activeZone].subtitle}</p>
                  <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.8 }}>{zones[activeZone].desc}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: 220, height: 220, borderRadius: "50%", background: `${zones[activeZone].color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8rem", border: `3px dashed ${zones[activeZone].color}40` }}>
                    {zones[activeZone].icon}
                  </div>
                </div>
              </div>
            </div>
          </AnimSection>

        </div>
      </section>
      <AnimSection delay={300}>
        <div
          style={{
            marginTop: 40,
            background: "white",
            borderRadius: 28,
            padding: 20,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: "1.2rem",
                color: BLUE,
                marginBottom: 6,
              }}
            >
              🗺️ Sơ đồ bố cục sự kiện
            </div>

            <p
              style={{
                color: "#666",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              Không gian được thiết kế thân thiện cho mẹ và bé với các khu vực
              trải nghiệm, giáo dục và kết nối cộng đồng.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <Image
              src="/Bo-cuc.png"
              alt="Sơ đồ bố cục sự kiện"
              width={1400}
              height={900}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 20,
              }}
            />
          </div>
        </div>
      </AnimSection>
      {/* SCHEDULE */}
      <section style={{ background: `linear-gradient(135deg, #0f1f5c 0%, #1A3C8F 50%, #2d1b69 100%)`, padding: "80px 24px", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <div style={{ display: "inline-block", background: GOLD, color: "#1a1a1a", borderRadius: 30, padding: "6px 20px", fontSize: "0.8rem", fontWeight: 700, marginBottom: 16, letterSpacing: 1 }}>LỊCH TỔ CHỨC 2026</div>
              <h2 style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                12 Sự kiện trên <span style={{ color: GOLD }}>toàn quốc</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 10, fontSize: "0.95rem" }}>Từ Tháng 8 đến Tháng 12 năm 2026</p>
            </div>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="schedule-grid">
            {schedule.map((s, i) => (
              <AnimSection key={s.order} delay={i * 60}>
                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 18, padding: "18px 20px", border: "1px solid rgba(255,255,255,0.12)", display: "flex", gap: 14, alignItems: "center", backdropFilter: "blur(8px)" }}>
                  <div style={{ width: 42, height: 42, background: `${GOLD}25`, border: `2px solid ${GOLD}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "1rem", color: GOLD, flexShrink: 0 }}>{s.order}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "0.9rem", marginBottom: 2 }}>{s.city}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>{s.hospital}</div>
                    <div style={{ display: "inline-block", background: `${GOLD}25`, color: GOLD, borderRadius: 20, padding: "2px 10px", fontSize: "0.75rem", fontWeight: 700 }}>{s.month}</div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZERS */}
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <AnimSection>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "inline-block", background: "#f0f0f0", color: "#666", borderRadius: 30, padding: "6px 20px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Đơn vị tổ chức</div>
            </div>
            <h2 style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: BLUE, marginBottom: 40 }}>
              Cùng nhau vì <span style={{ color: PINK }}>1.000 ngày vàng</span> của bé
            </h2>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { name: "Z-moms", tagline: "Để con hơn tôi!", emoji: "💗", color: PINK, desc: "Cộng đồng hỗ trợ phụ nữ mang thai & nuôi con nhỏ tại Việt Nam với hơn hàng chục ngàn thành viên." },
              { name: "IPD8", tagline: "Phát triển trí tuệ sớm", emoji: "🧠", color: BLUE, desc: "Trung tâm chuyên về phát triển trí tuệ và giáo dục sớm cho trẻ, cung cấp chương trình khoa học cho phụ huynh." },
              { name: "Cộng Đồng Bầu", tagline: "Đồng hành cùng mẹ bầu", emoji: "🤰", color: "#7C3AED", desc: "Cộng đồng lớn nhất dành cho mẹ bầu tại Việt Nam, kết nối hàng triệu phụ nữ mang thai và sau sinh." },
            ].map(({ name, tagline, emoji, color, desc }) => (
              <AnimSection key={name}>
                <div style={{ background: `${color}08`, borderRadius: 24, padding: 32, border: `2px solid ${color}20`, height: "100%" }}>
                  <div style={{ fontSize: "3rem", marginBottom: 12 }}>{emoji}</div>
                  <div style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "1.4rem", color, marginBottom: 4 }}>{name}</div>
                  <div style={{ fontSize: "0.8rem", color: "#888", fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.5 }}>{tagline}</div>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.65 }}>{desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${PINK} 0%, #7C3AED 50%, ${BLUE} 100%)`, padding: "90px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 350, height: 350, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />

        <AnimSection>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "3.5rem", marginBottom: 16 }} className="float-anim">🌟</div>
            <h2 style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "white", marginBottom: 16, lineHeight: 1.2 }}>
              Mỗi em bé sinh ra đều là<br />
              <span style={{ color: GOLD }}>một thiên tài tiềm năng</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7 }}>
              1.000 ngày đầu đời là khoảng thời gian vàng để đánh thức tiềm năng ấy. Đừng bỏ lỡ cơ hội cùng con trải qua hành trình đặc biệt này.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://forms.gle/7GkDppQmdNpfP3TK9" target="_blank" style={{ background: "white", color: PINK, padding: "18px 44px", borderRadius: 50, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", transition: "transform 0.2s", display: "inline-block" }}
                onMouseEnter={e => e.target.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
                🎉 Đăng ký tham dự ngay
              </a>
              <a href="https://https://www.facebook.com/congdongbauzmoms/" target="_blank" style={{ background: "transparent", color: "white", padding: "16px 44px", borderRadius: 50, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none", border: "2px solid white", display: "inline-block", transition: "all 0.2s" }}
                onMouseEnter={e => { e.target.style.background = "white"; e.target.style.color = BLUE; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "white"; }}>
                Tìm hiểu thêm về Z-moms
              </a>
            </div>
          </div>
        </AnimSection>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0d1117",
          color: "rgba(255,255,255,0.6)",
          padding: "36px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          {qrUrl && (
            <div
              style={{
                background: "white",
                padding: 8,
                borderRadius: 16,
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              }}
            >
              <Image
                src={qrUrl}
                alt="QR đăng ký sự kiện"
                width={90}
                height={90}
                style={{
                  borderRadius: 10,
                }}
              />
            </div>
          )}

          <div
            style={{
              fontFamily: "'Baloo 2', cursive",
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "white",
            }}
          >
            Baby Intelligence Festival 2026
          </div>

          <div style={{ fontSize: "0.85rem" }}>
            Z-moms × IPD8 × Cộng Đồng Bầu
          </div>

          <div style={{ fontSize: "0.8rem" }}>
            Quét QR để đăng ký tham dự sự kiện
          </div>

          <div style={{ fontSize: "0.75rem" }}>
            © 2026 Z-moms. Để con hơn tôi!
          </div>
        </div>
      </footer>
    </main>
  );
}
