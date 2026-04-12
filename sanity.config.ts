// src/sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "default",
  title: "GGPoker Blog Admin",
  // 注意：在执行 sanity deploy 时，CLI 可能读取不到 .env.local
  // 如果报错，可以暂时硬编码 ID 进行部署，或者确保目录下有 sanity.cli.ts
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "04d43xwy",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  // 删掉 basePath: "/admin", 因为官方托管环境不需要这个路径映射

  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
