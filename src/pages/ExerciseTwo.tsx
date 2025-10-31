import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-02.mp3";
import { ExerciseLayout } from "@/components/ExerciseLayout";

const ExerciseTwo = () => {
  return (
    <ExerciseLayout>
      <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
      CVIČENÍ 2. EMOČNÍ MOST DO MINULOSTI.
      </h1>

      {/* Audio Player */}
      <div className="mb-12">
        <AudioPlayer audioSrc={audioFile} />
      </div>

      {/* Exercise Text */}
      <div className="prose prose-invert max-w-none">
        <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
            Stalo se vám někdy, že vám emoce trochu přerostly přes hlavu a intenzita vašeho 
            prožívání byla přehnaná a neodpovídala banální situaci, ve které jste se nacházeli? 
            V takových chvílích nám naše zvýšená emoční reaktivita dává příležitost porozumět tomu, 
            která vývojová potřeba nebyla v našem dětství naplňována. A tak můžeme rozvíjet soucit 
            se sebou. Stačí si přitom položit jen pár správných otázek. Chcete si to vyzkoušet?
            </p>
            
            <p>
            Při tomto cvičení je vhodné sedět vzpřímeně, obě nohy mít na zemi a ruce volně v klíně. 
            Usaďte se tedy tímto způsobem. A vybavte si co nejpodrobněji nějakou konkrétní situaci, 
            kdy jste se cítili emočně vyvedení z míry. Co přesně tenkrát odstartovalo vaši emoční 
            reakci? Jaká myšlenka vám v tom nejvypjatějším okamžiku proběhla hlavou? Přehrajte si 
            v duchu ten emočně nejnabitější moment několikrát dokola.
            </p>
            
            <p>
            Co teď, když jste si připomněli danou situaci, cítíte ve vašem těle? Na jakém místě 
            v těle se objevuje nějaký tělesný pocit? Co je to za pocit? Dokážete ho pojmenovat? 
            Odkud ze své minulosti tenhle tělesný pocit znáte? Jaké vzpomínky z dětství se vám 
            nyní vybavují, když si pokládáte tyto otázky? (Během vzpomínání si na chvíli zavřete oči.)
            </p>
            
            <p>
            Pokud se vám vybaví vzpomínka z dětství, zkuste od ní trochu poodstoupit a dívejte se 
            na ní chvíli jako divák v kině nebo třeba z ptačí perspektivy. Připomeňte si, že v tomto 
            okamžiku jste v bezpečí a jen vzpomínáte na minulé události. Jste dospělí. Už nejste děti. 
            Jsou to jen vzpomínky. Nyní máte ve svém životě k dispozici mnohé možnosti, které jste 
            v dětství neměli. Jste svobodnější a nezávislejší. Když se ale očima dospělého díváte 
            na tyto staré vzpomínky, uvědomte si plně, co jste tenkrát v dětství tolik potřebovali 
            a neměli. Láskyplnou péči? Porozumění? Přijetí? Ochranu a bezpečí? Podporu, uznání, oceňování? 
            Pevné hranice? Nebo vlastní prostor? Co jste potřebovali nejvíc?
            </p>
            
            <p>
            Uvědomte si teď, že jako dospělí můžete zaujmout ke svému zraněnému "dětskému Já" 
            soucitný postoj. Představte si třeba, že kdybyste jako dospělí mohli navštívit sami sebe 
            v okamžiku, kdy jste v dětství cítili daný pocit, mohli byste se svého "dětského Já" 
            fyzicky dotknout. Mohli byste mu položit ruku na rameno, mohli byste ho vzít za ruku nebo ho obejmout. 
            Mohli byste svému "dětskému Já" říci: "Mám tě rád. Záleží mi na tobě. Jsem s tebou a vždycky budu. 
            Nikdy tě neopustím. Vím jak se cítíš. Budu o tebe pečovat, podporovat tě a chránit." Pak si uvědomte, 
            jaký máte pocit, když si představujete, že ke svému "dětskému Já" přistupujete se soucitem. 
            Zapamatujte si dobře ten pocit. A vraťte svou pozornost do přítomnosti.
            </p>

            <p>
              Uvědomte si, že stále sedíte vzpřímeně. Vaše nohy se dotýkají země. Jste zpátky tady 
              a teď. Chápete nyní lépe, proč byly vaše pocity v dané situaci tak intenzivní? Zamyslete se, 
              do jaké míry byly vaše emoce reakcí na přítomnou situaci a do jaké míry odpovídaly situaci 
              z dětství. Je skvělé, že v dospělosti už nejste tolik odkázáni na pomoc druhých. Můžete se 
              o své potřeby starat také sami. Uvědomte si to. Vzpomínáte, jak jste se cítili, když jste 
              ke svému "dětskému Já" zaujali soucitný postoj? Mohli byste zkusit zaujmout sami k sobě takový 
              postoj, až se příště ocitnete v podobné situaci?</p>
        </div>
      </div>
    </ExerciseLayout>
  );
};

export default ExerciseTwo;
