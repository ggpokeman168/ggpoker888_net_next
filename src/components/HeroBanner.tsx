"use client";

import { useTranslations } from "next-intl";

const DESKTOP_BANNERS = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
  "/images/banner1.jpg",
];

const MOBILE_BANNERS = [
  "/images/banner10.jpg",
  "/images/banner20.jpg",
  "/images/banner30.jpg",
  "/images/banner40.jpg",
  "/images/banner50.jpg",
];

const inviteUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

const hostSite =
  process.env.NEXT_PUBLIC_GGHOME_URL ||
  process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

export default function HeroBanner() {
  const t = useTranslations("hero");

  return (
    <section className="hero-banner">
      {/* Desktop banner track */}
      <div
        className="banner-track"
        onClick={() => {
          window.location.href = hostSite;
        }}
        style={{ cursor: "pointer" }}
      >
        {DESKTOP_BANNERS.map((src, i) => (
          <div key={i} className="slide">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`banner-${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Mobile banner track */}
      <div
        className="banner-track-mobile"
        onClick={() => {
          window.location.href = inviteUrl;
        }}
        style={{ cursor: "pointer" }}
      >
        {MOBILE_BANNERS.map((src, i) => (
          <div key={i} className="slide">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`mobile-banner-${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Hero overlay */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="app-logo-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo3.png"
              alt="GG扑克 App Logo"
              className="app-logo"
            />
          </div>
          <h2 className="hero-title">{t("title")}</h2>
          <p className="hero-subtitle" style={{ whiteSpace: "pre-line" }}>
            {t("subtitle")}
          </p>

          <a
            href={inviteUrl}
            className="cta-button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
