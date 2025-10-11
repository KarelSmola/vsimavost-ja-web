import { Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Title */}
          <div className="space-y-6">
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-8xl leading-tight">
              KONTAKT
            </h2>
            <div className="w-20 h-1 bg-foreground"></div>
            <p className="font-inter text-base sm:text-lg font-light opacity-80 leading-relaxed max-w-md">
              Máte dotaz nebo zájem o spolupráci? Rádi se s vámi spojíme.
            </p>
          </div>

          {/* Right column - Contact info */}
          <div className="space-y-8 font-inter">
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-2">
                  <Mail size={20} className="opacity-60" />
                  <p className="text-xs font-light tracking-wider opacity-60">EMAIL</p>
                </div>
                <a
                  href="mailto:info@vsimavost.cz"
                  className="text-lg sm:text-xl font-light group-hover:opacity-70 transition-opacity"
                >
                  info@vsimavost.cz
                </a>
              </div>

              <div className="h-px bg-border"></div>

              <div>
                <p className="text-xs font-light tracking-wider opacity-60 mb-4">
                  SOCIÁLNÍ SÍTĚ
                </p>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-base hover:opacity-70 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                    <span className="font-light">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-base hover:opacity-70 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                    <span className="font-light">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm font-light opacity-60">
                © 2025 Všímavost a Já. Všechna práva vyhrazena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
