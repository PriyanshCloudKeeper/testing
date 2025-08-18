// src/components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-r-[80px] bg-brand-500 p-10 text-white md:py-16"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Build Faster with <span className="text-brand-200">Docs</span>
          </h1>
          <p className="mb-8 max-w-md text-lg text-brand-50/90">
            Everything you need to use Lens & Tuner effectively — guides,
            API references, and best practices.
          </p>
          <Button size="lg" className="bg-white text-brand-600 hover:bg-brand-100">
            Get Started
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center"
        >
          {/* placeholder for illustration or screenshot */}
          <div className="h-72 w-72 rounded-2xl bg-gradient-to-tr from-brand-200 to-brand-500 shadow-card-lg" />
        </motion.div>
      </div>
    </section>
  )
}
