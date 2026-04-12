"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const inviteUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: "brand", href: "#brand" },
    { key: "promo", href: "#promo" },
    { key: "download", href: "#download" },
    { key: "categories", href: "#categories" },
    { key: "tournaments", href: "#tournaments" },
    { key: "team", href: "#team" },
    { key: "vip", href: "#vip" },
    { key: "mall", href: "#mall" },
  ] as const;

  const switchLocale = () => {
    const next = locale === "zh" ? "en" : "zh";
    // Replace the locale prefix in pathname
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  };

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Logo */}
        <div className="logo-section">
          <Image
            src="/images/logo1.png"
            alt="GG扑克"
            width={161}
            height={54}
            className="logo-img"
            priority
          />
          <Image
            src="/images/logo2.png"
            alt="WSOP"
            width={100}
            height={54}
            className="logo-img"
          />
        </div>

        {/* Desktop nav */}
        <ul className={`nav-menu${menuOpen ? " active" : ""}`} id="navMenu">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = inviteUrl;
                }}
              >
                {t(item.key)}
              </a>
            </li>
          ))}
          {/* Language switch */}
          <li>
            <button
              onClick={switchLocale}
              style={{
                background: "none",
                border: "1px solid #d4af37",
                color: "#d4af37",
                padding: "4px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "13px",
                whiteSpace: "nowrap",
              }}
            >
              {locale === "zh" ? "EN" : "中文"}
            </button>
          </li>
        </ul>

        {/* Right image (desktop) */}
        <div className="nav-right">
          <Image
            src="/images/nav-right.jpg"
            alt="WSOP"
            width={338}
            height={60}
            className="wsop-badge"
          />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          aria-label="菜单"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
}
