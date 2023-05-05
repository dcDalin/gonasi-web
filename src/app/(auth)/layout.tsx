import AuthTopNav from '@/components/Navigation/AuthTopNav';

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
    <section className='mx-auto max-w-xl rounded-lg shadow-none md:shadow-lg'>
      <AuthTopNav />
      <div className='p-4'>{children}</div>
    </section>
  );
}
