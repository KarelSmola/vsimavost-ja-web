const Contact = () => {
  return (
    <section id="build" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Title */}
          <div className="space-y-6">
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-8xl leading-tight">
              JAK PROJEKT VZNIKAL
            </h2>
            <div className="w-20 h-1 bg-foreground"></div>
          </div>

          {/* Right column - Contact info */}
          <div className="space-y-8 font-inter">
            <div className="space-y-6">
              
              <p className="text-base sm:text-lg font-light leading-relaxed opacity-80">
              Tato stránka je osobním projektem pro pravidelnou praxi všímavosti – a možná poslouží i vám.
            </p>
                            
            </div>

            <div className="pt-8">
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
