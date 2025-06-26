
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, Award, GraduationCap, Briefcase, Calendar } from 'lucide-react'
import { firmData } from '@/lib/law-firm-data'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return firmData.lawyers.map((lawyer) => ({
    slug: lawyer.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lawyer = firmData.lawyers.find((lawyer) => lawyer.slug === params.slug)
  
  if (!lawyer) {
    return {
      title: 'Lawyer Not Found',
    }
  }

  return {
    title: `${lawyer.name} - ${lawyer.title} | Chetluru Srinivas & Associates`,
    description: `Meet ${lawyer.name}, ${lawyer.title} at Chetluru Srinivas & Associates. ${lawyer.experience} in ${lawyer.specializations?.join(', ') || 'legal practice'}.`,
    keywords: `${lawyer.name}, ${lawyer.title}, lawyer Hyderabad, legal services, ${lawyer.specializations?.join(', ') || ''}`,
  }
}

export default function LawyerPage({ params }: Props) {
  const lawyer = firmData.lawyers.find((lawyer) => lawyer.slug === params.slug)

  if (!lawyer) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="py-12 lg:py-20">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Photo */}
              <div className="relative aspect-[4/5] lg:aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10">
                <Image
                  src="https://i.pinimg.com/736x/26/25/9c/26259c44b99e0418c9bd39d78fa570a9.jpg"
                  alt={`${lawyer.name} - ${lawyer.title}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>

              {/* Basic Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-2">
                      {lawyer.name}
                    </h1>
                    <h2 className="text-xl lg:text-2xl text-secondary font-medium mb-4">
                      {lawyer.title}
                    </h2>
                    {lawyer.registration && (
                      <p className="text-muted-foreground mb-4">
                        Registration: {lawyer.registration}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{lawyer.experience}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-secondary" />
                      </div>
                      <span className="text-foreground">{lawyer.education}</span>
                    </div>

                    {lawyer.contact?.email && (
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/30 rounded-lg">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <a 
                          href={`mailto:${lawyer.contact.email}`}
                          className="text-foreground hover:text-secondary transition-colors"
                        >
                          {lawyer.contact.email}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Specializations */}
                  {lawyer.specializations && lawyer.specializations.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Specializations:</h3>
                      <div className="flex flex-wrap gap-2">
                        {lawyer.specializations.map((spec, index) => (
                          <span 
                            key={index}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Biography */}
            {lawyer.bio && (
              <div className="lg:col-span-2 bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-border">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                  <Briefcase className="h-6 w-6" />
                  Professional Biography
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {lawyer.bio}
                  </p>
                </div>
              </div>
            )}

            {/* Education & Sidebar */}
            <div className="space-y-8">
              {/* Education History */}
              {lawyer.education_history && lawyer.education_history.length > 0 && (
                <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-border">
                  <h3 className="text-xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                    <GraduationCap className="h-5 w-5" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    {lawyer.education_history.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4 last:pb-0">
                        <div className="font-semibold text-primary">{edu.degree}</div>
                        <div className="text-secondary font-medium">{edu.university}</div>
                        <div className="text-sm text-muted-foreground">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Summary */}
              <div className="bg-gradient-to-br from-primary to-secondary p-6 lg:p-8 rounded-2xl text-white">
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-3">
                  <Award className="h-5 w-5" />
                  Experience
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold">{lawyer.experience}</div>
                    <div className="text-white/90">Legal Practice</div>
                  </div>
                  {lawyer.specializations && lawyer.specializations.length > 0 && (
                    <div>
                      <div className="text-lg font-semibold">{lawyer.specializations.length}</div>
                      <div className="text-white/90">Areas of Specialization</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-border">
                <h3 className="text-xl font-serif font-bold text-primary mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ready to discuss your legal needs? Contact {lawyer.name} for expert legal advice.
                </p>
                <div className="space-y-3">
                  {lawyer.contact?.email && (
                    <a 
                      href={`mailto:${lawyer.contact.email}`}
                      className="w-full btn-primary justify-center"
                    >
                      <Mail className="h-5 w-5" />
                      Send Email
                    </a>
                  )}
                  <a 
                    href={`tel:+91${firmData.contact_info.phone}`}
                    className="w-full btn-secondary justify-center"
                  >
                    <Award className="h-5 w-5" />
                    Call Office
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Team */}
          <div className="mt-12 text-center">
            <Link 
              href="/#team"
              className="btn-primary"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Our Team
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
