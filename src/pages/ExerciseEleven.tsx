import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-11.mp3";

const ExerciseEleven = () => {
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
        CVIČENÍ 11. KDO JSEM?
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Mnoho spirituálních tradic vede své následovníky, aby se opravdu hluboce zabývali otázkou „kdo jsem“. 
              V následujícím cvičení ovšem nejde o to, abychom se na tuto otázku snažili najít nějakou konkrétní 
              racionální odpověď. Jedná se spíše o to, abychom si plně uvědomili konceptuální povahu svého 
              narativního Já. Tuto podstatu můžeme poznávat, když si otázku „kdo jsem?“ opakovaně klademe 
              a pozorně vnímáme pocit, který v nás tato otázka vyvolává. Zažíváme, že na tuto otázku nejsme 
              schopni nalézt uspokojivou odpověď. Najděte si tedy pár minut času a ptejte se sami sebe: 
              „Kdo jsem?“ Zaujme-li vás toto cvičení, můžete si pak položit i následující otázky:
            </p>
            
            <p>Mám jméno. Jsem ale Já jménem, které mi rodiče dali?</p>
            <p>Mám genderovou identitu. Jsem ale Já pohlavím, k němuž se hlásím?</p>
            <p>Patřím do určité věkové kategorie (například čtyřicátník, teenagerka). Jsem ale Já touto věkovou kategorií?</p>
            <p>Mám nějaké vzdělání. Jsem ale Já tímto vzděláním?</p>
            <p>Mám nějaké povolání. Jsem ale Já tímto povoláním?</p>
            <p>Mám různé sociální role (například matka, otec, manžel, manželka, dcera, syn, něčí přítel, přítelkyně). Jsem ale Já sociální rolí, kterou hraji?</p>
            <p>Hlásím se k různým skupinám a institucím (například Češi, fanoušci heavy metalu, volejbalistky, ekologické aktivistky). Jsem ale Já příslušností k nějaké takové skupině?</p>
            <p>Jsem pověstí, kterou mám ve společnosti?</p>
            <p>Jsem inteligencí, kterou mi přisuzuje společnost?</p>
            <p>Jsem tělem, díky němuž mě vnímají druzí?</p>
            <p>Jsem myšlenkami ve své hlavě?</p>
            <p>Jsem vzpomínkami, na které si pamatuji?</p>
            <p>Jsem preferencemi, které obvykle mám? Jsem tedy tím, co mám rád?</p>
            <p>Jsem svými touhami?</p>
            <p>Jsem svými emocemi?</p>
            <p>Jsem svými přesvědčeními?</p>
            <p>Jsem svými typickými reakcemi?</p>
            <p>Jsem svými očekáváními?</p>
            <p>Jsem představami, které se odehrávají v mé mysli?</p>
            <p>Jsem tajemstvím?</p>
            <p>Kdo jsem?</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseEleven;
