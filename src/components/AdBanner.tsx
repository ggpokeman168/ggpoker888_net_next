"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const inviteUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

export default function AdBanner() {
  const t = useTranslations("ad");

  return (
    <section className="ad-banner">
      <div
        className="ad-content"
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.href = inviteUrl)}
      >
        <Image
          src="/images/playpoker2.webp"
          alt="GG扑克广告"
          width={900}
          height={400}
          className="ad-image"
          style={{ width: "100%", height: "auto" }}
        />
        <h2 className="ad-title">{t("title")}</h2>
        <p className="ad-subtitle">{t("subtitle")}</p>
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
        <p className="ad-note">{t("note")}</p>
      </div>
    </section>
  );
}
