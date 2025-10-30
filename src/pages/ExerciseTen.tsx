import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-10.mp3";

const ExerciseTen = () => {
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
        CVIČENÍ 10. VAŠE JÁDROVÉ PŘESVĚDČENÍ NA BILLBOARDU.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Stalo se vám někdy, že jste nepříjemné myšlenky či představy dlouho nemohli „dostat z hlavy“ 
              a stále jste se k nim v duchu vraceli? Jestli chcete prozkoumat svá jádrová přesvědčení, 
              vezměte si poznámkový blok a sepište si tyto myšlenky v několika bodech. Jaké konkrétní 
              myšlenky nebo představy vám tenkrát běžely hlavou?
            </p>

            <p>
              Body si znovu přečtěte a uvědomte si, zda jste tenkrát přemýšleli spíše o sobě, či o někom 
              druhém. Přemýšleli jste obecně o světě, o životě, nebo o lidech? Směřovaly vaše myšlenky 
              do budoucna? Byly tyto vaše myšlenky hodnotící, nebo zobecňující? Obávali jste se něčeho? 
              Čeho se vaše myšlenky týkaly především? Poznamenejte si heslovitě jejich ústřední témata.
            </p>

            <p> 
              A zkuste si představit, co by pro vás osobně znamenalo, kdyby tyto vaše nepříjemné myšlenky 
              či představy byly stoprocentní pravda. Jaké důsledky by to mělo pro vás osobně? Co by na tom 
              pro vás bylo nejhorší? Co by vás na tom nejvíc trápilo nebo děsilo? Co by to znamenalo pro 
              vaši budoucnost? Jak byste se cítili? Dejte prostor těm nejčernějším představám.
            </p>

            <p>
            Pokud se vaše myšlenky týkaly světa jako celku nebo druhých lidí, zaměřte se více na sebe 
            a ptejte se vždy znovu: A jak se to celé týká mě? Co to vypovídá o mně? Jaké nejhorší vlastnosti 
            mojí osobnosti nebo charakteru by se tím mohly odhalit? A zkuste si na chvíli představit, co vám 
            v této souvislosti našeptává váš vnitřní kritik, soudce či (falešný) prorok. Co říká o vašem Já? 
            Pokuste se to co nejpřesněji zformulovat a tu nejvýstižnější větu si zapište.
            </p>

            <p>
            Nad větou, která dost možná vyjadřuje nějaké vaše skryté jádrové přesvědčení, teď trochu 
            popřemýšlejte. Dovedete si představit, kde ve vašem dětství mohlo toto přesvědčení vzniknout? 
            Jaké okolnosti se tenkrát podílely na vzniku tohoto přesvědčení? Věříte stále ještě tomu, že 
            vaše přesvědčení je pravda?  
            </p> 
            
            <p>
            Každopádně si představte, že byste měli graficky navrhnout billboard s vaším přesvědčením. 
            Jaké barvy byste použili? Jaké pozadí? Jaká fotka nebo ilustrace by mohla na billboardu být? 
            Máte-li chuť, můžete si billboard nakreslit. Představte si (nebo nakreslete) pak ale ještě 
            další varianty. Jak by váš billboard mohl vypadat, kdyby měl růžové pozadí? Jak by vypadal 
            v retro stylu, ve stylu komunistické propagandy nebo ve stylu art deco? Jak by vypadala 
            heavymetalová verze či verze ve stylu disko? Jaká verze by se vám graficky líbila? A jak 
            se cítíte, když si ji představujete?
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseTen;
