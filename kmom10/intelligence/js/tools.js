/* jshint esversion: 6 */

window.Tools = (function () {
    "use strict";

    let header = document.getElementById("header"),
        content = document.getElementById("content");

    function getInt(min, max) {
        return Math.floor(Math.random() * (max - min) - min);
    }

    function createHeader(h1, content) {
        let headerDiv = document.createElement("div"),
            headerH1 = document.createElement("h1"),
            headerP = document.createElement("p");

        headerH1.textContent = h1;
        headerP.textContent = content;
        headerH1.classList.add('header-h1');
        headerP.classList.add('header-p');

        header.appendChild(headerH1);
        header.appendChild(headerP);
    }

    function cleanContent() {
        header.innerHTML = "";
        content.innerHTML = "";
    }

    function reset() {
        cleanContent();
    }

    function testAnswer(correctAnswer) {
    }

    function addButton(eventListnerFunction, buttonText) {
        let button = document.createElement("button"),
            header = document.getElementById("header");

        button.textContent = buttonText;
        button.addEventListener("click", eventListnerFunction);
        header.appendChild(button);
    }

    return {
        getInt: getInt,
        createHeader: createHeader,
        cleanContent: cleanContent,
        testAnswer: testAnswer,
        addButton: addButton,
        reset: reset
    };
})();
