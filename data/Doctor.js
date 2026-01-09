// root/data/Doctor.js

// In Next.js, we reference images from the 'public' folder using string paths
// We use "export const" for better compatibility with Next.js imports

export const doctors = [
  {
    id: 1,
    image: "/assets/doctors/dr1.png", // Path relative to the public folder
    name: "Dr. G. Kondal Rao",
    department: "Cardiologist",
    qualification: "M.D., D.M., FSCAI, M.E.",
    regNo: "12607",
    phone: "+91 9866635947",
    availability: "-",
    slug: "dr-g-kondal-rao" // Useful for dynamic routing later
  },
  {
    id: 2,
    image: "/assets/doctors/dr1.png",
    name: "Dr. G. Kiran Kumar",
    department: "Cardiologist",
    qualification: "M.D., D.M.",
    phone: "+91 9866635947",
    availability: "-",
    slug: "dr-g-kiran-kumar"
  },
  {
    id: 3,
    image: "/assets/doctors/dr1.png",
    name: "Dr. (Prof) B. Prahlad",
    department: "Senior General Physician & Diabetologist",
    qualification: "M.D., D.C.H.",
    regNo: "3415",
    phone: "+91 9866635947",
    availability: "9:30 AM & 6:00 PM",
    slug: "dr-b-prahlad"
  },
  {
    id: 4,
    image: "/assets/doctors/dr1.png",
    name: "Dr. (Prof) S. Prem Sagar",
    department: "Senior General Physician & Diabetologist",
    qualification: "M.D.",
    regNo: "35832",
    phone: "+91 9866635947",
    availability: "8:30 AM",
    slug: "dr-s-prem-sagar"
  },
  {
    id: 5,
    image: "/assets/doctors/dr1.png",
    name: "Dr. G.S. Sameer Kumar",
    department: "Gastroenterologist",
    qualification: "D.N.B., D.N.B.",
    regNo: "76055",
    phone: "+91 9866635947",
    availability: "6:30 PM",
    slug: "dr-gs-sameer-kumar"
  },
  {
    id: 6,
    image: "/assets/doctors/Pediatrician-dr-mv-Murali.png",
    name: "Dr. (Prof) M.V. Murali",
    department: "Pediatrician",
    qualification: "M.D., D.C.H., D.N.B.",
    regNo: "10538",
    phone: "+91 9866635947",
    availability: "9:00 AM - 5:00 PM",
    slug: "dr-mv-murali"
  },
  {
    id: 7,
    image: "/assets/doctors/neurophysician-dr-dineshkumar.png",
    name: "Dr. B. Dinesh Kumar",
    department: "Neurologist",
    qualification: "M.D., D.M.",
    regNo: "77613",
    phone: "+91 9866635947",
    availability: "Oncall",
    slug: "dr-b-dinesh-kumar"
  },
  {
    id: 8,
    image: "/assets/doctors/pulmonologist-dr-MaheshGudelli.png",
    name: "Dr. Mahesh Gudelli",
    department: "Pulmonologist",
    qualification: "M.D.",
    regNo: "56962",
    phone: "+91 9866635947",
    availability: "9:00 AM - 5:00 PM",
    slug: "dr-mahesh-gudelli"
  },
  {
    id: 9,
    image: "/assets/doctors/vinayaksanthosh-orthopedician.png",
    name: "Dr. K. Vinyak Santosh",
    department: "Orthopedic Surgeon",
    qualification: "M.S.",
    regNo: "01290",
    phone: "+91 9866635947",
    availability: "Oncall",
    slug: "dr-k-vinyak-santosh"
  },
  {
    id: 10,
    image: "/assets/doctors/dr-g-sudhakar-nephrologist.png",
    name: "Dr. G. Sudhakar",
    department: "Nephrologist",
    qualification: "M.D., D.M.",
    regNo: "53663",
    phone: "+91 9866635947",
    availability: "Oncall",
    slug: "dr-g-sudhakar"
  },
  {
    id: 11,
    image: "/assets/doctors/dr1.png",
    name: "Dr. K. Praveen",
    department: "Nephrologist",
    qualification: "M.D., D.M., SGPGI",
    phone: "+91 9866635947",
    availability: "Oncall",
    slug: "dr-k-praveen"
  },
  {
    id: 12,
    image: "/assets/doctors/dr1.png",
    name: "Dr. B.J. Arjun Kumar",
    department: "Anesthesiologist",
    qualification: "MBBS, D.A.",
    phone: "+91 9866635947",
    availability: "Oncall",
    slug: "dr-bj-arjun-kumar"
  },
  {
    id: 13,
    image: "/assets/doctors/dr1.png",
    name: "Dr. B. Beeshma",
    department: "Pathologist",
    qualification: "M.D.",
    phone: "+91 9866635947",
    availability: "Oncall",
    slug: "dr-b-beeshma"
  },
  {
    id: 14,
    image: "/assets/doctors/dr1.png",
    name: "Dr. P. Ashok Kumar",
    department: "Urologist",
    qualification: "M.S., M.Ch",
    phone: "+91 9866635947",
    availability: "Oncall",
    slug: "dr-p-ashok-kumar"
  },
  {
    id: 15,
    image: "/assets/doctors/dr1.png",
    name: "Dr. Purnaiah",
    department: "Dermatologist",
    qualification: "",
    phone: "+91 9866635947",
    availability: "Oncall",
    slug: "dr-purnaiah"
  },
  {
    id: 16,
    image: "/assets/doctors/dr1.png",
    name: "Dr. T. Shiva Prasad",
    department: "Physiotherapist",
    qualification: "B.P.T., M.I.A.P.",
    phone: "+91 9866635947",
    availability: "Oncall",
    slug: "dr-t-shiva-prasad"
  }
];