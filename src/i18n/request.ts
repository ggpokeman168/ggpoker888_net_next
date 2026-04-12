// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // 路径修正：从 src/i18n 跳到 src，再进入 messages
  const messages = {
    zh: (await import("../messages/zh.json")).default,
    en: (await import("../messages/en.json")).default,
  };

  return {
    locale,
    messages: messages[locale as keyof typeof messages],
  };
});
