import { Montserrat } from 'next/font/google';

import '../globals.css';

import AuthTopNav from '@/components/Navigation/AuthTopNav';

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
        <section className='mx-auto max-w-xl rounded-lg shadow-lg'>
          <AuthTopNav />
          <div className='p-4'>{children}</div>
        </section>
      </body>
    </html>
  );
}
