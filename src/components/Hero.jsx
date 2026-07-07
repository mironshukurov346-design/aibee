export default function Hero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] flex items-center overflow-hidden font-sans">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-2xl">
          <p className="text-black text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-3 sm:mb-4">
            Your All-in-One Marketing
          </p>

          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 sm:mb-10">
            AI Ad Creatives <br />
            Built for Performance
          </h1>

          <button className="bg-black cursor-pointer text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}