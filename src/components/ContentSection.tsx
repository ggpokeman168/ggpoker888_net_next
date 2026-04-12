"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CARDS = [
  "/images/banner11.jpg",
  "/images/banner22.jpg",
  "/images/banner33.jpg",
  "/images/banner44.jpg",
  "/images/banner55.jpg",
  "/images/banner66.jpg",
];

const inviteUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

const hostSite =
  process.env.NEXT_PUBLIC_GGHOME_URL ||
  process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

export default function ContentSection() {
  const t = useTranslations("content");
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [t("tab1"), t("tab2"), t("tab3")];

  return (
    <section className="content-section">
      <div className="section-tabs">
        {tabs.map((tab, i) => (
          <Fragment key={tab}>
            {i > 0 && <span style={{ color: "#ccc" }}>/</span>}
            <a
              href="#"
              className={activeTab === i ? "tab active" : "tab"}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(i);
              }}
            >
              {tab}
            </a>
          </Fragment>
        ))}
      </div>
      <div
        className="cards-grid"
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.href = hostSite;
        }}
      >
        {CARDS.map((src, i) => (
          <div key={i} className="card">
            <Image
              src={src}
              alt={`card-${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
