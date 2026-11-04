import { motion } from 'motion/react'
import { cn } from '../../lib/utils'

const S = { type: 'spring' as const, stiffness: 300, damping: 28 }
const S_SNAP = { type: 'spring' as const, stiffness: 440, damping: 26 }
const S_SOFT = { type: 'spring' as const, stiffness: 260, damping: 24 }
const S_MICRO = { type: 'spring' as const, stiffness: 500, damping: 30 }

export interface SplitFeatureShowcaseProps {
  leftTitle?: string
  leftDescription?: string
  rightTitle?: string
  rightDescription?: string
  className?: string
  workflowItems?: string[]
}

const DEFAULT_WORKFLOW_ITEMS = [
  'Portal Berita Cepat & PWA (kabartrenggalek.com)',
  'Toko Online & Katalog WhatsApp (pasarlokal.com)',
  'Advokasi Warga & Komunitas (nggalek.co)',
  'Pantauan Bed RS Terpadu (tilik.nggalek.co)',
  'Titen — AI Meeting Transcription & Audio Intelligence',
  'AI-Native Engineering & Agentic Pipelines',
  'High-Performance Modern Web Architecture',
  'Civic Systems & Open Data Pipelines',
]

export function SplitFeatureShowcase({
  leftTitle = 'Dialog Terbuka dengan Komunitas.',
  leftDescription = 'Ngobrol langsung dengan warga dan inisiator lokal buat memetakan kebutuhan riil, lalu dieksekusi jadi software tanpa birokrasi berbelit.',
  rightTitle = 'AI-Native & Production-Ready.',
  rightDescription = 'Menggabungkan kecerdasan AI modern dengan standar engineering tinggi untuk melahirkan sistem yang cepat, tangguh, dan gampang dirawat.',
  className,
  workflowItems = DEFAULT_WORKFLOW_ITEMS,
}: SplitFeatureShowcaseProps) {
  // Find index of Titen to ensure Titen is always the focal highlight
  const titenIndex = workflowItems.findIndex((item) => item.includes('Titen'))
  const highlightCenter = titenIndex !== -1 ? titenIndex : Math.floor(workflowItems.length / 2)

  return (
    <div className={cn('w-full', className)}>
      <div className="relative grid overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 divide-y divide-neutral-800 md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Left cell: Conversation thread */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...S, delay: 0 }}
          className="flex flex-col justify-between p-8 sm:p-10"
        >
          <div className="mx-auto max-w-sm w-full space-y-4 my-auto">
            {/* Sender avatar & info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...S_SNAP, delay: 0.15 }}
              className="flex items-center gap-2.5"
            >
              <div className="relative">
                <div className="size-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-xs font-semibold text-white ring-2 ring-neutral-950">
                  WK
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 block size-2.5 rounded-full bg-emerald-500 ring-2 ring-neutral-950" />
              </div>
              <div>
                <span className="text-xs font-medium text-neutral-200 block leading-tight">
                  Warga Komunitas
                </span>
                <span className="text-neutral-500 text-[10px]">Baru saja</span>
              </div>
            </motion.div>

            {/* Inbound message */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...S_SOFT, delay: 0.25 }}
              whileHover={{ scale: 1.01, y: -1, transition: S_MICRO }}
              className="relative ml-10 w-fit"
            >
              <div className="cursor-default rounded-2xl rounded-tl-[4px] bg-neutral-800/90 px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed text-neutral-200 border border-neutral-700/60 shadow-sm">
                Halo{' '}
                <span className="font-semibold text-emerald-400">
                  @nggaleklabs
                </span>
                , bisa deploy sistem transkripsi rapat cerdas tanpa bot pihak ketiga yang aman dan privat?
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...S_SNAP, delay: 0.55 }}
                className="absolute -bottom-2.5 right-3 flex h-5 items-center rounded-full bg-neutral-900 border border-neutral-700 px-2 text-[10px]"
              >
                🎙️
              </motion.div>
            </motion.div>

            {/* Outbound reply */}
            <div className="flex items-end justify-end gap-2.5 pt-2">
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...S_SOFT, delay: 0.45 }}
                whileHover={{ scale: 1.01, y: -1, transition: S_MICRO }}
                className="w-fit cursor-default rounded-2xl rounded-tr-[4px] bg-emerald-500 text-neutral-950 font-medium px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-sm"
              >
                Beres! Titen (AI transkripsi audio lokal tanpa bot) sudah live di titen.nggalek.co.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...S_SNAP, delay: 0.4 }}
                className="shrink-0"
              >
                <img
                  src="/logo.png"
                  alt="nggalek.co labs"
                  className="size-8 object-contain rounded-full ring-2 ring-emerald-500/30 bg-neutral-900 p-0.5"
                />
              </motion.div>
            </div>

            {/* Typing status */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...S_SOFT, delay: 0.7 }}
              className="ml-10 w-fit"
            >
              <div className="flex items-center gap-1 rounded-2xl rounded-tl-[4px] bg-neutral-850 px-3 py-2 border border-neutral-800">
                <span className="block size-1.5 rounded-full bg-neutral-500 animate-pulse" />
                <span className="block size-1.5 rounded-full bg-neutral-500 animate-pulse delay-100" />
                <span className="block size-1.5 rounded-full bg-neutral-500 animate-pulse delay-200" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...S, delay: 0.5 }}
            className="mt-8 text-center sm:text-left"
          >
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
              <strong className="font-semibold text-white">{leftTitle}</strong>{' '}
              <span className="text-neutral-400">{leftDescription}</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Right cell: Workflow Items List with Titen Highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...S, delay: 0.12 }}
          className="flex flex-col justify-between p-8 sm:p-10"
        >
          <div className="my-auto flex flex-col items-center justify-center py-6">
            <div className="flex flex-col items-center gap-3 w-full max-w-sm">
              {workflowItems.map((label, i) => {
                const dist = Math.abs(i - highlightCenter)
                const isTiten = i === highlightCenter

                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{
                      ...S_SOFT,
                      delay: 0.15 + i * 0.06,
                    }}
                    className={cn(
                      'text-xs sm:text-sm tracking-tight transition-all duration-300 px-3.5 py-1.5 rounded-md text-center',
                      isTiten
                        ? 'font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 ring-1 ring-emerald-500/20 shadow-sm'
                        : dist === 1
                          ? 'text-neutral-200'
                          : dist === 2
                            ? 'text-neutral-400'
                            : 'text-neutral-600'
                    )}
                  >
                    {label}
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...S, delay: 0.5 }}
            className="mt-8 text-center sm:text-left"
          >
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
              <strong className="font-semibold text-white">{rightTitle}</strong>{' '}
              <span className="text-neutral-400">{rightDescription}</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
