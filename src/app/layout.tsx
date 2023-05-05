import { Montserrat } from 'next/font/google';

import './globals.css';

import SupabaseProvider from '@/app/supabase-provider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Gonasi',
    template: '%s | Gonasi',
  },
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
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
