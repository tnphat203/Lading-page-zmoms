"use client";

import Image from "next/image";

export default function Zone3() {
  return (
    <section className="zone3">
      <div className="zone3-heading">
        <h2 className="zone-heading">Thử tận tay, chọn điều phù hợp cho con</h2>

        <p className="zone-description">
          Khám phá sản phẩm, trải nghiệm trực tiếp và nhận những món quà từ các
          thương hiệu đồng hành
        </p>
      </div>

      <div className="zone3-gallery">
        {/* ẢNH CHÍNH */}
        <div className="zone3-main-image">
          <Image
            src="/IMG/TRANG 4_KHU THƯƠNG HIỆU MẸ & BÉ/Be_100.jpeg"
            alt="Không gian trưng bày thương hiệu mẹ và bé"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 620px"
          />
        </div>

        {/* HAI ẢNH PHỤ */}
        <div className="zone3-side">
          <div className="zone3-side-image">
            <Image
              src="/IMG/TRANG 4_KHU THƯƠNG HIỆU MẸ & BÉ/Be_586.jpeg"
              alt="Mẹ và bé trải nghiệm sản phẩm"
              fill
              sizes="(max-width: 768px) 50vw, 320px"
            />
          </div>

          <div className="zone3-side-image">
            <Image
              src="/IMG/TRANG 4_KHU THƯƠNG HIỆU MẸ & BÉ/IMG_2135.JPeG"
              alt="Khách tham quan tại khu thương hiệu mẹ và bé"
              fill
              sizes="(max-width: 768px) 50vw, 320px"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .zone3 {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 12px;
          box-sizing: border-box;
        }

        /* HEADING */
        .zone3-heading {
          max-width: 780px;
          margin: 0 auto 22px;
          text-align: center;
        }

        .zone3-heading h2 {
          color: var(--zone-pink);
          text-align: center;
          text-transform: uppercase;
          margin: 0 0 5px;
        }

        .zone3-heading p {
          color: var(--zone-blue);
          text-align: center;
          margin: 0;
        }

        /* GALLERY */
        .zone3-gallery {
          display: grid;
          grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
          gap: 18px;
          align-items: stretch;
        }

        .zone3-main-image,
        .zone3-side-image {
          position: relative;
          width: 100%;
          min-width: 0;
          overflow: hidden;
          border-radius: 12px;
          background: #f5f5f5;
        }

        /* ẢNH CHÍNH */
        .zone3-main-image {
          aspect-ratio: 1.4 / 1;
        }

        /* ẢNH PHỤ */
        .zone3-side {
          display: grid;
          grid-template-rows: repeat(2, minmax(0, 1fr));
          gap: 14px;
          min-width: 0;
        }

        .zone3-side-image {
          min-height: 0;
        }

        .zone3-main-image :global(img),
        .zone3-side-image :global(img) {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .zone3-main-image:hover :global(img),
        .zone3-side-image:hover :global(img) {
          transform: scale(1.025);
        }

        /* TABLET */
        @media (max-width: 768px) {
          .zone3 {
            max-width: 680px;
          }

          .zone3-heading {
            margin-bottom: 16px;
          }

          .zone3-gallery {
            grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
            gap: 12px;
          }

          .zone3-main-image {
            aspect-ratio: 1.25 / 1;
          }

          .zone3-side {
            gap: 10px;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .zone3 {
            padding: 0 8px;
          }

          .zone3-heading {
            margin-bottom: 14px;
          }

          .zone3-gallery {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .zone3-main-image {
            aspect-ratio: 1.4 / 1;
          }

          .zone3-side {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: auto;
            gap: 10px;
          }

          .zone3-side-image {
            aspect-ratio: 1.2 / 1;
          }
        }
      `}</style>
    </section>
  );
}
