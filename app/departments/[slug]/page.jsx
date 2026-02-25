import { departmentsData } from "@/data/DepartmentSinglePageData";
import DepartmentPage from "./DepartmentPage"; // ✅ REQUIRED IMPORT

export function generateMetadata({ params }) {
  const dept = departmentsData.find((d) => d.slug === params.slug);
  if (!dept) {
    return { title: "Department | Padmavati Hospital" };
  }
  return {
    title: dept.metaTitle || `${dept.name} | Padmavati Hospital`,
    description: dept.metaDescription || dept.overview || "",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const dept = departmentsData.find((d) => d.slug === slug);

  if (!dept) {
    return <h2>Department Not Found</h2>;
  }

  return <DepartmentPage dept={dept} />;
}




