# Něco málo o tomto projektu

## Proč tato stránka vznikla

Kniha „Všímavost a Já“ od PhDr. Jana Bendy, Ph.D. nabízí 20 praktických cvičení, která pomáhají rozvíjet všímavost a vědomý přístup k životu.

Při čtení mě napadlo, že by bylo skvělé mít tato cvičení neustále po ruce – nejen v knize na polici.
A tak vznikl tento web.
Jeho cílem je zpřístupnit všechna cvičení v textové i audio podobě, aby bylo možné praktikovat všímavost kdykoli a kdekoli – stačí telefon, tablet nebo notebook s připojením k internetu.

Tento web je mým osobním projektem pro pravidelnou praxi všímavosti – a možná se stane užitečným i pro vás.

## Jak projekt vznikal

Díky nástrojům jako ChatGPT, Claude, ElevenLabs nebo Loveable lze dnes vytvořit funkční web, aplikaci či produkt i bez let zkušeností v IT.
Stačí pochopit princip, naučit se pracovat s AI – a nechat ji dělat to, co dřív zvládali jen programátoři.

Tento web je praktickou ukázkou, jak lze propojit různé AI nástroje a automatizovat celý proces tvorby:
od digitalizace textů, přes generování hlasu až po návrh a nasazení funkční stránky.


## Použité nástroje

### Stručně
<li>iPhone – zachycení vstupních dat (fotografie stránek knihy)</li>
<li>Claude, ChatGPT – převod obrazu na text (OCR + editace), úprava a tvorba textů na web</li>
<li>Gemini – vygenerování úvodního obrázku (poté co ChatGPT, to nedokázal tak, jak jsem chtěl)</li>
<li>ElevenLabs – generování hlasu (text-to-speech)</li>
<li>ffmpeg + Bash – úprava a spojování audio souborů</li>
<li>Loveable – AI prototypování UI/UX</li>
<li>Cursor – vývoj a úpravy kódu</li>
<li>GitHub – verzování a záloha</li>

### Podrobně
Nejdříve jsem vyfotil jednotlivé stránky knihy a v Claudu je začal převádět na text. 
Po vyčerpání bezplatného limitu jsem pokračoval v ChatGPT, který běžně používám. <br />
Texty jsem následně prošel, opravil nepřesnosti a zjistil, že příště by bylo jednodušší 
koupit elektronickou verzi knihy a texty jednoduše zkopírovat. 🙂 <br />
Během testování jsem zjistil, že je potřeba texty znovu projít a upravit zkratky 
jako „např.“, „apod.“ nebo tvary typu „myslel/a“, protože AI hlas je čte přesně tak, 
jak jsou napsané – a to nezní dobře. 🙂 <br />
Delší texty bylo nutné rozdělit kvůli limitu 5000 znaků. Jedno cvičení jsem proto 
nahrál na dvakrát a oba MP3 soubory spojil pomocí ffmpeg a jednoduchého bash skriptu. <br />
S ElevenLabs jsem nakonec strávil spoustu času, než jsem překonal všechny nástrahy 
procesu text-to-speech. 🙂 <br />
Poté jsem použil Lovable k vytvoření prvního návrhu stránky. K promptu jsem 
přiložil printscreen webu, jehož design jsem chtěl použít i pro svůj projekt. <br />
Následně jsem kód zálohoval na GitHub, stáhl si ho lokálně a další vývoj dokončil 
v Cursoru. <br />
Jedna z posledních věcí bylo vygenerování úvodního obrázku. Chatu GPT se to nedařilo tak, 
jak jsem chtěl, a tak mě zachránil Gemini. <br />
Kdykoli jsem narazil na problém v jakékoli části projektu, mým pomocníkem, mentorem, 
učitelem i „seniorním kolegou“ byl ChatGPT.