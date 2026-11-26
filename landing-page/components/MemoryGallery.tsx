"use client";

import Image from "next/image";

const memories = [
  {
    src: "/IMG/TRANG 7_BỔ SUNG THÊM/Be_327.jpeg",
    alt: "Khoảnh khắc niềm vui của mẹ tại ngày hội",
    caption: "Niềm vui của mẹ",
  },
  {
    src: "/IMG/TRANG 7_BỔ SUNG THÊM/Be_602.jpeg",
    alt: "Khoảnh khắc đáng nhớ của cả gia đình",
    caption: "Kỷ niệm của cả nhà",
  },
  {
    src: "/IMG/TRANG 7_BỔ SUNG THÊM/TQTL4149.jpeg",
    alt: "Khoảnh khắc xúc động của khách tham dự",
    caption: "Một ánh mắt xúc động",
  },
  {
    src: "/IMG/TRANG 7_BỔ SUNG THÊM/TQTL4216.jpeg",
    alt: "Gia đình cùng đồng hành tại ngày hội",
    caption: "Sự đồng hành của ba",
  },
];

export default function MemoryGallery() {
  return (
    <section className="memory-gallery">
      <div className="memory-heading">
        <p className="memory-eyebrow">NHỮNG KHOẢNH KHẮC ĐÁNG NHỚ</p>

        <h2 className="zone-heading">
          CÓ NHỮNG CẢM XÚC CHẲNG CẦN NÓI THÀNH LỜI
        </h2>

        <p className="zone-description">
          Một nụ cười. Một ánh mắt xúc động. Một điều ước dành cho con. Tất cả
          tạo nên những kỷ niệm đẹp của Ngày hội
        </p>
      </div>

      <div className="memory-grid">
        {memories.map((memory, index) => (
          <div className="memory-item" key={memory.src}>
            <div className="memory-image">
              <Image
                src={memory.src}
                alt={memory.alt}
                fill
                priority={index < 2}
                sizes="(max-width: 480px) 46vw, (max-width: 768px) 44vw, 430px"
              />
            </div>

            <p className="memory-caption">{memory.caption}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .memory-gallery {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 20px 40px;
          box-sizing: border-box;
        }

        /* HEADING */
        .memory-heading {
          max-width: 900px;
          margin: 0 auto 18px;
          text-align: center;
        }

        .memory-eyebrow {
          margin: 0 0 10px;
          color: var(--zone-blue);
          font-family: var(--zone-font-body);
          font-size: 22px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.2px;
        }

        .memory-heading h2 {
          color: var(--zone-pink);
          margin: 0 0 8px;
          text-align: center;
        }

        .memory-heading .zone-description {
          color: var(--zone-blue);
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
        }

        /* GALLERY */
        .memory-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 40px;
          row-gap: 20px;
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
        }

        .memory-item {
          min-width: 0;
          text-align: center;
        }

        /* IMAGE */
        .memory-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1.48 / 1;
          overflow: hidden;
          background: #f5f5f5;
          border-radius: 6px;
        }

        .memory-image :global(img) {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .memory-item:hover .memory-image :global(img) {
          transform: scale(1.025);
        }

        /* CAPTION */
        .memory-caption {
          margin: 5px 0 0;
          color: var(--zone-blue);
          font-family: var(--zone-font-heading);
          font-size: 21px;
          font-weight: 600;
          line-height: 1.35;
          text-align: center;
        }

        /* TABLET */
        @media (max-width: 768px) {
          .memory-gallery {
            padding: 24px 16px 30px;
          }

          .memory-eyebrow {
            font-size: 19px;
          }

          .memory-grid {
            max-width: 680px;
            column-gap: 24px;
            row-gap: 16px;
          }

          .memory-caption {
            font-size: 18px;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .memory-gallery {
            padding: 20px 10px 24px;
          }

          .memory-heading {
            margin-bottom: 16px;
          }

          .memory-eyebrow {
            font-size: 15px;
            margin-bottom: 8px;
          }

          .memory-heading h2 {
            text-align: center;
          }

          .memory-grid {
            column-gap: 10px;
            row-gap: 14px;
          }

          .memory-image {
            aspect-ratio: 1.2 / 1;
          }

          .memory-caption {
            margin-top: 4px;
            font-size: 15px;
            line-height: 1.35;
          }
        }
      `}</style>
    </section>
  );
}
