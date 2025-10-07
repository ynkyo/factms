'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-normal text-gray-100 mb-4 tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7 }}
          >
            サービス内容
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            お客様のニーズに合わせた幅広いサービスをご提供します
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              style={{ perspective: 1000 }}
            >
              <Link
                href={service.href}
                className="group block bg-dark-800/50 backdrop-blur-sm border border-primary-900/30 rounded-lg overflow-hidden hover:shadow-2xl hover:border-primary-700/50 transition-all duration-300"
              >
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
                <motion.div
                  className="p-6"
                  whileHover={{ backgroundColor: "rgba(45, 45, 45, 0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    className="text-xl font-medium text-gray-100 mb-2 group-hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                  <motion.div
                    className="mt-4 flex items-center text-primary-400 font-medium"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    詳しく見る
                    <motion.svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
