"use client";

import Image from "next/image";

const images = [
  {
    src: "/IMG/TRANG 3_KHU TRẢI NGHIỆM GIÁC QUAN/Be_552.jpeg",
    alt: "Bé tham gia hoạt động trải nghiệm giác quan",
  },
  {
    src: "/IMG/TRANG 3_KHU TRẢI NGHIỆM GIÁC QUAN/Be_563.jpeg",
    alt: "Bé khám phá các hoạt động vận động",
  },
  {
    src: "/IMG/TRANG 3_KHU TRẢI NGHIỆM GIÁC QUAN/IMG_2691.png",
    alt: "Hoạt động trải nghiệm dành cho mẹ và bé",
  },
  {
    src: "/IMG/TRANG 3_KHU TRẢI NGHIỆM GIÁC QUAN/TQTL4051.jpeg",
    alt: "Bé tham gia trò chơi phát triển giác quan",
  },
];

export default function Zone2() {
  return (
    <section className="zone2">
      <div className="zone2__heading">
        <h2 className="zone-heading">
          Mỗi trải nghiệm nhỏ, một khám phá mới của con
        </h2>

        <p className="zone-description">
          Cùng bé khám phá màu sắc, âm thanh, chuyển động và những hoạt động phù
          hợp với lứa tuổi
        </p>
      </div>

      <div className="zone2__gallery">
        {images.map((image, index) => (
          <div className="zone2__image" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 2}
              sizes="(max-width: 480px) 50vw, (max-width: 768px) 45vw, 380px"
              style={{ objectPosition: "center" }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .zone2 {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          min-width: 0;
        }

        /* HEADING */
        .zone2__heading {
          text-align: center;
          margin-bottom: 16px;
          padding: 0 12px;
        }

        .zone2__heading h2 {
          color: var(--zone-pink);
          text-align: center;
          text-transform: uppercase;
          margin: 0 0 3px;
        }

        .zone2__heading p {
          color: var(--zone-blue);
          text-align: center;
          margin: 0;
        }

        /* IMAGE GALLERY */
        .zone2__gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 32px;
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
        }

        /* IMAGE FRAME */
        .zone2__image {
          position: relative;
          width: 100%;
          aspect-ratio: 1.5 / 1;
          min-width: 0;
          overflow: hidden;
          background: #f3f4f6;
          border-radius: 6px;
        }

        /* IMAGE STYLE */
        .zone2__image :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .zone2__image:hover :global(img) {
          transform: scale(1.025);
        }

        /* TABLET */
        @media (max-width: 900px) {
          .zone2__gallery {
            max-width: 680px;
            gap: 12px 24px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .zone2__heading {
            margin-bottom: 12px;
          }

          .zone2__gallery {
            max-width: 600px;
            gap: 10px 16px;
            padding: 0 8px;
          }

          .zone2__image {
            aspect-ratio: 1.3 / 1;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .zone2__gallery {
            gap: 8px 10px;
          }

          .zone2__image {
            aspect-ratio: 1.15 / 1;
          }
        }
      `}</style>
    </section>
  );
}
