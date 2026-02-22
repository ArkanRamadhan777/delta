import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Tentang' },
    { id: 'program', label: 'Program' },
    { id: 'contact', label: 'Kontak' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id)
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="bg-retro-navy text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
          <div className="bg-retro-mustard text-retro-navy font-display font-bold text-2xl px-4 py-2 rounded-xl shadow-retro transition-all duration-300 group-hover:shadow-retro-hover group-hover:scale-105">
            DELTA
          </div>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`font-medium text-lg transition-all duration-200 ease-in-out relative pb-1
                  ${activeSection === link.id
                    ? 'text-retro-mustard' 
                    : 'text-white hover:text-retro-mustard'
                  }
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                  after:bg-retro-mustard after:transition-all after:duration-300 after:ease-in-out
                  ${activeSection === link.id ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
                  after:origin-left`
                }
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-retro-teal/20 rounded-lg transition-all duration-200"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-retro-navy border-t border-retro-teal/30 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-6 py-3 font-medium text-lg transition-all duration-200 ease-in-out
                  ${activeSection === link.id
                    ? 'text-retro-mustard bg-retro-teal/10' 
                    : 'text-white hover:text-retro-mustard hover:bg-retro-teal/5'
                  }`
                }
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
