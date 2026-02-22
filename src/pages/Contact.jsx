import { useEffect, useState } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <div className="page-container bg-gradient-to-br from-retro-teal/10 via-retro-cream to-retro-navy/10">
      <section className="section-full">
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-retro-navy text-retro-mustard px-6 py-2 rounded-full text-sm font-semibold shadow-retro">
                Mari Terhubung
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-retro-navy mb-6">
              Hubungi Kami
            </h1>
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
                style={{ animationDelay: `${index * 100}ms` }}
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
    </div>
  )
}

export default Contact
