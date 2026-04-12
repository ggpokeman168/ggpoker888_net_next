"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const inviteUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

const TOURNAMENTS = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/tournament${i + 1}.jpg`,
  alt: `tournament-${i + 1}`,
}));

export default function TournamentSection() {
  const t = useTranslations("tournament");
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    containerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="tournament-section">
      <div className="tournament-header">
        <div className="trophy-icon">
          <Image
            src="/images/trophy.png"
            alt="trophy"
            width={152}
            height={154}
            className="tournament-icon"
          />
        </div>
        <h2 className="section-title">{t("title")}</h2>
      </div>

      <div className="tournament-carousel">
        <button className="carousel-btn prev" onClick={() => scroll(-1)}>
          ‹
        </button>
        <div
          className="carousel-container"
          ref={containerRef}
          onClick={() => (window.location.href = inviteUrl)}
          style={{ cursor: "pointer" }}
        >
          {TOURNAMENTS.map((item, i) => (
            <div key={i} className="tournament-card">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={200}
                className="tournament-image"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={() => scroll(1)}>
          ›
        </button>
      </div>
    </section>
  );
}
