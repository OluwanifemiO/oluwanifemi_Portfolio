function CartoonHero() {
  try {
    return (
      <section id="home" className="pt-24 pb-20 px-6 lg:px-8 relative overflow-hidden" data-name="cartoon-hero" data-file="components/CartoonHero.js">
        {/* Background floating elements */}
        <div className="absolute top-20 left-10 text-4xl floating-element opacity-70">🦋</div>
        <div className="absolute top-40 right-20 text-3xl bounce-element opacity-70">🌸</div>
        <div className="absolute bottom-40 left-20 text-2xl floating-element opacity-70">🌈</div>
        <div className="absolute bottom-20 right-40 text-3xl bounce-element opacity-70">⭐</div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block bg-white px-6 py-3 rounded-full mb-8 border-4 border-[var(--primary-color)] shadow-lg">
                <span className="text-[var(--primary-color)] font-bold">Welcome to my colorful universe! 🌟</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white text-shadow-lg">
                Hi there! I'm{' '}
                <span className="text-[var(--cute-yellow)]">Fiona</span>
                <span className="text-4xl ml-2">💫</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium">
                An <span className="font-black text-[var(--cute-yellow)] bg-white/20 px-3 py-1 rounded-full">ENFJ</span> dreamer who believes in spreading joy and making the world a more colorful place! 🎨
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-8">
                <button className="btn-cartoon group">
                  <span className="flex items-center gap-3">
                    ✨ Discover My Magic
                  </span>
                </button>
                <button className="btn-cartoon bg-[var(--cute-yellow)] text-[var(--primary-color)] border-[var(--cute-yellow)]">
                  <span className="flex items-center gap-3">
                    💕 Let's Be Friends
                  </span>
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl card-cartoon bg-gradient-to-br from-white to-[var(--secondary-color)]">
                  <img 
                    src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/bc4943e6-2152-42af-9133-0c17ed5b7ddd.png"
                    alt="Fiona's Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating cartoon elements around the image */}
                <div className="absolute -top-8 -left-8 text-4xl floating-element">🌟</div>
                <div className="absolute -top-4 -right-4 text-3xl bounce-element">💫</div>
                <div className="absolute -bottom-6 -left-6 text-3xl floating-element">🦋</div>
                <div className="absolute -bottom-4 right-8 text-2xl bounce-element">💖</div>
                
                <div className="absolute top-10 -right-12 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[var(--cute-yellow)] floating-element">
                  <span className="text-2xl">😊</span>
                </div>
                <div className="absolute bottom-20 -left-12 w-16 h-16 bg-[var(--cute-yellow)] rounded-full flex items-center justify-center shadow-xl border-4 border-white bounce-element">
                  <span className="text-xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Cartoon Hero component error:', error);
    return null;
  }
}