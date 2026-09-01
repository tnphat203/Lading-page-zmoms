"use client";
import { useState, useEffect } from "react";

import QRCode from "qrcode";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Organizers from "@/components/Organizers";
import Schedule from "@/components/Schedule";
import EventZones from "@/components/EventZones";
import WhyAttend from "@/components/WhyAttend";
import Stats from "@/components/Stats";
export default function Home() {
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL("https://1000ngayvang.z-moms.com")
      .then(setQrUrl)
      .catch(console.error);
  }, []);
  return (
    <main
      style={{
        fontFamily: "'Nunito', 'Be Vietnam Pro', sans-serif",
        background: "#FAFAFA",
        color: "#1a1a1a",
        overflowX: "hidden",
        paddingTop: "84px",
      }}
    >
      <Navbar />
      <Hero />

      {/* STATS */}
      <Stats />

      {/* WHY */}
      <WhyAttend />
      <EventZones />

      <Schedule />
      <Organizers />

      <CTA />
      <Footer qrUrl={qrUrl} />
    </main>
  );
}
