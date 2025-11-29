function PinkHeader() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 shadow-lg" data-name="pink-header" data-file="components/PinkHeader.js">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold gradient-text">
              Fiona 🌸
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-medium hover:scale-110">Home</a>
              <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-medium hover:scale-110">About</a>
              <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-medium hover:scale-110">Skills</a>
              <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-medium hover:scale-110">Contact</a>
            </nav>

            <button 
              className="md:hidden p-3 rounded-full bg-[var(--secondary-color)] hover:scale-110 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="icon-menu text-xl text-[var(--primary-color)]"></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[var(--primary-color)]/20">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-medium">Home</a>
                <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-medium">About</a>
                <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-medium">Skills</a>
                <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors font-medium">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Pink Header component error:', error);
    return null;
  }
}