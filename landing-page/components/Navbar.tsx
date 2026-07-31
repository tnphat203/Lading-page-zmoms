"use client";

import Image from "next/image";

type NavbarProps = {
  blue: string;
};

export default function Navbar({ blue }: NavbarProps) {
  const handleRegister = () => {
    const section = document.getElementById("schedule");

    if (!section) return;

    const y = section.getBoundingClientRect().top + window.pageYOffset - 90; // trừ chiều cao navbar

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
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
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 16,
            background: "linear-gradient(135deg, #E91E8C, #7C3AED)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(233,30,140,.25)",
            padding: 6,
          }}
        >
          <Image
            src="/logo.png"
            alt="Z-moms Logo"
            width={38}
            height={38}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div>
          <div
            style={{
              fontFamily: "'Baloo 2', cursive",
              fontWeight: 800,
              color: blue,
              fontSize: "1rem",
              lineHeight: 1,
            }}
          >
            Z-moms × IPD8
          </div>

          <div
            style={{
              fontSize: "0.65rem",
              color: "#888",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Baby Intelligence Festival
          </div>
        </div>
      </div>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <a
          href="https://www.facebook.com/congdongbauzmoms/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{
            padding: "8px 20px",
            fontSize: "0.85rem",
          }}
        >
          Về Z-moms
        </a>

        <button
          onClick={handleRegister}
          className="btn-pink"
          style={{
            padding: "8px 20px",
            fontSize: "0.85rem",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Đăng ký
        </button>
      </div>
    </nav>
  );
}
