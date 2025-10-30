import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-19.mp3";

const ExerciseNineteen = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
    // Wait for navigation to complete, then scroll to exercises section
    setTimeout(() => {
      const element = document.getElementById("exercises");
      if (element) {
        const offset = 20; // Offset to account for fixed navigation
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 font-inter text-sm font-light hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
            Zpět na přehled cvičení
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
        CVIČENÍ 19. CO CHCE ŽIVOT ODE MĚ?
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Duchovní unikání vyplývá z nesprávného pochopení konečného cíle jakékoli spirituální praxe. 
              Než vstoupíme na duchovní cestu, měli bychom si proto vždy uvědomit, co chceme spirituální 
              praxí vlastně získat. Chceme nějak vylepšit nebo posílit své narativní Já? Pak nás pravděpodobně 
              čeká zklamání. Transpersonální vývoj totiž přináší něco jiného, a sice zásadní, koperníkovský
              obrat v našem pohledu na svět, na náš život i na nás samé. Směřuje k poznání něčeho mnohem 
              většího, než jsme my sami. A pomáhá nám naopak zbavovat se všech egocentrických cílů a nacházet 
              smysl v dobrovolném podřízení se tomu, co nás přesahuje (jako napříkklad služba, pokora, 
              etika). Souvisí s nalezením smyslu naší existence. Odpovídá na otázku, proč jsme tady.
            </p>

            <p>
            V psychoterapii se hledáním a nalézáním životního smyslu zabývá například logoterapie. Viktor 
            Emil Frankl vedl své klienty k podobné změně perspektivy v pohledu na vlastní život, k jaké 
            směřuje spiritualita. Pojďme se tedy logoterapií inspirovat a seznámit se s touto transpersonální 
            perspektivou v následujícím cvičení. Najděte si klidné místo, kde se alespoň 20 minut budete 
            moci věnovat jen sami sobě. Připravte si papír a tužku. A položte si otázku: Co vlastně ze 
            všeho nejvíc právě teď chci? Položte si tuto otázku a zkuste odpověď aktivně nevymýšlet. Jen 
            pasivně čekejte, jaká odpověď ve vaší mysli sama vyvstane. Odpověď si zapište. A pak pokračujte 
            podobným způsobem a ptejte se: Co ze všeho nejvíc chci v následujících pěti letech? Co chci 
            v následujících 20 letech? Co chci ve svém životě?
            </p>

            <p>
            Pak si položte otázku: A co právě teď ve skutečnosti nejvíc potřebuji? A opět jen pasivně čekejte, 
            jaká odpověď se ve vaší mysli vynoří. Zapište si ji.
            </p> 
            
            <p>
            A nakonec úplně změňte úhel pohledu a ptejte se postupně sami sebe: A co chce právě teď moje 
            životní situace ode mě? Co ode mě právě teď můj život požaduje, ať už se mi to líbí, nebo ne? 
            Můžu teď ve svém životě udělat něco, co má (podle mě) skutečný smysl? Co by to mohlo být? 
            Jak se budu cítit, když tento krok udělám? A jak se budu cítit, když tento krok neudělám?
            </p>

            <p>
            Chcete-li, můžete se také ohlédnout za svým životem a ptát se: Které moje dosavadní životní kroky, 
            cíle nebo rozhodnutí se mi zpětně jeví jako nejsmysluplnější? Které vztahy mi připadají 
            nejsmysluplnější? Které činnosti, jímž jsem se v minulosti věnoval, mě natolik pohlcovaly, 
            že jsem při jejich vykonávání zapomínal na čas a vše ostatní? Co mi v minulosti při zvládání 
            těžkých chvil dodávalo sílu a odvahu jít dál? A jaké smysluplné příležitosti mám k dispozici 
            v životě teď? Co mohu udělat pro to, aby mi to, co dělám, dávalo smysl?
            </p>

            <p>
            Máte-li odpovědi zapsané, udělejte si malou pauzu. Po chvíli porovnejte, jaký pocit máte, když 
            si uvědomujete, co chcete. Jaký pocit máte, když si uvědomujete, co potřebujete. A jaký pocit 
            máte, když se zabýváte tím, co chce život od vás, anebo tím, co vám vlastně dává největší smysl.
            </p>

            <p>
            Máte nyní chuť něco ve svém současném životě změnit? Co přesně? A co konkrétně pro to můžete udělat?
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseNineteen;