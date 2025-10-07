import type { Metadata } from 'next'
import { Noto_Serif_JP } from 'next/font/google'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-jp',
})

export const metadata: Metadata = {
  title: '株式会社FACTM\'s（ファクトムズ）| 札幌市南区の工務店',
  description: '札幌市南区の工務店FACTM\'s（ファクトムズ）。新築住宅、リフォーム、リノベーションまで、確かな技術と誠実な対応で理想の住まいを実現します。二級建築士・宅地建物取引士在籍。',
  keywords: '札幌,工務店,新築,リフォーム,リノベーション,南区,藤野',
  openGraph: {
    title: '株式会社FACTM\'s（ファクトムズ）',
    description: '札幌市南区の工務店。確かな技術で理想の住まいを実現します。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSerifJP.className}>{children}</body>
    </html>
  )
}