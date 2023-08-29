import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

const inter = Inter({ subsets: ['latin'] })

config.autoAddCss = true;

export const metadata: Metadata = {
  title: '멜론마켓',
  description: '당근마켓 클론코딩으로 NextJS 뿌수기',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}