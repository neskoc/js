/* jshint esversion: 6 */

window.Result = (function () {
    "use strict";

    function showResult() {
        // 3*5 + 3 + 9 + 10 + 10 = 47
        let pContent,
            h1 = "Sammanfattning av resultaten",
            tools = window.Tools;

        window.Test.totalScore += window.Test.partialScore;
        pContent = "Dina poäng: " + window.Test.totalScore + " av maximalt 47 poäng";

        tools.cleanContent();
        tools.createHeader(h1, pContent);
    }

    return {
        showResult: showResult
    };
})();
