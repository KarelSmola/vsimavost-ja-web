import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-08.mp3";
import { ExerciseLayout } from "@/components/ExerciseLayout";

const ExerciseEight = () => {
  return (
    <ExerciseLayout>
      <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
      CVIČENÍ 8. OD MÉNĚCENNOSTI K POKOŘE.
      </h1>

      {/* Audio Player */}
      <div className="mb-12">
        <AudioPlayer audioSrc={audioFile} />
      </div>

      {/* Exercise Text */}
      <div className="prose prose-invert max-w-none">
        <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Stud neboli pocit méněcennosti je natolik nepříjemný pocit, že téměř vždy bývá překrytý nějakým 
              obranným mechanismem. Zatímco tento obranný mechanismus je našemu vědomí snadno přístupný, pocit 
              studu naší pozornosti často uniká. Mnozí lidé si například připouštějí, že mají sklony k perfekcionismu 
              nebo workoholismu. Většinou si však plně neuvědomují, že jejich bažení a závislost na dokonalosti 
              nebo výkonu ve skutečnosti vycházejí z pocitu vlastní nedostatečnosti. Už samotné uvědomění si 
              a rozpoznání pocitu studu je přitom při léčení méněcenného Já důležitým krokem. Pokud jste tedy 
              získali dojem, že možná trpíte syndromem „méněcenného Já“, a jste připraveni se se studem vědomě 
              konfrontovat, pusťte se směle do následujícího cvičení. Studu (nikoli však pocitů trapnosti a viny) 
              je totiž možné se úplně zbavit.
            </p>
            
            <p>
              Vybavte si nějakou situaci, kdy jste měli dojem, že se vám nedaří nebo že jste úplně selhali. 
              Připomeňte si příčinu či důvod, proč jste se tak cítili. A vybavte si, kdo všechno tam tenkrát byl, 
              co přesně se odehrálo, všechny podrobnosti. Vybavuje se vám teď celý ten zúžený stav vaší mysli a také 
              tělesné pocity a nutkání, které jste tenkrát prožívali (například nával horka, bodavý pocit v obličeji 
              nebo u srdce, touha zmizet)? Všímejte si střídavě stavu své mysli i těchto tělesných pocitů jako nadšený 
              vědec. Je pozoruhodné, co všechno se ve vašem těle a mysli pod vlivem té vzpomínky děje, že?
            </p>

            <p>
              Uvědomte si ale také, že ty nejbolavější pocity méněcennosti pocítíte vždy přesně v okamžiku, kdy 
              vám hlavou prolétne nějaká hypersebekritická myšlenka. Pozorujte pak chvíli tyto myšlenky i to, jak 
              ve vašem těle vyvolávají stud. Dokážete sledovat, jak za každou sebeodsuzující myšlenkou následuje 
              pocit fyzického bodnutí? Je zajímavé si všimnout, že tento pocit nevzniká jako nevyhnutelný důsledek 
              dané situace ani vzpomínky na ni. Vzniká až na základě našeho dalšího (většinou hypersebekritického) 
              myšlení.
            </p>
            
            <p>
              Pocit studu vzniká z dětinsky naivní představy, že sami o sobě máme nějakou nezměnitelnou podstatu, 
              která trvale určuje naši (ne)hodnotu. Souvisí jednak s představou, že existuje nějaký objektivní 
              žebříček obecné lidské hodnoty, na kterém se můžeme nějak umístit. A také s představou, že tu naši 
              domnělou nedostatečnou osobní hodnotu nikdy nemůžeme změnit, protože ať uděláme, co uděláme, stejně 
              to nikdy nebude dost. Jenže odkud se v nás takové představy berou? Když ve své mysli v souvislosti 
              se studem zachytíte nějakou sebeshazující nebo neúměrně zobecňující (a černobílou) představu, položte 
              si otázku: Kde v mém dětství mohla tato představa (toto jádrové přesvědčení) vzniknout? Jaký člověk 
              a jaké okolnosti tenkrát přispívali k tomu, že jsem si připadal nedostatečný?
            </p>

            <p>
              Pokud se vám vybaví nějaké relevantní vzpomínky, ptejte se dál sami sebe: Co jsem tenkrát potřeboval? 
              A zkuste si představit, jak byste se tenkrát cítili, kdyby u vás byl někdo, kdo vás měl rád. Jaké by 
              bylo, kdyby vás tento milující člověk objal nebo vzal kolem ramen a řekl vám: „Já tě mám rád." Chvíli 
              setrvejte v té představě, i když je vám z ní možná trochu smutno. Můžete si také představit, že kdyby 
              vám tenkrát bylo smutno, milující člověk by vám kapesníkem jemně osušil slzy a usmál by se na vás. 
              Jak byste se cítili? Dobře si v sobě ten příjemný pocit uložte.
            </p>
            
            <p>
              A nakonec se ještě jednou vraťte k situaci, kdy se vám něco nedařilo. Dokážete se na ni a na sebe 
              samé nyní podívat shovívavějším a soucitnějším pohledem? Jaké poučení si z dané situace můžete vzít 
              do budoucna? Uvědomte si, že žádný člověk ve skutečnosti nemá právo myslet si, že je hodnotnější 
              než někdo druhý. A neexistuje tedy ani žádný důvod, proč by si kdokoli měl připadat méněcenný. 
              Je možné, že se vám něco nedaří. To ale nijak nesouvisí s vaší obecnou lidskou hodnotou. Opravdová 
              moudrost je vždy spojená s pokorou. A pokora znamená vědět, že ve skutečnosti nemáme právo nikoho 
              shazovat. Dokonce ani sami sebe. A jestliže se teď chcete začít shazovat za to, že se shazujete, 
              raději se podívejte do zrcadla a řekněte sami sobě: „Chci tě mít rád.“ Nic víc. Jak se cítíte teď?          
            </p>
        </div>
      </div>
    </ExerciseLayout>
  );
};

export default ExerciseEight;
