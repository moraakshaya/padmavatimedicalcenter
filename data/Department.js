// root/data/Department.js

// Using "export const" is better for Next.js tree-shaking and 
// prevents the ".map is not a function" error.
export const departments = [
  {
    id: "1",
    title: "Cardiology",
    slug: "cardiology", // Added slugs for cleaner Next.js routing
    description: "Comprehensive heart care with state-of-the-art diagnostic and treatment facilities.",
    featured: true,
  },
  {
    id: "2",
    title: "General Medicine",
    slug: "general-medicine",
    description: "Expert care for general health concerns, chronic illnesses, and preventive healthcare.",
    featured: false,
  },
  {
    id: "3",
    title: "Diabetology",
    slug: "diabetology",
    description: "Specialized diabetes care including diagnosis, treatment, and lifestyle management.",
    featured: false,
  },
  {
    id: "4",
    title: "Gastroenterology",
    slug: "gastroenterology",
    description: "Advanced treatment for digestive, gastrointestinal, and liver-related disorders.",
    featured: false,
  },
  {
    id: "5",
    title: "Pediatrics",
    slug: "pediatrics",
    description: "Dedicated healthcare services for infants, children, and adolescents.",
    featured: false,
  },
  {
    id: "6",
    title: "Neurology",
    slug: "neurology",
    description: "Diagnosis and management of disorders related to the brain, spine, and nervous system.",
    featured: false,
  },
  {
    id: "7",
    title: "Pulmonology",
    slug: "pulmonology",
    description: "Comprehensive care for lung diseases, asthma, and respiratory conditions.",
    featured: false,
  },
  {
    id: "8",
    title: "Orthopedics",
    slug: "orthopedics",
    description: "Expert treatment for bone, joint, and musculoskeletal problems.",
    featured: false,
  },
  {
    id: "9",
    title: "Nephrology",
    slug: "nephrology",
    description: "Kidney care including diagnosis, treatment, and dialysis support.",
    featured: false,
  },
  {
    id: "10",
    title: "General Surgery",
    slug: "general-surgery",
    description: "Surgical care ranging from minor procedures to complex operations.",
    featured: false,
  },
  {
    id: "11",
    title: "Anesthesiology",
    slug: "anesthesiology",
    description: "Safe and effective anesthesia services for surgeries and medical procedures.",
    featured: false,
  },
  {
    id: "12",
    title: "Pathology",
    slug: "pathology",
    description: "Advanced laboratory services for accurate diagnostics and health assessments.",
    featured: false,
  },
  {
    id: "13",
    title: "Urology",
    slug: "urology",
    description: "Treatment for urinary tract diseases and male reproductive health issues.",
    featured: false,
  },
  {
    id: "14",
    title: "Dermatology",
    slug: "dermatology",
    description: "Care for skin, hair, and nail disorders with modern treatment options.",
    featured: false,
  },
  {
    id: "15",
    title: "Physiotherapy",
    slug: "physiotherapy",
    description: "Rehabilitation and physical therapy for improved mobility and recovery.",
    featured: false,
  }
];