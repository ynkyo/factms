import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: '新築住宅',
      description: '北海道の気候に最適な、快適な住まいづくり。寒冷地仕様の高断熱・高気密住宅で、一年中快適な暮らしを実現します。',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/services/new-construction',
    },
    {
      title: 'リフォーム・リノベーション',
      description: '住み慣れた家を、もっと愛せる空間へ。キッチン・お風呂の部分リフォームから、間取り変更を伴う大規模リノベーションまで対応。',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/services/renovation',
    },
    {
      title: '店舗・オフィス施工',
      description: 'ビジネスの成功を支える空間づくり。機能性とデザイン性を両立した、働きやすい環境を提案します。',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/services/commercial',
    },
    {
      title: 'アフターサービス',
      description: '建てた後も、ずっと安心のパートナー。定期点検とメンテナンスで、大切な住まいを長持ちさせます。',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/services/maintenance',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            サービス内容
          </h2>
          <p className="text-lg text-gray-600">
            お客様のニーズに合わせた幅広いサービスをご提供します
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 font-medium">
                  詳しく見る
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}