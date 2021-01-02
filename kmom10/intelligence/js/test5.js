/* jshint esversion: 6 */

window.Test5 = (function () {
    "use strict";

    let tools = window.Tools,
        firstRun = true,
        content = document.getElementById("content"),
        shapeCounter = 0,
        shapeObjects,
        isClicked = false,
        timeouts = [],

        requirements = [
            "Den röda cirkeln.",
            "Den vita trekanten.",
            "Den svarta cirkeln."
        ],

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
        ];

    let shapeObj = {
        shapeColor: NaN,
        shapeColorInEn: NaN,
        id: NaN,
        shapeHtml: NaN,
        shapeDivHandle: NaN,

        /**
        *
        * init
        *
        * @param  {string} shapeColor - innehåller klassvärden för färg och form
        *      Tanken är att dessa skall användas för kontroll av om det är rätt objekt
        *      enligt villkoren
        * @param  {string} shapeColorInEn - samma som ovan fast på engelska
        *       Dessa skall matcha shapes.css värdena.
        * @param  {int} id - används för id attribut för div.
        *
        * Utifrån klassvärdena skapas div-element som skall rita objekt av rätt form och färg
        * Till samtliga div lägger även box och size75 klass attribut
        */
        init: function (shapeColor, shapeColorInEn, id) {
            this.shapeColor = shapeColor;
            this.id = id;
            this.shapeColorInEn = shapeColorInEn,
            this.shapeHtml = this.shapeColorToElement(shapeColorInEn);
        },

        /**
         *
         * shapeColorToElement
         *
         * @param  {string} shapeColor  - innehåller klassvärden för färg och form
         *      Tanken är att dessa skall användas för kontroll av om det är rätt objekt
         *      enligt villkoren
         * Utifrån klassvärdena skapas div-element som skall rita objekt av rätt form och färg
         * Till samtliga div lägger även box och size75 klass attribut
         */
        shapeColorToElement: function (shapeColor) {
            let div = document.createElement('div'),
                classes = `box size75 ${shapeColor}`;

            div.id = "shape-" + this.id;
            div.className = classes;
            return div;
        },

        drawShape: function (rootDivHandle) {
            rootDivHandle.appendChild(this.shapeHtml);
            this.shapeEventListener();
        },

        shapeEventListener: function () {
            let shapeHandle = document.getElementById("shape-" + this.id);

            shapeHandle.addEventListener("click", isCorrect );
        }
    };

    /**
     * Initiera samtliga objekt (former) och lägg dem i en matris
     * Detta upprepas efter varje Test.reset för att rensa event-rester
     */
    function defineAllObjects() {
        for (let ix = 0; ix < shapes.length; ix += 1) {
            shapeObjects[ix] = Object.create(shapeObj);
            shapeObjects[ix].init(
                shapes[ix],
                shapesInEngl[ix],
                ix
            );
        }
    }

    function showResult() {
        let pContent = "",
            h1 = "Test av uppfattningsförmågan är slut!";

        tools.cleanContent();
        pContent = "Antal poäng: " + window.Test.partialScore;
        tools.createHeader(h1, pContent);
        tools.addButton(window.Result.showResult, "Visa sammanställt resultat >>");
    }

    function isCorrect() {
        if (!isClicked) {
            window.Test.partialScore += 1;
            isClicked = true;
            console.log("shapeClickedCounter: " + shapeCounter);
        }
        shapeCounter += 1;
    }

    function showRequirements() {
        let ol = document.createElement("ol");

        ol.innerText = "Villkor:";
        requirements.forEach(function (element) {
            let li = document.createElement("li");

            li.innerText = element;
            ol.appendChild(li);
        });
        content.appendChild(ol);
    }

    function rotateShapes() {
        let div = document.createElement('div'),
            divHandle;

        div.id = "shape-container";
        div.className = "shape-container";
        content.appendChild(div);
        divHandle = document.getElementById("shape-container");

        shapeObjects.forEach(function(shapeObj, ix) {
            timeouts.push(setTimeout(() => {
                isClicked = false;
                shapeObj.drawShape(divHandle);
            }, ix * 2000));
            timeouts.push(setTimeout(() => {
                divHandle.innerHTML = "";
            }, ix * 2000 + 1000));
        });
        timeouts.push(setTimeout(showResult, 20000));
    }

    function mainTest5() {
        tools.cleanContent();
        tools.createHeader("Matchar objektet villkoren?", " ");
        rotateShapes();
    }

    /**
     */
    function startTest() {
        let h1 = "Uppfattningsförmåga",
            pContent = `I det här testet visas ett objekt under 1 sekund. Du skall välja att 
            klicka på objektet eller ej. När objektet försvinner så är det en paus på en sekund,
             sedan visas nästa objekt. Allt som allt visas tio objekt.
            När du är beredd klickar du på start-knappen.`;

        tools.cleanContent();
        shapeCounter = 0;

        if (firstRun) {
            window.Test.totalScore += window.Test.partialScore;
            window.Test.currentTest = 5;
            firstRun = false;
        } else {
            for (let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            timeouts = [];
        }
        shapeObjects = [];
        defineAllObjects();
        console.log("total score: " + window.Test.totalScore);
        window.Test.partialScore = 0;
        tools.createHeader(h1, pContent);
        showRequirements();

        tools.addButton(mainTest5, "Starta testet av uppfattningsförmågan!");
    }

    return {
        startTest: startTest
    };
})();
