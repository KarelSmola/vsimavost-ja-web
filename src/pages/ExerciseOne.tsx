import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-jedna.mp3";

const ExerciseOne = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-inter text-sm font-light hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
            Zpět na hlavní stránku
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
          CVIČENÍ 1. JAKÝ POCIT PŘEDCHÁZÍ HNĚVU?
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Kdykoli prožíváme hněv, můžeme si být jisti, že jde o sekundární pocit, který se 
              objevil jako reakce na jiný, primární pocit. Jako všímavý terapeuti bychom ale měli 
              být schopni primární pocity jasně rozpoznávat, a tak si pojďme takové rozpoznávání 
              vyzkoušet v následujícím cvičení.
            </p>
            
            <p>
              Nejprve si vzpomeňte na nějakou situaci, kdy jste se cítili naštvaní. Zkuste si 
              vybavit, co vás tenkrát naštvalo úplně nejvíc. Hledejte velmi podrobně spouštěč 
              hněvu. Pokud šlo o interakci s jiným člověkem, naštvalo vás, to co Vám řekl? Nebo 
              způsob, jakým to řekl? Naštvalo Vás, co ten člověk udělal nebo naopak neudělal? 
              Připomeňte si, jaká myšlenka vám v tom okamžiku jako první proběhla hlavou.
            </p>
            
            <p>
              A teď zkuste na chvíli přestat přemýšlet a podívejte se, co právě teď, když jste si 
              připomněli danou situaci, cítíte v těle. Přeneste pozornost do těla. Na jakém místě 
              v těle se objevuje tělesný pocit? Co je to za pocit? Víte, že daná situace ve vás 
              probouzí hněv. A to je v pořádku. Dovolte si cítit hněv. Jaký primární pocit však ve 
              vás daná situace vyvolává? Zkuste zachytit, jaký pocit se objevuje ve vašem těle ještě 
              předtím, než vzplane hněv.
            </p>
            
            <p>
              Pokud jste našli tělesný pocit, který právě teď přitahuje vaši pozornost, zkuste najít 
              slovo, které by váš pocit co nejlépe vystihlo. Můžete si položit např. následující 
              otázky: Je to leknutí? Šok? Zděšení? Strach? Nebo pocit křivdy, nespravedlnosti? 
              Cítíte se opuštění, zrazení, znevážení či ponížení? Vyvstává ve vás pocit selhání 
              nebo pocit nedostatečnosti? Zeptejte se sami sebe: Jaký pocit předchází můj hněv? Jaký 
              pocit prožívá moje „vnitřní Dítě"? Vyslovte si v duchu postupně říkat všechna výše 
              uvedená slova a pokaždé, když nějaké slovo v duchu vyslovíte, chvíli počkejte. A 
              podívejte se, zda se váš tělesný pocit nějak proměnil. Změnilo se v těle něco? Pokud 
              ne, pomalu zkoušejte další slova. Jaké slovo by nejlépe vystihlo pocit, který právě 
              teď cítíte? Co byste potřebovali, abyste se cítili lépe? Pozorujte chvíli svůj tělesný 
              pocit s laskavostí a soucitem.
            </p>
            
            <p>
              Už když si vnitřně připustíte možnost, že hněvu možná předchází nějaký jiný bolavý 
              primární pocit, začnete si uvědomovat vlastní zranitelnost a rozvíjet tak soucitný 
              postoj k sobě samým. Možná v průběhu cvičení najdete slovo, které váš pocit vystihuje, 
              a pocítíte jistou úlevu. Možná jen zaznamenáte nějaký nepříjemný tělesný pocit, aniž 
              byste mu plně porozuměli. Jestliže ale pocit i po deseti minutách stále přetrvává, 
              jemně položte svou otevřenou dlaň na místo, kde ve vašem těle pocit cítíte. A třikrát 
              za sebou v duchu vyslovte přání: „Kéž všechny moje bolestivé pocity pominou! Kéž je mi 
              dobře!" Jak se cítíte teď?
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseOne;
