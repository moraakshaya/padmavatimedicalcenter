import { departmentsData } from "@/data/DepartmentSinglePageData";
import DepartmentPage from "./DepartmentPage"; // ✅ REQUIRED IMPORT

export async function generateMetadata({ params }) {
  // params is a promise in async layouts/pages; await it before use
  const { slug } = await params;
  const dept = departmentsData.find((d) => d.slug === slug);
  if (!dept) {
    console.warn(`generateMetadata: no department for slug "${slug}"`);
    return { title: "Department | Padmavati Hospital" };
  }
  return {
    title: dept.metaTitle || `${dept.name} | Padmavati Hospital`,
    description: dept.metaDescription || dept.overview || "Padmavati Hospital department page",
  };
}

export async function generateStaticParams() {
  return departmentsData.map((d) => ({ slug: d.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const dept = departmentsData.find((d) => d.slug === slug);

  if (!dept) {
    return <h2>Department Not Found</h2>;
  }

  return <DepartmentPage dept={dept} />;
}




