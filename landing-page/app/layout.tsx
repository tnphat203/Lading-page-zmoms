import type { Metadata } from "next";
import { Baloo_2, Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "./landing.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZMoms",
  description: "Sự kiện 1000 ngày vàng đầu đời",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${baloo.variable} ${beVietnamPro.variable}`}>
      <body className="min-h-full flex flex-col">
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1WPEJP8HLK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1WPEJP8HLK');
          `}
        </Script>
      </body>
    </html>
  );
}
