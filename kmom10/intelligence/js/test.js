/* jshint esversion: 6 */

window.Test = (function () {
    "use strict";

    let currentTest = 1,
        partialScore = 0,
        totalScore = 0,
        tools = window.Tools;

    function reset() {
        tools.reset();
        partialScore = 0;
        startCurrentTest();
    }

    function startCurrentTest() {
        let test = "Test" + currentTest.toString();
        // let test = "Test5";

        window[test].startTest();
    }

    return {
        partialScore: partialScore,
        totalScore: totalScore,
        reset: reset,
        startNextTest: startCurrentTest
    };
})();
