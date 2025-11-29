function CartoonAbout() {
  try {
    return (
      <section id="about" className="py-20 px-6 lg:px-8 relative" data-name="cartoon-about" data-file="components/CartoonAbout.js">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 text-3xl floating-element opacity-50">🌈</div>
        <div className="absolute top-20 right-20 text-2xl bounce-element opacity-50">⭐</div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">My Colorful Story 📖</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
              Come explore the magical journey behind my passion for creating joy and meaningful connections! ✨
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="card-cartoon p-2 bg-gradient-to-br from-[var(--cute-yellow)] to-[var(--cute-mint)]">
                  <img 
                    src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/676ee7d0-8c52-4fdc-86f7-80bd7f59f7c3.png"
                    alt="Fiona About"
                    className="w-full max-w-lg mx-auto rounded-2xl"
                  />
                </div>
                
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[var(--primary-color)] floating-element">
                  <img 
                    src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/b865c6c7-fb78-4cd3-bf1e-5211d14cef0d.png"
                    alt="Fiona Cartoon"
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                
                <div className="absolute -top-6 -left-6 text-3xl bounce-element">🎭</div>
                <div className="absolute top-10 -right-4 text-2xl floating-element">🌟</div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div className="card-cartoon p-8 bg-gradient-to-r from-[var(--cute-pink)] to-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">👥</div>
                  <h3 className="text-2xl font-black">ENFJ Magic ✨</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-lg font-medium">
                  I'm like a friendship fairy! I love helping others discover their superpowers and creating amazing connections everywhere I go! 🌟
                </p>
              </div>
              
              <div className="card-cartoon p-8 bg-gradient-to-r from-[var(--cute-yellow)] to-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">📚</div>
                  <h3 className="text-2xl font-black">Forever Curious 🔍</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-lg font-medium">
                  Learning is my superpower! Every day brings new adventures in knowledge, creativity, and understanding the wonderful world around us! 🚀
                </p>
              </div>
              
              <div className="card-cartoon p-8 bg-gradient-to-r from-[var(--cute-mint)] to-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">🐱</div>
                  <h3 className="text-2xl font-black">Pet Parent 🐶</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-lg font-medium">
                  Cats and dogs are my heart! They teach me about pure love, endless cuddles, and finding joy in the simplest moments! 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Cartoon About component error:', error);
    return null;
  }
}