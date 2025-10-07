'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useScrollAnimation'

export default function Hero() {
  const offsetY = useParallax()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32 overflow-hidden">
      {/* パララックス背景要素 */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              理想の住まいを、
              <br />
              <motion.span
                className="text-primary-600 inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                確かな技術
              </motion.span>
              でカタチに。
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              札幌市南区を拠点に、新築・リフォーム・リノベーションまで
              お客様の「こうしたい」を実現する工務店です。
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  まずは無料相談から
                  <motion.svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-primary-600 bg-white border-2 border-primary-600 hover:bg-primary-50 transition-colors shadow-md hover:shadow-lg"
                >
                  施工事例を見る
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative h-96 lg:h-[500px]"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-primary-600/20 rounded-2xl"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="モダンな住宅の外観"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
