import { createFileRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  Waveform,
  Storefront,
  Newspaper,
  Hospital,
  MegaphoneSimple,
  Sparkle,
  CheckCircle,
  MagnifyingGlass,
  WhatsappLogo,
  EnvelopeSimple,
  GithubLogo,
  List,
  X,
} from '@phosphor-icons/react'
import { TiltCard } from '../components/spell/tilt-card'

export const Route = createFileRoute('/showcase')({
  component: ShowcasePage,
})

type Category = 'all' | 'ai' | 'commerce' | 'media' | 'civic'

interface ShowcaseItem {
  id: string
  name: string
  url: string
  category: 'ai' | 'commerce' | 'media' | 'civic'
  categoryLabel: string
  badge: string
  headline: string
  description: string
  problem: string
  solution: string
  highlights: string[]
  tags: string[]
  stack: string[]
  icon: typeof Waveform
  color: {
    badge: string
    borderHover: string
    iconBox: string
    tag: string
    button: string
    cardBg: string
    glow: string
  }
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'titen',
    name: 'titen.nggalek.co',
    url: 'https://titen.nggalek.co',
    category: 'ai',
    categoryLabel: 'AI & Speech Intelligence',
    badge: 'Flagship AI Initiative',
    headline: 'AI Meeting Transcription & Audio Intelligence',
    description:
      'Transkripsi rapat otomatis dan AI meeting summary tanpa bot pihak ketiga yang mengganggu. Mengutamakan pemrosesan audio privat secara lokal di desktop/web serta auto-sync langsung ke Google Docs.',
    problem:
      'Bot rapat pihak ketiga kerap mengganggu jalannya meeting, rawan disconnect, dan berisiko membocorkan percakapan strategis ke server cloud eksternal.',
    solution:
      'Merekam audio langsung via browser/perangkat tanpa mengundang bot, mengeksekusi inferensi model Whisper terkuantisasi secara privat, dan menyinkronkan ringkasan aksi otomatis ke Google Docs.',
    highlights: [
      'Zero-bot meeting transcription tanpa interupsi alur rapat',
      'Inference audio lokal & privat untuk keamanan data sensitif',
      'Ringkasan terstruktur & action items otomatis ke Google Docs',
      'Instalasi instan siap pakai dalam 30 detik di web & desktop',
    ],
    tags: ['Speech-to-Text', 'Whisper On-Device', 'Privacy-First AI', 'Docs Auto-Sync'],
    stack: ['React 19', 'Whisper Quantized', 'Cloudflare Workers AI', 'Web Audio API', 'ONNX Runtime'],
    icon: Waveform,
    color: {
      badge: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
      borderHover: 'hover:border-purple-500/50',
      iconBox: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
      tag: 'bg-purple-950/40 text-purple-300 border-purple-900/50',
      button: 'bg-purple-500/15 text-purple-300 border-purple-500/30 hover:bg-purple-500 hover:text-white',
      cardBg: 'from-purple-950/20 via-neutral-900/60 to-neutral-950',
      glow: 'shadow-[0_0_35px_rgba(168,85,247,0.12)]',
    },
  },
  {
    id: 'pasarlokal',
    name: 'pasarlokal.com',
    url: 'https://pasarlokal.com',
    category: 'commerce',
    categoryLabel: 'Digital Commerce & Micro-Retail',
    badge: 'E-Commerce Engine',
    headline: 'Katalog WhatsApp & Toko Online Berbasis Google Sheets',
    description:
      'Platform pembuatan toko online instan untuk pedagang dan UMKM lokal. Seluruh katalog, stok, dan varian dikelola langsung via Google Sheets tanpa dashboard rumit, dengan pesanan otomatis masuk rapi ke WhatsApp.',
    problem:
      'Pedagang dan pelaku UMKM kelelahan mengetik ulang harga, mencari foto di galeri HP yang menumpuk, serta merekap pesanan yang tercecer di berbagai pesan WhatsApp.',
    solution:
      'Memberikan alamat toko web mandiri (namatoko.pasarlokal.com) yang dikelola 100% dari spreadsheet Google Drive pengguna. Pembeli bebas memilih produk & varian di keranjang, lalu checkout otomatis mengirim chat WhatsApp rapi.',
    highlights: [
      'Pengelolaan produk, harga, & stok langsung dari Google Sheets',
      'Checkout otomatis mengirim teks pesanan terstruktur ke WhatsApp',
      'Tanpa biaya langganan bulanan — skema sekali bayar Rp 99.000',
      'Ringan, instan, & PWA ready tanpa perlu unduh aplikasi oleh pembeli',
    ],
    tags: ['Google Sheets Engine', 'Direct WhatsApp Orders', 'Micro-Retail UMKM', 'Zero-Sub Platform'],
    stack: ['React 19', 'Google Sheets API', 'Google Drive Auth', 'Cloudflare Edge', 'WhatsApp Protocol'],
    icon: Storefront,
    color: {
      badge: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
      borderHover: 'hover:border-orange-500/50',
      iconBox: 'bg-orange-500/15 border-orange-500/30 text-orange-400',
      tag: 'bg-orange-950/40 text-orange-300 border-orange-900/50',
      button: 'bg-orange-500/15 text-orange-300 border-orange-500/30 hover:bg-orange-500 hover:text-white',
      cardBg: 'from-orange-950/20 via-neutral-900/60 to-neutral-950',
      glow: 'shadow-[0_0_35px_rgba(249,115,22,0.12)]',
    },
  },
  {
    id: 'kabartrenggalek',
    name: 'kabartrenggalek.com',
    url: 'https://kabartrenggalek.com',
    category: 'media',
    categoryLabel: 'Digital Publishing & Citizen Journalism',
    badge: 'Independent Media',
    headline: 'Media Berita Lokal Independen, Tajam & Berkecepatan Tinggi',
    description:
      'Portal berita dan citizen journalism Trenggalek dengan modern web architecture, PWA, dan performa tinggi. Liputan peristiwa lokal yang tajam dengan pengalaman baca bersih tanpa spam iklan.',
    problem:
      'Situs media lokal konvensional kerap lambat dimuat di ponsel, boros kuota, dan dipenuhi iklan pop-up clickbait yang merusak pengalaman membaca warga.',
    solution:
      'Arsitektur web berbasis edge computing dengan static caching agresif dan PWA offline-first. Menghadirkan situs berita dengan skor performa 100/100, respons sub-50ms, dan 100% bebas dari spam iklan.',
    highlights: [
      'Sub-50ms time-to-first-byte melalui global edge caching',
      'Desain editorial bersih dan tipografi nyaman untuk ponsel',
      'PWA berkemampuan offline untuk pembaca di daerah minim sinyal',
      'Kanal citizen journalism langsung dari kontributor komunitas desa',
    ],
    tags: ['Edge PWA', 'Citizen Journalism', 'Ad-Free Reading', '100 Core Web Vitals'],
    stack: ['React 19', 'TanStack Start', 'Cloudflare Workers & Pages', 'TypeScript', 'Tailwind CSS'],
    icon: Newspaper,
    color: {
      badge: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
      borderHover: 'hover:border-sky-500/50',
      iconBox: 'bg-sky-500/15 border-sky-500/30 text-sky-400',
      tag: 'bg-sky-950/40 text-sky-300 border-sky-900/50',
      button: 'bg-sky-500/15 text-sky-300 border-sky-500/30 hover:bg-sky-500 hover:text-white',
      cardBg: 'from-sky-950/20 via-neutral-900/60 to-neutral-950',
      glow: 'shadow-[0_0_35px_rgba(14,165,233,0.12)]',
    },
  },
  {
    id: 'tilik',
    name: 'tilik.nggalek.co',
    url: 'https://tilik.nggalek.co',
    category: 'civic',
    categoryLabel: 'Civic Health Tech & Open Data',
    badge: 'Public Service Platform',
    headline: 'Pantauan Ketersediaan Bed Rumah Sakit Real-Time',
    description:
      'Civic health platform untuk cek ("menilik") ketersediaan kamar rawat inap dan tempat tidur RS di Trenggalek dan sekitarnya secara real-time berdasarkan data fasilitas kesehatan terpadu.',
    problem:
      'Warga yang menghadapi situasi darurat medis sering kesulitan mengetahui rumah sakit mana yang masih memiliki tempat tidur kosong, sehingga terpaksa mendatangi faskes secara spekulatif.',
    solution:
      'Mengintegrasikan feed data ketersediaan kamar rumah sakit daerah (RSUD Dr. Soedomo, RS Budi Asih, dll.) ke dalam satu antarmuka publik yang cepat diakses dari ponsel tanpa perlu login atau instal aplikasi.',
    highlights: [
      'Sinkronisasi ketersediaan kamar Kelas I, II, III, VIP, & ICU real-time',
      'Akses publik tanpa hambatan registrasi atau download aplikasi',
      'Peta rute faskes dan kontak instalasi gawat darurat terintegrasi',
      'Desain ramah lansia dan mobile-first dengan kontras visual tinggi',
    ],
    tags: ['Civic Health', 'Open Data', 'Real-time Hospital Beds', 'Emergency Relief'],
    stack: ['Open Health APIs', 'Serverless Sync', 'Cloudflare Edge', 'Tailwind CSS', 'TypeScript'],
    icon: Hospital,
    color: {
      badge: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      borderHover: 'hover:border-amber-500/50',
      iconBox: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
      tag: 'bg-amber-950/40 text-amber-300 border-amber-900/50',
      button: 'bg-amber-500/15 text-amber-300 border-amber-500/30 hover:bg-amber-500 hover:text-white',
      cardBg: 'from-amber-950/20 via-neutral-900/60 to-neutral-950',
      glow: 'shadow-[0_0_35px_rgba(245,158,11,0.12)]',
    },
  },
  {
    id: 'nggalek',
    name: 'nggalek.co',
    url: 'https://nggalek.co',
    category: 'media',
    categoryLabel: 'Community Collective & Civic Advocacy',
    badge: 'Ecosystem Collective',
    headline: 'Media Advokasi Warga & Ekosistem Komunitas Trenggalek',
    description:
      '"Njajah Desa Milang Kori" — Media advokasi kepentingan warga Trenggalek berbasis citizen journalism. Hub bersama pegiat komunitas, developer, dan inisiator lokal untuk menggerakkan perubahan.',
    problem:
      'Isu-isu sosial, lingkungan, dan aspirasi masyarakat desa sering tidak terwadahi secara mendalam dalam pemberitaan arus utama yang serba sensasional.',
    solution:
      'Menjadi wadah jurnalisme warga dan riset sosial independen yang menghubungkan berbagai elemen masyarakat: petani, pegiat budaya, pemuda, dan engineer untuk mengadvokasi kepentingan bersama.',
    highlights: [
      'Liputan mendalam berbasis riset lapangan "Njajah Desa Milang Kori"',
      'Ruang kolaborasi lintas komunitas, pegiat kreatif, dan developer',
      'Platform dokumentasi arsip warta dan kearifan lokal Trenggalek',
      'Payung inisiatif bersama untuk pengembangan software publik labs',
    ],
    tags: ['Community Advocacy', 'Citizen Journalism', 'Njajah Desa Milang Kori', 'Digital Collective'],
    stack: ['React 19', 'Edge SSR', 'Modern Headless CMS', 'Tailwind CSS v4', 'Open Web Standards'],
    icon: MegaphoneSimple,
    color: {
      badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      borderHover: 'hover:border-emerald-500/50',
      iconBox: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
      tag: 'bg-emerald-950/40 text-emerald-300 border-emerald-900/50',
      button: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500 hover:text-white',
      cardBg: 'from-emerald-950/20 via-neutral-900/60 to-neutral-950',
      glow: 'shadow-[0_0_35px_rgba(16,185,129,0.12)]',
    },
  },
]

function ShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredItems = useMemo(() => {
    return showcaseItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      if (!query) return matchesCategory

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.headline.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        item.stack.some((tech) => tech.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
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

            <div className="hidden sm:block h-4 w-px bg-neutral-800" />

            <a
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Kembali ke Beranda</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="/#karya" className="hover:text-neutral-100 transition-colors">
              Featured Works
            </a>
            <a href="/showcase" className="text-emerald-400 font-semibold transition-colors">
              Showcase
            </a>
            <a href="/#layanan" className="hover:text-neutral-100 transition-colors">
              Capabilities
            </a>
            <a href="/#prinsip" className="hover:text-neutral-100 transition-colors">
              Prinsip
            </a>
            <a href="/#kontak" className="hover:text-neutral-100 transition-colors">
              Kontak
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/6281358999660?text=Halo%20nggalek.co%20labs%2C%20saya%20ingin%20diskusi%20tentang%20produk%20showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500 hover:text-neutral-950 transition-colors"
            >
              <WhatsappLogo size={16} weight="fill" />
              <span>Diskusi Project</span>
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
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 text-neutral-300 hover:text-white"
            >
              <ArrowLeft size={16} />
              <span>Kembali ke Beranda</span>
            </a>
            <a
              href="/showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-emerald-400 font-semibold"
            >
              Showcase (Semua Karya)
            </a>
            <a
              href="/#karya"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              Featured Works
            </a>
            <a
              href="/#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              Capabilities
            </a>
            <a
              href="/#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-neutral-300 hover:text-white"
            >
              Kontak
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Showcase Hero Header */}
        <section className="relative pt-16 pb-20 border-b border-neutral-900 overflow-hidden bg-radial-[circle_at_top_center,rgba(16,185,129,0.06),transparent_70%]">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Dedicated Portfolio &amp; System Directory
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800">
                5 Active Products
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl">
              Showcase Inisiatif &amp; Produk Digital Komunitas
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
              Koleksi software, platform AI, instrumen civic tech, dan sistem e-commerce yang kami rancang, bangun, dan operasikan secara independen dari Trenggalek untuk memberikan manfaat konkret.
            </p>

            {/* Quick Stats Strip */}
            <div className="mt-10 pt-8 border-t border-neutral-900 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
              <div>
                <span className="text-neutral-500 block text-[11px] mb-0.5">STATUS OPERASI</span>
                <span className="text-emerald-400 font-semibold text-sm">100% Live in Production</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[11px] mb-0.5">FILOSOFI RANCANG</span>
                <span className="text-white font-semibold text-sm">AI-Native &amp; Zero Bloat</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[11px] mb-0.5">LATENSI WEB</span>
                <span className="text-sky-400 font-semibold text-sm">Sub-50ms Edge SSR</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[11px] mb-0.5">SUMBER KARYA</span>
                <span className="text-amber-400 font-semibold text-sm">Trenggalek Collective</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-16 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 py-4">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all' as Category, label: 'Semua Inisiatif', count: 5 },
                { id: 'ai' as Category, label: 'AI & Speech', count: 1 },
                { id: 'commerce' as Category, label: 'Commerce & UMKM', count: 1 },
                { id: 'media' as Category, label: 'Media & Warta', count: 2 },
                { id: 'civic' as Category, label: 'Civic Tech', count: 1 },
              ].map((cat) => {
                const isActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-neutral-100 text-neutral-950 shadow-sm font-semibold'
                        : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-neutral-300 text-neutral-900 font-mono'
                          : 'bg-neutral-800 text-neutral-400 font-mono'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Keyword Search */}
            <div className="relative min-w-[220px]">
              <MagnifyingGlass
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Cari fitur, stack, nama..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Detailed Showcase Cards List */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            {filteredItems.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-neutral-800 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 text-neutral-500 flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlass size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">Tidak ada karya yang cocok</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Coba ubah kata kunci pencarian atau pilih kategori &quot;Semua Inisiatif&quot;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchQuery('')
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 text-xs hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <TiltCard
                    key={item.id}
                    tiltLimit={5}
                    scale={1.01}
                    spotlight={true}
                    className="rounded-2xl overflow-hidden"
                  >
                    <div
                      className={`rounded-2xl border border-neutral-800 bg-gradient-to-br ${item.color.cardBg} p-6 sm:p-10 ${item.color.borderHover} transition-all duration-300 ${item.color.glow}`}
                    >
                      {/* Top Header of Showcase Item */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl shrink-0 ${item.color.iconBox} flex items-center justify-center`}
                          >
                            <IconComponent size={26} weight="regular" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2.5 flex-wrap">
                              <h2 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                                {item.name}
                              </h2>
                              <span
                                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${item.color.badge}`}
                              >
                                {item.badge}
                              </span>
                            </div>
                            <div className="text-xs text-neutral-400 font-mono mt-0.5">
                              {item.categoryLabel}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg ${item.color.button} transition-all shadow-sm`}
                          >
                            <span>Buka Live Website</span>
                            <ArrowUpRight size={14} />
                          </a>
                        </div>
                      </div>

                      {/* Headline & Overview */}
                      <div className="mt-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-100 leading-snug">
                          {item.headline}
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-4xl">
                          {item.description}
                        </p>
                      </div>

                      {/* Problem vs Solution Split */}
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                          <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            Tantangan &amp; Masalah Riil
                          </div>
                          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            {item.problem}
                          </p>
                        </div>

                        <div className="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Solusi Rekayasa &amp; Inovasi
                          </div>
                          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            {item.solution}
                          </p>
                        </div>
                      </div>

                      {/* Highlights & Tech Stack Grid */}
                      <div className="mt-6 pt-6 border-t border-neutral-800/80 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* Capabilities Highlights (7 cols) */}
                        <div className="lg:col-span-7 space-y-2.5">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                            KEMAMPUAN UTAMA SISTEM:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {item.highlights.map((highlight, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs text-neutral-300"
                              >
                                <CheckCircle
                                  size={16}
                                  className="text-emerald-400 shrink-0 mt-0.5"
                                  weight="fill"
                                />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack Pills (5 cols) */}
                        <div className="lg:col-span-5 space-y-2">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                            ARSITEKTUR &amp; TECH STACK:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.stack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Footer Tags */}
                      <div className="mt-6 pt-5 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-2.5 py-1 text-xs rounded-md ${item.color.tag}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="text-xs font-mono text-neutral-500">
                          Production ID: #{index + 1} • {item.id}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                )
              })
            )}
          </div>
        </section>

        {/* Bottom CTA: Build / Partner with us */}
        <section className="py-20 border-t border-neutral-900 bg-neutral-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
              <Sparkle size={28} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Punya Kebutuhan Sistem atau Inisiatif Serupa?
            </h2>
            <p className="mt-4 text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Kami siap bermitra sebagai technical partner untuk mendesain arsitektur, mengembangkan aplikasi web/AI, hingga deployment produksi skala riil.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6281358999660?text=Halo%20nggalek.co%20labs%2C%20saya%20tertarik%20kolaborasi%20pembuatan%20produk%20digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-neutral-950 font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10"
              >
                <WhatsappLogo size={20} weight="fill" />
                <span>Konsultasi Cepat via WhatsApp</span>
              </a>
              <a
                href="mailto:labs@nggalek.co"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 font-medium text-sm hover:bg-neutral-800 hover:text-white transition-colors"
              >
                <EnvelopeSimple size={20} />
                <span>Kirim Email ke labs@nggalek.co</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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

            <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-400">
              <a href="/" className="hover:text-neutral-200 transition-colors">
                Beranda
              </a>
              <a href="/#karya" className="hover:text-neutral-200 transition-colors">
                Featured Works
              </a>
              <a href="/showcase" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Showcase
              </a>
              <a href="/#layanan" className="hover:text-neutral-200 transition-colors">
                Capabilities
              </a>
              <a href="/#prinsip" className="hover:text-neutral-200 transition-colors">
                Prinsip
              </a>
              <a href="/#kontak" className="hover:text-neutral-200 transition-colors">
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
