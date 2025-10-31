import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-05.mp3";
import { ExerciseLayout } from "@/components/ExerciseLayout";

const ExerciseFive = () => {
  return (
    <ExerciseLayout>
      <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
      CVIČENÍ 5. ZNOVUPROŽITÍ LÁSKYPLNÉ POZORNOSTI A PÉČE.
      </h1>

      {/* Audio Player */}
      <div className="mb-12">
        <AudioPlayer audioSrc={audioFile} />
      </div>

      {/* Exercise Text */}
      <div className="prose prose-invert max-w-none">
        <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Následující meditační cvičení sestává ze dvou kroků a začíná vzpomínkou na příjemný okamžik, 
              kdy s vámi někdo byl a choval se k vám hezky anebo vám třeba opravdu pozorně naslouchal. 
              Může to být okamžik, kdy jste cítili, že vám někdo rozumí, okamžik sdílené radosti, hry nebo okamžik, 
              kdy se vám dostalo uznání. Měla by to být vzpomínka na někoho, s kým jste v danou chvíli byli opravdu 
              rádi, v pohodě a v bezpečí. Chvíle, na níž si rádi vzpomenete. Pokud byste si snad zpočátku nemohli 
              vybavit žádný takový okamžik s blízkým člověkem, můžete začít tím, že si vybavíte podobně příjemný 
              okamžik s vaším domácím mazlíčkem (psem, kočkou a podobně). Máte takovou vzpomínku?
            </p>

            <p>
              Usaďte se co nejpohodlněji a zkuste si představit, jaké by to bylo, kdyby takový příjemný okamžik 
              znovu probíhal právě teď. (Pokud toto cvičení děláte opakovaně a již si nepotřebujete číst tuto instrukci, 
              zavřete oči.) V duchu si představujte, že právě teď je daná osoba s vámi, usmívá se na vás, naslouchá 
              vám a komunikuje s vámi. Představujte si, že daná osoba je s vámi ráda. Že ji zajímáte a že vám přeje 
              jen to nejlepší. Chcete-li, můžete si také představit, že vás například drží za ruku, dotýká se vás 
              na rameni nebo vás přátelsky objímá. A zkuste se vnitřně otevřít tomu, že si můžete užívat láskyplnou 
              pozornost, kterou vám daná osoba právě věnuje. Uvědomte si, jak se cítíte, když jste danou osobou 
              bez výhrad přijímáni. Je to příjemný pocit?
            </p>

            <p>
              Po několika minutách nechte svou představu pomalu vyblednout, ale pocit hlubokého přijetí si ponechte. 
              Dovolte svému srdci a mysli úplně se uvolnit a otevřít. Dovolte si chvíli nepřemýšlet. Nechte vše být 
              a jen spočívejte v atmosféře jemné vřelosti a přijetí. Pak v duchu třikrát vyslovte přání: "Kéž je 
              mi dobře! Kéž je mi dobře! Kéž je mi dobře!" Jak se cítíte teď?
            </p>
        </div>
      </div>
    </ExerciseLayout>
  );
};

export default ExerciseFive;
