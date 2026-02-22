import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true)
  }, [])

  return (
    <div className="page-container bg-gradient-to-br from-retro-cream via-retro-cream to-retro-pink/20">
      {/* Hero Section */}
      <section className="section-full relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-retro-orange/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-retro-teal/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-retro-mustard/20 rounded-full blur-lg"></div>

        {/* Decorative Shapes */}
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-retro-orange rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-retro-teal rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-retro-pink rounded-full"></div>

        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-700 ${
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
            <Link to="/program" className="btn-primary animate-pulse-soft">
              Lihat Program Kami
            </Link>
            <Link to="/contact" className="btn-secondary">
              Gabung Bersama Kami
            </Link>
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
    </div>
  )
}

export default Home
