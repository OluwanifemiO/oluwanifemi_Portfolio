function PurpleHero() {
  try {
    return (
      <section id="home" className="pt-24 pb-20 px-6 lg:px-8" data-name="purple-hero" data-file="components/PurpleHero.js">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block bg-[var(--secondary-color)] px-6 py-3 rounded-full mb-8">
                <span className="text-[var(--primary-color)] font-semibold">Welcome to my universe 💫</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Fiona</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                An <span className="font-bold text-[var(--primary-color)] bg-[var(--secondary-color)] px-2 py-1 rounded">ENFJ</span> idealist who believes in making the world a better place through creativity, empathy, and continuous learning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8">
                <button className="btn-primary group">
                  <span className="flex items-center gap-3">
                    <div className="icon-sparkles text-xl group-hover:animate-spin"></div>
                    Discover My Story
                  </span>
                </button>
                <button className="bg-white border-3 border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[var(--secondary-color)] shadow-lg">
                  <span className="flex items-center gap-3">
                    <div className="icon-heart text-xl"></div>
                    Let's Connect
                  </span>
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 rounded-3xl overflow-hidden border-8 border-white shadow-2xl card-hover bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] p-2">
                  <img 
                    src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/bc4943e6-2152-42af-9133-0c17ed5b7ddd.png"
                    alt="Fiona's Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-[var(--accent-color)] to-[var(--primary-color)] rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="icon-heart text-3xl text-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Purple Hero component error:', error);
    return null;
  }
}