import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-20.mp3";
import { ExerciseLayout } from "@/components/ExerciseLayout";

const ExerciseNineteen = () => {
  return (
    <ExerciseLayout>
      <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
      CVIČENÍ 20. INTEGRITA HODNOT.
      </h1>

      {/* Audio Player */}
      <div className="mb-12">
        <AudioPlayer audioSrc={audioFile} />
      </div>

      {/* Exercise Text */}
      <div className="prose prose-invert max-w-none">
        <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Sebepoznávání a rozvíjení autentického a transcendentního Já úzce souvisejí s vyjasňováním 
              si našich nejdůležitějších životních hodnot. Když nás přestávají ovládat maladaptivní schémata, 
              můžeme postupně stále svobodněji jednat a rozhodovat se přitom v souladu s hodnotami, 
              jimž doopravdy věříme a jež nám dávají smysl. Pojďme si proto v posledním cvičení této knihy 
              připomenout, které hodnoty jsou v našem osobním žebříčku momentálně nejvýš. Jasné uvědomění 
              si vyznávaných hodnot může fungovat jako kompas na naší cestě životem.
            </p>

            <p>
              Vezměte si papír a tužku a napište 5–10 obecných hodnot, které jsou pro vás v životě nejdůležitější. 
              Nechte si přitom trochu času na přemýšlení a všímejte si, které hodnoty s vámi opravdu rezonují 
              a vzbuzují odezvu ve vašem tělesném prožívání. Pokud některé z hodnot, které vás napadají, 
              nevyvolávají ve vašem těle žádnou reakci, dejte je do závorky. Můžete se přitom inspirovat 
              následujícím seznamem: bezpečí, ctižádost, dobrodružství, důslednost, důvěra, důvěryhodnost, 
              etika, flexibilita, harmonie, hojnost, humor, integrita, jednoduchost, láska, loajalita, mír, 
              moudrost, nadšení, nezávislost, ocenění, ohleduplnost, originalita, otevřenost, poctivost, podpora, 
              pohoda, pracovitost, pravdivost, profesionalita, prosperita, přátelství, připravenost, radost, 
              respekt, rodina, sebekázeň, seberealizace, slušnost, služba, soucit, sounáležitost, spolehlivost, 
              spolupráce, spravedlnost, stabilita, svoboda, tolerance, tvořivost, upřímnost, úspěch, užitečnost, 
              vděčnost, velkorysost, víra, všestrannost, zápal, zdraví, zodpovědnost, životní prostředí.
            </p>

            <p>
              Až si vytvoříte vlastní seznam, seřaďte ty nejdůležitější hodnoty podle důležitosti. 
              U prvních pěti hodnot se zamyslete, jak konkrétně se tyto hodnoty každodenně projevují 
              ve vašem jednání. Jak mohou druzí lidé poznat, že se ve vašem životě řídíte těmito hodnotami? 
              U každé hodnoty si poznamenejte alespoň jeden příklad. Pokud máte u některé hodnoty potíž najít 
              konkrétní příklady, zamyslete se, co byste mohli udělat pro to, aby se daná hodnota ve vašem 
              konkrétním každodenním jednání projevovala více. Máte chuť udělat v tomto ohledu nějaké změny? 
              Učiňte v tomto směru konkrétní rozhodnutí anebo ještě jednou přehodnoťte svůj žebříček hodnot 
              tak, aby to lépe odpovídalo vaší momentální životní situaci. Hodnoty se během života mohou měnit.
            </p>

            <p>
              Nakonec svůj žebříček hodnot přečtěte nějaké blízké osobě, nejlépe partnerce nebo partnerovi. 
              A požádejte o vyjádření. Připadá vaší partnerce nebo partnerovi, že je váš každodenní život 
              v souladu s vašimi hodnotami? Má pro vás nějaká doporučení? Zkuste si zpětnou vazbu pokorně vyslechnout. 
              Neobhajujte se, ale raději se nad tím, co jste vyslechli, znovu zamyslete. Co vás teď napadá, 
              když přemýšlíte nad svými hodnotami a svým životem?
            </p>
        </div>
      </div>
    </ExerciseLayout>
  );
};

export default ExerciseNineteen;