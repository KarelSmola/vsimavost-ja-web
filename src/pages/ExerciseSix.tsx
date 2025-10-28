import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-06.mp3";

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
        CVIČENÍ 6. SHOĎTE ZE SEBE OMNIPOTENTNÍ VINU.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Cítíte se někdy provinile jen proto, že jste nenapInili nevyřčené očekávání někoho jiného? 
              Máte dojem, že jste zodpovědní za to, aby se druzí (zvláště blízcí) lidé cítili šťastní? Dělá 
              vám obecně potíže někoho odmítnout nebo zklamat? Je pro vás těžké říkat ne? Pokud ano, je poměrně 
              pravděpodobné, že na sebe automaticky přebíráte neadekvátní odpovědnost a trpíte syndromem 
              omnipotentní viny. V takovém případě vám může pomoci následující cvičení.
            </p>

            <p>
              Omnipotentní vina je podobně jako hněv vždy sekundární pocit (stejně jako ve cvičení 1). Obvykle 
              je spojena s neurčitým a neuvědomovaným iracionálním strachem, že když nevyhovíte druhým, mohlo 
              by se stát "něco nepředstavitelně strašného". A právě záměr zvědomit si tento existenciální strach 
              je prvním krokem ke zbavení se omnipotentní odpovědnosti. Vzpomeňte si tedy nejprve na nějakou 
              konkrétní situaci, kdy jste byli přesvědčení, že někoho "nesmíte za žádnou cenu zklamat" nebo 
              že "nesmíte selhat". Jak jste se tenkrát cítili? Jste schopní si uvědomit, že to napětí, které 
              jste cítili v těle, je vlastně iracionální strach? Vaše tělo prožívalo silný pocit ohrožení, 
              jako kdyby vám šlo o život, že? Zkuste si ten pocit uvědomit a s plným vědomím jej procítit.
            </p>

            <p>
              Pak si položte otázku, odkud ze své minulosti tento pocit znáte? Možná vás tento pocit provází 
              skoro celý život. Kdy poprvé v životě jste ho však cítili? Na základní škole? Nebo ještě dříve? 
              Až si vybavíte vzpomínku z dětství spojenou s tímto pocitem ohrožení nebo urgence, připomeňte si 
              také okolnosti a kontext dané vzpomínky. Co tenkrát dělali vaši rodiče? Co jste (od nich) potřebovali, 
              a neměli? Jak a čím by vám tenkrát mohli pomoci?
            </p>

            <p>
              Ideální rodiče samozřejmě nepodmiňují svou lásku tím, že by dítě muselo naplňovat nějaká jejich očekávání. 
              Jsou se svým životem spokojení. Zvládají všechny výzvy, které život přináší. A jejich základní životní 
              spokojenost přitom nijak nezávisí na tom, co dělá nebo nedělá jejich dítě. Zkuste si tedy na okamžik představit, 
              jaké by bývalo mohlo být, kdybyste tenkrát, když jste byli ještě malí, měli úplně jiné "ideální rodiče". 
              Představte si, že by si sedli blízko k vám a řekli něco jako: "My tě máme rádi, i když se ti něco nedaří. 
              Jsme šťastní a vděční, že tě máme. A ty si naši lásku nemusíš vůbec ničím zasluhovat. Nemusíš být dokonalý. 
              Víš, my si se všemi svými problémy umíme nějak poradit. S našimi dospělými starostmi se proto nemusíš trápit. 
              Nech dospělé starosti na nás a vůbec do nich nestrkej nos! Podívej, život je úžasný! A my se s tebou chceme 
              podělit o radost ze života. S námi jsi v bezpečí. Můžeš si užívat bezstarostné dětství a spoléhat se na nás."
            </p>

            <p>
              Jaký pocit máte, když si teď představujete, že byste v dětství měli takovéto "ideální rodiče"? Zkuste se do 
              té představy plně ponořit a pocítit, jaká úleva by to byla. Když se Vám podaří díky takovéto imaginaci prožít 
              pocit úlevy, můžete tím ze sebe trvale shodit pocit omnipotentní odpovědnosti. Klidně se proto k tomuto cvičení 
              opakovaně vracejte a vytvářejte si stále konkrétnější, barvitější a věrohodnější představu zralých a seberealizovaných 
              "ideálních rodičů". Vyplatí se to.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseOne;
