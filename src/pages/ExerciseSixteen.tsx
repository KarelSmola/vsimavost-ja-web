import AudioPlayer from "@/components/AudioPlayer";
import audioFile from "@/assets/cviceni-16.mp3";
import audioFileVyhodnoceni from "@/assets/cviceni-16-vyhodnoceni.mp3"
import { ExerciseLayout } from "@/components/ExerciseLayout";

const ExerciseSixteen = () => {
  return (
    <ExerciseLayout>
      <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
      CVIČENÍ 16. MÁM ZDRAVĚ FUNGUJÍCÍ AUTENTICKÉ JÁ?
      </h1>

      {/* Audio Player */}
      <div className="mb-12">
        <AudioPlayer audioSrc={audioFile} />
      </div>

      {/* Exercise Text */}
      <div className="prose prose-invert max-w-none">
        <div className="font-inter text-base sm:text-lg font-light leading-relaxed space-y-6 opacity-90">
            <p>
              Pokud chcete zjistit, zda máte zdravě fungující autentické Já, vyplňte si následující kvíz. 
              Vemte si papír a tužku a na každou položku odpovězte vždy buď P (jako pravda) nebo N (jako nepravda). 
              Když se nebudete umět rozhodnout, zakroužkujte P. 
            </p>

            <p>Když má někdo blízký problém, jsem ve velkém pokušení zkusit ho vyřešit za něj.</p>

            <p>Nikdy nestavím vlastní potřeby nad potřeby druhých. Bylo by to sobecké.</p>

            <p>Děsí mě představa, že bych někdy mohl někomu nechtíc emočně ublížit.</p>

            <p>Je pro mě těžké požádat někoho o pomoc. Obvykle se snažím zvládnout všechno sám.</p>

            <p>Když udělám chybu, cítím se tak obnažený, že bych se raději propadl do země.</p>

            <p>Ohledně názorů ostatních na mou osobu cítím značnou nejistotu.</p>

            <p>Když přijdu na oslavu a nejsem při vstupu všemi přivítán, mám pocit, že jsem ostatním lhostejný.</p>

            <p>Když se někomu ve škole nebo v práci podaří nějaký úkol lépe než mně, mám pocit, že jsem v té věci úplně selhal.</p>

            <p>Často se stydím za chování členů své rodiny.</p>

            <p>Čím méně chyb udělám, tím raději mě lídé budou mít.</p>

            <p>Často mi dělá potíže připustit si, co doopravdy cítím.</p>

            <p>Myslím si, že projevování emocí je známkou slabosti.</p>

            <p>Snažím se neobtěžovat ostatní.</p>

            <p>Vlastně nikdy tak úplně nevěřím druhým lidem.</p>

            <p>Když výjimečně někoho opravdu potřebuji, většinou stejně není k dosažení.</p>

            <p>Někdy si připadám jako herec, který vlastně jen stále něco hraje.</p>

            <p>Obecně mi dělá potíže říkat lidem ne.</p>

            <p>Pro přesvědčování existují různé „triky“. Často je používám.</p>

            <p>Bojím se kritizovat a říct jiným lidém, co si myslím.</p>

            <p>Průměrní lidé jsou nudní a nezajímaví, a proto je nevyhlédávám.</p>

            <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
              CVIČENÍ 16. VZHODNOCENÍ
            </h1>

            <div className="mb-12">
              <AudioPlayer audioSrc={audioFileVyhodnoceni} />
            </div>

            <p>
              Položky tohoto kvízu se snažily zachytit některé typické projevy zraněného Já. 
              Dá se říct, že čím častěji jste volili odpověď N (nepravda), tím zdravěji funguje vaše 
              autentické Já. A čím častěji jste volili odpověď P (pravda), tím více vás ovlivňuje 
              zraněné Já. Jestliže jste P nezvolili ani jednou, jste skvěle připraveni věnovat se 
              ve svém životě transpersonálnímu vývoji. Pokud jste P zvolili pouze jednou až pětkrát, 
              nejspíše vám postačí, když se trochu inspirujete kapitolami 11 až 15 v knize Všímavost 
              a Já a budete si se zájmem všímat svých pocitů v situacích, které vám činí potíže. 
              Pokud jste nicméně P zvolili vícekrát, měli byste se zaměřit na rozvíjení laskavosti 
              a soucitu k sobě samým. Projděte si znovu kapitoly 6 až 10. A přemýšlejte, která potřeba 
              ve vašem dětství nebyla naplňována. Zkuste si promluvit o svých starých zraněních s někým 
              blízkým, kdo vám nebude dávat rady, ale vyslechne vás s porozuměním. Sdílení je léčivé. 
              A pak se pevně rozhodněte, že nyní, když už jste dospělí, se budete pečlivě a odhodlaně 
              o své potřeby starat. Co sami pro sebe můžete udělat ještě dnes? Jakýkoli (i jen malý) 
              projev lásky a soucitu k sobě vám může pomoci začít proces léčení vašeho zraněného Já.
            </p>
        </div>
      </div>
    </ExerciseLayout>
  );
};

export default ExerciseSixteen;
