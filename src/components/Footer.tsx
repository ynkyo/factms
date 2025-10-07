import Link from 'next/link'

export default function Footer() {
  const navigation = {
    main: [
      { name: 'ホーム', href: '/' },
      { name: '会社案内', href: '/about' },
      { name: '施工事例', href: '/projects' },
      { name: 'サービス', href: '/services' },
      { name: 'お客様の声', href: '/testimonials' },
      { name: 'お問い合わせ', href: '/contact' },
    ],
    legal: [
      { name: 'プライバシーポリシー', href: '/privacy' },
      { name: 'サイトマップ', href: '/sitemap' },
    ],
  }

  return (
    <footer className="bg-black border-t border-primary-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-2xl font-normal text-primary-400 tracking-wider">
                  FACTM&apos;s
                </span>
                <span className="text-sm text-gray-400 ml-2 font-light">ファクトムズ</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                確かな技術で、理想の住まいを。
                株式会社FACTM&apos;sは、札幌市南区を拠点に新築・リフォーム・リノベーションを手がける工務店です。
                地域に根ざし、お客様に寄り添った住まいづくりを行っています。
              </p>
              <div className="space-y-2 text-gray-300">
                <p>〒061-2284</p>
                <p>北海道札幌市南区藤野四条9丁目3番24号</p>
                <p>TEL: 011-xxx-xxxx</p>
                <p>営業時間: 9:00-18:00（日祝除く）</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                サイトマップ
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                会社情報
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>設立: 2020年12月22日</li>
                <li>法人番号: 7430001082995</li>
                <li>二級建築士在籍</li>
                <li>宅地建物取引士在籍</li>
                <li>一般建設業許可</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-900/30 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 株式会社FACTM&apos;s. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
