import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-07.mp3";

const ExerciseSeven = () => {
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
        CVIČENÍ 7. ŘEKNĚTE ANO SVÉMU SMUTKU.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Naučit se se soucitem akceptovat pocity niterné emoční bolesti je klíčem k transformování (a rekonsolidaci) 
              maladaptivních schémat. Znamená to dobrovolně se vzdát obranných mechanismů, které naši pozornost 
              od niterné emoční bolesti automaticky odvádějí, a vědomě se s touto bolestí konfrontovat. Teprve když si 
              tuto bolest připustíme a vědomě ji prožijeme, může se rozpustit. Je však třeba s ní zacházet velmi citlivě 
              a s velkou trpělivostí. Chcete se pokusit připravit u sebe podmínky pro léčení pocitů dětské opuštěnosti? 
              Pokud ano, vyzkoušejte si následující cvičení.
            </p>

            <p>
              Nejprve si ve svých myšlenkách najděte osobnost, která podle vás svým životem zosobňuje laskavost a soucit. 
              Může to být nějaký žijící člověk nebo i historická či filmová postava. Napadá vás někdo, o kom jste si jistí, 
              že by měl za všech okolností pochopení pro vaše trápení a reagoval by na ně laskavě a se soucitem? Hledejte 
              v myšlenkách takového člověka tak dlouho, až najdete někoho, jehož představa vám vyvolá úsměv na tváři. 
              Hledejte, i kdyby vám to mělo trvat třeba 20 minut. Až takovou osobu najdete, představte si, že sedí asi 
              půl metru za vámi, a pokud by vám to bylo příjemné, představte si dále, že se vás tato osoba přátelsky 
              dotýká dlaní na vašich zádech mezi lopatkami. Teprve pak přejděte k dalšímu kroku.
            </p>

            <p>
              Vzpomeňte si na nějaký okamžik z dětství, kdy jste se cítili obzvláště smutní a osamělí. Vybavte si tu 
              vzpomínku se všemi detaily. Co na této situaci ve vás vyvolává nejsilnější pocity? Možná si představujete 
              konkrétní scénu, slyšíte ve své představě nějaká slova nebo si uvědomujete své vnitřní přesvědčení o tom, 
              jaké dopady na vás tato situace bude mít v budoucnu. Pozorujte, jaké pocity nyní zažíváte ve svém srdci, 
              kolem žaludku, v hrudi, v oblasti úst, břicha a zad. A dovolte svému tělu, aby znovu plně pocítilo ten 
              dávný smutek a osamělost.
            </p>

            <p>
              Abyste mohli na vlastní kůži poznat, co se děje, když vnitřně odmítáte své pocity, zkuste chvíli vrtět 
              hlavou zleva doprava a v duchu si říkejte „ne, ne, ne“. Říkejte takto chvíli „ne“ svým bolavým pocitům 
              a všímejte si, jak se tento mentální odpor projevuje ve vašem těle. Co se děje s vašimi pocity niterné 
              emoční bolesti, když jim říkáte „ne“? Co se děje s vaším srdcem?
            </p>

            <p>
              Teď se zhluboka nadechněte a nechte své pocity opět volně plynout. Ještě jednou si přehrajte vzpomínku 
              a tentokrát se rozhodněte své pocity přijmout. Dovolte tělu je znovu cítit. A pokývejte hlavou jako při 
              souhlasu. Pak si v duchu pomalu říkejte „ano, ano, ano“. Můžete si přitom představit, že vám laskavá 
              a soucitná osoba jemně pokládá ruku na záda. A dejte svým pocitům volný průběh. Všímejte si, co se 
              ve vašem těle odehrává, když všem svým pocitům říkáte „ano“. Co se děje s vašimi nepříjemnými pocity? 
              Zesilují, anebo se rozpouštějí? Co se děje s vaším srdcem, když říkáte „ano“? Je něco, co byste chtěli 
              říct? Něco, co jste v dětství říct nemohli, ale teď už můžete? Pokud ano, vyslovte to nahlas. A pokud 
              by se vám přitom vedraly do očí slzy, klidně je nechte přijít. Jen si představujte, že laskavá a soucitná 
              osoba je stále u vás. Pak zůstaňte ještě chvíli v klidu sedět a postupně propusťte všechny myšlenky, 
              vzpomínky i představy. Spočiňte chvíli v přítomnosti a ponechte si jen ten akceptující postoj k vašim 
              pocitům. Jak se cítíte teď?
            </p>            
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseSeven;
