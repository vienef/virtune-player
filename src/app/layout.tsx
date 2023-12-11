import type { Metadata } from 'next';
import { lato } from '@/app/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Virtune',
  description: 'A prototype of an online music player.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  )
}
