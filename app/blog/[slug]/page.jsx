import BlogDetailsClient from "./page.client";
import blogData from "@/data/BlogData";

// ✅ Generate SEO Metadata (SERVER ONLY)
export async function generateMetadata({ params }) {
  const blog = blogData.find((item) => item.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Post | Padmavati Hospital",
      description: "Read our latest health articles.",
    };
  }

  return {
    title: blog.metaTitle || `${blog.title} | Padmavati Hospital`,
    description:
      blog.metaDescription ||
      blog.description ||
      "Read this article from Padmavati Hospital.",
  };
}

// ✅ Optional (Recommended for static SEO)
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ Render Client Component
export default function Page({ params }) {
  return <BlogDetailsClient slug={params.slug} />;
}