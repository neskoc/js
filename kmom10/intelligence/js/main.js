/* jshint esversion: 6 */

(function () {
    'use strict';

    let header = document.getElementById("header"),
        h1 = "Intelligenstest",
        pContent = ` Detta är ett intelligenstest som består av olika deltest.
            Första deltestet är en sorts tipspromenad. Du kommer få 5 frågor med 3 svarsalternativ var. Varje rätt svar ger 3 poäng. Varje fel svar ger inga poäng.
            Du svarar genom att klicka på något av de angivna alternativen.
            När du är beredd klickar du på start-knappen.`,
        test = window.Test,
        tools = window.Tools,
        button = document.createElement("button");

    function startTest() {
        tools.cleanContent();
        test.startNextTest();
    }

    tools.createHeader(h1, pContent);

    tools.addButton(startTest, "Starta testet!");
})();
