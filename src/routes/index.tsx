import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Waveform,
  Code,
  PaintBrushBroad,
  Buildings,
  UsersThree,
  ShieldCheck,
  CheckCircle,
  Copy,
  Check,
  EnvelopeSimple,
  GithubLogo,
  WhatsappLogo,
  List,
  X,
  Sparkle,
  CaretRight,
  GitBranch,
  Storefront,
} from '@phosphor-icons/react'
import AnimatedGradient from '../components/spell/animated-gradient'
import { TiltCard } from '../components/spell/tilt-card'
import { SplitFeatureShowcase } from '../components/ruixen/split-feature-showcase'

export const Route = createFileRoute('/')({ component: Home })

interface Project {
  id: string
  name: string
  url: string
  headline: string
  description: string
  tags: string[]
  icon: typeof Waveform
  previewType: 'titen' | 'pasarlokal'
  meta: string
  color: {
    cardBg: string
    borderHover: string
    iconBox: string
    tag: string
    button: string
  }
}

const projects: Project[] = [
  {
    id: 'titen',
    name: 'titen.nggalek.co',
    url: 'https://titen.nggalek.co',
    headline: 'AI Meeting Transcription & Intelligence',
    description:
      'Transkripsi rapat otomatis dan AI meeting summary tanpa bot pihak ketiga yang mengganggu. Mengutamakan pemrosesan audio privat secara lokal di desktop/web serta auto-sync langsung ke Google Docs.',
    tags: ['AI Speech-to-Text', 'No-Bot Meeting', 'Local & Private Audio', 'Desktop & Web'],
    icon: Waveform,
    previewType: 'titen',
    meta: 'AI Platform • Local & Private Audio',
    color: {
      cardBg: 'from-purple-950/25 via-neutral-900/60 to-neutral-950',
      borderHover: 'hover:border-purple-500/50',
      iconBox: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
      tag: 'bg-purple-950/40 text-purple-300 border-purple-900/50',
      button: 'bg-purple-500/15 text-purple-300 border-purple-500/30 hover:bg-purple-500 hover:text-white',
    },
  },
  {
    id: 'pasarlokal',
    name: 'pasarlokal.com',
    url: 'https://pasarlokal.com',
    headline: 'Katalog WhatsApp & Toko Online Berbasis Google Sheets',
    description:
      'Platform pembuatan toko online instan untuk pedagang dan UMKM lokal. Seluruh katalog, stok, dan varian dikelola langsung via Google Sheets tanpa dashboard rumit, dengan pesanan otomatis masuk rapi ke WhatsApp.',
    tags: ['Google Sheets Engine', 'Direct WhatsApp Orders', 'Micro-Retail UMKM', 'Zero-Sub Platform'],
    icon: Storefront,
    previewType: 'pasarlokal',
    meta: 'Digital Commerce • Google Sheets Engine',
    color: {
      cardBg: 'from-orange-950/25 via-neutral-900/60 to-neutral-950',
      borderHover: 'hover:border-orange-500/50',
      iconBox: 'bg-orange-500/15 border-orange-500/30 text-orange-400',
      tag: 'bg-orange-950/40 text-orange-300 border-orange-900/50',
      button: 'bg-orange-500/15 text-orange-300 border-orange-500/30 hover:bg-orange-500 hover:text-white',
    },
  },
]

type ServiceKey = 'ai' | 'web' | 'design' | 'civic'

interface ServiceDetail {
  id: ServiceKey
  title: string
  subtitle: string
  tagline: string
  description: string
  deliverables: string[]
  stack: string[]
  highlights: {
    title: string
    description: string
  }[]
  liveReference: {
    label: string
    name: string
    url: string
  }
}

