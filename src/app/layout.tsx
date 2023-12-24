import type { Metadata } from 'next';
import { lato } from '@/app/ui/fonts';
import SideNav from '@/app/ui/sidenav';
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
      <body className={`${lato.className} antialiased`}>
        <SideNav />
        <main
          className="p-[2.5vmax] md:p-[7.5vmax] lg:p-[7.5vh] md:pl-[10vmax] lg:pl-[15vh] w-full h-[90vmax] md:h-screen"
        >
          {children}
        </main>
      </body>
    </html>
  )
}
