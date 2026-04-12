import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "zh"], // 你支持的语言
  defaultLocale: "zh", // 默认语言
});

// 导出这些工具，以后在 Header 等组件里跳转时要用
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
