
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export const metadata = {
  title: 'Privacy Policy - Chetluru Srinivas & Associates',
  description: 'Privacy policy for Chetluru Srinivas & Associates law firm website.',
};

export default function PrivacyPage() {
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
            <Shield className="w-12 h-12 text-blue-300" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
          
          <p className="text-xl text-blue-100">
            Your privacy is important to us. This policy explains how we collect and use your information.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Contact us through our website forms</li>
                  <li>Send us emails or call our office</li>
                  <li>Request legal consultations or services</li>
                  <li>Subscribe to our newsletters or updates</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Respond to your inquiries and provide legal services</li>
                  <li>Communicate with you about your legal matters</li>
                  <li>Send you relevant legal updates and firm news</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy or as required by law. We may share information with trusted service 
                  providers who assist us in operating our website and conducting our business, provided they agree to keep 
                  this information confidential.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Attorney-Client Privilege</h2>
                <p className="text-gray-600 leading-relaxed">
                  Please note that communications through our website do not create an attorney-client relationship until 
                  a formal engagement agreement is signed. Confidential information should not be sent through unsecured 
                  email or website forms until such a relationship is established.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request information about how we use your data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
                  Last updated: June 26, 2025. We may update this Privacy Policy from time to time. 
                  We will notify you of any changes by posting the new policy on this page.
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
