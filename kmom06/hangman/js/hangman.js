/* jshint esversion: 6 */

window.Hangman = (function () {
    "use strict";

    var secretWord = "",
        partsCounter = 0;

    var hangman = {

        // Get all elements as their id
        "partAsElement": {
            "hill": document.getElementById('hang_hill'),
            "gallow": document.getElementById('hang_construction'),
            "body": document.getElementById('hang_body'),
            "rightarm": document.getElementById('hang_rightarm'),
            "leftarm": document.getElementById('hang_leftarm'),
            "rightleg": document.getElementById('hang_rightleg'),
            "leftleg": document.getElementById('hang_leftleg'),
            "rope": document.getElementById('hang_rope'),
            "head": document.getElementById('hang_head')
        },

        // Create an array with all valid parts
        "validParts": [
            "hill",
            "gallow",
            "body",
            "rightarm",
            "leftarm",
            "rightleg",
            "leftleg",
            "rope",
            "head"
        ],

        "secretWordList": [
            "bord",
            "fönster",
            "hund",
            "gräsmatta",
            "högtalare",
            "mikrofon",
            "lastbil",
            "avbitare",
            "havet",
            "gubben"
        ],


        /**
         * Check if part a valid part, writes error message to console if the part is invalid.
         *
         * @param string part Name of the part to check.
         *
         * @returns boolean true if valid part, else false.
         */
        "isValid": function (part) {
            if (this.validParts.indexOf(part) === -1) {
                window.console.log("The part is not valid: " + part);
                return false;
            }
            return true;
        },


        /**
         * Hide a part.
         *
         * @param string part Name of the part to hide.
         *
         * @returns void.
         */
        "hide": function (part) {
            if (this.isValid(part)) {
                this.partAsElement[part].style.display = "none";
            }
        },


        /**
         * Show a part.
         *
         * @param string part Name of the part to show.
         *
         * @returns void.
         */
        "show": function (part) {
            if (this.isValid(part)) {
                window.console.log("Showing part: " + part);
                this.partAsElement[part].style.display = "inline";
            }
        },


        /**
         * Show a next part.
         * If last part return true otherwise false
         *
         * @param void.
         *
         * @returns boolean.
         */
        "showNextPart": function () {
            this.show(this.validParts[partsCounter]);
            partsCounter += 1;
            if (partsCounter == this.validParts.length) {
                return true;
            }
            return false;
        },


        /**
         * Show a word list.
         *
         * @param void.
         *
         * @returns this.wordList.
         */
        "wordlist": function () {
            this.secretWordList.forEach(function(item) {
                console.log(item);
            });
        },

        "setSecretWord": function () {
            let len = this.secretWordList.length;

            secretWord =
                this.secretWordList[window.Tools.getInt(0, len)].toUpperCase();
        },


        /**
         * Show the secret word.
         *
         * @param void.
         *
         * @returns secret_word.
         */
        "peek": function () {
            console.log(secretWord);
            return secretWord;
        }
    };

    window.console.log("You can now use the hangman object as a part of the window-object." +
    "Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')" +
    "\n\nHere are all the parts you can work on.");
    window.console.log(hangman.validParts);

    // Return the object to make it visible.
    return hangman;
})();
