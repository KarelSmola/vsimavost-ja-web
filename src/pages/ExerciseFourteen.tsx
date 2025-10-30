import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-14.mp3";

const ExerciseFourteen = () => {
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
        CVIČENÍ 14. HNĚV JAKO STRÁŽNÉ ZVÍŘE.
        </h1>

        {/* Audio Player */}
        <div className="mb-12">
          <AudioPlayer audioSrc={audioFile} />
        </div>

        {/* Exercise Text */}
        <div className="prose prose-invert max-w-none">
          <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Hněv patří mezi základní emoce a je naprosto přirozené, že se v našem prožívání objevuje. 
              Je jakýmsi strážcem našich osobních hranic. A snaha hněv dlouhodobě ignorovat nebo potlačovat může 
              být pro nás velmi destruktivní. Skutečnou výzvou je tedy spíše naučit se hněv adekvátním způsobem 
              projevovat a využívat ho pro vlastní ochranu bez zbytečné agrese nebo nenávisti k druhým. Abychom 
              se však mohli naučit hněv přiměřeně a konstruktivně projevovat, musíme se nejprve naučit si ho 
              uvědomovat (rozpoznávat ho) a s pochopením ho akceptovat. Potřebujeme se naučit zaujímat vůči hněvu 
              soucitný postoj. K tomu nám může pomoci např. představa hněvu jako strážného zvířete.
            </p>

            <p>
              Lidé od nepaměti využívali různá zvířata k tomu, aby pomáhala chránit jejich soukromí a upozorňovala 
              na přítomnost případného vetřelce. Typickým strážným zvířetem je pes, ale v některých kulturách plnili 
              tuto úlohu také např. husa nebo páv. Výstražný hlas těchto teritoriálních ptáků může člověka upozornit, 
              že někdo překročil hranice a vstoupil na soukromý pozemek – podobně jako v evropských lesích je takovým 
              strážcem lesa sojka a v asijské džungli upozorňují na přítomnost predátora třeba opice.
            </p>

            <p>
              Zkuste si tedy představit, jaké zvíře by mohlo personifikovat váš hněv. Jaký zvířecí strážce a ochránce 
              by se vám líbil? Mohl by to být pes? A chtěli byste mít spíše vlčáka anebo čivavu? Nebo by se vám líbil 
              medvěd? Jaguár? Veverka? Nebo třeba drak? Tyrannosaurus rex? Orel? Gorila? Hroch? Najděte si ve své 
              fantazii zvíře, které pro vás bude symbolizovat vašeho vnitřního ochránce.
            </p>

            <p>
              A teď si představte, co by se dělo, kdybyste na svém pozemku měli takové ochranné zvíře a úplně byste 
              ho ignorovali. Nijak byste ho nekrmili, nepečovali byste o něj nebo byste ho drželi trvale uvázané 
              na řetězu a třeba ho i bili. To by mohlo být docela nebezpečné, že? Když se o své zvíře budete 
              s láskou starat a vychovávat ho, je mnohem pravděpodobnější, že vám bude oddaně sloužit a bude vás chránit.
            </p>

            <p>
              Učte se tedy rozvíjet také ke svému hněvu láskyplný postoj. Když pocítíte hněv, můžete si představit, 
              že ve vašem nitru štěká váš strážný pes anebo váš vnitřní drak právě vyšlehl plamen, aby vás upozornil, 
              že je potřeba se ochránit. Nesnažte se však vaše strážné zvíře jen umlčet. Láskyplně mu poděkujte, že 
              hlídá vaše hranice. Podrbejte ho za ušima. Dejte mu třeba pamlsek. A pak mu dejte najevo, že o narušiteli 
              hranic už víte a že danou situaci nyní budete dospěle a asertivně řešit. Můžete začít třeba tím, že řeknete 
              něco jako „tak tohle se mi nelíbí“ nebo „tak teď se doopravdy zlobím“. A pokud máte strach něco takového říct, 
              představte si, že vedle sebe máte své ochranné zvíře. Vaše strážné zvíře (váš hněv) nechce, aby vás někdo zraňoval 
              nebo vás jen tak využíval. Použijte tedy představu strážného zvířete k tomu, abyste našli sílu a odvahu v dané 
              situaci nemlčet, ale asertivně projevit, co cítíte. Až to vyzkoušíte, uvědomte si, o kolik lépe vám je. Neprojevený 
              hněv vám ubližuje. A ochranný hněv je ve skutečnosti esenciální součástí soucitu k sobě.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExerciseFourteen;
