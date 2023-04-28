import { Montserrat } from 'next/font/google';

import './globals.css';

import BottomNav from '@/components/Navigation/BottomNav';
import TopNav from '@/components/Navigation/TopNav';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Gonasi',
  description: 'Group tours made simple',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <TopNav />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
