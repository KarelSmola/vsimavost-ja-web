import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-09.mp3";

const ExerciseNine = () => {
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
        CVIČENÍ 9. SESTOUPENÍ Z PIEDESTALU NADŘAZENOSTI.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Chcete-li léčit své zraněné Já a rozvíjet autentické Já, je třeba naučit se mimo jiné všímavě 
              rozpoznávat domýšlivost a pohrdání. Máte odvahu podívat se, co se skrývá za vaší nadřazeností? 
              Pokud ano, vyzkoušejte si následující cvičení. Vzpomeňte si na situaci, kdy jste se cítili uražení 
              nebo jste se před někým vychloubali. Možná jste si tenkrát říkali něco jako: „Tak tohle je pod 
              mou úroveň.“ „Tohle opravdu nemám zapotřebí.“ „Ten člověk je nemožnej.“ „Co si o sobě myslí?“ 
              „Za koho mě má?“ nebo: „Mám na práci důležitější věci než tohle.“
            </p>

            <p>          
              Pozorujte pak chvíli, jakou rychlostí vaše mysl z dané situace vytváří dramatický příběh 
              a jak sveřepě na něm ulpívá. Mysl se toho příběhu vůbec nechce pustit, že? Dokážete všímavě 
              pozorovat toto lpění? Zajímavé, že? Zkuste si také povšimnout, jak se změnilo vaše prožívání, 
              když jste si danou situaci vybavili. Jak teď vypadá stav vaší mysli? Jakou by mohla mít barvu? 
              Jaké další kvality má takto nafouknutá mysl? A co cítíte v těle? Jaké pocity se ve vás objevují, 
              když pozorujete pyšnou mysl? Zkoušejte opakovaně poodstoupit nejprve od celé té dramatické 
              myšlenkové bouře, lpění, pak i od stavu své mysli a místo toho pozorujte, jak se cítíte. Cítíte 
              odpor? Strach? Smutek? Opuštěnost? Bolest? Dívejte se pak chvíli na své tělesné pocity laskavýma 
              očima. Jako byste je chtěli pohladit nebo obejmout. I když je to těžké, neutíkejte od těchto pocitů, 
              ale zůstávejte s nimi, až dokud se nerozplynou. Teprve pak zaměřte pozornost na dýchání. Uvědomte 
              si pozici svého těla. Zaposlouchejte se do zvuků, které k vám teď a tady doléhají z okolí. Uvědomte 
              si, co vidíte kolem sebe. A vraťte plnou pozornost do přítomného okamžiku. Chvíli odpočívejte. 
              Ve cvičení pokračujte, až když vás „drama“ vaší vzpomínky přestane pohlcovat.
            </p>
            
            <p>
              Pak si znovu připomeňte situaci, která ve vás vyvolala domýšlivost nebo pohrdání. Vzpomeňte si na 
              všechny lidi, kteří se na této situaci podíleli. Postupně si vybavujte jednotlivé účastníky a nechávejte 
              tyto vzpomínky, aby se skutečně dotkly vašeho srdce. V duchu si opakujte následující fráze: „Tento 
              člověk, stejně jako já, touží být šťastný a bez utrpení. Stejně jako já se chce cítit v bezpečí a milován. 
              Stejně jako já jedná někdy ve zmatku a dělá chyby. Stejně jako já se v hloubi duše často cítí zranitelný 
              a bez podpory.“ Zkuste si vymyslet vlastní fráze, které by vás s těmito lidmi upřímně spojily nebo smířily. 
              Všímejte si, jak se přitom cítíte.
            </p>

            <p>
              A nakonec nechte svou mysl ještě nějakou dobu spočívat ve vašem těle. Buďte vědomě v kontaktu s 
              veškerými tělesnými pocity. A všímejte si, jak ve vás chvílemi vzniká pýcha a jakým způsobem ovlivňuje 
              vaše myšlení. Když se to stane, pozorujte nejprve myšlenky, pak přímo pyšnou mysl a pak bolavý pocit. 
              A opakovaně nechávejte tento pocit rozplynout. Sledujte, jak se mysl ve skutečnosti stále znovu „zamotává“ 
              do myšlení, a pokaždé vracejte pozornost do těla. Dokážete rozlišit, co se odehrává ve vašem prožívání 
              během myšlení a během všímavého pozorování tělesných pocitů? Jak se cítíte teď?
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseNine;
