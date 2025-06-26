'use client';

import { useState, useEffect } from 'react';
import DisclaimerModal from './disclaimer-modal';

interface DisclaimerProviderProps {
  children: React.ReactNode;
}

export default function DisclaimerProvider({ children }: DisclaimerProviderProps) {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already agreed to disclaimer
    const agreed = localStorage.getItem('disclaimer-agreed');
    if (agreed === 'true') {
      setHasAgreed(true);
    }
    setIsLoading(false);
  }, []);

  const handleAgree = () => {
    // Store agreement in localStorage
    localStorage.setItem('disclaimer-agreed', 'true');
    setHasAgreed(true);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-blue-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Show disclaimer if user hasn't agreed
  if (!hasAgreed) {
    return <DisclaimerModal onAgree={handleAgree} />;
  }

  // Show main content if user has agreed
  return <>{children}</>;
} 