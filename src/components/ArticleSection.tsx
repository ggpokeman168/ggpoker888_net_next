"use client";

import { useTranslations } from "next-intl";

const inviteUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

export default function ArticleSection() {
  const t = useTranslations("article");
  const tags = t.raw("tags") as string[];

  return (
    <section className="article-section">
      <div className="article-container">
        <h1 className="article-title">{t("title")}</h1>

        <div className="article-meta">
          <span>📅 {t("date")}</span>
          <span>✍️ {t("author")}</span>
        </div>

        <div className="article-content">
          <p>{t("p1")}</p>
          <h2>{t("h2_1")}</h2>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <h2>{t("h2_2")}</h2>
          <p>{t("p4")}</p>
          <p>{t("p5")}</p>
        </div>

        <div
          className="article-tags"
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = inviteUrl)}
        >
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
