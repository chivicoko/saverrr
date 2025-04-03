import type { Metadata } from "next";
import { ReactNode } from 'react';
import './globals.css';
import { GeneralDataProvider } from '@/context/GeneralDataContext';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '700'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: {
    default: "Saverrr. | Save, Invest, Transact",
    template: "%s | Saverrr."
  },
  description: "Saverrr. services helps you improve your finances through savings and investments.",
  keywords: "Save, Savings, Investment",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className='relative h-full min-h-fit flex'>
        <div className="w-full h-fit min-h-screen">
          <GeneralDataProvider>
            {children}
          </GeneralDataProvider>
        </div>
      </body>
    </html>
  );
}
