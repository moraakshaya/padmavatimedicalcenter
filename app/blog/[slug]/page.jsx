import BlogDetailsClient from "./page.client";
import blogData from "@/data/BlogData";

// ✅ Generate SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;   // ✅ FIX: await params

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Post | Padmavati Hospital",
      description: "Read our latest health articles.",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  };
}

// ✅ Optional (Static generation)
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ Render Client Component
export default async function Page({ params }) {
  const { slug } = await params;   // ✅ FIX: await params

  return <BlogDetailsClient slug={slug} />;
}