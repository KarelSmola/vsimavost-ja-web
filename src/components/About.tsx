const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Title */}
          <div className="space-y-6">
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl leading-tight">
              O PROJEKTU
            </h2>
            <div className="w-20 h-1 bg-foreground"></div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-6 font-inter">
            <p className="text-base sm:text-lg font-light leading-relaxed opacity-80">
              Všímavost a Já je projekt zaměřený na rozvoj osobní všímavosti a hlubšího
              sebepoznání. Prostřednictvím praktických cvičení a technik vám pomůžeme objevit
              cestu k vnitřnímu klidu a harmonii.
            </p>
            <p className="text-base sm:text-lg font-light leading-relaxed opacity-80">
              Naše metody jsou založeny na vědecky ověřených přístupech mindfulness a meditace,
              přizpůsobené modernímu způsobu života.
            </p>
            <div className="pt-8">
              <div className="grid grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <p className="font-bebas text-4xl sm:text-5xl">100+</p>
                  <p className="text-sm font-light opacity-60 mt-2">CVIČENÍ</p>
                </div>
                <div>
                  <p className="font-bebas text-4xl sm:text-5xl">5MIN</p>
                  <p className="text-sm font-light opacity-60 mt-2">DENNĚ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
