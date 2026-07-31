import Image from "next/image";

type FooterProps = {
  qrUrl?: string;
};

export default function Footer({ qrUrl }: FooterProps) {
  return (
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

        <div style={{ fontSize: "0.85rem" }}>Z-moms × IPD8 × Cộng Đồng Bầu</div>

        <div style={{ fontSize: "0.8rem" }}>
          Quét QR để đăng ký tham dự sự kiện
        </div>

        <div style={{ fontSize: "0.75rem" }}>
          © 2026 Z-moms. Để con hơn tôi!
        </div>
      </div>
    </footer>
  );
}
