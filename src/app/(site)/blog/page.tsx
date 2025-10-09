export const runtime = "nodejs";
export const dynamic = "force-static";
// export const revalidate = 60; // 更新頻度に応じて

import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogIndex() {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <section>
        <h1 className="text-2xl font-semibold mb-4">Blog</h1>
        <p className="text-neutral-600 text-sm">まだ投稿はありません。</p>
      </section>
    );
  }

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link className="underline" href={`/blog/${p.slug}`}>{p.title}</Link>
            <div className="text-sm text-neutral-500">{p.date}</div>
            {p.summary && <p className="text-sm">{p.summary}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
