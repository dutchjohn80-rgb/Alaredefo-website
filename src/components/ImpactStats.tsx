import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const currentValue = Math.floor(progress * value)

      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value])

  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US')
  }

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-black text-white sm:text-5xl">
        {formatNumber(displayValue)}
        <span className="text-3xl sm:text-4xl">{suffix}</span>
      </p>
    </div>
  )
}

interface ImpactStatsProps {
  stats: Stat[]
  title?: string
  description?: string
}

export function ImpactStats({ stats, title, description }: ImpactStatsProps) {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-800 py-16 sm:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-emerald-700/20 blur-3xl" />
        <div className="absolute -left-40 bottom-40 h-80 w-80 rounded-full bg-emerald-700/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <>
            <h2 className="text-3xl font-black text-white sm:text-4xl">{title}</h2>
            {description && <p className="mt-4 max-w-2xl text-lg text-emerald-100">{description}</p>}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="rounded-2xl bg-emerald-800/40 border border-emerald-700/50 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.12 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {!title && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="rounded-2xl bg-emerald-800/40 border border-emerald-700/50 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}
