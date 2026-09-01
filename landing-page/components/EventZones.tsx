"use client";

import Image from "next/image";
import { useState } from "react";

import AnimSection from "@/components/AnimSection";
import { zones, COLORS } from "@/data/eventData";

const { BLUE, PINK } = COLORS;

export default function EventZones() {
  const [activeZone, setActiveZone] = useState(0);
  const currentZone = zones[activeZone];

  return (
    <section className="event-zones">
      <div className="event-zones__container">
        <AnimSection>
          <div className="event-zones__heading">
            <div className="event-zones__badge">5 KHU VỰC TRẢI NGHIỆM</div>

            <h2>
              Sự kiện được thiết kế như <span>một lễ hội gia đình</span>
            </h2>
          </div>
        </AnimSection>

        <AnimSection delay={100}>
          <div className="zone-tabs">
            {zones.map((z, i) => (
              <button
                key={z.title}
                className={`zone-tab${activeZone === i ? " active" : ""}`}
                onClick={() => setActiveZone(i)}
                style={{
                  background: activeZone === i ? z.color : `${z.color}15`,
                  color: activeZone === i ? "white" : z.color,
                }}
              >
                {z.icon} {z.subtitle}
              </button>
            ))}
          </div>
        </AnimSection>

        <AnimSection delay={200}>
          <div
            className="zone-detail"
            style={{
              background: currentZone.bg,
              borderColor: `${currentZone.color}25`,
            }}
          >
            <div className="zone-detail__content">
              <div className="zone-info">
                <div className="zone-info__icon">{currentZone.icon}</div>

                <h3 style={{ color: currentZone.color }}>
                  {currentZone.title}
                </h3>

                <p className="zone-subtitle">{currentZone.subtitle}</p>

                <p className="zone-desc">{currentZone.desc}</p>
              </div>

              <div className="zone-visual">
                <div
                  className="zone-visual__circle"
                  style={{
                    background: `${currentZone.color}15`,
                    borderColor: `${currentZone.color}40`,
                  }}
                >
                  {currentZone.icon}
                </div>
              </div>
            </div>
          </div>
        </AnimSection>

        <AnimSection delay={300}>
          <div className="map-card">
            <div className="map-heading">
              <div className="map-title">🗺️ Sơ đồ bố cục sự kiện</div>

              <p>
                Không gian được thiết kế thân thiện cho mẹ và bé với các khu vực
                trải nghiệm, giáo dục và kết nối cộng đồng.
              </p>
            </div>

            <div className="map-image">
              <Image
                src="/Bo-cuc.png"
                alt="Sơ đồ bố cục sự kiện"
                width={1400}
                height={900}
                priority={false}
              />
            </div>
          </div>
        </AnimSection>
      </div>

      <style jsx>{`
        .event-zones {
          background: white;
          padding: 80px 24px;
        }

        .event-zones__container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .event-zones__heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .event-zones__badge {
          display: inline-block;
          background: ${PINK};
          color: white;
          border-radius: 30px;
          padding: 6px 20px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: 1px;
        }

        .event-zones__heading h2 {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          line-height: 1.25;
          color: ${BLUE};
          margin: 0;
        }

        .event-zones__heading h2 span {
          color: ${PINK};
        }

        .zone-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .zone-tab {
          border: none;
          border-radius: 50px;
          padding: 11px 18px;
          font-family: inherit;
          font-size: 0.85rem;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .zone-tab:hover {
          transform: translateY(-2px);
        }

        .zone-detail {
          border-radius: 28px;
          padding: 48px;
          border: 2px solid;
          transition: background 0.3s ease;
        }

        .zone-detail__content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 40px;
          align-items: center;
        }

        .zone-info {
          min-width: 0;
        }

        .zone-info__icon {
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 16px;
        }

        .zone-info h3 {
          font-family: "Baloo 2", cursive;
          font-weight: 800;
          font-size: 1.8rem;
          line-height: 1.25;
          margin: 0 0 8px;
        }

        .zone-subtitle {
          font-size: 0.85rem;
          font-weight: 700;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.4;
          margin: 0 0 16px;
        }

        .zone-desc {
          font-size: 1rem;
          color: #555;
          line-height: 1.8;
          margin: 0;
        }

        .zone-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .zone-visual__circle {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
          border: 3px dashed;
          box-sizing: border-box;
        }

        .map-card {
          margin-top: 40px;
          background: white;
          border-radius: 28px;
          padding: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .map-heading {
          text-align: center;
          margin-bottom: 18px;
        }

        .map-title {
          font-weight: 800;
          font-size: 1.2rem;
          color: ${BLUE};
          margin-bottom: 6px;
        }

        .map-heading p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 auto;
          max-width: 800px;
        }

        .map-image {
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
        }

        .map-image :global(img) {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        @media (max-width: 800px) {
          .event-zones__heading {
            margin-bottom: 32px;
          }

          .zone-tabs {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 2px 2px 10px;
            margin-bottom: 20px;
            scrollbar-width: none;
          }

          .zone-tabs::-webkit-scrollbar {
            display: none;
          }

          .zone-tab {
            flex-shrink: 0;
          }

          .zone-detail {
            padding: 32px 24px;
          }

          .zone-detail__content {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .zone-info {
            text-align: center;
          }

          .zone-visual {
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .event-zones {
            padding: 52px 16px;
          }

          .event-zones__heading {
            margin-bottom: 28px;
          }

          .event-zones__badge {
            font-size: 0.7rem;
            padding: 6px 16px;
            margin-bottom: 12px;
          }

          .event-zones__heading h2 {
            font-size: 1.8rem;
            line-height: 1.25;
          }

          .zone-tabs {
            gap: 8px;
            margin-left: -4px;
            margin-right: -4px;
          }

          .zone-tab {
            padding: 10px 15px;
            font-size: 0.78rem;
          }

          .zone-detail {
            border-radius: 22px;
            padding: 24px 18px;
          }

          .zone-detail__content {
            gap: 22px;
          }

          .zone-visual__circle {
            width: 150px;
            height: 150px;
            font-size: 5.2rem;
            border-width: 2px;
          }

          .zone-info__icon {
            display: none;
          }

          .zone-info h3 {
            font-size: 1.5rem;
            line-height: 1.3;
            margin-bottom: 6px;
          }

          .zone-subtitle {
            font-size: 0.72rem;
            letter-spacing: 0.7px;
            margin-bottom: 12px;
          }

          .zone-desc {
            font-size: 0.9rem;
            line-height: 1.65;
          }

          .map-card {
            margin-top: 24px;
            border-radius: 22px;
            padding: 14px;
          }

          .map-heading {
            margin-bottom: 14px;
          }

          .map-title {
            font-size: 1rem;
            margin-bottom: 6px;
          }

          .map-heading p {
            font-size: 0.82rem;
            line-height: 1.55;
          }

          .map-image {
            border-radius: 14px;
          }

          .map-image :global(img) {
            border-radius: 14px;
          }
        }

        @media (max-width: 360px) {
          .event-zones {
            padding: 48px 12px;
          }

          .event-zones__heading h2 {
            font-size: 1.65rem;
          }

          .zone-detail {
            padding: 20px 16px;
          }

          .zone-visual__circle {
            width: 135px;
            height: 135px;
            font-size: 4.6rem;
          }

          .zone-info h3 {
            font-size: 1.4rem;
          }

          .zone-desc {
            font-size: 0.85rem;
          }

          .map-card {
            padding: 12px;
          }
        }
      `}</style>
    </section>
  );
}
