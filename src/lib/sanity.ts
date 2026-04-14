// src/lib/sanity.ts
import { createClient } from "next-sanity";

import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-04-03", // 使用今天的日期
  useCdn: true, // 开启 CDN 缓存，提高前台加载速度
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
