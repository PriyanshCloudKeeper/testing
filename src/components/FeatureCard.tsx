// src/components/FeatureCard.tsx
import { cn } from './primitives/cn'
import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function FeatureCard({ title, description, icon: Icon, href }: FeatureCardProps) {
  return (
    <motion.a
      whileHover={{ y: -4 }}
      href={href}
      className={cn(
        'group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card',
        'dark:border-slate-800 dark:bg-slate-900 dark:shadow-none'
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </motion.a>
  )
}
