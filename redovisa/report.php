<?php
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
    </article>
</main>

<?php
// include("incl/byline.php");
include("incl/footer.php");
?>
