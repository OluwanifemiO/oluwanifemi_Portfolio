function PurpleHeader() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b-2 border-[var(--primary-color)]/20" data-name="purple-header" data-file="components/PurpleHeader.js">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <div className="text-3xl font-black gradient-text tracking-tight">
              Fiona ✨
            </div>
            
            <nav className="hidden md:flex space-x-10">
              <a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-medium">Home</a>
              <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-medium">About</a>
              <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-medium">Skills</a>
              <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 font-medium">Contact</a>
            </nav>

            <button 
              className="md:hidden p-3 rounded-lg bg-[var(--secondary-color)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="icon-menu text-xl text-[var(--primary-color)]"></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-[var(--primary-color)]/20">
              <nav className="flex flex-col space-y-6">
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
    console.error('Purple Header component error:', error);
    return null;
  }
}