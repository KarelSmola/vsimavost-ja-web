const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 sm:space-y-6 animate-fade-in">
          {/* Small detail text */}
          <p className="text-xs sm:text-sm font-inter font-light tracking-[0.3em] opacity-60">
            CESTA K SOBĚ
          </p>

          {/* Main hero text */}
          <h1 className="font-bebas text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7rem] leading-[0.9] tracking-tight">
            VŠÍMAVOST
            <br />A SEBEPOZNÁNÍ
          </h1>

          {/* Obrázek pod nadpisem */}
          <div className="flex justify-center mt-8 sm:mt-12 opacity-60">
            <img
              src="/vsimavost-a-ja.png"
              alt="Všímavost a sebepoznání"
              className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%] h-auto object-contain hidden md:block"
              style={{
                maskImage: 'radial-gradient(ellipse 50% 60% at center, black 40%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(ellipse 50% 60% at center, black 40%, transparent 85%)',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
