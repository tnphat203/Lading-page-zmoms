"use client";

import Image from "next/image";

const images = [
  {
    src: "/IMG/TRANG 6_KHU TRÒ CHƠI GIA ĐÌNH/Be_388.jpeg",
    alt: "Gia đình tham gia hoạt động tại sự kiện",
  },
  {
    src: "/IMG/TRANG 6_KHU TRÒ CHƠI GIA ĐÌNH/TQTL4322.jpeg",
    alt: "Ba mẹ cùng tham gia trò chơi",
  },
  {
    src: "/IMG/TRANG 6_KHU TRÒ CHƠI GIA ĐÌNH/Be_700.jpeg",
    alt: "Khoảnh khắc vui chơi và tương tác tại sự kiện",
  },
  {
    src: "/IMG/TRANG 6_KHU TRÒ CHƠI GIA ĐÌNH/TQTL4398.jpeg",
    alt: "Gia đình tham gia hoạt động trên sân khấu",
  },
];

export default function Zone5() {
  return (
    <section className="zone5">
      <div className="zone5-heading">
        <h2 className="zone-heading">CẢ NHÀ CÙNG CHƠI, NIỀM VUI NHÂN ĐÔI</h2>

        <p className="zone-description">
          Không chỉ là những trò chơi vui nhộn, đây còn là dịp để ba mẹ cùng
          tham gia, phối hợp và kết nối với con qua những thử thách thú vị. Mỗi
          tiếng cười, mỗi khoảnh khắc đồng hành đều trở thành một kỷ niệm đẹp,
          cùng với niềm vui nhận những phần quà từ Ngày hội.
        </p>
      </div>

      <div className="zone5-gallery">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`zone5-image zone5-image--${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 2}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 420px"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .zone5 {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 12px;
          box-sizing: border-box;
        }

        .zone5-heading {
          max-width: 780px;
          margin: 0 auto 18px;
          text-align: center;
        }

        .zone5-heading h2 {
          margin: 0 0 8px;
          color: #ec008c;
        }

        .zone5-heading p {
          max-width: 740px;
          margin: 0 auto;
          color: #244a9a;
        }

        .zone5-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          width: 100%;
        }

        .zone5-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1.55 / 1;
          overflow: hidden;
          border-radius: 10px;
          background: #f5f5f5;
        }

        .zone5-image :global(img) {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .zone5-image:hover :global(img) {
          transform: scale(1.025);
        }

        /* TABLET */
        @media (max-width: 768px) {
          .zone5 {
            max-width: 680px;
          }

          .zone5-heading {
            margin-bottom: 14px;
          }

          .zone5-gallery {
            gap: 10px;
          }

          .zone5-image {
            aspect-ratio: 1.35 / 1;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .zone5 {
            padding: 0 8px;
          }

          .zone5-heading {
            margin-bottom: 12px;
          }

          .zone5-heading p {
            text-align: left;
          }

          .zone5-gallery {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .zone5-image {
            aspect-ratio: 1.5 / 1;
          }
        }
      `}</style>
    </section>
  );
}
