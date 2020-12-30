/* jshint esversion: 6 */

window.Test = (function () {
    "use strict";

    let currentTest = 1,
        totalScore = 0,
        tools = window.Tools;

    function reset() {
        tools.reset();
        startCurrentTest();
    }

    function startCurrentTest() {
        let test = "Test" + currentTest.toString();

        window[test].startTest();
    }

    return {
        reset: reset,
        startNextTest: startCurrentTest,
        totalScore: totalScore
    };
})();
