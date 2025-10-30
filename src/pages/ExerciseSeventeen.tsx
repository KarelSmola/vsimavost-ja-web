import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cvicení-17.mp3";

const ExerciseSeventeen = () => {
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
        CVIČENÍ 17. TRANSPERSONÁLNÍ DEZIDENTIFIKACE.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Usaďte se v pohodlné a uvolněné pozici. Zaměřte pozornost do těla. A konstatujte: Mám tělo, 
              ale Já nejsem tímto tělem. Toto tělo může být zdravé, nebo mít různé potíže nebo nemoci. 
              Může být odpočaté a plné sil, anebo unavené. To ale nemá co do činění se mnou. Mohu tělo 
              pozorovat, ale není to mé Já. Toto tělo je velmi vzácný nástroj, který mi umožňuje zažívat 
              různé zkušenosti a konat nejrůznější skutky ve vnějším světě, ale je to pouhý nástroj. 
              Dobře se o něj starám. Snažím se ho udržovat zdravé a v dobré kondici, ale není to mé Já. 
              Mám k dispozici toto tělo, ale nejsem tímto tělem.
            </p>

            <p>
              Nyní si povšimněte tělesných pocitů. Uvědomte si: Prožívám nejrůznější pocity a emoce, ale 
              Já nejsem těmito pocity ani emocemi. Zažívám bezpočet emocí, někdy i protichůdných a stále 
              se měnících. Naděje, zoufalství, radost, smutek, vzrušení i klid. Mohu je pozorovat, když 
              jsou příjemné i když jsou nepříjemné. Mohu je akceptovat, rozumět jim, mohu je odsuzovat 
              nebo usměrňovat, mohu je projevovat, využívat je. Je však evidentní, že tyto emoce nejsou 
              mým Já. Prožívám emoce, ale nejsem těmito emocemi.
            </p>

            <p>
              Nyní si uvědomte své myšlenky, úvahy, představy, názory a intelektuální postoje. Uvědomte si: 
              Mohu myslet a uvažovat nebo si vytvářet různé představy. Mohu zaujímat stanoviska. Já však 
              nejsem těmito myšlenkami, představami ani stanovisky. Některé myšlenky a představy jsou velmi 
              rozvinuté a detailní. Jiné jsou jen mlhavé. Mysl může být nedisciplinovaná, ale i tvůrčí. 
              Díky myšlení mohu řešit problémy a zvládat výzvy ve vnějším i vnitřním světě. Tyto myšlenky, 
              představy a názory ale nejsou Já.
            </p>
            
            <p>
              Uvědomte si dále, že v mysli lze rozpoznat také nejrůznější touhy, nutkání, zvykové tendence, 
              popudy a záměry do budoucna. A zpřítomněte si následující skutečnost: Mám nejrůznější touhy, 
              averze, přání, zvyky i plány. Já však nejsem těmito inklinacemi nebo záměry. Touhy, averze, 
              přání, zvyky i plány se proměňují. Někdy jsou v rozporu. Objevují se a mízí. Prožívám různé 
              touhy a averze, ale nejsem těmito touhami ani averzemi.
            </p>

            <p>
              A uvědomte si konečně samo vědomí, které si uvědomuje všechny ty smyslové vjemy, pocity, 
              myšlenky a touhy. A chvíli toto vědomí pozorujte. Pozorujte, že toto vědomí se někdy ztotožní 
              s nutkáním, myšlenkou, pocitem nebo vjemem, a někdy ne. Toto vědomí však není žádnou konkrétní 
              myšlenkou, vjemem ani pocitem. Může si uvědomovat i samo sebe. Možná prchavě zachytíte i prázdné 
              vědomí bez obsahu. Skrývá se v tomto vědomí nějaké Já?
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseSeventeen;
