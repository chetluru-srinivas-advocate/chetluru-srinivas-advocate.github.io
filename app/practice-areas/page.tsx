
import { Metadata } from 'next'
import { Shield, Scale, Building, Heart, Banknote, FileText, UserCheck, Lightbulb, PenTool, FileSignature } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Practice Areas - Chetluru Srinivas & Associates',
  description: 'Comprehensive legal services across 10 practice areas including Civil Law, Corporate Law, Criminal Cases, and more.',
}

const practiceAreas = [
  {
    title: "Civil Law",
    icon: Scale,
    description: "The firm demonstrates profound expertise in the domain of Civil Law, which forms a cornerstone of its practice. This area of law governs disputes between individuals and organizations, and the firm's capabilities cover a comprehensive range of civil litigation matters. A primary focus is on land and property disputes, which are often complex and require a nuanced understanding of real estate law. The team is adept at handling land litigation, land acquisition proceedings, declaration suits to establish legal rights, and partition suits for the division of property among co-owners. Furthermore, the firm skillfully manages injunction suits to prevent or compel specific actions, thereby protecting clients' immediate interests. Representation extends to the higher echelons of the judiciary, with extensive experience in filing and arguing writ petitions and appeals before the High Court, ensuring that clients' rights are vigorously defended at every level of the legal system."
  },
  {
    title: "Criminal Cases",
    icon: Shield,
    description: "Chetluru Srinivas & Associates possesses a robust criminal law practice, providing formidable defense and representation for individuals and entities facing criminal charges. The firm's experience is particularly notable in handling high-stakes cases investigated by premier national agencies, including the Central Bureau of Investigation (CBI) and the Anti-Corruption Bureau (ACB). This specialization requires a deep knowledge of procedural law and the ability to navigate complex evidentiary challenges. The team is also proficient in defending clients in matters arising under the Prevention of Money Laundering Act (PMLA), a specialized and stringent piece of legislation. The practice extends to managing criminal appeals, where the firm meticulously reviews trial records to identify grounds for challenging convictions or sentences, as well as handling a wide variety of other criminal cases across the spectrum of Indian penal law."
  },
  {
    title: "Corporate Law",
    icon: Building,
    description: "In the sphere of Corporate Law, the firm offers strategic legal counsel and representation to businesses navigating the intricate regulatory landscape of India. The services provided are essential for corporate governance, compliance, and dispute resolution. The team possesses in-depth knowledge of the Companies Act, advising on matters ranging from company formation and structuring to compliance and shareholder disputes. A significant area of the firm's corporate practice involves representation before the National Company Law Tribunal (NCLT), the primary forum for corporate litigation in India. Additionally, the firm handles complex tax litigation, including income tax cases, and provides expert guidance on labor-related financial regulations such as the Provident Fund Act, ensuring that corporate clients remain compliant and effectively manage their legal risks."
  },
  {
    title: "Matrimonial Disputes",
    icon: Heart,
    description: "Recognizing the sensitive and emotionally charged nature of family law, Chetluru Srinivas & Associates provides compassionate yet resolute legal support in all areas of matrimonial disputes. The firm's advocates guide clients through the complexities of divorce proceedings, ensuring their rights are protected throughout the process. They have significant experience in handling contentious cases, including those involving allegations under Section 498A of the Indian Penal Code. The practice also focuses on securing the financial stability of its clients through maintenance proceedings and addressing issues of domestic violence with the seriousness they deserve. A key priority for the firm is the welfare of children involved in family disputes, and the team works diligently to achieve favorable outcomes in child custody matters that serve the best interests of the child."
  },
  {
    title: "Banking and Finance",
    icon: Banknote,
    description: "The firm's Banking and Finance practice addresses the specialized legal needs of financial institutions and borrowers. The team is highly experienced in handling litigation before the Debt Recovery Tribunal (DRT), a specialized forum for the expeditious adjudication and recovery of debts due to banks and financial institutions. A core area of expertise lies in matters related to the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, where the firm advises and represents clients in enforcement actions and challenges to such actions. This practice area covers a broad range of banking-related legal issues, providing clients with the expert counsel needed to navigate the complexities of financial law and regulation."
  },
  {
    title: "Arbitration",
    icon: FileText,
    description: "Chetluru Srinivas & Associates is a strong proponent of alternative dispute resolution and offers expert services in the field of Arbitration. This method provides a private, efficient, and often more cost-effective alternative to traditional court litigation for resolving commercial and civil disputes. The firm's advocates are skilled in representing clients throughout the entire arbitration process, from drafting arbitration clauses and initiating proceedings to presenting cases before arbitral tribunals and enforcing arbitral awards. Their strategic approach is designed to achieve favorable outcomes while minimizing the disruption and expense associated with prolonged legal battles, making it a preferred method for many of the firm's corporate and commercial clients."
  },
  {
    title: "Consumer Protection Cases",
    icon: UserCheck,
    description: "The firm is dedicated to upholding the rights of consumers and provides robust representation in cases filed under the Consumer Protection Act. This area of law is designed to protect consumers from unfair trade practices, defective goods, and deficient services. The team at Chetluru Srinivas & Associates assists clients in filing complaints and pursuing claims before consumer forums at the district, state, and national levels. They work to secure compensation, refunds, and other appropriate remedies for aggrieved consumers, ensuring that businesses are held accountable for their products and services and that consumer rights are effectively enforced."
  },
  {
    title: "Intellectual Property",
    icon: Lightbulb,
    description: "The firm offers a comprehensive suite of services in Intellectual Property (IP) law, a critical area for innovation and business in the modern economy. With an in-house Patent Agent and Trademark Attorney, the practice is fully equipped to handle the protection and enforcement of valuable intangible assets. The services include the registration of patents, designs, trademarks, and copyrights, ensuring that clients' creative and inventive works are legally protected from infringement. Beyond registration, the firm also manages IP litigation, representing clients in disputes involving infringement, passing off, and other violations of intellectual property rights, thereby safeguarding their competitive advantage and commercial interests."
  },
  {
    title: "Negotiable Instruments",
    icon: PenTool,
    description: "The firm's expertise extends to the law governing financial instruments, a vital component of commercial transactions. The team provides legal guidance and representation in matters arising under the Negotiable Instruments Act, with a particular focus on cases related to the dishonor of cheques. This is a common issue in business dealings, and the firm's efficient handling of these cases helps clients recover their dues effectively. The practice also covers legal issues related to modern financial systems under The Payment and Settlement Systems Act, 2007, ensuring clients are well-advised on the legal framework governing electronic and other payment mechanisms."
  },
  {
    title: "Drafting and Documentation",
    icon: FileSignature,
    description: "Precision in legal documentation is paramount to preventing future disputes, and Chetluru Srinivas & Associates provides expert services in drafting and documentation. The firm's advocates apply meticulous attention to detail in preparing a wide range of legal documents tailored to the specific needs of their clients. This includes the drafting of complex commercial contracts, partnership agreements, will deeds to ensure clear succession, and Deeds of Assignment for the transfer of rights or property. This service is fundamental to providing clients with legal certainty and protecting their interests in both personal and professional transactions."
  }
]

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Areas of Expertise
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive legal services across diverse practice areas with over 35 years of combined experience
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={area.title} className="card p-8 fade-in-up">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-blue-900">
                        {area.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Need Legal Assistance?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Our experienced team is ready to discuss your case and provide expert legal guidance across all our practice areas.
              </p>
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Discuss Your Case
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
