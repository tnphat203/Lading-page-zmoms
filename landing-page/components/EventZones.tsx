"use client";

import Image from "next/image";
import { useState } from "react";

import AnimSection from "@/components/AnimSection";
import { zones, COLORS } from "@/data/eventData";

import Zone1 from "@/components/zones/Zone1";
import Zone2 from "@/components/zones/Zone2";
import Zone3 from "@/components/zones/Zone3";
import Zone4 from "@/components/zones/Zone4";
import Zone5 from "@/components/zones/Zone5";

const { BLUE, PINK } = COLORS;

const zoneComponents = [Zone1, Zone2, Zone3, Zone4, Zone5];

export default function EventZones() {
  const [activeZone, setActiveZone] = useState(0);

  const currentZone = zones[activeZone] ?? zones[0];
  const ActiveZone = zoneComponents[activeZone] ?? Zone1;

  if (!currentZone) return null;

  return (
    <section className="event-zones">
      <div className="event-zones__container">
        {/* SECTION HEADING */}
        <AnimSection>
          <div className="event-zones__heading">
            <div className="event-zones__badge">5 KHU VỰC TRẢI NGHIỆM</div>

            <h2>
              Sự kiện được thiết kế như <span>một lễ hội gia đình</span>
            </h2>
          </div>
        </AnimSection>

        {/* ZONE TABS */}
        <AnimSection delay={100}>
          <div className="zone-tabs">
            {zones.map((zone, index) => (
              <button
                key={zone.title}
                type="button"
                className={`zone-tab${activeZone === index ? " active" : ""}`}
                onClick={() => setActiveZone(index)}
                aria-pressed={activeZone === index}
                style={{
                  background:
                    activeZone === index ? zone.color : `${zone.color}15`,
                  color: activeZone === index ? "white" : zone.color,
                }}
              >
                {zone.icon} {zone.subtitle}
              </button>
            ))}
          </div>
        </AnimSection>

        {/* SHARED ZONE CONTENT FRAME */}
        <AnimSection delay={200}>
          <div className="zone-content">
            <div className="zone-content__inner" key={activeZone}>
              <ActiveZone />
            </div>
          </div>
        </AnimSection>

        {/* EVENT MAP */}
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
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>
          </div>
        </AnimSection>
      </div>

      <style jsx>{`
        /* MAIN SECTION */
        .event-zones {
          background: white;
          padding: 80px 24px;
        }

        .event-zones__container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* SECTION HEADING */
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

        /* ZONE TABS */
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
          flex-shrink: 0;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .zone-tab:hover {
          transform: translateY(-2px);
        }

        .zone-tab:focus-visible {
          outline: 3px solid ${BLUE};
          outline-offset: 3px;
        }

        /* SHARED CONTENT FRAME */
        .zone-content {
          width: 100%;
          min-width: 0;
          min-height: 540px;
          height: auto;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: visible;
        }

        .zone-content__inner {
          width: 100%;
          min-width: 0;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          animation: zoneFadeIn 0.35s ease;
        }

        @keyframes zoneFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* EVENT MAP */
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

        /* TABLET */
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

          .zone-content {
            min-height: 520px;
          }
        }

        /* MOBILE */
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

          .zone-content {
            min-height: 500px;
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

        /* VERY SMALL MOBILE */
        @media (max-width: 360px) {
          .event-zones {
            padding: 48px 12px;
          }

          .event-zones__heading h2 {
            font-size: 1.65rem;
          }

          .zone-content {
            min-height: 480px;
          }

          .map-card {
            padding: 12px;
          }
        }
      `}</style>
    </section>
  );
}
