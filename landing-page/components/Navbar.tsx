"use client";

import Image from "next/image";

type NavbarProps = {
  blue: string;
};

export default function Navbar({ blue }: NavbarProps) {
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
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <div className="logos">
            <div className="logo-wrap logo-wrap--zmoms">
              <Image
                src="/logo.png"
                alt="Z-moms Logo"
                width={48}
                height={48}
                priority
              />
            </div>

            <div className="logo-divider">×</div>

            <div className="logo-wrap logo-wrap--ipd8">
              <Image
                src="/ipd8.png"
                alt="IPD8 Logo"
                width={48}
                height={48}
                priority
              />
            </div>
          </div>

          <div className="brand-text">
            <div className="brand-title" style={{ color: blue }}>
              Z-moms × IPD8
            </div>

            <div className="brand-subtitle">Baby Intelligence Festival</div>
          </div>
        </div>

        <div className="navbar-actions">
          <a
            href="https://www.facebook.com/congdongbauzmoms/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline navbar-btn navbar-btn--outline"
          >
            Về Z-moms
          </a>

          <button
            onClick={handleRegister}
            className="btn-pink navbar-btn navbar-btn--primary"
          >
            Đăng ký
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(23, 59, 143, 0.1);
          box-sizing: border-box;
        }

        .navbar-inner {
          width: 100%;
          max-width: 1200px;
          min-height: 76px;
          margin: 0 auto;
          padding: 10px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          box-sizing: border-box;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .logos {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .logo-wrap {
          width: 52px;
          height: 52px;
          background: white;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          overflow: hidden;
        }

        .logo-wrap--zmoms {
          border: 1px solid rgba(233, 30, 140, 0.12);
          box-shadow: 0 4px 14px rgba(233, 30, 140, 0.1);
        }

        .logo-wrap--ipd8 {
          border: 1px solid rgba(23, 59, 143, 0.12);
          box-shadow: 0 4px 14px rgba(23, 59, 143, 0.1);
        }

        .logo-wrap :global(img) {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 5px;
          box-sizing: border-box;
        }

        .logo-divider {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #f5f6fa;
          color: #999;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 800;
          flex-shrink: 0;
        }

        .brand-text {
          min-width: 0;
        }

        .brand-title {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: 1rem;
          line-height: 1.1;
          white-space: nowrap;
        }

        .brand-subtitle {
          margin-top: 4px;
          font-size: 0.62rem;
          color: #888;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .navbar-btn {
          padding: 8px 20px;
          font-size: 0.85rem;
          box-sizing: border-box;
        }

        .navbar-btn--primary {
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        @media (max-width: 800px) {
          .navbar-inner {
            min-height: 68px;
            padding: 8px 16px;
            gap: 12px;
          }

          .logo-wrap {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }

          .logos {
            gap: 6px;
          }

          .logo-divider {
            width: 18px;
            height: 18px;
            font-size: 0.7rem;
          }

          .brand-text {
            display: none;
          }

          .navbar-actions {
            gap: 8px;
          }

          .navbar-btn {
            padding: 8px 15px;
            font-size: 0.78rem;
          }
        }

        @media (max-width: 480px) {
          .navbar-inner {
            padding: 7px 12px;
            min-height: 62px;
          }

          .logo-wrap {
            width: 40px;
            height: 40px;
            border-radius: 11px;
          }

          .logo-wrap :global(img) {
            padding: 4px;
          }

          .logos {
            gap: 5px;
          }

          .logo-divider {
            width: 16px;
            height: 16px;
            font-size: 0.65rem;
          }

          .navbar-actions {
            gap: 6px;
          }

          .navbar-btn {
            padding: 8px 12px;
            font-size: 0.72rem;
            min-height: 38px;
          }

          .navbar-btn--outline {
            display: none;
          }
        }

        @media (max-width: 360px) {
          .navbar-inner {
            padding-left: 10px;
            padding-right: 10px;
          }

          .logo-wrap {
            width: 37px;
            height: 37px;
          }

          .logo-divider {
            width: 14px;
            height: 14px;
            font-size: 0.6rem;
          }

          .navbar-btn {
            padding: 7px 11px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </nav>
  );
}
