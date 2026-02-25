import BlogDetailsClient from "./page.client";
import blogData from "@/data/BlogData";

export function generateMetadata({ params }) {
  const blog = blogData.find((item) => item.slug === params.slug);
  if (!blog) {
    return { title: "Blog Post | Padmavati Hospital" };
  }
  return {
    title: blog.metaTitle || `${blog.title} | Padmavati Hospital`,
    description: blog.metaDescription || blog.description || "Read this article from Padmavati Hospital.",
  };
}

export default function Page(props) {
  return <BlogDetailsClient {...props} />;
}
