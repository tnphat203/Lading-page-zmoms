"use client";

import Image from "next/image";

export default function Zone1() {
  return (
    <section className="zone1">
      {/* HEADING */}
      <div className="zone1__heading">
        <h2 className="zone-heading">
          Lắng nghe hôm nay, vững vàng cùng con ngày mai
        </h2>

        <p className="zone-description">
          Talkshow với bác sĩ nhi khoa & chuyên gia giáo dục sớm. Chủ đề:
          <br className="desktop-break" />
          Phát triển trí thông minh của trẻ trong 1.000 ngày đầu đời.
        </p>
      </div>

      {/* IMAGE GALLERY */}
      <div className="zone1__gallery">
        {/* MAIN IMAGE */}
        <div className="zone1__main-image">
          <Image
            src="/IMG/TRANG 2_SÂN KHẤU TRI THỨC/Be_271.jpeg"
            alt="Toàn cảnh sân khấu chương trình"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 65vw"
          />
        </div>

        {/* RIGHT IMAGES */}
        <div className="zone1__side-images">
          <div className="zone1__side-image">
            <Image
              src="/IMG/TRANG 2_SÂN KHẤU TRI THỨC/Be_445.jpeg"
              alt="Chuyên gia chia sẻ tại sân khấu"
              fill
              sizes="(max-width: 768px) 50vw, 35vw"
            />
          </div>

          <div className="zone1__side-image">
            <Image
              src="/IMG/TRANG 2_SÂN KHẤU TRI THỨC/TQTL4159.jpeg"
              alt="Bác sĩ trình bày kiến thức tại chương trình"
              fill
              sizes="(max-width: 768px) 50vw, 35vw"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .zone1 {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          min-width: 0;
        }

        /* HEADING */
        .zone1__heading {
          text-align: center;
          margin-bottom: 22px;
          padding: 0 12px;
        }

        .zone1__heading h2 {
          color: #ec0a7d;
          text-align: center;
          margin: 0 0 5px;
        }

        .zone1__heading p {
          color: #173b8f;
          text-align: center;
          margin: 0;
        }

        /* IMAGE GALLERY */
        .zone1__gallery {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
          gap: 20px;
          align-items: stretch;
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
        }

        /* IMAGE CONTAINERS */
        .zone1__main-image,
        .zone1__side-image {
          position: relative;
          overflow: hidden;
          min-width: 0;
          min-height: 0;
          background: #f3f4f6;
          border-radius: 6px;
        }

        /* MAIN IMAGE */
        .zone1__main-image {
          aspect-ratio: 1.5 / 1;
        }

        /* RIGHT IMAGES */
        .zone1__side-images {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          grid-template-rows: repeat(2, minmax(0, 1fr));
          gap: 12px;
          min-width: 0;
          min-height: 0;
        }

        .zone1__side-image {
          width: 100%;
          height: 100%;
        }

        /* IMAGE STYLE */
        .zone1__main-image :global(img),
        .zone1__side-image :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        /* IMAGE HOVER */
        .zone1__main-image:hover :global(img),
        .zone1__side-image:hover :global(img) {
          transform: scale(1.025);
        }

        /* TABLET */
        @media (max-width: 900px) {
          .zone1__gallery {
            gap: 16px;
          }

          .zone1__side-images {
            gap: 10px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .zone1__heading {
            margin-bottom: 16px;
          }

          .zone1__gallery {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .zone1__main-image {
            aspect-ratio: 1.5 / 1;
          }

          .zone1__side-images {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: auto;
            gap: 10px;
          }

          .zone1__side-image {
            aspect-ratio: 1.3 / 1;
            height: auto;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .zone1__heading {
            margin-bottom: 14px;
          }

          .desktop-break {
            display: none;
          }

          .zone1__gallery {
            gap: 10px;
          }

          .zone1__side-images {
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
