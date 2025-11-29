function PinkAbout() {
  try {
    return (
      <section id="about" className="py-16 px-6 lg:px-8 bg-white" data-name="pink-about" data-file="components/PinkAbout.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Discover more about my journey, values, and what drives me to create positive change
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] rounded-3xl transform rotate-6 opacity-20"></div>
                <img 
                  src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/676ee7d0-8c52-4fdc-86f7-80bd7f59f7c3.png"
                  alt="Fiona About"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl card-hover transform -rotate-2"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-full flex items-center justify-center animate-pulse">
                  <img 
                    src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/b865c6c7-fb78-4cd3-bf1e-5211d14cef0d.png"
                    alt="Fiona Cartoon"
                    className="w-16 h-16 rounded-full border-3 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <div className="bg-gradient-to-r from-[var(--secondary-color)] to-white p-6 rounded-2xl border-2 border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-users text-xl text-[var(--primary-color)]"></div>
                  <h3 className="text-xl font-semibold">ENFJ Personality</h3>
                </div>
                <p className="text-[var(--text-secondary)]">
                  As an ENFJ, I'm naturally drawn to helping others grow and reach their potential. I thrive on meaningful connections and collaborative environments.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[var(--secondary-color)] to-white p-6 rounded-2xl border-2 border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-lightbulb text-xl text-[var(--primary-color)]"></div>
                  <h3 className="text-xl font-semibold">Lifelong Learner</h3>
                </div>
                <p className="text-[var(--text-secondary)]">
                  I believe that learning never stops. Whether it's new technologies, creative skills, or understanding different perspectives, I'm always curious to grow.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[var(--secondary-color)] to-white p-6 rounded-2xl border-2 border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-heart text-xl text-[var(--primary-color)]"></div>
                  <h3 className="text-xl font-semibold">Animal Lover</h3>
                </div>
                <p className="text-[var(--text-secondary)]">
                  Proud cat & dog lover who believes that pets teach us unconditional love, patience, and the joy of simple moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Pink About component error:', error);
    return null;
  }
}