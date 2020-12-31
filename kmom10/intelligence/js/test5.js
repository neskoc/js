/* jshint esversion: 6 */

window.Test5 = (function () {
    "use strict";

    let tools = window.Tools,
        firstRun = true,
        content = document.getElementById("content"),
        shapeCounter = 0,

        shapesInEngl = [
            'yellow rectangle',
            'red circle',
            'green square',
            'yellow circle',
            'blue rectangle',
            'green circle',
            'grey rectangle',
            'red-triangle triangle',
            'blue-triangle triangle',
            'red square'
        ],

        shapes = [
            'gul rektangel',
            'röd cirkel',
            'grön kvadrat',
            'gul cirkel',
            'blå rektangel',
            'grön cirkel',
            'grå rektangel',
            'röd triangel',
            'blå triangel',
            'röd kvadrat'
        ],

        guessOrder = [
            'blå triangel',
            'grön kvadrat',
            'röd cirkel',
            'gul rektangel',
            'grön cirkel',
            'röd kvadrat',
            'gul cirkel',
            'grå rektangel',
            'blå rektangel',
            'röd triangel'
        ];

    function startTest() {
        let h1 = "Uppfattningsförmåga",
            pContent = `I det här testet visas ett objekt under 1 sekund. Du skall välja att klicka på objektet eller ej. När objektet försvinner så är det en paus på en sekund, sedan visas nästa objekt. Allt som allt visas tio objekt.
            När du är beredd klickar du på start-knappen.`;

        tools.cleanContent();
        shapeCounter = 0;

        if (firstRun) {
            window.Test.totalScore += window.Test.partialScore;
            window.Test.currentTest = 5;
            firstRun = false;
        }
        console.log("score: " + window.Test.totalScore);
        window.Test.partialScore = 0;
        tools.createHeader(h1, pContent);

        tools.addButton(mainTest5, "Starta testet!");
    }

    return {
        startTest: startTest
    };
})();
