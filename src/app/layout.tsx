import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BOSQ Clone - NextJS',
  description: 'An exact clone of the BOSQ dev site built with NextJS and an Admin Panel.',
};

import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
