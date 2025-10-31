import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-15.mp3";
import { ExerciseLayout } from "@/components/ExerciseLayout";

const ExerciseFiveteen = () => {
  return (
    <ExerciseLayout>
      <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
      CVIČENÍ 15. UVOLNĚTE SVÉ SRDCE VE VZTAHU K DRUHÝM.
      </h1>

      {/* Audio Player */}
      <div className="mb-12">
        <AudioPlayer audioSrc={audioFile} />
      </div>

      {/* Exercise Text */}
      <div className="prose prose-invert max-w-none">
        <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Blízké a zvláště pak partnerské vztahy nám přinášejí mnoho příležitostí zkoumat pocity niterné 
              emoční bolesti a rozvíjet soucit k nám samým. Pojďme tedy toto cvičení vztahové zkušenosti využít 
              k léčení našeho zraněného Já. Prospějeme tím sami sobě i svým blízkým vztahům. Nejprve však zkuste 
              odhadnout, zda máte spíše strach z odhalení vlastní zranitelnosti, nebo strach z opuštění. Dělá vám 
              větší potíže projevovat lásku, anebo se ve vztahu vymezit a říct něco, co by se tomu druhému nemuselo 
              líbit? Byli byste víc nesví, kdybyste své partnerce nebo partnerovi měli říct „miluju tě“, anebo 
              „zlobím se na tebe“?
            </p>

            <p>
              Pokud již znáte odpověď na předchozí otázky, najděte si klidné místo, kde se alespoň 20 minut budete 
              moci věnovat jen sami sobě. Pohodlně se usaďte a pozorujte nejprve chvíli svůj dech. Zkuste se trochu 
              uvolnit. Sledujte, jak se vaše tělo přirozeně nadechuje a vydechuje. Nic víc. Až se budete cítit 
              připraveni, zkuste si v duchu představit, jak byste se cítili, kdybyste své partnerce nebo partnerovi 
              měli opravdu procítěně říct danou větu („miluju tě“, anebo „zlobím se na tebe“). Pak přestaňte přemýšlet 
              a pozorujte, co se odehrává ve vašem těle, v oblasti pánve, v podbřišku, v žaludku, v hrdle, v obličeji 
              i v oblasti vašeho srdce. Pokud kdekoliv v těle cítíte napětí, jen si ho uvědomte. Přijměte toto napětí. 
              Můžete ho cítit. Je to v úplném pořádku. Jaký pocit máte v srdci? Pokud je vaše srdce sevřené, dovolte 
              mu to. Zkuste si položit obě vaše dlaně doprostřed hrudníku, jako byste své srdce chtěli chránit. 
              Jaké je to teď? Pozorujte své srdce až do chvíle, než pocítíte, že se uvolňuje.
            </p>

            <p>
              Upřímné odhalování citů v blízkých vztazích vyžaduje více odvahy, než by se mohlo zdát. A nikdo vás 
              samozřejmě nemůže nutit, abyste své city projevovali. Může to však být také velmi vzrušující a dobrodružné. 
              Kdyby vás tedy představa upřímného sdílení citů přece jen začala lákat, můžete předchozí cvičení opakovaně 
              používat jako přípravu na skutečnou budoucí „akci“. Mám pro vás ale ještě jednu přípravnou variantu. 
              Než půjdete do skutečné „akce“, můžete si v duchu představit, jaké by bylo, kdyby danou větu za vás řekl váš 
              „ideální terapeut“. Zkuste si představit, jaké by pro vás bylo, kdybyste měli nějakého „ideálního párového terapeuta“. 
              Jaké by pro vás bylo, kdyby vaší partnerce nebo partnerovi řekl: „Víš, (vaše jméno) tě opravdu moc miluje“  nebo: 
              „Víš, (vaše jméno) se na tebe opravdu zlobí.“ To by mohlo být docela fajn, ne? Jak se cítíte, když si představíte 
              tuto verzi? Klidně si ji takto představujte opakovaně až do chvíle, než pocítíte chuť říct to raději doopravdy 
              a sami. Budu vám držet palce!
            </p> 
        </div>
      </div>
    </ExerciseLayout>
  );
};

export default ExerciseFiveteen;
