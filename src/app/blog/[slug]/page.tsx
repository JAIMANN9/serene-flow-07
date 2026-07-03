import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import ArticleLayout from "./ArticleLayout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | PeaceCode Blog`,
    description: post.summary,
    alternates: {
      canonical: `https://www.peacecode.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://www.peacecode.in/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.img,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

// Ensure static generation for performance and SEO
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // We move the client-side animation logic to a separate Client Component 
  // because generateMetadata requires a Server Component.
  return <ArticleLayout post={post} />;
}
