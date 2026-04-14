import { client, urlFor } from "@/lib/sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

// 1. 定义 Sanity 图片的类型接口，替代 any
interface SanityImageValue {
  value: {
    asset?: {
      _ref: string;
    };
    alt?: string;
  };
}

// 2. 使用定义的接口修复 ptComponents
const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }: SanityImageValue) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-10">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || "blog image"}
            width={1200}
            height={700}
            className="rounded-xl border border-border shadow-lg"
          />
        </div>
      );
    },
  },
};

// 3. 定义文章数据结构 (根据你的 Sanity Schema)
interface PostData {
  title: string;
  body: any[]; // PortableText 的 body 通常是数组
  [key: string]: any;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  // Next.js 15 中 params 是一个 Promise，必须先 await
  const { slug, locale } = await params;

  // 获取数据
  const post: PostData | null = await client.fetch(
    `*[_type == "news_post" && slug.current == $slug && language == $locale][0]`,
    { slug, locale }
  );

  if (!post) {
    return (
      <div className="container py-20 text-center font-medium">
        {locale === "zh" ? "文章不存在" : "Post not found"}
      </div>
    );
  }

  return (
    <article className="container py-12 max-w-4xl mx-auto px-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary leading-tight">
          {post.title}
        </h1>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none leading-relaxed">
        {/* 使用前面定义的组件渲染富文本 */}
        <PortableText value={post.body} components={ptComponents} />
      </div>
    </article>
  );
}
