// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner'; // Import from sonner

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WellScout - Your Guide to Informed Food Choices',
  description: 'Scan, search, and understand your products with WellScout.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
