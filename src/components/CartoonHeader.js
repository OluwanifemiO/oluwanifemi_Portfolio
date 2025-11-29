function CartoonHeader() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b-4 border-[var(--primary-color)]" data-name="cartoon-header" data-file="components/CartoonHeader.js">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Floating decorative elements */}
          <div className="absolute -top-2 left-20 text-2xl floating-element">🌟</div>
          <div className="absolute -top-1 right-32 text-xl bounce-element">💫</div>
          
          <div className="flex justify-between items-center py-5">
            <div className="text-3xl font-black text-[var(--primary-color)] tracking-tight">
              Fiona's Universe ✨
            </div>
            
            <nav className="hidden md:flex space-x-10">
              <a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-bold hover:scale-110">🏠 Home</a>
              <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-bold hover:scale-110">📖 My Story</a>
              <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-bold hover:scale-110">⭐ Skills</a>
              <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-bold hover:scale-110">💌 Connect</a>
            </nav>

            <button 
              className="md:hidden p-3 rounded-full bg-[var(--secondary-color)] hover:scale-110 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="icon-menu text-xl text-[var(--primary-color)]"></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-6 border-t-4 border-[var(--primary-color)]/20">
              <nav className="flex flex-col space-y-6">
                <a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-bold">🏠 Home</a>
                <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-bold">📖 My Story</a>
                <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-bold">⭐ Skills</a>
                <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-bold">💌 Connect</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Cartoon Header component error:', error);
    return null;
  }
}