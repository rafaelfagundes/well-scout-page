// components/Footer.tsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-6 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</a>
        </div>
        <p>© {new Date().getFullYear()} WellScout. All rights reserved.</p>
        {/* Add back-to-top button here, if desired */}
      </div>
    </footer>
  );
};

export default Footer;
