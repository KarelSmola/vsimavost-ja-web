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

          {/* Accent box integrated with typography */}
          <div className="relative py-8 sm:py-12">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-muted rounded-sm -z-10"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-inter font-light tracking-[0.2em] opacity-60 max-w-md mx-auto">
            OBJEVTE SÍLU PŘÍTOMNÉHO OKAMŽIKU
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
