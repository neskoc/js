/* jshint esversion: 6 */

window.Test4 = (function () {
    "use strict";

    let tools = window.Tools;

    function startTest () {
        let h1 = "Tipspromenad",
            pContent = `Du kommer få 5 frågor med 3 svarsalternativ var. Varje rätt svar ger 3 poäng. Varje fel svar ger inga poäng.
            Du svarar genom att klicka på något av de angivna alternativen.
            När du är beredd klickar du på start-knappen.`;

        tools.createHeader(h1, pContent);
    }

    return {
        startTest: startTest
    };
})();
