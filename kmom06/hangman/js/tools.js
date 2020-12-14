/* jshint esversion: 6 */

window.Tools = (function () {
    "use strict";

    var guessedLetters = [],
        hiddenLetters = [],
        swedishLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÅÖ",
        letterDivsList = [];

    function getInt(min, max) {
        return Math.floor(Math.random() * (max - min) - min);
    }

    function hideAllItems(hangman) {
        hangman.validParts.forEach((item) => {
            hangman.hide(item);
        });
    }

    function initGuessedLetters(word) {
        hiddenLetters = word.split('');
        for (let ix = 0; ix < word.length; ix += 1) {
            guessedLetters.push("_");
        }
    }

    function showWord(div) {
        let singleLetterDiv = document.createElement("div");

        singleLetterDiv.classList.add('secret-letter', 'any-letter');
        for (let ix = 0; ix < guessedLetters.length; ix += 1) {
            singleLetterDiv.innerHTML = guessedLetters[ix];
            div.appendChild(singleLetterDiv.cloneNode(true));
        }
    }

    function guessLetter() {
        let letter = this.innerHTML,
            allLetters = [...hiddenLetters],
            message = document.getElementById("message");

        event.target.classList.toggle("disabled");
        if (allLetters.includes(letter)) {
            while (allLetters.indexOf(letter) != -1) {
                let letterIx = allLetters.indexOf(letter);

                guessedLetters[letterIx] = letter;
                allLetters[letterIx] = '_';
            }
            let secretDiv = document.getElementById("secret-word");

            secretDiv.innerHTML = '';
            window.Tools.showWord(secretDiv);
        } else {
            let lastPart = window.Hangman.showNextPart();

            if (lastPart) {
                console.log('Game Over!');
                message.innerHTML = 'Game Over!';
            }
        }
        this.removeEventListener("click", guessLetter);
        if (!guessedLetters.includes('_')) {
            console.log('You Won The Game!');
            message.innerHTML = 'You Won The Game!';
        }
    }

    function initLeterDivsList() {
        let singleLetterDiv = document.createElement("div");

        singleLetterDiv.classList.add('letter', 'any-letter');
        for (let ix = 0; ix < swedishLetters.length; ix += 1) {
            let clonedLetter = singleLetterDiv.cloneNode(true);

            clonedLetter.innerHTML = swedishLetters[ix];
            clonedLetter.addEventListener("click", guessLetter);
            letterDivsList.push(clonedLetter);
        }
    }

    function showSwedihLetters(div) {
        letterDivsList.forEach((item) => {
            div.appendChild(item);
        });
    }

    initLeterDivsList();

    return {
        getInt: getInt,
        hideAllItems: hideAllItems,
        initGuessedLetters: initGuessedLetters,
        showWord: showWord,
        showSwedihLetters: showSwedihLetters
    };
})();
