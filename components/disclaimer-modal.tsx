'use client';

import { useState, useEffect } from 'react';
import { Scale, CheckCircle } from 'lucide-react';

interface DisclaimerModalProps {
  onAgree: () => void;
}

export default function DisclaimerModal({ onAgree }: DisclaimerModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show modal after a brief delay for smooth animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-75" />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-blue-900 text-white p-6 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Legal Disclaimer</h1>
              <p className="text-blue-100">Chetluru Srinivas & Associates</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <h2 className="text-lg font-bold text-blue-900 mb-2">Bar Council of India Compliance</h2>
              <p className="text-blue-800">
                This website is in compliance with the Bar Council of India rules. The information provided on this website is solely for informational purposes and does not constitute legal advice.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">No Solicitation</h3>
                  <p className="text-gray-600">
                    The information on this website is not intended as solicitation of clients. The contents of this website are for informational purposes only and do not constitute legal advice.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">User Initiated Visit</h3>
                  <p className="text-gray-600">
                    By accessing this website, you acknowledge that you are seeking information about us for your own information and use.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">No Lawyer-Client Relationship</h3>
                  <p className="text-gray-600">
                    The transmission and receipt of information contained on this website does not form or constitute a lawyer-client relationship.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700 font-medium">
                By clicking "I AGREE" below, you acknowledge that you have read and understood the above disclaimer.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={onAgree}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <CheckCircle className="w-5 h-5" />
              <span>I AGREE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 