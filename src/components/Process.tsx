export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'お問い合わせ・ご相談',
      description: 'まずはお気軽にご相談ください。お電話やフォームから承っております。',
    },
    {
      number: '02',
      title: '現地調査・ヒアリング',
      description: '現地を確認し、お客様のご要望を詳しくお伺いします。',
    },
    {
      number: '03',
      title: 'プランニング・お見積もり',
      description: 'ご要望を基に最適なプランをご提案。詳細なお見積もりも作成します。',
    },
    {
      number: '04',
      title: 'ご契約',
      description: 'プラン・お見積もりにご納得いただけましたら、ご契約となります。',
    },
    {
      number: '05',
      title: '着工・施工',
      description: '確かな技術で丁寧に施工。進捗は随時ご報告いたします。',
    },
    {
      number: '06',
      title: 'お引き渡し・アフターサービス',
      description: '完成検査後、お引き渡し。その後も定期点検でサポートします。',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            安心の家づくり、6つのステップ
          </h2>
          <p className="text-lg text-gray-600">
            初めての方でも安心。ご相談から完成まで、経験豊富なスタッフが丁寧にサポートいたします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-600 text-white text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-6 w-full h-0.5 bg-gray-200 -z-10" style={{ width: 'calc(100% + 2rem)' }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}