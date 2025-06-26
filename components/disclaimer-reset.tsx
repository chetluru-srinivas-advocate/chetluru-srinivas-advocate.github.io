'use client';

import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function DisclaimerReset() {
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = () => {
    setIsResetting(true);
    localStorage.removeItem('disclaimer-agreed');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <button
      onClick={handleReset}
      disabled={isResetting}
      className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 disabled:opacity-50"
      title="Reset Disclaimer Agreement (for testing)"
    >
      <RefreshCw className={`w-5 h-5 ${isResetting ? 'animate-spin' : ''}`} />
    </button>
  );
} 