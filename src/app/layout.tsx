import type { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export const metadata: Metadata = {
  title: 'React Revenue Dashboard',
  description: 'Generated by create next app',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
