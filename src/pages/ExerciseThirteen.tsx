import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-13.mp3";

const ExerciseThirteen = () => {
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
        CVIČENÍ 13. NAUČTE SE ROZUMĚT SVÝM KONTROLKÁM.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
          <p>
            Syndrom omnipotentní viny spojený s naším zraněným Já nás velmi naléhavě nutí zcela automaticky 
            přebírat odpovědnost za pocity a potřeby druhých a zároveň úplně ignorovat vlastní pocity a potřeby. 
            Trpíme-li tímto syndromem, staráme se o druhé naprosto bez ohledu na vlastní limity a navíc ještě 
            naivně očekáváme, že druzí se budou (samozřejmě) na oplátku stejně bezhraničně starat o nás, a to 
            aniž bychom jasně vyjadřovali svoje potřeby. To se však nikdy nestane. Ve skutečnosti je zcela na 
            nás, abychom se naučili všímat si svých pocitů, rozpoznávat, co potřebujeme, a komunikovat to ve 
            směru k druhým. Jsme-li dospělí, měli bychom se navíc naučit alespoň zčásti si svoje potřeby naplňovat sami.
          </p>

          <p>
            Vlastní tělesné pocity bychom přitom mohli přirovnat ke kontrolkám v autě. Každý pocit signalizuje 
            nějakou potřebu. Když je v autě potřeba doplnit palivo, olej nebo chladicí kapalinu, na palubní 
            desce se vždy rozsvítí nějaká kontrolka. A velmi podobně se v našem těle objevují pocity, aby nám 
            signalizovaly, že něco potřebujeme. Rozhodně není moudré tyto kontrolky ignorovat ani očekávat, 
            že je někdo bude monitorovat místo nás!
          </p> 
          
          <p>
          Pokud jste si již vyzkoušeli cvičení 6, je pravděpodobné, že se ve vašem prožívání v některých situacích, 
          které u vás dříve vyvolávaly pocit omnipotentní odpovědnosti a existenciálního strachu, začnou postupně 
          objevovat hněv nebo hnus. To jsou pocity, které jste si v dětství většinou nemohli dovolit, a jejich 
          objevení je známkou toho, že se vaše zraněné Já začíná uzdravovat. Hněv signalizuje, že byste se měli 
          vůči něčemu ohradit. Hnus signalizuje, že byste se měli od něčeho distancovat (například explicitně 
          odmítnout odpovědnost, kterou se na vás někdo skrytě snaží přenést). Chcete-li se však naučit rozumět 
          i dalším „kontrolkám“ (pocitům), pojďte si vyzkoušet následující cvičení.
          </p> 
          
          <p>
          Vzpomeňte na nějakou emočně nabitou situaci, kterou jste prožili v nedávné době. Vybavte si tu vzpomínku 
          se všemi detaily. Co na této situaci ve vás vyvolává nejsilnější pocity? Dokážete si tuto situaci připomenout 
          natolik živě, abyste začali nějaké pocity znovu prožívat na tělesné úrovni? Pokud ano, přestaňte teď nad touto 
          ituací přemýšlet a podívejte se, co právě teď cítíte v těle. Přeneste plně pozornost do těla. Na jakém místě 
          v těle se objevuje pocit? Co je to za pocit? Dokážete ho pojmenovat? Napadá vás nějaké slovo, které by pocit 
          vystihlo? Hledejte chvíli (několik minut) co nejtrefnější pojmenování tohoto pocitu. A vždy, když vás napadne 
          nějaké slovo, vraťte hned pozornost do těla. Změnilo se něco v těle, když jste v duchu vyslovili dané slovo? 
          Pokud ne, pravděpodobně dané slovo pocit úplně nevystihuje. V takovém případě zkoušejte hledat jiná slova. 
          Buďte trpěliví. Učíte se přece rozumět svým „kontrolkám“, a tedy sami sobě.
          </p> 
          
          <p>
          Po několika minutách, kdy jste se snažili pocit trefně pojmenovat, přejděte do další fáze a ptejte se sami 
          sebe: Jakou potřebu můj pocit signalizuje? Co potřebuji, když si danou situaci připomenu? Můžete zkusit položit 
          si následující otázky: Potřebuji ochránit? Potřebuji se prosadit? Potřebuji něčí blízkost a porozumění? Potřebuji 
          to, co cítím, s někým sdílet? Potřebuji se od něčeho distancovat? Potřebuji sám sobě něco odpustit?  Co potřebuji?
          </p>

          <p>
          Jakmile začnete rozumět tomu, co s ohledem na danou situaci ve skutečnosti potřebujete, uvědomte si, že 
          naplnění jakékoli potřeby začíná ve vašem nitru zaujetím soucitného postoje k dané potřebě. Připusťte si tedy 
          plně, že danou potřebu máte. Dovolte si ji mít a nesnažte se ji potlačit. Přijměte ji s pochopením a soucitem 
          k sobě. Pak si položte otázku: Co mohu udělat pro to, abych tuto svou potřebu naplnil? Nenechte se přitom ošálit 
          naučenou bezmocností, která vám říká, že nemůžete udělat nic. Co můžete udělat sami pro sebe?
          </p>

          <p>
          Nakonec si představte, jaké by bylo, kdybyste daný pocit i danou potřebu vyjádřili lidem, kterých se týká. 
          Jaké by bylo, kdybyste jim řekli: „Víš, já v této situaci cítím  (doplňte konkrétní pocit) a potřebuji teď 
          (doplňte konkrétní potřebu).“ Je pro vás těžké nebo nemožné si něco takového představit? Pokud nevěříte, že 
          by to na lidi, kterým byste své pocity a potřeby sdělovali, mělo jakýkoli dopad, uvědomte si, že vyjádření 
          daného pocitu a potřeby by v každém případě mělo dopad na vás. Je velký rozdíl mezi tím, když své pocity držíte 
          v sobě, nebo když je vyjádříte. Můžete si také představit, jaké by bylo, kdybyste na své straně měli asertivního 
          advokáta, který by to vyslovil za vás. Řekl by něco jako: „Můj klient v této situaci cítí (doplňte konkrétní pocit) 
          a potřebuje (doplňte konkrétní potřebu).“ Byla by to pro vás úleva? Nebo vás taková představa děsí? Zkoumejte chvíli 
          pocity, které ve vás taková představa vyvolává, a nebojujte s nimi. Přijměte je. Jak se cítíte teď?
          </p> 
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseThirteen;
