/* jshint esversion: 6 */
/*tslint:disabled*/

window.Test3 = (function () {
    "use strict";

    let tools = window.Tools,
        content = document.getElementById("content"),
        flagCounter = 0,
        firstRun = true,
        timeouts = [],
        guessOrder = [
            'Laos',
            'Bhutan',
            'Serbia',
            'Sweden',
            'Serbia',
            'Bhutan',
            'Laos',
            'Serbia',
            'Sweden'
        ],

        uniqueCountryNames = [
            'Sweden',
            'Laos',
            'Bhutan',
            'Serbia'
        ],

        nineFlagNames = [
            'Serbia',
            'Sweden',
            'Sweden',
            'Laos',
            'Serbia',
            'Bhutan',
            'Bhutan',
            'Laos',
            'Serbia'
        ],

        flagDivs = [
            '<div class="swe-horizontal" ></div><div class="swe-vertical"></div>',
            '<div class="laos-stripe" ></div><div class="laos-circle"></div>',
            `<div class="bhutan-bottom-triangle"></div>
            <img src="img/flags/flag_dragon_bhutan.svg" alt="Dragon" class="bhutan-dragon">`,
            `<div class="serbia-midle-stripe"></div><div class="serbia-bottom-stripe"></div>
            <img src="img/flags/Flag_of_Serbia_coat_of_arms.svg" alt="Double headed eagle"
             class="serbia-eagle">`
        ];

    let flagObj = {
        country: NaN,
        id: NaN,
        flagHtml: NaN,
        flagDiv: NaN,
        hiddenDiv: '<div class="hidden-flag"></div>',
        flagDivHandle: NaN,

        countryFlagHtmlToElement: function (flagHtml) {
            let div = document.createElement('div');

            div.id = "flag-" + this.id;
            div.className = 'flag-75x50 ' + this.country.toLowerCase();
            div.innerHTML = flagHtml;
            return div;
        },

        init: function (country, flagDiv, id) {
            this.country = country;
            this.flagDiv = flagDiv;
            this.id = id;
            this.flagHtml = this.countryFlagHtmlToElement(flagDiv);
        },

        drawFlag: function (rootDivHandle) {
            rootDivHandle.appendChild(this.flagHtml);
            this.addDelayedEventListener();
        },

        resetFlag: function () {
            this.flagHtml = this.countryFlagHtmlToElement(this.flagDiv);
        },

        hideFlag: function () {
            this.flagHandle = document.getElementById("flag-" + this.id);

            this.flagHandle.innerHTML = this.hiddenDiv;
        },

        addDelayedEventListener: function () {
            let thatId = this.id,
                thatFlagDiv = this.flagDiv,
                thatCountry = this.country,
                timerId;

            timerId = setTimeout(function () {
                let flagHandle = document.getElementById("flag-" + thatId);

                flagHandle.addEventListener("click", function() {
                    flagHandle.innerHTML = thatFlagDiv;
                    checkOrder(thatCountry);
                });
            }, 5000);
            timeouts.push(timerId);
        }
    };

    let flagObjects = [];

    for (let ix = 0; ix < nineFlagNames.length; ix += 1) {
        let flagIx = uniqueCountryNames.indexOf(nineFlagNames[ix]);

        flagObjects[ix] = Object.create(flagObj);
        flagObjects[ix].init(
            uniqueCountryNames[flagIx],
            flagDivs[flagIx],
            ix
        );
    }

    function showResult(isLast) {
        let pContent = "",
            h1 = "Minnestestet är slut!";

        if (isLast) {
            h1 = "Grattis till samtliga rätt!";
        }
        tools.cleanContent();
        pContent = "Antal poäng: " + window.Test.partialScore;
        tools.createHeader(h1, pContent);
        tools.addButton(window.Test4.startTest, "Nästa test >>");
    }

    function checkOrder(country) {
        if (country === guessOrder[flagCounter]) {
            flagCounter += 1;
            window.Test.partialScore+= 1;
            if (flagCounter === guessOrder.length) {
                showResult(true);
            }
        } else {
            showResult(false);
        }
    }

    function drawAllFlags() {
        let flagsContainerDiv = document.createElement("div");

        flagsContainerDiv.className = "flags-container ";
        content.appendChild(flagsContainerDiv);
        flagObjects.forEach(flag => {
            flag.drawFlag(flagsContainerDiv);
        });
    }

    function hideFlags() {
        let timerId;

        timerId = setTimeout(function () {
            flagObjects.forEach(flag => {
                flag.hideFlag();
            });
        }, 5000);
        timeouts.push(timerId);
    }

    function showGuessOrder() {
        let timerId;

        timerId = setTimeout(function () {
            let ol = document.createElement("ol");

            ol.innerText = "Flaggornas clickorder:";
            guessOrder.forEach( function(element, ix) {
                let li = document.createElement("li");

                li.innerText = guessOrder[ix];
                ol.appendChild(li);
            });
            content.appendChild(ol);
        }, 5000);
        timeouts.push(timerId);
    }

    function memoryTest() {
        tools.cleanContent();
        tools.createHeader("Gissa flaggornas ordning", " ");
        drawAllFlags();
        hideFlags();
        showGuessOrder();
    }

    function startTest() {
        let h1 = "Minne",
            pContent = `Detta är ett litet minnes-test som kollar hur bra bildminne man har.
            Testet börjar med att 9 flaggor visas under 5 sekunder. Därefter döljs de och en
             numrerad lista men namnen på de nio flaggorna visas upp i stället. 
            Du skall nu klicka på rätt ruta där motsvarande flagga ligger, i rätt ordning. Varje
             rätt svar ger 1 poäng. Varje fel svar ger inga poäng.
            När du är beredd klickar du på start-knappen.`;

        tools.cleanContent();
        flagCounter = 0;

        if (firstRun) {
            window.Test.totalScore += window.Test.partialScore;
            window.Test.currentTest = 3;
            firstRun = false;
        } else {
            for (let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            timeouts = [];
            flagObjects.forEach(flag => {
                flag.resetFlag();
            });
        }
        console.log("score: " + window.Test.totalScore);
        window.Test.partialScore = 0;
        tools.createHeader(h1, pContent);

        tools.addButton(memoryTest, "Starta minnestestet!");
    }

    return {
        startTest: startTest
    };
})();
