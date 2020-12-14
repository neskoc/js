/* jshint esversion: 6 */

(function () {
    'use strict';

    let hangman = window.Hangman,
        tools = window.Tools,
        secretDiv = document.getElementById("secret-word"),
        alphabetDiv = document.getElementById("alphabet");

    tools.hideAllItems(hangman);
    hangman.setSecretWord();
    tools.initGuessedLetters(hangman.peek());
    tools.showWord(secretDiv);
    tools.showSwedihLetters(alphabetDiv);
})();
