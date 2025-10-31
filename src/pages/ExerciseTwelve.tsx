import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-12.mp3";
import { ExerciseLayout } from "@/components/ExerciseLayout";

const ExerciseTwelve = () => {
  return (
    <ExerciseLayout>
      <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
      CVIČENÍ 12. PŘEKONÁNÍ DRAMATICKÉHO TROJÚHELNÍKU.
      </h1>

      {/* Audio Player */}
      <div className="mb-12">
        <AudioPlayer audioSrc={audioFile} />
      </div>

      {/* Exercise Text */}
      <div className="prose prose-invert max-w-none">
        <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Vzpomeňte si na nějakou emočně nepříjemnou vztahovou situaci, v níž jste se cítili vyvedeni 
              z rovnováhy nebo jste měli dojem, že jste vydáni na milost a nemilost jiným lidem či událostem 
              mimo vaši kontrolu. Na základě této konkrétní situace se pokuste odpovědět na následující otázky 
              z pohledu oběti. Pozor, i když nejste zvyklí sami sebe litovat, udělejte tentokrát výjimku 
              a zkuste na chvíli záměrně přemýšlet jako „uražené Dítě“ nebo „trestající Rodič“. Abyste dosáhli 
              cílů tohoto cvičení, je potřeba, abyste nejprve přijali roli oběti se vším všudy. Snažte 
              se opravdu cítit jako naprosto „nevinní“ a „ublížení“ druhými.
            </p>
            <p>Co se vám stalo?</p>
            <p>Kdo za to může? (Kdo vám ukřivdil?)</p>
            <p>Co udělal špatně? (Co bylo nespravedlivé na tom, co vám udělal?)</p>
            <p>Co správně měl udělat místo toho?</p>
            <p>Co by měl dělat teď, aby to napravil?</p>
            <p>Jaký trest by si zasloužil? (Co by vám přineslo zadostiučinění? Jak by dotyčného pachatele ztrestal nebojácný ochránce v pohádce?)</p>
            <p>Pokračujte dál, až když u vás představa trestu vyvolá pocit nastolení spravedlnosti. Teprve pak se v myšlenkách vraťte ke stejné situaci. Tentokrát však odpovídejte z pohledu „všímavého Dospělého“, který přijímá za své emoce i své činy plnou odpovědnost.</p>
            <p>S jakou výzvou jste se setkali?</p>
            <p>Jak jste přispěli svým jednáním, nebo naopak nečinností k vytvoření této situace?</p>
            <p>Jak jste se cítili, když se to stalo?</p>
            <p>Jak jste se rozhodli zareagovat, když se to stalo?</p>
            <p>Mohli jste jednat efektivněji?</p>
            <p>Mohli jste se připravit lépe?</p>
            <p>Co můžete udělat teď, abyste pomohli minimalizovat nebo napravit vzniklé škody?</p>
            <p>Jaké poučení si z toho můžete vzít?</p>
            <p>Jaký pocit z toho teď máte?</p>
        </div>
      </div>
    </ExerciseLayout>
  );
};

export default ExerciseTwelve;
