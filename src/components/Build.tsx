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
            <div>
              
              <p className="text-base sm:text-lg font-light leading-relaxed opacity-80 mb-6">
                Tento web je praktickou ukázkou toho, jak člověk bez hlubokých IT znalostí může 
                vytvořit a nasadit funkční web. Stačí jen chtít se učit a zkoušet nové věci.
              </p>

              <h1 className="font-bebas text-xl sm:text-3xl mb-1">
                Použité nástroje
              </h1>

              <h2 className="font-bebas text-xl sm:text-2xl mb-1 mt-2">
                Stručně
              </h2>

              <ul className="list-disc list-outside ml-6 text-base sm:text-lg font-light leading-relaxed opacity-80 space-y-2">
                <li>iPhone – zachycení vstupních dat (fotografie stránek knihy)</li>
                <li>Claude, ChatGPT – převod obrazu na text (OCR + editace), úprava a tvorba textů na web</li>
                <li>Gemini – vygenerování úvodního obrázku (poté co ChatGPT, to nedokázal tak, jak jsem chtěl)</li>
                <li>ElevenLabs – generování hlasu (text-to-speech)</li>
                <li>ffmpeg + Bash – úprava a spojování audio souborů</li>
                <li>Loveable – AI prototypování UI/UX</li>
                <li>Cursor – vývoj a úpravy kódu</li>
                <li>GitHub – verzování a záloha</li>
              </ul>

              <h2 className="font-bebas text-xl sm:text-2xl mb-1 mt-4">
                Podrobně
              </h2>

              <p className="text-base sm:text-lg font-light leading-relaxed opacity-80 mt-1">
                Nejdříve jsem vyfotil jednotlivé stránky knihy a v Claudu je začal převádět na text. 
                Po vyčerpání bezplatného limitu jsem pokračoval v ChatGPT, který běžně používám. <br />
                Texty jsem následně prošel, opravil nepřesnosti a zjistil, že příště by bylo jednodušší 
                koupit elektronickou verzi knihy a texty jednoduše zkopírovat. 🙂 <br />
                V ElevenLabs jsem pak hledal klidný, pomalý hlas, který by cvičení namluvil. 
                Během testování jsem zjistil, že je potřeba texty znovu projít a upravit zkratky 
                jako „např.“, „apod.“ nebo tvary typu „myslel/a“, protože AI hlas je čte přesně tak, 
                jak jsou napsané – a to nezní dobře. 🙂 <br />
                Delší texty bylo nutné rozdělit kvůli limitu 5000 znaků. Jedno cvičení jsem proto 
                nahrál na dvakrát a oba MP3 soubory spojil pomocí ffmpeg a jednoduchého bash skriptu. <br />
                S ElevenLabs jsem nakonec strávil spoustu času, než jsem překonal všechny nástrahy 
                procesu text-to-speech. 🙂 <br />
                Poté jsem použil Lovable k vytvoření prvního návrhu stránky. K promptu jsem 
                přiložil printscreen webu, jehož design jsem chtěl použít i pro svůj projekt. <br />
                Následně jsem kód zálohoval na GitHub, stáhl si ho lokálně a další vývoj dokončil 
                v Cursoru. <br />
                Jedna z posledních věcí bylo vygenerování úvodního obrázku. Chatu GPT se to nedařilo tak, 
                jak jsem chtěl, a tak mě zachránil Gemini. <br />
                Kdykoli jsem narazil na problém v jakékoli části projektu, mým pomocníkem, mentorem, 
                učitelem i „seniorním kolegou“ byl ChatGPT.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
