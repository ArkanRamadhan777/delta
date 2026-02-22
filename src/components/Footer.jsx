const Footer = () => {
  return (
    <footer className="bg-retro-navy text-white py-6 px-6 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-retro-cream/90 font-medium">
              © DELTA 2026
            </p>
          </div>

          {/* Credit */}
          <div className="flex items-center gap-2">
            <span className="text-retro-cream/70 text-sm">Made with passion by</span>
            <span className="bg-retro-mustard text-retro-navy font-display font-bold px-3 py-1 rounded-lg shadow-retro text-sm">
              GANEXA
            </span>
          </div>

          {/* Decorative Elements */}
          <div className="hidden md:flex gap-2">
            <div className="w-3 h-3 bg-retro-orange rounded-full"></div>
            <div className="w-3 h-3 bg-retro-teal rounded-full"></div>
            <div className="w-3 h-3 bg-retro-pink rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
