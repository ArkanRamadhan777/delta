import { useEffect, useState } from 'react'

const Program = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  return (
    <div className="page-container bg-gradient-to-br from-retro-mustard/10 via-retro-cream to-retro-orange/10">
      <section className="section-full">
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-retro-navy text-retro-mustard px-6 py-2 rounded-full text-sm font-semibold shadow-retro">
                Apa Yang Kami Lakukan
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-retro-navy mb-6">
              Program Unggulan
            </h1>
            <div className="w-24 h-1.5 bg-retro-orange mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-retro-navy/70 max-w-2xl mx-auto">
              Program-program yang dirancang untuk mengembangkan potensi dan kreativitas siswa
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-retro p-8 transition-all duration-300 hover:shadow-retro-hover hover:-translate-y-3 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
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
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-retro-navy to-retro-teal rounded-3xl shadow-retro-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Punya Ide Program Lain?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Kami terbuka untuk ide-ide kreatif dari seluruh siswa. Mari bersama-sama mewujudkan program yang bermanfaat!
              </p>
              <a
                href="/contact"
                className="inline-block bg-retro-mustard text-retro-navy font-semibold px-8 py-4 rounded-xl shadow-retro transition-all duration-300 hover:shadow-retro-hover hover:scale-105 active:scale-95"
              >
                Sampaikan Aspirasi
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Program
