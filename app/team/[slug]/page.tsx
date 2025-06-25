
import { notFound } from 'next/navigation'
import { AttorneyProfile } from './_components/attorney-profile'

const attorneys = [
  {
    name: "Chetluru Srinivas",
    title: "Founder & Senior Advocate",
    experience: "35+ years",
    education: "B.A., LL.B",
    specialization: "Corporate Law & Civil Litigation",
    slug: "chetluru-srinivas",
    bio: "As the Founder and Senior Advocate of the firm, Chetluru Srinivas is a distinguished legal practitioner with over 35 years of extensive experience in the field. Holding B.A. and LL.B degrees, he has established a formidable reputation for his deep expertise and strategic acumen, particularly in the complex domains of Corporate Law and Civil Litigation. His visionary leadership has been the guiding force behind the firm's growth and its unwavering commitment to legal excellence and client success since its establishment in 1991.",
    expertise: [
      "Corporate Law",
      "Civil Litigation", 
      "Commercial Disputes",
      "Contract Law",
      "Property Law",
      "Business Transactions"
    ]
  },
  {
    name: "Kiran Kumar Tirunahari",
    title: "Senior Associate",
    experience: "25+ years",
    education: "LL.B",
    specialization: "Civil & Criminal Law",
    slug: "kiran-kumar-tirunahari",
    bio: "Kiran Kumar Tirunahari serves as a Senior Associate, bringing more than 25 years of seasoned legal experience to the firm. With an LL.B degree, he has developed a specialized practice that skillfully navigates the intersection of Civil and Criminal Law. His comprehensive understanding of both fields allows him to provide versatile and effective representation, handling a wide range of disputes with a strategic and results-oriented approach that greatly benefits the firm's diverse clientele.",
    expertise: [
      "Civil Litigation",
      "Criminal Defense",
      "Constitutional Law",
      "Administrative Law",
      "Consumer Protection",
      "Tort Law"
    ]
  },
  {
    name: "P. Vijaya Saradhi",
    title: "Advocate",
    experience: "23+ years",
    education: "LL.B",
    specialization: "Civil, Criminal & Family Law",
    slug: "p-vijaya-saradhi",
    bio: "P. Vijaya Saradhi is a highly respected Advocate with over 23 years of professional experience. An LL.B graduate, his practice is characterized by its breadth, covering Civil, Criminal, and Family Law. This tripartite expertise enables him to handle multifaceted cases that often involve overlapping legal issues. He is known for his diligent representation and his ability to provide empathetic yet strong counsel, particularly in sensitive family law matters.",
    expertise: [
      "Family Law",
      "Divorce Proceedings",
      "Child Custody",
      "Criminal Defense",
      "Civil Litigation",
      "Domestic Violence Cases"
    ]
  },
  {
    name: "Yajur Putta",
    title: "Advocate",
    experience: "6+ years",
    education: "BBA LLB (Hons.), M.B.A",
    specialization: "Corporate & Commercial Law",
    slug: "yajur-putta",
    bio: "Yajur Putta is a dynamic Advocate whose modern legal education is reflected in his dual qualifications of a BBA LLB (Hons.) and an M.B.A. With over six years of experience, he brings a unique, business-oriented perspective to the practice of law. This combination of legal and business acumen makes him particularly effective in corporate and commercial matters, where he can provide holistic advice that considers both legal risk and business objectives.",
    expertise: [
      "Corporate Law",
      "Commercial Transactions",
      "Business Consulting",
      "Mergers & Acquisitions",
      "Contract Negotiation",
      "Compliance & Regulatory"
    ]
  },
  {
    name: "K.S. Kushal",
    title: "Advocate",
    experience: "4+ years",
    education: "BBA LLB (Hons.), PG Diploma in IPR",
    specialization: "Intellectual Property Rights",
    slug: "ks-kushal",
    bio: "K.S. Kushal is an Advocate with four years of experience who holds a BBA LLB (Hons.) degree complemented by a Post Graduate Diploma in Intellectual Property Rights (IPR). This specialized qualification makes him a key asset in the firm's IP practice. His contemporary training and focused expertise in IPR allow him to provide clients with up-to-date and knowledgeable advice on protecting their valuable intellectual assets in a rapidly evolving legal landscape.",
    expertise: [
      "Intellectual Property Rights",
      "Copyright Law",
      "Trademark Registration",
      "Patent Applications",
      "IP Litigation",
      "Brand Protection"
    ]
  },
  {
    name: "Ch. Vimalanand",
    title: "IP Law Specialist",
    experience: "12+ years",
    education: "B.Tech., LL.B",
    specialization: "Patent & Trademark Law",
    slug: "ch-vimalanand",
    bio: "Ch. Vimalanand is the firm's IP Law Specialist, bringing a unique and valuable background to the team. With a B.Tech. degree in addition to his LL.B, and over 12 years of industry experience, he possesses a deep, practical understanding of technology and innovation. As a registered Patent Agent and Trademark Attorney, he is exceptionally qualified to handle the technical and legal intricacies of patent and trademark law, from drafting and filing to litigation.",
    expertise: [
      "Patent Law",
      "Trademark Law",
      "Technology Transfer",
      "IP Portfolio Management",
      "Patent Prosecution",
      "IP Due Diligence"
    ]
  }
]

// This function is required for static export with dynamic routes
export async function generateStaticParams() {
  return attorneys.map((attorney) => ({
    slug: attorney.slug,
  }))
}

interface AttorneyPageProps {
  params: { slug: string }
}

export default function AttorneyPage({ params }: AttorneyPageProps) {
  const attorney = attorneys.find(att => att.slug === params.slug)
  
  if (!attorney) {
    notFound()
  }

  return <AttorneyProfile attorney={attorney} />
}
