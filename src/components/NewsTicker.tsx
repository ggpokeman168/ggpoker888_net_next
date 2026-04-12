"use client";

import { useTranslations } from "next-intl";

const inviteUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

export default function NewsTicker() {
  const t = useTranslations("news");

  return (
    <div className="news-ticker">
      <span
        className="news-label"
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.href = inviteUrl)}
      >
        {t("label")}
      </span>
      <div className="news-content">
        <div className="news-text">{t("text")}</div>
      </div>
    </div>
  );
}
