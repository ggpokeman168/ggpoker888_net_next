"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const inviteUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

export default function Footer() {
  const t = useTranslations("footer");
  const aboutLinks = t.raw("about_links") as string[];
  const helpLinks = t.raw("help_links") as string[];
  const gamesLinks = t.raw("games_links") as string[];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div
          className="footer-grid"
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = inviteUrl)}
        >
          <div className="footer-column">
            <Image
              src="/images/logo1.png"
              alt="GG扑克"
              width={120}
              height={50}
              className="footer-logo"
              style={{ height: "50px", width: "auto" }}
            />
            <p className="footer-description">{t("description")}</p>
          </div>

          <div className="footer-column">
            <h4>{t("about")}</h4>
            <ul>
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t("help")}</h4>
            <ul>
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>{t("games")}</h4>
            <ul>
              {gamesLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
