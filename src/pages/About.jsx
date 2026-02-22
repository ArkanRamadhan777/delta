import { useEffect, useState } from 'react'

const About = () => {
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

  return (
    <div className="page-container bg-gradient-to-br from-retro-pink/10 via-retro-cream to-retro-teal/10">
      <section className="section-full">
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-retro-navy text-retro-mustard px-6 py-2 rounded-full text-sm font-semibold shadow-retro">
                Tentang Kami
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-retro-navy mb-6">
              Tentang DELTA
            </h1>
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
                style={{ animationDelay: `${index * 100}ms` }}
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
    </div>
  )
}

export default About
