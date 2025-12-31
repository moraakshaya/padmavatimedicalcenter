import { departmentsData } from "@/data/DepartmentSinglePageData";
import DepartmentPage from "./DepartmentPage"; // ✅ REQUIRED IMPORT

export default async function Page({ params }) {
  const { slug } = await params;

  const dept = departmentsData.find((d) => d.slug === slug);

  if (!dept) {
    return <h2>Department Not Found</h2>;
  }

  return <DepartmentPage dept={dept} />;
}




