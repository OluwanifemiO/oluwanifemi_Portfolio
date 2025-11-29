function PinkHero() {
  try {
    return (
      <section id="home" className="pt-20 pb-16 px-6 lg:px-8" data-name="pink-hero" data-file="components/PinkHero.js">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[var(--secondary-color)] px-4 py-2 rounded-full mb-6">
                <div className="w-3 h-3 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
                <span className="text-[var(--primary-color)] font-medium">Available for new adventures</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hello Beautiful! I'm{' '}
                <span className="gradient-text">Fiona</span>
                <span className="text-3xl ml-2">💕</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-6 leading-relaxed">
                A passionate <span className="font-semibold text-[var(--primary-color)]">ENFJ</span> creator spreading positivity and making meaningful connections in this beautiful world.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                ✨ Lifelong learner • 🎨 Creative soul • 👂 Good listener • 🐱🐶 Pet lover
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-primary">
                  <span className="flex items-center gap-2">
                    <div className="icon-sparkles text-lg"></div>
                    Explore My World
                  </span>
                </button>
                <button className="bg-white border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[var(--secondary-color)] hover:scale-105 shadow-lg">
                  <span className="flex items-center gap-2">
                    <div className="icon-heart text-lg"></div>
                    Say Hello
                  </span>
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl card-hover relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--accent-color)]/20"></div>
                  <img 
                    src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/bc4943e6-2152-42af-9133-0c17ed5b7ddd.png"
                    alt="Fiona's Profile"
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <div className="icon-heart text-2xl text-white"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center shadow-lg">
                  <div className="icon-star text-xl text-[var(--primary-color)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Pink Hero component error:', error);
    return null;
  }
}