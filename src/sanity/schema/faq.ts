export const faq = {
  name: "faq_post",
  title: "常见问题",
  type: "document",
  fields: [
    { name: "title", title: "标题", type: "string" },
    {
      name: "slug",
      title: "链接标识",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "language",
      title: "语言",
      type: "string",
      options: { list: ["zh", "en"] },
    },
    {
      name: "mainImage",
      title: "主图",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "正文",
      type: "array",
      of: [
        { type: "block" }, // 允许普通文本块
        {
          type: "image", // 允许在正文中间插入图片
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "替代文本 (SEO)",
            },
          ],
        },
      ],
    },
    { name: "publishedAt", title: "发布时间", type: "datetime" },
  ],
};
