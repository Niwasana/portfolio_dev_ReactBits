// src/lib/mdx.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { BlogFrontmatter } from "./types";
import type { ReactElement } from "react";

const blogDir = path.join(process.cwd(), "src/content/blog");

function ensureBlogDir() {
  if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });
}

export async function getAllPosts() {
  ensureBlogDir();
  const files = fs.readdirSync(blogDir).filter((f) => f.toLowerCase().endsWith(".mdx"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
    const { data } = matter(raw);
    const fm = data as BlogFrontmatter;
    return { slug: file.replace(/\.mdx$/i, ""), ...fm };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type MDXPost = {
  content: ReactElement;
  frontmatter: BlogFrontmatter;
};

export async function getPostBySlug(slug: string): Promise<MDXPost> {
  ensureBlogDir();
  const file = path.join(blogDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) throw new Error(`Post not found: ${slug}`);

  const raw = fs.readFileSync(file, "utf8");
  const { content: mdxSource, data } = matter(raw);

  // ★ compileMDXの戻り値オブジェクトから、contentだけを取り出す
  const { content: MDXContent } = await compileMDX({ source: mdxSource });

  return {
    content: MDXContent as ReactElement,
    frontmatter: data as BlogFrontmatter,
  };
}
