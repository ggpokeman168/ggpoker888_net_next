import Image from "next/image";
import { useTranslations } from "next-intl";

const inviteUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;

export default function FloatingDownload() {
  const t = useTranslations("floating");

  return (
    <div className="app-download-floating">
      <div
        className="app-download-floating-logo"
        style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}
      >
        <Image
          src="/images/favicon.ico"
          alt="GGPoker"
          width={40}
          height={40}
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "14px",
              marginBottom: "2px",
              color: "#1e2329",
            }}
          >
            {t("title")}
          </div>
          <div style={{ fontSize: "11px", color: "#707a8a" }}>
            ★ ★ ★ ★ ★{" "}
            <span style={{ color: "#f0b90b", fontWeight: 600 }}>
              {t("desc")}
            </span>
          </div>
        </div>
      </div>

      <a
        href={inviteUrl}
        style={{
          borderRadius: "8px",
          padding: "8px 15px",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
          textDecoration: "none",
          display: "inline-block",
          whiteSpace: "nowrap",
          backgroundColor: "#d2232c",
          color: "#fff",
        }}
      >
        {t("cta")}
      </a>
    </div>
  );
}
