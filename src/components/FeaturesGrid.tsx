// src/components/FeaturesGrid.tsx
import { FeatureCard } from './FeatureCard'
import { FileText, Calendar, BarChart } from 'lucide-react'

const features = [
  {
    title: 'Billing Summary',
    description: 'Track your invoices, payments, and usage in real-time.',
    icon: FileText,
    href: '/docs/billingsummary',
  },
  {
    title: 'Scheduler',
    description: 'Automate jobs with flexible scheduling and triggers.',
    icon: Calendar,
    href: '/docs/scheduler',
  },
  {
    title: 'Reports',
    description: 'Visualize and export system activity reports.',
    icon: BarChart,
    href: '/docs/reports',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}
