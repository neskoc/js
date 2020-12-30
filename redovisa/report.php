Generellt<?php
    include("incl/config.php");
    $title = "Redovisningssida | $shortName";
    include("incl/header.php");
    include("incl/navbar.php");
?>
<main>
    <article class="all-browsers">
        <header>
            <h1>Redovisningssida för JavaScript</h1>
        </header>
        <p>
            Här kommer finnas lösningar för de olika kursmomenten.
        </p>

        <section class="kmom">
            <h2>Kmom01</h2>
            <p>
                Sedan ca. en månad tillbaka började jag använda phpStorm för projekt i kombination med Atom för redovisning samt ibland även sublime-text för enskilda filer och snabba ändringar.
                <br/>
                phpStorm hade jag hört talas om tidigare och när jag upptäckte att det fanns ett studenterbjudande om gratis licenser under studietiden bestämde jag mig för att testa det. Verktyget är väldigt avancerad med massor med olika optioner där hittills i princip bara skrapat på ytan. Än så länge känns det bra och det har inbyggt JSHint som jag har aktiverat.
            </p>
            <p>
                För många år sedan (kring millennieskiftet) använde jag javascript tillsammans med html och css men i under kort tid och i en begränsad omfattning. Sedan dess har jag då och då stött lite på JavaScript utan att fördjupa mig i det.
            </p>
            <p>
                Både JSFiddle och CodePen använde jag eller rättare sagt testade jag tidigare ett antal gånger så jag är bekant med konceptet och har inte haft några problem i samband med Kmom01. Det som var lite problematiskt var att jag hade css i två filer samt att jag använder php och import så jag fick slå ihop css samt använda källkoden som html från webbläsaren.
            </p>
            <p>
                Själva kursmomentet känns rätt så lättviktigt och jag hade förväntat mig att skulle ligga på en betydligt högre nivå.
            </p>
            <p>
                TIL: Det har väl varit små saker här och där som var för sig inte blev något stort steg framåt men om jag tänker efter så har alla dessa små steg sammanlagt breddat mina kunskaper. Så man skall inte underskatta det.
            </p>
        </section>
        <section class="kmom">
                <h2>Kmom02</h2>
                <p>
                    Jag började med javascript för ca. 18-19 år sedan i samband med mitt första projekt som var gjort i asp-skript/SQL server men bytte snart spår till annat.
                    Under alla mina år har jag väl stött på JavaScript då och då men aldrig riktigt satt mig i. Det kändes mest som nödvändigt ont och för "skript-kiddies".
                    Det är i människans natur att relativisera det man inte kan/har svårighet att förstå :)
                </p>
                <p>
                    Det svåraste för mig har alltid varit designbiten vilket jag väl nämnt ett antal gånger i mina olika kmoms ... och så har jag tendensen att göra det svårt för mig själv i förhoppning att det kommer löna sig i längden (vilket rätt så ofta görs).
                    <br/>
                    Vad det gäller JavaScript håller jag fortfarande på att lära mig det enklaste sättet att felsöka.
                    Sitter i FF devtools för det mesta och börjar lära mig hur det fungerar men jag upplever det fortfarande som gammaldags (det är väl en av anledningarna att JavaScript har fått lågt status).
                    Jag kanske skall börja använda online verktyg som CodePen för det fungerar riktigt bra för css har jag upptäckt idag.
                    <br/>
                    Just det, personligen är jag väldigt binär dvs. (i synnerhet tekniska) saker skall vara rätt eller fel och har svårt för nianserna och så kommer css och JavaScript där man har tusen varianter, versioner, olika stöd i olika läsare, hög tolerans för fel ... inte riktigt min grej känns det som och nu när jag tänker efter får jag flash back dör det var samma känsla när jag började med html/css/javascript. Om det inte bidragit att jag lämnat det spåret hade det definitivt inte hjälpt.
                </p>
                <p>
                    Jag kämpade mest med css och med att rita en triangel så att den inte skulle lägga si ovanpå bilden.
                    Tröttheten bidrog nog att jag också kämpade med dimensionerna.
                    Av en slump (en kollegas uppmaning att dela koden på CodePen) gjorde att jag idag testade det. Det blev nästan en uppenbarelse hur snabbt och enkelt det går att jobba med css där.
                    Skall definitivt använda mig mer av den framöver.
                </P>
                <p>
                    TIL: Generellt har jag aversion mot att jobba med verktyg på nätet så de olika mikrotjänsterna har gått för det mesta under radar för min del. Det bidrar för tillfället också att min FF de senaste månaderna brukar få min mac på knäna. Får väl lära mig att hantera intressanta/nyttiga flikar på något bättre sätt släppa saker jag så gärna vill komma tillbaka till (det är så mycket jag vill komma ikapp med). Nu när jag har fått upp ögonen för CodePen kommer jag titta på det med nya ögon.
                </p>
        </section>
        <section class="kmom">
                <h2>Kmom03</h2>
                <p>
                    Grunduppbyggnaden för JavaScript funktionerna är ganska lik andra programmeringsspråk jag haft kontakt med. Det som känns udda är att man kan skriva "inline" funktioner för events samt att funktionerna är rätt så ofta anonyma. Mina programmeringskunskaper är rätt så ringrostiga så detta är kanske vanligt numera i moderna språk men så var det inte en gång i tiden.
                </p>
                <p>
                    Att göra om flag1 till flagg2 upplevde jag som relativt enkelt i synnerhet om man ser på inspelad video Mikael har tagit fram. Nu när jag tänker efter fixade jag först flaggorna och sedan hoppade på tärningarna. Att videon fanns där gjorde det nog naturligt att ta den ordningen men också för att flag2 känns bara en fortsättning på flag1 medan standbox3 upplevde jag som något ganska nytt.
                    Kollar jag tiden jag lagt på sandbox blev det faktiskt ett rätt beslut.
                </p>
                <p>
                    Jag upplevde inga större svårigheter med detta kmom. Det mest problematiska (och som fick mig att slita i håret innan jag upptäckte det) var relaterat till sjäva textredigerare som gjorde en hel del märkliga ändringar vid flytt/redigering av koden mellan olika ställen då automatiska regler slog till vilket jag upptäckt först senare. Under över en månad använde jag phpStorm men blev uppmanad att avvakta till våren och under tiden arbeta med VSC och Atom vilket jag hörsammade.
                    Visserligen hade jag använt båda två även tidigare och parallellt fast sporadiskt brottas jag fortfarande med att förstå logiken hos VSC i synnerhet för att jag installerat en del addons som blev rekommenderade av folk på nätet.
                    Men jag räknar med att jag kommer vänja mig snart.
                </p>
                <p>
                    Annat om kmom03? Jag är faktiskt väldigt nöjd med ritningen av tärningarna enbart med html/css.
                    Dessutom är bilderna skalbara så jag kan ändra storleken på själva tärningen och allt annat följer med. Annat jag är nöjd med är hur jag löst logiken för placering av prickarna och färgerna blev snygga också. Allt i alla känner jag att mitt slit och sena nätter har inte blivit förgäves.
                </p>
                <p>
                    TIL: Lita inte på editorn tills du lär dig mer om hur den agerar. Lägg in ett och ett addon i taget så att du lättare kan vänja sig samt lära sig använda dessa.
                </p>
        </section>
        <section class="kmom">
                <h2>Kmom04</h2>
                <p>
                    Array i en eller annan form dyker upp i varje programmeringsspråk. Så det är inte så mycket nytt med dessa.
                    Det som är svårt med array specifikt med JavaScript är hur det avviker från array-hantering i andra språk
                    (djävulen sitter i detaljerna eller hur). I JavaScript kan man array lagar i princip vad som helst samt friskt blandat.
                    Sedan behöver man vänja sig att det kan finnas luckor i index plus en och annan udda sak.
                    Men det är också väldigt trevlig att man kan skicka en funktion som gör filter, beräkningar mm. på varje element.
                </p>
                <p>
                    Även objekt finns i de flesta programmeringsspråk. Det som är ovant med objekt i JS är att det är
                    en mellanting mellan klasser och vanliga variabler samt att man oftast kallar instanser av en klass för ett objekt.
                    Så det är lite av en begreppsförvirring om man stött på objekt tidigare. Nu är jag inte insatt i klasser i javascript
                    men jag skulle ha önskat mer av det som vanligtvis finns i klasser.
                </p>
                <p>
                    Ursprungligen bedömde jag att jag inte skulle behöva lägga mycket tid på att lösa uppgiften men efter en diskussion
                    men en av min studentkollegor har jag insett att jag nog missuppfattat uppgiften så jag har fått göra om en hel del.
                    Jag skulle vilja lägga en anmärkning till, för mig, för otydlig kravspecifikation.
                    Jag trodde att vi inte behövde kunna rita fler än en flagga samtidigt på skärmen men det visade sig var
                    ett underförstått krav.
                    Hittills har jag nog fått lägga minst tid per kmom jämfört med andra kurser inom programmet.
                    Det som var lite krångligt och lärorikt var hur man (inte) lägger upp samma händelseövervakning av samma händelse.
                    Det blir märkliga resultat som är svåra att felsöka.
                </p>
                <p>
                    En annan sak jag brottades med en hel del var att (försökte) använde innerHtml som funktion på ett ställe
                    och fick undefined tillbaka och utan att token klagade på problem. Först under run-time uppdagades problemet
                    fast på ett annat ställe. Så jag kämpades verkligen med avlusaren med att lösa det. Tror att console.log() fick
                    mig på rätt spår efter många frustrerande stunder.
                    En sak som jag fick lära mig var att kombinera createElement och innerHtml plus att inte tänka på att inte lägga
                    samma händelseövervakning flera gånger. Ursprungligen trodde jag att de skrevs över för det fungerade ändå.
                    Förs när man la flertal i sekvens började märkliga saker uppdagas vilket först indikerades i console där den
                    snurrade runt flera gånger trots bara en klick.
                </p>
                <p>
                    TIL: Att lägga mer på att lära sig arbetsverktygen för det lönar sig i längden.
                </p>
        </section>
        <section class="kmom">
                <h2>Kmom05</h2>
                <p>
                    Jag tycker att kmom05 hade rätt så bra balans mellan svårighetsgraden och omfattningen. Vi fick träna på i princip allt som togs upp i teoridelen och uppgifterna hade också lite tuggmotstånd.
                    <br>
                    Vad hade jag kämpat med mest? Det var nog att förstora och förminska olika objekt samtidigt att det inte skall börja sticka utanför den synliga ytan. Sedan fick jag köra debug en hel del för att avlusa olika problem oftast självförvållade genom att jag missat uppdatera rätta attribut samt att blandade ihop bredden och höjden/använde det få fel ställe.
                    <br>
                    När man kopierar och klistrar in för att spara tid händer det en hel del gånger att tiden blir längre för att man missar att ändra allt.
                </p>
                <p>
                    Jag har gjort samtliga DOM-uppgifter men valt att inte köra flaggorna. Har lite kort om tid de närmaste dagarna och större delen har jag ändå gjort i kmom04.
                    <br>
                    Sedan kommer vi väl behöva göra om det som en del av projektet så jag får ta det då.
                </p>
                <p>
                    Jag har också gjort animeringen (4.2) men jag gjorde det lätt för mig och spred ut 5 anrop av samma funkton via setTimeout med 200ms mellanrum.
                </p>
                <p>
                    Som en egen händelse har jag lagt till möjligheten att öka och minska hastigheten (antal steg) vid förflyttningen av objekt. Detta regleras med knapparna "9" som ökar stegen och "0" som minskar stegen.
                    <br>
                    När objekten kommer till kanten kan man minska "hastigheten" för att komma närmare kanten och sedan öka stegen om man behöver förflytta sig över större avstånd.
                </p>
                <p>
                    Allt i allo är jag rätt så nöjd med utfallet och även om det inte var så stora framsteg inom något område har jag börjat känna mig rätt så bekväm med "events".
                    <br>
                    Jag har fortfarande lite problem med att få grepp på vilka attribut som är med och utan kanter alltså jag kan slå upp det men jag måste göra det nästan varje gång.
                </p>
        </section>
        <section class="kmom">
                <h2>Kmom06</h2>
                <p>
                    I och med att jag stött på samma begrepp/liknande funktionalitet i andra programmeringsspråk var det relativt enkelt att förstå hur "closer" fungerar i javascript.
                </p>
                <p>
                    För ett ca. 15 år sedan var jag inskriven på en distanskurs i design mönster  c++, jag köpte även
                    kursboken men orkade aldrig (full)följa den. I samband med det läste jag lite några kapitel översiktligt så jag har lite koll på det.
                    <br>
                    Trots det dåliga samvetet under efterföljande år blev det aldrig någon fortsättning. Det var ett sidospår mot mitt yrkesspår och jag saknade tyvärr motivationen att lägga tid på att ta upp tråden igen.
                </p>
                <p>
                    "Module pattern” är väl mest likt klasserna i objektorienterade språk fast module pattern känns mest
                    som "fattigmansklass". Som en struktur är det bättre än ingenting men inte helt optimalt tycker jag.
                    <br>
                    Generellt har jag kännsla av att modularisering inte är JavaScripts starkaste sida och en naturlig del av språket utan det käns som att det har lagts på i efterhand.
                    <br>
                    Design mönster räknas inte riktigt som nybörjarmaterial och kräver en hel del abstrakt tänkande.
                    Därför känns nog ingen bok som tar sig an att förklara det som väldigt lättläst.
                    <br>
                    Min bedömning är att en sådan kurs brukar komma som en minst tredje om inte fjärde kurs inom ett
                    programmeringsspråk. Det är ingen slump att den kommer så sent.
                    Själva boken “Learning JavaScript Design Patterns” är ganska lättläst men det går igenom ett komplext området och frågan är hur mycket fastnar efteråt.
                </p>
                <p>
                    __TIL__: Trots att JavaScript av många betraktas som ett inte riktigt programmeringsspråk har jag
                    insett att det finns mycket mer under ytan. Sedan början av kursen väntade jag på att se hur modulariseringen brukar fungera i JS och nu har vi äntligen skrapat lite på ytan.
                    Jag hade önskat att det hade introducerats tidigare under kursen men bättre sent än aldrig.
                    <br>
                    Förhoppningsvis kommer jag öva mer på det under arbetet med projektet.
                </p>
                <p>
                    Kom på att jag missat att kort beskriva hur jag löst uppgiften.
                    Jag har valt att dela upp koden i tre modulen: main, hangman och tools.
                    Både i hangman och tools finns några extrafunktioner som går att anropa från konsolen.
                    Medan hela hangman objektet är publikt dvs. samtliga medlemsfunktioner och medlemsvariabler är publika, i tools har jag exponerat de funktioner jag behövt anropa (5 av 9) medan resten är privata.
                    Dessutom är samtliga medlemsvariabler privata.
                </p>
        </section>
    </article>
</main>

<?php
// include("incl/byline.php");
include("incl/footer.php");
?>
