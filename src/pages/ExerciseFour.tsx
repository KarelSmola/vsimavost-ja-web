import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-04.mp3";

const ExerciseOne = () => {
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
        CVIČENÍ 4. LÁSKYPLNÝ DOPIS AUTENTICKÉMU JÁ.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
          <p>
            Negativní jádrová přesvědčení týkající se nás samých úzce souvisejí s nedostatkem laskavosti 
            a soucitu k sobě. Obranné mechanismy, které se v naší mysli automaticky aktivují jako reakce 
            na pocity niterné emoční bolesti, neobsahují žádnou vřelost ani pochopení. Jenže rozvíjení 
            laskavého a soucitného postoje ke všem našim pocitům, náladám i myšlenkám je nutným předpokladem 
            transformování maladaptivních schémat. Soucitný, akceptující postoj k niterné emoční bolesti 
            je vlastně jedinou zdravou alternativou obranných mechanismů. Pojďme se proto v následujícím 
            cvičení na rozvíjení soucitu k sobě zaměřit.
          </p>

          <p>
            Najděte si klidné místo, kde se alespoň půl hodiny můžete věnovat jen sami sobě. Připravte si 
            papír a tužku. A zkuste se podívat sami na sebe očima milujícího člověka, partnera, blízkého 
            přítele nebo milujícího rodiče. Kdybyste psali láskyplný dopis někomu, koho máte opravdu rádi, 
            a přitom víte, že to v životě zrovna teď nemá úplně lehké, jakým oslovením byste dopis začali? 
            Napište toto láskyplné oslovení na papír a použijte přitom své jméno.
          </p>

          <p>
            Začněte psát dopis a vyjadřujte v něm svůj zájem o člověka, kterému píšete. Napište mu, co 
            k němu cítíte. A vyjadřujte mu svou lásku a podporu. Napište mu, že na něj myslíte a že je pro 
            vás důležitý. Poděkujte mu, za všechno dobré, co dělá (a buďte konkrétní). Sdělte mu, za co všechno 
            si ho vážíte a co všechno na něm obdivujete. Odpusťte mu všechny jeho chyby a nedostatky a raději 
            se ho zeptejte, co teď nejvíc potřebuje, a nabídněte mu pomoc. Určitě mu však nedávejte žádné rady! 
            Důvěřujte mu, že si poradí sám. Neklaďte na něj žádné nároky! Vaším úkolem je dát mu najevo, že 
            stojíte při něm a že při něm vždycky budete stát, i kdyby se mu něco nedařilo. Napište mu to. 
            Zkuste ho povzbudit. Snažte se během psaní nebýt racionální, ale vyjadřujte především své vřelé 
            city a láskyplné postoje. Představujte si, že píšete osobě, do níž jste se zamilovali, nebo svému 
            dítěti, které je právě teď samo někde daleko. Co všechno byste napsali v takovém dopise?
          </p>

          <p>
            Až dopis napíšete, spočiňte chvíli v přítomnosti a nechte své myšlenky trochu usadit. Uvědomte si, 
            jak vám při psaní dopisu bylo. Co jste prožívali? Pak dopis nahlas přečtěte. Čtěte ho pomalu 
            a uvědomujte si, jaké reakce ve vás jednotlivé věty vyvolávají, když je slyšíte. Všímejte si všech 
            pocitů, které se objevují ve vašem těle a zkuste je nijak nepotlačovat. Přijímejte je. Všechny 
            vaše pocity jsou v pořádku. Jakmile dopis dočtete, ještě chvíli všímavě pozorujte, co všechno 
            cítíte ve svém těle.
          </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseOne;
