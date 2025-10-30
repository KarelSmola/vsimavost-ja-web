import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-18.mp3";

const ExerciseEighteen = () => {
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
        CVIČENÍ 18. ULOŽTE SI POCIT ÚZASU A VDĚČNOSTI DO SVÉ VNITŘNÍ DATABÁZE.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Meditační ani psychedelické zkušenosti nejsou samozřejmě jedinou cestou k rozšířeným stavům 
              vědomí. Okamžiky hlubokého úžasu a vděčnosti nebo pocit, že se dotýkáme něčeho, co nás přesahuje, 
              můžeme zažívat i v každodenním životě. Pojďme si tedy v tomto cvičení takové zkušenosti vybavit, 
              abychom vzpomínky na ně mohli využívat v situacích, kdy se naše vědomí naopak zužuje. 
              Je to také jedna z cest léčení zraněného Já.
            </p>

            <p>
              Najděte si klidné místo, kde se alespoň 20 minut budete moci věnovat jen sami sobě. Pohodlně se usaďte. 
              Spočiňte chvíli svou pozorností u dechu a jen pozorujte, jak se tělo nadechuje a vydechuje. 
              Pak si zkuste vybavit, kdy v minulosti jste zažili nějaký okamžik naplněný úžasem, vděčností, 
              pocitem hlubokého spojení s druhými anebo pocitem, že se dotýkáte něčeho, co vás přesahuje. 
              Možná to bylo někde v přírodě, když jste pozorovali přírodní scenérii, horskou krajinu, 
              ledové pláně, poušť, západ slunce nad oceánem, prales či hvězdné nebe nad sebou. Možná ve vás podobné 
              pocity vyvolalo nějaké umělecké dílo, film, obraz, baletní představení nebo rockový koncert. Možná jste 
              se účastnili historické nebo mimořádné události, kde se lidé najednou semkli a „táhli za jeden provaz“. 
              Možná jste takové pocity zažívali, když jste byli zamilovaní anebo byli přítomní narození vlastního dítěte. 
              Zkuste si vybavit nějakou takovou zkušenost, a to se všemi podrobnostmi. Kdo byl tenkrát s vámi? 
              Dokážete si vybavit i tělesný pocit, který jste tenkrát prožívali?
            </p>

            <p>
              Pokud si dokážete vybavit takový pocit, uvědomte si, že tento pocit má léčivou moc. Cítíte, jak jste se 
              při té vzpomínce uvolnili? Cítíte se teď znovu na chvíli šťastní nebo vděční? Zůstaňte chvíli s tímto pocitem 
              a dobře si v sobě uložte i obraz, který vám tento pocit připomněl. Tento obraz můžete používat ve chvílích, 
              kdy si připadáte stažení, vyděšení, osamělí nebo nedostateční.
            </p>

            <p>
              Ať už ve vašem životě prožíváte cokoli, tuto vzpomínku vám nikdo nemůže sebrat a vy ji kdykoli můžete použít, 
              abyste si dodali sílu, když ji potřebujete. Až se tedy příště ve vašem prožívání aktivuje některé maladaptivní 
              schéma a vy budete v hloubi své duše znovu prožívat dětskou niternou emoční bolest, vybavte si na chvíli 
              tento okamžik úžasu a vděčnosti. A pozorujte, jak se vaše bolest rozpouští. Možná budete překvapeni, že 
              vůči své bolesti nejste tak bezmocní, jak by se mohlo zdát.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseEighteen;
