export const runtime = "nodejs";
export const dynamic = "force-static";

import { getPostBySlug } from "@/lib/mdx";

// src/app/(site)/blog/[slug]/page.tsx
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { content: MDXContent, frontmatter } = await getPostBySlug(params.slug);

  return (
    <article className="prose prose-neutral lg:prose-lg max-w-none leading-relaxed
                        prose-h1:mb-2 prose-h2:mt-10 prose-h3:mt-8
                        prose-p:my-4 prose-li:my-1 prose-img:rounded-xl">
      <h1 className="!mb-1">{frontmatter.title}</h1>
      <p className="text-sm text-neutral-500 !mt-0">{frontmatter.date}</p>
      <div className="mt-6">
        {MDXContent}
      </div>
    </article>
  );
}
