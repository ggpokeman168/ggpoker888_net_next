import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // 匹配所有路径，除了 api, _next 和 静态资源
  matcher: ["/", "/(zh|en)/:path*"],
};
