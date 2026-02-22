import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: '🎯',
      title: 'Fokus & Terarah',
      description: 'Program kerja yang jelas dan terukur untuk mencapai tujuan bersama'
    },
    {
      icon: '🤝',
      title: 'Kolaboratif',
      description: 'Mengedepankan kerja sama dan menghargai kontribusi setiap individu'
    },
    {
      icon: '💡',
      title: 'Inovatif',
      description: 'Selalu mencari cara baru yang kreatif dalam menjalankan setiap kegiatan'
    },
    {
      icon: '🌟',
      title: 'Inspiratif',
      description: 'Menjadi contoh dan motivasi bagi seluruh siswa di sekolah'
    }
  ]

  const programs = [
    {
      icon: '⚽',
      title: 'Class Meeting Seru',
      description: 'Kompetisi olahraga dan seni antar kelas yang membangun sportivitas dan kebersamaan. Ajang untuk menunjukkan skill dan mempererat tali persaudaraan.',
      color: 'bg-retro-orange'
    },
    {
      icon: '❤️',
      title: 'Bakti Sosial',
      description: 'Kegiatan berbagi dan peduli kepada masyarakat sekitar. Wujud nyata kepedulian DELTA terhadap lingkungan dan sesama.',
      color: 'bg-retro-pink'
    },
    {
      icon: '🎭',
      title: 'Pentas Seni Sekolah',
      description: 'Panggung untuk menampilkan bakat seni siswa, dari musik, tari, hingga teater. Momen untuk berekspresi dan menghibur.',
      color: 'bg-retro-teal'
    },
    {
      icon: '💬',
      title: 'Forum Aspirasi Siswa',
      description: 'Wadah untuk menyuarakan pendapat dan ide-ide kreatif. Ruang diskusi demokratis untuk membangun sekolah yang lebih baik bersama.',
      color: 'bg-retro-mustard'
    }
  ]

  const contacts = [
    {
      icon: '📸',
      platform: 'Instagram',
      handle: '@ganexa.team',
      link: 'https://instagram.com/ganexa.team',
      color: 'bg-gradient-to-br from-purple-400 to-pink-400'
    },
    {
      icon: '🎵',
      platform: 'TikTok',
      handle: '@ganexa.team',
      link: 'https://tiktok.com/@ganexa.team',
      color: 'bg-gradient-to-br from-black to-teal-400'
    },
    {
      icon: '✉️',
      platform: 'Email',
      handle: 'ganexa.team@gmail.com',
      link: 'mailto:ganexa.team@gmail.com',
      color: 'bg-gradient-to-br from-retro-orange to-retro-mustard'
    },
    {
      icon: '📱',
      platform: 'WhatsApp',
      handle: '087760769086',
      link: 'https://wa.me/6287760769086',
      color: 'bg-gradient-to-br from-green-400 to-green-600'
    }
  ]

  return (
    <div className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-retro-cream via-retro-cream to-retro-pink/20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-retro-orange/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-retro-teal/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-retro-mustard/20 rounded-full blur-lg"></div>

        {/* Decorative Shapes */}
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-retro-orange rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-retro-teal rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-retro-pink rounded-full"></div>

        <div className={`max-w-6xl mx-auto text-center relative z-10 px-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge */}
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-retro-teal text-white px-6 py-2 rounded-full text-sm font-semibold shadow-retro">
              Organisasi Siswa Intra Sekolah
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-retro-navy via-retro-teal to-retro-navy bg-clip-text text-transparent">
              Bergerak.
            </span>
            <br />
            <span className="bg-gradient-to-r from-retro-orange via-retro-mustard to-retro-orange bg-clip-text text-transparent">
              Berkarya.
            </span>
            <br />
            <span className="bg-gradient-to-r from-retro-navy via-retro-pink to-retro-navy bg-clip-text text-transparent">
              Berdampak.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-retro-navy/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in">
            DELTA hadir sebagai wadah aspirasi, kreativitas, dan kolaborasi siswa 
            untuk menciptakan perubahan positif di sekolah.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <a href="#program" className="btn-primary animate-pulse-soft">
              Lihat Program Kami
            </a>
            <a href="#contact" className="btn-secondary">
              Gabung Bersama Kami
            </a>
          </div>

          {/* Decorative Bottom Element */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <div className="w-12 h-1 bg-retro-mustard rounded-full"></div>
            <div className="w-3 h-3 bg-retro-orange rounded-full"></div>
            <div className="w-12 h-1 bg-retro-teal rounded-full"></div>
          </div>
        </div>

        {/* Zig-zag decoration */}
        <svg className="absolute bottom-0 left-0 w-full h-12 text-retro-navy/5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L50,100 L100,0 L150,100 L200,0 L250,100 L300,0 L350,100 L400,0 L450,100 L500,0 L550,100 L600,0 L650,100 L700,0 L750,100 L800,0 L850,100 L900,0 L950,100 L1000,0 L1050,100 L1100,0 L1150,100 L1200,0 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-retro-pink/10 via-retro-cream to-retro-teal/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-retro-navy text-retro-mustard px-6 py-2 rounded-full text-sm font-semibold shadow-retro">
                Tentang Kami
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-retro-navy mb-6">
              Tentang DELTA
            </h2>
            <div className="w-24 h-1.5 bg-retro-mustard mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-retro-lg p-8 md:p-12 mb-12 hover:shadow-retro-hover transition-all duration-300">
            <p className="text-lg md:text-xl text-retro-navy/90 leading-relaxed text-center max-w-4xl mx-auto">
              <span className="font-bold text-retro-teal text-2xl">DELTA</span> adalah representasi 
              semangat siswa yang <span className="font-semibold text-retro-orange">aktif</span>, 
              <span className="font-semibold text-retro-teal"> inovatif</span>, dan 
              <span className="font-semibold text-retro-pink"> kolaboratif</span>. 
              Kami percaya bahwa setiap siswa memiliki potensi untuk membawa perubahan. 
              Melalui program kerja yang terarah dan kreatif, DELTA berkomitmen membangun 
              lingkungan sekolah yang inspiratif dan menyenangkan.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="card text-center group"
              >
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-retro-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-retro-navy/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-retro-mustard/10 via-retro-cream to-retro-orange/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-retro-navy text-retro-mustard px-6 py-2 rounded-full text-sm font-semibold shadow-retro">
                Apa Yang Kami Lakukan
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-retro-navy mb-6">
              Program Unggulan
            </h2>
            <div className="w-24 h-1.5 bg-retro-orange mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-retro-navy/70 max-w-2xl mx-auto">
              Program-program yang dirancang untuk mengembangkan potensi dan kreativitas siswa
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-retro p-8 transition-all duration-300 hover:shadow-retro-hover hover:-translate-y-3 cursor-pointer"
              >
                {/* Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${program.color} p-4 rounded-2xl shadow-retro transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <span className="text-4xl">{program.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-retro-navy mb-2 transition-colors duration-300 group-hover:text-retro-teal">
                      {program.title}
                    </h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-retro-navy/80 leading-relaxed">
                  {program.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-retro-orange to-retro-teal rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-retro-navy to-retro-teal rounded-3xl shadow-retro-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Punya Ide Program Lain?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Kami terbuka untuk ide-ide kreatif dari seluruh siswa. Mari bersama-sama mewujudkan program yang bermanfaat!
              </p>
              <a
                href="#contact"
                className="inline-block bg-retro-mustard text-retro-navy font-semibold px-8 py-4 rounded-xl shadow-retro transition-all duration-300 hover:shadow-retro-hover hover:scale-105 active:scale-95"
              >
                Sampaikan Aspirasi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-retro-teal/10 via-retro-cream to-retro-navy/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-retro-navy text-retro-mustard px-6 py-2 rounded-full text-sm font-semibold shadow-retro">
                Mari Terhubung
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-retro-navy mb-6">
              Hubungi Kami
            </h2>
            <div className="w-24 h-1.5 bg-retro-teal mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-retro-navy/70 max-w-2xl mx-auto">
              Ada pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl shadow-retro p-8 transition-all duration-300 hover:shadow-retro-hover hover:-translate-y-3 flex items-center gap-6"
              >
                <div className={`${contact.color} p-4 rounded-2xl shadow-retro transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  <span className="text-4xl">{contact.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-retro-navy mb-1 transition-colors duration-300 group-hover:text-retro-teal">
                    {contact.platform}
                  </h3>
                  <p className="text-retro-navy/70 font-medium">
                    {contact.handle}
                  </p>
                </div>
                <div className="text-retro-teal transition-transform duration-300 group-hover:translate-x-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-r from-retro-mustard via-retro-orange to-retro-pink rounded-3xl shadow-retro-lg p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-retro-navy mb-4">
                Bergabunglah Bersama DELTA!
              </h3>
              <p className="text-retro-navy/90 leading-relaxed mb-6">
                Kami selalu mencari siswa-siswi berbakat dan bersemangat untuk bergabung dalam tim DELTA. 
                Bersama-sama kita akan menciptakan perubahan positif di sekolah kita!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-retro">
                  <span className="font-semibold text-retro-navy">🤝 Kolaboratif</span>
                </div>
                <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-retro">
                  <span className="font-semibold text-retro-navy">💡 Kreatif</span>
                </div>
                <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-retro">
                  <span className="font-semibold text-retro-navy">🌟 Berdampak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
