import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={'flex min-h-svh w-full max-w-7xl flex-col p-10'}>
      <Header />

      <main className={'flex flex-1 flex-col gap-24 pt-24'}>{children}</main>

      <Footer className={'pt-20 pb-6'} />
    </div>
  );
}
