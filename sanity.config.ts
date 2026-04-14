// src/sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "default",
  title: "GGPoker Blog Admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "chqcoges",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("内容分类管理")
          .id("root")
          .items([
            S.listItem()
              .id("news_post")
              .title("新闻资讯")
              .child(
                S.documentList()
                  .id("news_post_list")
                  .title("新闻资讯")
                  .filter('_type == "news_post"')
              ),
            S.listItem()
              .id("faq_post")
              .title("常见问题")
              .child(
                S.documentList()
                  .id("faq_post_list")
                  .title("常见问题")
                  .filter('_type == "faq_post"')
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
