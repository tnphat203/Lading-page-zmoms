"use client";

import Image from "next/image";

export default function Zone4() {
  return (
    <section className="zone4">
      <div className="zone4-layout">
        {/* CỘT TRÁI: NỘI DUNG + ẢNH CÂY ĐIỀU ƯỚC */}
        <div className="zone4-left">
          <div className="zone4-heading">
            <h2 className="zone-heading">
              MỘT ĐIỀU ƯỚC NHỎ, GỬI CẢ YÊU THƯƠNG CHO CON
            </h2>

            <p className="zone-description">
              Nơi ba mẹ viết xuống những mong ước và lưu giữ một khoảnh khắc đầy
              ý nghĩa
            </p>
          </div>

          <div className="zone4-main-image">
            <Image
              src="/IMG/TRANG 5_CÂY ĐIỀU ƯỚC/t5.1.jpeg"
              alt="Cây điều ước tại sự kiện"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 440px"
            />
          </div>
        </div>

        {/* CỘT GIỮA: HAI ẢNH ĐIỀU ƯỚC */}
        <div className="zone4-middle">
          <div className="zone4-middle-image zone4-middle-top">
            <Image
              src="/IMG/TRANG 5_CÂY ĐIỀU ƯỚC/t5.2.jpeg"
              alt="Những lời chúc dành cho bé"
              fill
              sizes="(max-width: 768px) 50vw, 160px"
            />
          </div>

          <div className="zone4-middle-image zone4-middle-bottom">
            <Image
              src="/IMG/TRANG 5_CÂY ĐIỀU ƯỚC/t5.3.png"
              alt="Những điều ước được gửi gắm tại sự kiện"
              fill
              sizes="(max-width: 768px) 50vw, 160px"
            />
          </div>
        </div>

        {/* CỘT PHẢI: ẢNH ĐỨNG */}
        <div className="zone4-right">
          <div className="zone4-poster">
            <Image
              src="/IMG/TRANG 5_CÂY ĐIỀU ƯỚC/t5.4.png"
              alt="Thông điệp ngày hôm nay con đang ở ngày thứ mấy"
              fill
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .zone4 {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 10px;
          box-sizing: border-box;
        }

        .zone4-layout {
          display: grid;
          grid-template-columns:
            minmax(0, 1.6fr)
            minmax(0, 0.48fr)
            minmax(0, 1fr);
          gap: 16px;
          align-items: stretch;
        }

        .zone4-left,
        .zone4-middle,
        .zone4-right {
          min-width: 0;
          min-height: 0;
        }

        /* CỘT TRÁI */
        .zone4-left {
          display: flex;
          flex-direction: column;
        }

        .zone4-heading {
          margin-bottom: 12px;
          text-align: center;
          flex-shrink: 0;
        }

        .zone4-heading h2 {
          color: var(--zone-pink);
          margin: 0 0 2px;
        }

        .zone4-heading p {
          color: var(--zone-blue);
          margin: 0;
        }

        /* ẢNH */
        .zone4-main-image,
        .zone4-middle-image,
        .zone4-poster {
          position: relative;
          width: 100%;
          min-height: 0;
          overflow: hidden;
          background: #f5f5f5;
          border-radius: 8px;
        }

        /* ẢNH LỚN BÊN TRÁI */
        .zone4-main-image {
          flex: 1;
          min-height: 220px;
        }

        /* HAI ẢNH Ở GIỮA */
        .zone4-middle {
          display: grid;
          grid-template-rows: repeat(2, minmax(0, 1fr));
          gap: 10px;
          padding-top: 16px;
          box-sizing: border-box;
        }

        .zone4-middle-image {
          height: 100%;
        }

        /* ẢNH ĐỨNG BÊN PHẢI */
        .zone4-right {
          display: flex;
          align-items: stretch;
        }

        .zone4-poster {
          aspect-ratio: 0.75 / 1;
        }

        .zone4-main-image :global(img),
        .zone4-middle-image :global(img),
        .zone4-poster :global(img) {
          object-fit: cover;
        }

        /* TABLET */
        @media (max-width: 768px) {
          .zone4 {
            max-width: 680px;
          }

          .zone4-layout {
            grid-template-columns:
              minmax(0, 1.45fr)
              minmax(0, 0.55fr)
              minmax(0, 0.9fr);
            gap: 10px;
          }

          .zone4-middle {
            padding-top: 14px;
            gap: 8px;
          }

          .zone4-main-image {
            min-height: 190px;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .zone4 {
            padding: 0 8px;
          }

          .zone4-layout {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .zone4-heading {
            margin-bottom: 10px;
          }

          .zone4-main-image {
            flex: none;
            min-height: 0;
            aspect-ratio: 1.5 / 1;
          }

          .zone4-middle {
            width: 100%;
            padding-top: 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: auto;
            gap: 8px;
          }

          .zone4-middle-image {
            aspect-ratio: 0.9 / 1;
          }

          .zone4-right {
            width: 100%;
          }

          .zone4-poster {
            max-width: 300px;
            margin: 0 auto;
            aspect-ratio: 0.75 / 1;
          }
        }
      `}</style>
    </section>
  );
}
