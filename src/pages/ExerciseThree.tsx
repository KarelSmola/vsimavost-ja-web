import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-03.mp3";

const ExerciseThree = () => {
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
        CVIČENÍ 3. ABSTRAKCE A ZOBECNĚNÍ.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
          <p>
            Stalo se vám někdy, že jste nepříjemné myšlenky nebo představy dlouho nemohli „dostat z hlavy" 
            a stále jste se k nim v duchu vraceli? Něco takového se obvykle děje, když si nejsme vědomi, 
            jaký konkrétní pocit v daném okamžiku prožíváme, anebo když naše myšlenky začnou být příliš 
            abstraktní a zobecňující. V následujícím cvičení si proto pojďme vyzkoušet, co se stane, 
            když si daný pocit lépe uvědomíme a když si povšimneme abstraktní a přehnaně zobecňující povahy 
            vlastních myšlenek.
          </p>

          <p>
            Vybavte si nějaké téma, na kterém vaše mysl snadno ulpívá a má tendenci se cyklit do nekonečného 
            přemýšlení. Může to být nějaká vaše soukromá vztahová záležitost, ale stejně tak téma, které se 
            vás zdánlivě tolik osobně netýká, například politika, ekologická situace, skandální aféry celebrit. 
            Nechte chvíli (2-3 minuty) rozběhnout vaše myšlenky o daném tématu. A pak zkuste přestat přemýšlet 
            a místo toho se podívejte, co právě teď, když jste si připomněli dané téma, cítíte v těle. Přeneste 
            pozornost do těla. Na jakém místě v těle se objevuje nějaký tělesný pocit? Co je to za pocit? 
            Jakou barvu by mohl mít? Jaký hudební žánr by jej mohl vystihnout? Rozhodněte se tento pocit 
            blíže prozkoumat.
          </p>

          <p>
            Můžete si položit následující otázky: Je pocit, který teď prožívám, nějakým druhem strachu? 
            Je nějakým druhem hněvu? Mohl by to být nějaký druh vzrušení? Mohl by to být nějaký druh odporu? 
            Je to nějaký druh žalu, úzkosti nebo překvapení? Nebo je to nějaký smutný pocit? Souvisí tento pocit 
            nějak s bezmocí, ponížením či vinou? Pokládejte si opakovaně otázku, jaký pocit to je, až do chvíle, 
            kdy vašemu pocitu skutečně porozumíte anebo jej alespoň budete schopni zařadit do některé z kategorií 
            nastíněných výše. Pak přejděte k dalšímu kroku.
          </p>

          <p>Rozhodněte se teď prozkoumat povahu svých myšlenek o daném tématu. Podívejte se na myšlenky očima 
            vnějšího pozorovatele. A uvědomte si, zda jsou vaše myšlenky o daném tématu spíše optimistické 
            a konstruktivní, nebo pesimistické a destruktivní. Jsou vaše myšlenky hodnotící? Týkají se minulosti, 
            přítomnosti, nebo budoucnosti? Zvlášť si ale povšimněte, zda jsou konkrétní, specifické, anebo mají 
            zobecňující povahu. Držíte se ve svých myšlenkách konkrétních faktů, anebo z faktů vyvozujete nějaké 
            obecnější závěry? Pokud přistihnete svou mysl, že má sklon zobecňovat, abstrahovat nebo z faktů vyvozovat 
            další předpoklady a domněnky, uvědomte si, jaké obecné závěry nebo domněnky vaše mysl z daného tématu 
            vyvozuje. Zkuste si je zformulovat jako úplně konkrétní věty a případně si tyto věty napište na papír.
          </p>

          <p>
            Nyní zkuste rozlišit, které vaše myšlenky o daném tématu jen konstatují fakta a které myšlenky fakta 
            dále interpretují. Co z vašich myšlenek je ověřitelná pravda? Činí-li vám potíže připustit si, že část 
            vašich myšlenek jsou pouhé domněnky a objektivními fakty nepodložená zobecnění, proč to tak je? Ohrožuje 
            vás možnost, že realita by se od vašich domněnek mohla lišit? Napadají vás alternativní možnosti, jak 
            daná fakta interpretovat? Zkuste se na záležitost podívat z jiného úhlu. Jak by danou záležitost interpretoval 
            váš oponent? Nakonec si uvědomte, zda se nyní nějakým způsobem změnil váš postoj k danému tématu. 
            Jaký pocit teď máte?
          </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseThree;