const serviceDetails: Record<ServiceKey, ServiceDetail> = {
  ai: {
    id: 'ai',
    title: 'AI-Native Systems & Audio Intelligence',
    subtitle: 'Kecerdasan Buatan Terapan & Speech AI',
    tagline: 'Mengintegrasikan model AI langsung ke alur kerja fungsional dengan privasi data lokal tanpa bot pihak ketiga.',
    description:
      'Kami bukan sekadar membungkus API generik; kami merancang pipeline AI end-to-end yang mengutamakan privasi, zero data leakage, latensi ultra-rendah, serta integrasi mulus dengan ekosistem kerja tim.',
    deliverables: [
      'Speech-to-Text & Transkripsi Cerdas (Whisper on-device & edge)',
      'AI Meeting Intelligence tanpa bot pihak ketiga yang mengganggu',
      'Automated Action Items & Instant Sync ke Google Docs / Notion',
      'Knowledge Base & Local Semantic Search (RAG terisolasi)',
    ],
    stack: ['Whisper', 'ONNX Runtime', 'Cloudflare Workers AI', 'Vector DB', 'PyTorch'],
    highlights: [
      {
        title: 'Zero-Bot Audio Capture',
        description:
          'Merekam dan mentranskripsi rapat langsung dari audio sistem/mikrofon tanpa perlu mengundang bot meeting yang canggung.',
      },
      {
        title: 'Local & Private Audio Inference',
        description:
          'Pemrosesan suara dijalankan secara lokal di perangkat untuk menjaga kerahasiaan percakapan strategis dan data sensitif.',
      },
      {
        title: 'Automated Action Items & Docs Sync',
        description:
          'Rangkuman rapat terstruktur, poin kesepakatan, dan tindak lanjut langsung terkirim rapi ke Google Docs secara otomatis.',
      },
    ],
    liveReference: {
      label: 'Flagship AI Initiative',
      name: 'titen.nggalek.co',
      url: 'https://titen.nggalek.co',
    },
  },
  web: {
    id: 'web',
    title: 'High-Performance Full-Stack Web',
    subtitle: 'Arsitektur Web Modern & Serverless Edge',
    tagline: 'Web applications yang super cepat, ringan, dan tangguh di koneksi seluler maupun jaringan publik terbatas.',
    description:
      'Kami membangun arsitektur modern menggunakan React 19, TanStack Start, dan TypeScript dengan render serverless edge, zero-bloat runtime, serta skor Core Web Vitals 100/100.',
    deliverables: [
      'Full-Stack Web Apps berbasis React 19, TanStack Start & TypeScript',
      'Edge SSR & Static Generation dengan respon sub-50ms',
      'Progressive Web Apps (PWA) dengan offline-first capability',
      'Type-safe API & end-to-end schema validation',
    ],
    stack: ['React 19', 'TanStack Start', 'TypeScript', 'Tailwind CSS v4', 'Cloudflare Edge'],
    highlights: [
      {
        title: 'Sub-50ms Edge Response',
        description:
          'Deployment terdistribusi di edge network global memastikan halaman diakses instan dari jaringan seluler apa pun.',
      },
      {
        title: '100/100 Core Web Vitals',
        description:
          'Optimasi bundle agresif dengan bobot payload minimal, zero layout shift, dan rendering super mulus.',
      },
      {
        title: 'Bebas Iklan & Distraksi',
        description:
          'Arsitektur pembaca konten yang bersih tanpa script tracker pihak ketiga yang memperlambat browser.',
      },
    ],
    liveReference: {
      label: 'Digital Publishing',
      name: 'kabartrenggalek.com',
      url: 'https://kabartrenggalek.com',
    },
  },
  design: {
    id: 'design',
    title: 'Product Design & Design Systems',
    subtitle: 'Desain Berorientasi Pengguna & Aksesibilitas',
    tagline: 'Antarmuka minimalis, hierarki visual bersih, dan design system modular yang konsisten.',
    description:
      'Desain yang kami rancang selalu berakar pada fungsi nyata. Setiap tombol, kontras warna, dan ritme tipografi diuji agar nyaman dibaca warga dan gampang dieksekusi engineer.',
    deliverables: [
      'Atomic Design System modular & token warna terstandar',
      'Wireframing, UX Research lapangan, dan Interactive Prototype',
      'High-contrast Dark/Light mode tokens dengan aksesibilitas WCAG AA',
      'Micro-interactions halus berbasis Motion & CSS shaders',
    ],
    stack: ['Figma Tokens', 'Phosphor Icons', 'Motion', 'Radix Primitives', 'WCAG AA'],
    highlights: [
      {
        title: 'Aksesibilitas WCAG AA',
        description:
          'Kontras warna tinggi dan target sentuh ramah jempol smartphone untuk kemudahan akses seluruh lapisan warga.',
      },
      {
        title: 'Token-Driven Consistency',
        description:
          'Design tokens yang sinkron antara file rancangan dan kode frontend guna mencegah UI inconsistency.',
      },
      {
        title: 'Kerapian Visual & Fungsi',
        description:
          'Menghindari elemen dekoratif tak berguna, mengedepankan keterbacaan tipografi dan kejelasan navigasi.',
      },
    ],
    liveReference: {
      label: 'Design Studio Language',
      name: 'nggalek.co Ecosystem',
      url: 'https://nggalek.co',
    },
  },
  civic: {
    id: 'civic',
    title: 'Civic Tech & Public Information Systems',
    subtitle: 'Teknologi Terbuka untuk Kepentingan Warga',
    tagline: 'Portal keterbukaan data dan sistem layanan publik yang transparan, mudah diakses, dan berdaya guna.',
    description:
      'Membantu institusi publik, faskes, dan inisiatif swadaya warga Trenggalek memiliki dashboard monitoring serta saluran informasi yang bisa diandalkan kapan saja.',
    deliverables: [
      'Dashboard agregasi data real-time ketersediaan faskes & layanan',
      'Platform jurnalisme warga dan kurasi informasi independen',
      'Saluran partisipasi warga dengan privasi terlindungi',
      'Automasi pelaporan dan distribusi warta berbasis open-data',
    ],
    stack: ['Open Health APIs', 'Realtime Sync', 'Geo-spatial Mapping', 'Edge Caching', 'PostgreSQL'],
    highlights: [
      {
        title: 'Agregasi Data Faskes Real-Time',
        description:
          'Sinkronisasi otomatis ketersediaan kamar rawat inap rumah sakit umum dan faskes daerah Trenggalek.',
      },
      {
        title: 'Akses Publik Tanpa Rintangan',
        description:
          'Warga dapat mengecek data kritis tanpa registrasi atau unduh aplikasi berat, langsung via web mobile.',
      },
      {
        title: 'Transparansi & Open Data',
        description:
          'Mendukung keterbukaan informasi publik yang akurat untuk mitigasi kegawatdaruratan warga.',
      },
    ],
    liveReference: {
      label: 'Civic Health Platform',
      name: 'tilik.nggalek.co',
      url: 'https://tilik.nggalek.co',
    },
  },
}

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [activeService, setActiveService] = useState<ServiceKey>('ai')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('labs@nggalek.co')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const currentService = serviceDetails[activeService]

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2.5 group text-neutral-100 font-semibold tracking-tight text-lg"
          >
            <img
              src="/logo.png"
              alt="nggalek.co labs logo"
              className="w-9 h-9 object-contain drop-shadow-[0_2px_10px_rgba(16,185,129,0.2)] group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-white font-bold tracking-tight">nggalek.co</span>
              <span className="text-neutral-500 font-light">/</span>
              <span className="text-emerald-400 font-mono text-sm font-semibold">labs</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a
              href="#karya"
              className="hover:text-neutral-100 transition-colors"
            >
              Works
            </a>
            <a
              href="/showcase"
              className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Showcase</span>
              <span className="px-1.5 py-0.5 text-[10px] uppercase font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                All
              </span>
            </a>
            <a
              href="#alur"
              className="hover:text-neutral-100 transition-colors"
            >
              Alur Kerja
            </a>
            <a
              href="#layanan"
              className="hover:text-neutral-100 transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#prinsip"
              className="hover:text-neutral-100 transition-colors"
            >
              Prinsip
            </a>
            <a
              href="#kontak"
              className="hover:text-neutral-100 transition-colors"
            >
              Kontak
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-neutral-100 text-neutral-950 hover:bg-neutral-200 transition-colors"
            >
              Mulai Project
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-900 bg-neutral-950 px-6 py-5 space-y-4 text-base">
            <a
              href="#karya"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              Works
            </a>
            <a
              href="/showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-emerald-400 font-medium hover:text-emerald-300"
            >
              <span>Showcase (Semua Karya)</span>
              <span className="px-1.5 py-0.5 text-[10px] uppercase font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                5+ Inisiatif
              </span>
            </a>
            <a
              href="#alur"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              Alur Kerja
            </a>
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              Capabilities
            </a>
            <a
              href="#prinsip"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              Prinsip
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              Kontak
            </a>
            <div className="pt-2">
              <a
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full px-4 py-2.5 rounded-lg bg-neutral-100 text-neutral-950 font-medium text-sm"
              >
                Mulai Project
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section with Spell.sh Animated Gradient - STRICTLY NO EYEBROW */}
        <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 border-b border-neutral-900 overflow-hidden">
          {/* Spell.sh Animated Gradient Background - Tuned for slow, tranquil, soothing ambient flow */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <AnimatedGradient
              config={{
                preset: 'custom',
                color1: '#064e3b',
                color2: '#022c22',
                color3: '#09090b',
                speed: 2,
                distortion: 3,
                swirl: 15,
                swirlIterations: 2,
                softness: 95,
                scale: 0.7,
                shape: 'Checks',
                shapeSize: 18,
              }}
              noise={{
                opacity: 0.08,
                scale: 1.5,
              }}
            />
          </div>

          {/* Vignette overlay for text readability */}
          <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,#09090b_90%] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="mb-6">
                <img
                  src="/logo.png"
                  alt="nggalek.co labs mascot"
                  className="w-12 h-12 object-contain drop-shadow-[0_4px_12px_rgba(16,185,129,0.2)]"
                />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Software agency dari komunitas. AI-native, modern, dan impactful.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-neutral-300 leading-relaxed">
                nggalek.co labs adalah software agency dan digital product studio
                berbasis komunitas Trenggalek yang AI-native dari akarnya. Kami
                memadukan modern AI workflows dengan engineering yang solid untuk
                build platform publik, sistem informasi, dan produk digital yang
                menjawab kebutuhan riil.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#karya"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-neutral-100 text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-black/20"
                >
                  <span>Lihat Featured Works</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#layanan"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-neutral-800 text-neutral-200 font-medium text-sm hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  <Sparkle size={18} className="text-emerald-400" />
                  <span>Jelajahi Capabilities</span>
                </a>
              </div>
            </div>

            {/* Metrics & Context Band - NO EYEBROW */}
            <div className="mt-20 pt-10 border-t border-neutral-900/80 grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold tracking-tight text-emerald-400 font-mono">
                  AI-Native
                </div>
                <div className="mt-1 text-sm text-neutral-400">
                  AI-first workflows & intelligent products
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight text-white font-mono">
                  4+
                </div>
                <div className="mt-1 text-sm text-neutral-400">
                  Live public products yang aktif dirawat
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight text-white font-mono">
                  100%
                </div>
                <div className="mt-1 text-sm text-neutral-400">
                  Community-driven dari Trenggalek
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight text-white font-mono">
                  Modern
                </div>
                <div className="mt-1 text-sm text-neutral-400">
                  Edge web architecture & cloud scale
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Works Section with Spell.sh TiltCard - STRICTLY NO EYEBROW */}
        <section id="karya" className="py-24 border-b border-neutral-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Featured Works & Flagship Initiatives
                </h2>
                <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
                  Dua karya unggulan yang kami inisiasi, rancang, dan rawat mandiri: platform transkripsi rapat berbasis on-device AI dan sistem toko online instan terintegrasi WhatsApp &amp; Google Sheets.
                </p>
              </div>
              <a
                href="/showcase"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-all group shrink-0"
              >
                <span>Lihat Semua Showcase (5+ Inisiatif)</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => {
                const IconComponent = project.icon
                return (
                  <TiltCard
                    key={project.id}
                    tiltLimit={10}
                    scale={1.02}
                    spotlight={true}
                    className="h-full rounded-xl overflow-hidden"
                  >
                    <div className={`h-full flex flex-col justify-between rounded-xl border border-neutral-800/90 bg-gradient-to-br ${project.color.cardBg} p-5 sm:p-7 ${project.color.borderHover} transition-all duration-300`}>
                      <div>
                        {/* Top Header of Card */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <div className={`w-10 h-10 rounded-lg shrink-0 ${project.color.iconBox} flex items-center justify-center transition-colors`}>
                              <IconComponent size={22} weight="regular" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group/link max-w-full"
                              >
                                <span className="truncate">{project.name}</span>
                                <ArrowUpRight
                                  size={14}
                                  className="shrink-0 text-neutral-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                />
                              </a>
                              <div className="text-[11px] sm:text-xs text-neutral-400 font-mono mt-0.5 truncate">
                                {project.meta}
                              </div>
                            </div>
                          </div>

                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`shrink-0 whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-md ${project.color.button} transition-colors`}
                          >
                            Buka Situs
                          </a>
                        </div>

                        {/* Title & Description */}
                        <h3 className="mt-5 text-xl font-semibold text-neutral-100 leading-snug">
                          {project.headline}
                        </h3>
                        <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Interactive / Visual context block */}
                        <div className="mt-5 p-4 rounded-lg bg-neutral-950/80 border border-neutral-800/80 text-xs font-mono">
                          {project.previewType === 'titen' && (
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center justify-between gap-1 text-neutral-400">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                  Meeting Transcription & AI Audio
                                </span>
                                <span className="text-emerald-400">Tanpa Bot Meeting</span>
                              </div>
                              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-900 text-neutral-300">
                                <div>
                                  <span className="text-neutral-500 block text-[10px]">Privasi</span>
                                  Audio Privat Lokal
                                </div>
                                <div>
                                  <span className="text-neutral-500 block text-[10px]">Sinkronisasi</span>
                                  Google Docs Auto-Sync
                                </div>
                                <div>
                                  <span className="text-neutral-500 block text-[10px]">Setup</span>
                                  Siap 30 Detik
                                </div>
                              </div>
                            </div>
                          )}

                          {project.previewType === 'pasarlokal' && (
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center justify-between gap-1 text-neutral-400">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                  Katalog Toko & Pesan WhatsApp
                                </span>
                                <span className="text-orange-400">namatoko.pasarlokal.com</span>
                              </div>
                              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-900 text-neutral-300">
                                <div>
                                  <span className="text-neutral-500 block text-[10px]">Backend</span>
                                  100% Google Sheets
                                </div>
                                <div>
                                  <span className="text-neutral-500 block text-[10px]">Checkout</span>
                                  Direct Chat WhatsApp
                                </div>
                                <div>
                                  <span className="text-neutral-500 block text-[10px]">Model Biaya</span>
                                  Sekali Bayar (No-Sub)
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bottom Tags */}
                      <div className="mt-6 pt-5 border-t border-neutral-800/60 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-1 text-xs rounded-md ${project.color.tag}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                )
              })}
            </div>

            {/* Bottom Showcase Discovery Banner */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-neutral-800/80 bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-neutral-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                  Eksplorasi Ekosistem Digital Komunitas
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Temukan inisiatif civic tech, media warga, dan open data lainnya
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 max-w-xl">
                  Buka dedicated showcase untuk melihat profil lengkap kabartrenggalek.com, tilik.nggalek.co (pantauan bed RS realtime), dan media komunitas nggalek.co.
                </p>
              </div>
              <a
                href="/showcase"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neutral-100 text-neutral-950 hover:bg-neutral-200 text-sm font-semibold transition-colors shadow-lg"
              >
                <span>Buka Showcase Page</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Ruixen Split Feature Showcase Section - STRICTLY NO EYEBROW */}
        <section id="alur" className="py-24 border-b border-neutral-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Alur Kerja & Ekosistem Terbuka
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
                Bagaimana kami mendengarkan aspirasi warga, merespons kebutuhan
                sistem informasi lokal, dan merawat platform digital bersama tim
                komunitas.
              </p>
            </div>

            <SplitFeatureShowcase
              leftTitle="Dialog Terbuka dengan Komunitas."
              leftDescription="Ngobrol langsung dengan warga dan inisiator lokal buat memetakan kebutuhan riil, lalu dieksekusi jadi software tanpa birokrasi berbelit."
              rightTitle="AI-Native & Production-Ready."
              rightDescription="Menggabungkan kecerdasan AI modern dengan standar engineering tinggi untuk melahirkan sistem yang cepat, tangguh, dan gampang dirawat."
            />
          </div>
        </section>

        {/* REVAMPED INTERACTIVE SERVICES & CAPABILITIES CONSOLE - STRICTLY NO EYEBROW */}
        <section id="layanan" className="py-24 border-b border-neutral-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Services & Engineering Capabilities
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
                Bukan sekadar agensi lepas tangan. Kami bekerja sebagai technical
                partner yang mengurus software dari konsep, arsitektur data,
                integrasi AI, sampai live deployment di serverless edge.
              </p>
            </div>

            {/* Interactive Capability Selector Tabs with Distinct Color Personalities */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  key: 'ai' as ServiceKey,
                  icon: Sparkle,
                  label: 'AI-Native Systems',
                  shortDesc: 'Speech, LLMs & Local Models',
                  activeClass: 'border-purple-500/80 bg-gradient-to-br from-purple-950/50 via-neutral-900 to-neutral-950 shadow-[0_0_25px_rgba(168,85,247,0.18)]',
                  activeIcon: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
                  activeCaret: 'text-purple-400',
                },
                {
                  key: 'web' as ServiceKey,
                  icon: Code,
                  label: 'Modern Full-Stack',
                  shortDesc: 'React 19 & Edge Deploys',
                  activeClass: 'border-sky-500/80 bg-gradient-to-br from-sky-950/50 via-neutral-900 to-neutral-950 shadow-[0_0_25px_rgba(14,165,233,0.18)]',
                  activeIcon: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
                  activeCaret: 'text-sky-400',
                },
                {
                  key: 'design' as ServiceKey,
                  icon: PaintBrushBroad,
                  label: 'Product Design',
                  shortDesc: 'Design Systems & UI/UX',
                  activeClass: 'border-pink-500/80 bg-gradient-to-br from-pink-950/50 via-neutral-900 to-neutral-950 shadow-[0_0_25px_rgba(236,72,153,0.18)]',
                  activeIcon: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
                  activeCaret: 'text-pink-400',
                },
                {
                  key: 'civic' as ServiceKey,
                  icon: Buildings,
                  label: 'Civic Systems',
                  shortDesc: 'Open Data & Public Health',
                  activeClass: 'border-amber-500/80 bg-gradient-to-br from-amber-950/50 via-neutral-900 to-neutral-950 shadow-[0_0_25px_rgba(245,158,11,0.18)]',
                  activeIcon: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
                  activeCaret: 'text-amber-400',
                },
              ].map((tab) => {
                const IconComponent = tab.icon
                const isActive = activeService === tab.key
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveService(tab.key)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                      isActive
                        ? tab.activeClass
                        : 'bg-neutral-900/30 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                          isActive
                            ? tab.activeIcon
                            : 'bg-neutral-800 text-neutral-400 border-transparent'
                        }`}
                      >
                        <IconComponent size={20} weight={isActive ? 'bold' : 'regular'} />
                      </div>
                      <CaretRight
                        size={16}
                        className={`transition-transform ${
                          isActive ? `${tab.activeCaret} rotate-90` : 'text-neutral-600'
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">{tab.label}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{tab.shortDesc}</div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Active Service Detailed Console */}
            <div className={`mt-8 rounded-2xl border p-8 sm:p-10 transition-all duration-300 ${
              activeService === 'ai'
                ? 'border-purple-500/30 bg-gradient-to-br from-purple-950/20 via-neutral-900/60 to-neutral-950'
                : activeService === 'web'
                  ? 'border-sky-500/30 bg-gradient-to-br from-sky-950/20 via-neutral-900/60 to-neutral-950'
                  : activeService === 'design'
                    ? 'border-pink-500/30 bg-gradient-to-br from-pink-950/20 via-neutral-900/60 to-neutral-950'
                    : 'border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-neutral-900/60 to-neutral-950'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left side: Narrative & Deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {currentService.title}
                    </h3>
                    <div className="mt-1.5 text-xs font-mono text-emerald-400 tracking-wider">
                      {currentService.subtitle}
                    </div>
                    <p className="mt-3 text-base text-neutral-300 leading-relaxed">
                      {currentService.tagline}
                    </p>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                      {currentService.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80">
                    <div className="text-xs font-mono text-neutral-400 mb-3">
                      APA SAJA YANG KAMI KERJAKAN & DELIVER:
                    </div>
                    <ul className="space-y-2.5">
                      {currentService.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-neutral-300"
                        >
                          <CheckCircle
                            size={18}
                            className="text-emerald-400 shrink-0 mt-0.5"
                            weight="fill"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reference indicator */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {currentService.liveReference.label}
                    </span>
                    <a
                      href={currentService.liveReference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Lihat Contoh Live</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Right side: Interactive Spec / Code Simulation */}
                <div className="lg:col-span-5 rounded-xl border border-neutral-800 bg-neutral-950 p-6 font-mono text-xs text-neutral-300 shadow-inner space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                    </div>
                    <span>spec.preview.ts</span>
                  </div>

                  {activeService === 'ai' && (
                    <div className="space-y-3 leading-relaxed">
                      <div className="text-neutral-500">// AI-native local speech intelligence pipeline</div>
                      <div>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-white">titenCore</span> ={' '}
                        <span className="text-purple-400">new</span>{' '}
                        <span className="text-emerald-400">AIIntelligence</span>({'{'}
                        <div className="pl-4 text-neutral-400">
                          privacy: <span className="text-emerald-300">&quot;100% on-device&quot;</span>,<br />
                          model: <span className="text-emerald-300">&quot;whisper-local-quantized&quot;</span>,<br />
                          summaryAgent: <span className="text-sky-300">true</span>,<br />
                          botRequired: <span className="text-rose-400">false</span>,
                        </div>
                        {'}'})
                      </div>
                      <div className="p-3 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-emerald-400">
                        ⚡ Real-time stream active • No bot required • Auto Google Docs Sync ready
                      </div>
                    </div>
                  )}

                  {activeService === 'web' && (
                    <div className="space-y-3 leading-relaxed">
                      <div className="text-neutral-500">// Modern edge SSR build manifest</div>
                      <div>
                        <span className="text-emerald-400">$</span> pnpm build --target=edge
                      </div>
                      <div className="text-neutral-400 space-y-1 text-[11px]">
                        <div>✓ 134 modules bundled in 190ms</div>
                        <div>✓ Client payload: 24.8 kB (gzipped)</div>
                        <div>✓ Edge cold start: &lt; 20ms</div>
                        <div>✓ Core Web Vitals score: 100/100</div>
                      </div>
                      <div className="p-3 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-sky-400">
                        ⚡ Deployed to Cloudflare Edge Network across 300+ regions
                      </div>
                    </div>
                  )}

                  {activeService === 'design' && (
                    <div className="space-y-3 leading-relaxed">
                      <div className="text-neutral-500">// Design tokens & component primitives</div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                          <span className="text-neutral-500 block text-[10px]">Primary Brand</span>
                          #10b981 Emerald
                        </div>
                        <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                          <span className="text-neutral-500 block text-[10px]">Surface Base</span>
                          #09090b Neutral
                        </div>
                      </div>
                      <div className="p-3 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300">
                        <span className="text-emerald-400">✓ WCAG AA Compliant</span> • Mobile touch targets • Consistent typography scale
                      </div>
                    </div>
                  )}

                  {activeService === 'civic' && (
                    <div className="space-y-3 leading-relaxed">
                      <div className="text-neutral-500">// Open data & faskes aggregation status</div>
                      <div className="space-y-1 text-[11px] text-neutral-400">
                        <div>&gt; Fetching data dari Kemenkes... <span className="text-emerald-400">OK</span></div>
                        <div>&gt; Agregasi ketersediaan bed faskes Trenggalek... <span className="text-emerald-400">OK</span></div>
                      </div>
                      <div className="p-3 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-amber-400">
                        ⚡ Realtime bed availability broadcasted to Trenggalek citizens
                      </div>
                    </div>
                  )}

                  <div className="pt-3 border-t border-neutral-800 flex flex-wrap gap-1.5">
                    {currentService.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 text-[10px] border border-neutral-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVAMPED BENTO GRID: PRINSIP & ENGINEERING VALUES - STRICTLY NO EYEBROW */}
        <section id="prinsip" className="py-24 border-b border-neutral-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Prinsip & Engineering Values
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
                Standar yang kami pegang dalam setiap baris kode, arsitektur, dan
                keputusan produk yang kami buat.
              </p>
            </div>

            {/* Asymmetric Modern Bento Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Bento Card 1: AI-Native & Human-Centered (Large horizontal card - 7 cols) */}
              <div className="md:col-span-7 rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-700/80 transition-all duration-200">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                    <Sparkle size={24} weight="regular" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    AI-Native & Human-Centered
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                    Kami memanfaatkan kecerdasan AI untuk melipatgandakan kecepatan riset,
                    prototyping, dan engineering—namun setiap keputusan arsitektur, empati desain,
                    dan logika bisnis tetap berakar pada etika dan kebutuhan riil manusia.
                  </p>
                </div>

                {/* Visual Widget inside Bento */}
                <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-xs">
                    <span className="text-emerald-400 block font-semibold mb-1">On-Device Priority</span>
                    <span className="text-neutral-400 text-[11px]">Privasi data lokal tanpa kebocoran prompt</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-xs">
                    <span className="text-sky-400 block font-semibold mb-1">+5x Speedup</span>
                    <span className="text-neutral-400 text-[11px]">Automasi alur kerja repetitif engineer</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-xs">
                    <span className="text-white block font-semibold mb-1">100% Verified</span>
                    <span className="text-neutral-400 text-[11px]">Validasi manual setiap baris logika</span>
                  </div>
                </div>
              </div>

              {/* Bento Card 2: Akar Komunitas, Standar Global (5 cols) */}
              <div className="md:col-span-5 rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-700/80 transition-all duration-200">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-neutral-800/70 border border-neutral-700/50 flex items-center justify-center text-emerald-400 mb-6">
                    <UsersThree size={24} weight="regular" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Akar Komunitas, Standar Global
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Lahir dari semangat gotong royong komunitas lokal Trenggalek, tapi dijalankan
                    dengan best practice software engineering dan arsitektur kelas industri di setiap karya yang kami rilis.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2 text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Trenggalek Digital Ecosystem
                  </span>
                  <span className="text-emerald-400">Global Standards</span>
                </div>
              </div>

              {/* Bento Card 3: Pragmatis & Zero Bloatware (5 cols) */}
              <div className="md:col-span-5 rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-700/80 transition-all duration-200">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-neutral-800/70 border border-neutral-700/50 flex items-center justify-center text-emerald-400 mb-6">
                    <ShieldCheck size={24} weight="regular" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Pragmatis & Zero Bloatware
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Kami build fitur yang beneran bernilai buat user. Menghindari over-engineering
                    dan kerumitan teknologi yang tidak perlu, menghasilkan sistem yang ringan, cepat, dan berdaya guna.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800">
                    Bundle &lt; 30kB
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800">
                    Sub-50ms TTFB
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800">
                    No Junk Libs
                  </span>
                </div>
              </div>

              {/* Bento Card 4: Clean Code & Maintainability (Large horizontal card - 7 cols) */}
              <div className="md:col-span-7 rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-700/80 transition-all duration-200">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle size={24} weight="regular" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Clean Code & Maintainability
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                    Setiap baris kode ditulis rapi, modular, dan terdokumentasi dengan baik. Kami pastikan
                    produk yang di-deliver gampang dirawat, di-audit, dan dikembangkan mandiri oleh tim mana pun dalam jangka panjang.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800/80 p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 font-mono text-xs text-neutral-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <GitBranch size={16} className="text-emerald-400" />
                    <span className="text-neutral-300">Strict TypeScript • Clean Architecture • Modular Primitives</span>
                  </div>
                  <span className="text-emerald-400 shrink-0">Ready for Handoff</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Collaboration Section - STRICTLY NO EYEBROW */}
        <section id="kontak" className="py-24 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex mb-6">
              <img
                src="/logo.png"
                alt="nggalek.co labs"
                className="w-16 h-16 object-contain drop-shadow-[0_4px_16px_rgba(16,185,129,0.2)] hover:scale-105 transition-transform duration-200"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s Build Something Meaningful
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Punya ide produk baru, butuh partner software development,
              atau tertarik kolaborasi di project civic tech? Hubungi kami langsung
              untuk diskusi santai tanpa birokrasi berbelit.
            </p>

            {/* Direct 3-column contact channel cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
              {/* WhatsApp Fast Response */}
              <a
                href="https://wa.me/6281358999660?text=Halo%20nggalek.co%20labs%2C%20saya%20ingin%20diskusi%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors mb-5">
                    <WhatsappLogo size={24} weight="fill" />
                  </div>
                  <div className="text-xs text-neutral-500 font-mono">
                    Fast Response • WhatsApp
                  </div>
                  <div className="mt-1 text-base font-semibold text-white group-hover:text-emerald-400 transition-colors font-mono">
                    +62 813-5899-9660
                  </div>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    Respon cepat untuk konsultasi awal, scoping ide produk, atau tanya-tanya arsitektur teknologi.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-emerald-400 font-medium">
                  <span>Chat WhatsApp</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Official Email */}
              <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors mb-5">
                    <EnvelopeSimple size={24} />
                  </div>
                  <div className="text-xs text-neutral-500 font-mono">
                    Official Email
                  </div>
                  <a
                    href="mailto:labs@nggalek.co"
                    className="mt-1 text-base font-semibold text-white hover:text-emerald-400 transition-colors block font-mono"
                  >
                    labs@nggalek.co
                  </a>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    Kirimkan proposal, brief spesifikasi produk, atau undangan kolaborasi resmi.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 hover:text-white transition-colors text-xs font-mono font-medium flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>Email Berhasil Disalin</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Salin Alamat Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* GitHub Organization */}
              <a
                href="https://github.com/nggalek-co/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors mb-5">
                    <GithubLogo size={24} />
                  </div>
                  <div className="text-xs text-neutral-500 font-mono">
                    GitHub Organization
                  </div>
                  <div className="mt-1 text-base font-semibold text-white group-hover:text-emerald-400 transition-colors font-mono">
                    github.com/nggalek-co
                  </div>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    Lihat repositori inisiatif kami, berkontribusi pada kode sumber terbuka, atau pantau aktivitas tim.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white font-medium">
                  <span>Kunjungi GitHub Org</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Clean, Elegant Footer without Redundant Showcase Links */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-12 text-sm text-neutral-400">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-900">
            <div className="flex items-center gap-3.5">
              <img
                src="/logo.png"
                alt="nggalek.co labs"
                className="w-11 h-11 object-contain drop-shadow-[0_2px_12px_rgba(16,185,129,0.2)]"
              />
              <div>
                <div className="flex items-center gap-1.5 text-white font-bold text-base leading-none">
                  <span>nggalek.co</span>
                  <span className="text-neutral-500 font-light">/</span>
                  <span className="text-emerald-400 font-mono text-sm font-semibold">labs</span>
                </div>
                <p className="mt-1.5 text-xs text-neutral-500 max-w-md">
                  AI-native community software agency dari Trenggalek, Jawa Timur.
                </p>
              </div>
            </div>

            {/* Navigation links directly in main row */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-400">
              <a href="#karya" className="hover:text-neutral-200 transition-colors">
                Works
              </a>
              <a href="/showcase" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Showcase
              </a>
              <a href="#alur" className="hover:text-neutral-200 transition-colors">
                Alur Kerja
              </a>
              <a href="#layanan" className="hover:text-neutral-200 transition-colors">
                Capabilities
              </a>
              <a href="#prinsip" className="hover:text-neutral-200 transition-colors">
                Prinsip
              </a>
              <a href="#kontak" className="hover:text-neutral-200 transition-colors">
                Kontak
              </a>
              <a
                href="https://github.com/nggalek-co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-neutral-500"
              >
                <GithubLogo size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="https://wa.me/6281358999660?text=Halo%20nggalek.co%20labs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 text-neutral-500"
              >
                <WhatsappLogo size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              &copy; {new Date().getFullYear()} nggalek.co labs. Dibangun bersama komunitas Trenggalek.
            </div>
            <div className="font-mono text-[11px] text-neutral-600">
              Craftsmanship • Impact • Open Web
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
