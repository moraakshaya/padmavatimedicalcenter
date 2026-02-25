import BlogDetailsClient from "./page.client";
import blogData from "@/data/BlogData";

// ✅ Generate SEO Metadata (SERVER ONLY)
export async function generateMetadata({ params }) {
  const { slug } = params; // destructure first

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Post | Padmavati Hospital",
      description: "Read our latest health articles.",
    };
  }

  // fall back to the main title/description if metadata is missing
  return {
    title: blog.metaTitle || blog.title || "Padmavati Hospital Blog",
    description:
      blog.metaDescription || blog.description || "Read our latest health articles.",
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