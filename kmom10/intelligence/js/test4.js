/* jshint esversion: 6 */

window.Test4 = (function () {
    "use strict";

    let tools = window.Tools,
        firstRun = true,
        content = document.getElementById("content");

    function mainTest4() {

    }

    function startTest() {
        let h1 = "Visuell förmåga och läsförståelse",
            pContent = `Detta testet kombinerar läsförståelse med visuell förmåga.
            Testet innebär att du skall gissa rätt ordning på 10 unika objekt. Objekt kan vara en kvadrat, en cirkel, en triangel eller en rektangel. Objektet har en färg. Du kommer få en numrerad lista med 10 alternativ som säger i vilken ordning som de olika objekten skall klickas på.
            När du är beredd klickar du på start-knappen.`;

        tools.cleanContent();

        if (firstRun) {
            window.Test.totalScore += window.Test.partialScore;
            firstRun = false;
        } else {
            flagObjects.forEach(flag => {
                flag.resetFlag();
            });
        }
        console.log("score: " + window.Test.totalScore);
        window.Test.partialScore = 0;
        tools.createHeader(h1, pContent);

        tools.addButton(mainTest4, "Starta minnestestet!");
    }

    return {
        startTest: startTest
    };
})();
