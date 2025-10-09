export const runtime = "nodejs";                // fs 使うので node
export const dynamic = "force-static";          // ★ 動的扱いしない（Lambda作らない）
export const dynamicParams = false;             // ★ SSG用に slug を固定列挙

import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {   // ★ ここで全slugを列挙
  const posts = await getAllPosts();            // src/content/blog/*.mdx を読む
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const { content: MDXContent, frontmatter } = await getPostBySlug(params.slug);
    return (
      <article className="prose prose-neutral lg:prose-lg max-w-none leading-relaxed
                          prose-p:my-4 prose-li:my-1 prose-h2:mt-10 prose-h3:mt-8 prose-img:rounded-xl">
        <h1 className="!mb-1">{frontmatter.title}</h1>
        <p className="text-sm text-neutral-500 !mt-0">{frontmatter.date}</p>
        <div className="mt-6">{MDXContent}</div>
      </article>
    );
  } catch {
    notFound();
  }
}
