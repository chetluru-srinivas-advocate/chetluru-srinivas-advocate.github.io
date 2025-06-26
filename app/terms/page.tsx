
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export const metadata = {
  title: 'Terms of Service - Chetluru Srinivas & Associates',
  description: 'Terms of service for Chetluru Srinivas & Associates law firm website.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-max">
          <Link
            href="/"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <FileText className="w-12 h-12 text-blue-300" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Terms of Service
            </h1>
          </div>
          
          <p className="text-xl text-blue-100">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision 
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">No Attorney-Client Relationship</h2>
                <p className="text-gray-600 leading-relaxed">
                  The use of this website and the sending or receiving of information through this website does not 
                  create an attorney-client relationship between you and Chetluru Srinivas & Associates. An attorney-client 
                  relationship is created only when we have agreed to represent you in a specific matter and you have 
                  signed a written engagement agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed">
                  Do not send confidential information to us through this website until an attorney-client relationship 
                  has been established. Any information you send to us before such a relationship is established cannot 
                  be treated as confidential and may not be protected by attorney-client privilege.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">General Information Only</h2>
                <p className="text-gray-600 leading-relaxed">
                  The information contained in this website is for general information purposes only. The information 
                  is provided by Chetluru Srinivas & Associates and while we endeavor to keep the information up to 
                  date and correct, we make no representations or warranties of any kind about the completeness, 
                  accuracy, reliability, or suitability of the information for any purpose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Not Legal Advice</h2>
                <p className="text-gray-600 leading-relaxed">
                  The content on this website is not intended to be legal advice. The law is complex and changes frequently. 
                  Legal advice must be tailored to the specific circumstances of each case, and the law may vary from state 
                  to state. Nothing on this website should be taken as legal advice for any individual case or situation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Website Use</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree to use this website only for lawful purposes and in a way that does not infringe the rights 
                  of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Harassing or causing distress or inconvenience to any other user</li>
                  <li>Transmitting obscene or offensive content</li>
                  <li>Disrupting the normal flow of dialogue within our website</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall Chetluru Srinivas & Associates be liable for any direct, indirect, special, 
                  incidental, or consequential damages arising out of or in connection with your use of this website, 
                  whether based on warranty, contract, tort, or any other legal theory.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion, 
                  and other matters related to this website are protected under applicable copyrights, trademarks, 
                  and other proprietary rights. Copying, redistribution, or publication of any such content is strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to make changes to our website and these terms of service at any time without notice. 
                  By continuing to use the website after changes are made, you agree to be bound by such changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India, 
                  and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction 
                  of the courts of Hyderabad, Telangana.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                  <p className="font-semibold">Chetluru Srinivas & Associates</p>
                  <p className="text-gray-600">Email: chetluru2025@gmail.com</p>
                  <p className="text-gray-600">Phone: +91 9848022338</p>
                  <p className="text-gray-600">
                    Address: #6-3-248/K, Flat No:G2, Abhishek Residency,<br />
                    Banjara Hills, Road No. 1, Hyderabad, Telangana 500034, India
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="text-gray-500 text-sm">
                  Last updated: June 26, 2025. These terms may be updated from time to time. 
                  Please check this page periodically for changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
