import BlogDetailsClient from "./page.client";
import blogData from "@/data/BlogData";

// ✅ Generate SEO Metadata (SERVER ONLY)
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    console.warn(`generateMetadata: no blog for slug "${slug}"`);
    return {
      title: "Blog Post | Padmavati Hospital",
      description: "Read our latest health articles.",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.description,
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