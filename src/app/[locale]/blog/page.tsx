// src/app/[locale]/blog/page.tsx
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function BlogPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  const posts = await client.fetch(
    `*[_type == "post" && language == $locale] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      mainImage,
      publishedAt,
      excerpt
    }`,
    { locale }
  );

  return (
    <div className="min-h-screen flex flex-col bg-background pt-16">
      <main className="container mx-auto px-4 lg:px-20 ">
        <h1 className="text-4xl font-bold text-primary mb-12">BLOG</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group block space-y-4"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(800).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString(locale)}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
