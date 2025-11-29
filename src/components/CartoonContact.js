function CartoonContact() {
  try {
    return (
      <section id="contact" className="py-20 px-6 lg:px-8 relative" data-name="cartoon-contact" data-file="components/CartoonContact.js">
        {/* Background floating elements */}
        <div className="absolute top-10 left-20 text-3xl floating-element opacity-70">💌</div>
        <div className="absolute top-20 right-10 text-2xl bounce-element opacity-70">🎈</div>
        <div className="absolute bottom-40 left-10 text-3xl floating-element opacity-70">🌈</div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Let's Be Friends! 💕</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
              I'm always excited to make new friends! Whether you want to collaborate on something magical, share wonderful ideas, or just have a heart-to-heart chat! 🌟
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="card-cartoon p-10 bg-gradient-to-br from-[var(--cute-pink)] to-white text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[var(--primary-color)] bounce-element">
                <div className="text-3xl">📧</div>
              </div>
              <h3 className="text-2xl font-black mb-3 text-[var(--text-primary)]">Send Me a Message! 💌</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg font-medium">I love getting surprise messages in my inbox!</p>
              <button className="btn-cartoon">
                ✨ Write to Me
              </button>
            </div>
            
            <div className="card-cartoon p-10 bg-gradient-to-br from-[var(--cute-yellow)] to-white text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[var(--primary-color)] floating-element">
                <div className="text-3xl">☕</div>
              </div>
              <h3 className="text-2xl font-black mb-3 text-[var(--text-primary)]">Virtual Coffee Date ☕</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg font-medium">Let's chat about dreams, ideas, and everything wonderful!</p>
              <button className="btn-cartoon bg-[var(--primary-color)] text-white border-[var(--primary-color)]">
                🌟 Start Chatting
              </button>
            </div>
          </div>
          
          <div className="card-cartoon p-10 bg-gradient-to-r from-white to-[var(--cute-mint)] border-4 border-[var(--primary-color)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img 
                    src="https://devproto.trickle.so/storage/public/images/usr_12891ee368000001/b865c6c7-fb78-4cd3-bf1e-5211d14cef0d.png"
                    alt="Fiona Cartoon"
                    className="w-20 h-20 rounded-full border-4 border-[var(--primary-color)]"
                  />
                  <div className="absolute -top-2 -right-2 text-xl bounce-element">✨</div>
                </div>
                <div>
                  <h4 className="text-xl font-black text-[var(--text-primary)]">Thank you for visiting my magical universe! 🌟</h4>
                  <p className="text-[var(--text-secondary)] text-lg font-medium">Can't wait to become friends and create wonderful memories together! 💕</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[var(--cute-pink)] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg border-4 border-white floating-element">
                  <div className="text-xl">💖</div>
                </div>
                <div className="w-14 h-14 bg-[var(--cute-yellow)] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg border-4 border-white bounce-element">
                  <div className="text-xl">🌟</div>
                </div>
                <div className="w-14 h-14 bg-[var(--cute-mint)] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg border-4 border-white floating-element">
                  <div className="text-xl">🦋</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Cartoon Contact component error:', error);
    return null;
  }
}