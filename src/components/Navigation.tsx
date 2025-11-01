import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 20; // Offset to account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-bebas text-xl sm:text-2xl tracking-wide hover:opacity-70 transition-opacity"
          >
            VŠÍMAVOST A SEBEPOZNÁNÍ
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link text-sm lg:text-base font-inter font-light tracking-wider hover:opacity-70 transition-opacity"
            >
              [ O PROJEKTU ]
            </button>
            <button
              onClick={() => scrollToSection("exercises")}
              className="nav-link text-sm lg:text-base font-inter font-light tracking-wider hover:opacity-70 transition-opacity"
            >
              [ CVIČENÍ ]
            </button>
            <button
              onClick={() => scrollToSection("build")}
              className="nav-link text-sm lg:text-base font-inter font-light tracking-wider hover:opacity-70 transition-opacity"
            >
              [ TVOŘENÍ PROJEKTU ]
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link text-sm lg:text-base font-inter font-light tracking-wider hover:opacity-70 transition-opacity"
            >
              [ KONTAKT ]
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 font-inter font-light tracking-wider hover:opacity-70 transition-opacity"
              >
                [ O PROJEKTU ]
              </button>
              <button
                onClick={() => scrollToSection("exercises")}
                className="text-left py-2 font-inter font-light tracking-wider hover:opacity-70 transition-opacity"
              >
                [ CVIČENÍ ]
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 font-inter font-light tracking-wider hover:opacity-70 transition-opacity"
              >
                [ KONTAKT ]
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
