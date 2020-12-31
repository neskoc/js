/* jshint esversion: 6 */
/*tslint:disabled*/

window.Test4 = (function () {
    "use strict";

    let tools = window.Tools,
        firstRun = true,
        content = document.getElementById("content"),
        shapeCounter = 0,
        shapeObjects,
        timerId,

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

    let shapeObj = {
        shapeColor: NaN,
        shapeColorInEn: NaN,
        id: NaN,
        shapeHtml: NaN,
        shapeDivHandle: NaN,

        init: function (shapeColor, shapeColorInEn, id) {
            this.shapeColor = shapeColor;
            this.id = id;
            this.shapeColorInEn = shapeColorInEn,
            this.shapeHtml = this.shapeColorToElement(shapeColorInEn);
        },

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
            let shapeHandle = document.getElementById("shape-" + this.id),
                shapeColor = this.shapeColor;

            shapeHandle.addEventListener("click", function() {
                console.log(shapeColor + " : " + guessOrder[shapeCounter]);
                if (shapeColor === guessOrder[shapeCounter]) {
                    window.Test.partialScore += 1;
                }
                shapeCounter += 1;
                if (shapeCounter === guessOrder.length) {
                    clearTimeout(timerId);
                    showResult(true);
                }
            });
        }
    };

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
            h1 = "Test av visuell förmåga är slut!";

        tools.cleanContent();
        pContent = "Antal poäng: " + window.Test.partialScore;
        tools.createHeader(h1, pContent);
        tools.addButton(window.Test5.startTest, "Nästa test >>");
    }

    function showGuessOrder() {
        let ol = document.createElement("ol");

        ol.innerText = "Formernas clickorder:";
        guessOrder.forEach(function (element, ix) {
            let li = document.createElement("li");

            li.innerText = guessOrder[ix];
            ol.appendChild(li);
        });
        content.appendChild(ol);
    }

    function drawAllShapes() {
        let shapesContainerDiv = document.createElement("div");

        shapesContainerDiv.className = "shapes-container ";
        content.appendChild(shapesContainerDiv);
        shapeObjects.forEach(shape => {
            shape.drawShape(shapesContainerDiv);
        });
    }

    function mainTest4() {
        tools.cleanContent();
        tools.createHeader("Gissa formernas ordning", " ");
        drawAllShapes();
        showGuessOrder();
        timerId = setTimeout(showResult, 15000);
    }

    function startTest() {
        let h1 = "Visuell förmåga och läsförståelse",
            pContent = `Detta testet kombinerar läsförståelse med visuell förmåga.
            Testet innebär att du skall gissa rätt ordning på 10 unika objekt. Objekt kan vara en
             kvadrat, en cirkel, en triangel eller en rektangel. Objektet har en färg. Du kommer få
              en numrerad lista med 10 alternativ som säger i vilken ordning som de olika objekten
               skall klickas på.
            När du är beredd klickar du på start-knappen.`;

        tools.cleanContent();
        shapeCounter = 0;
        shapeObjects = [];
        clearTimeout(timerId);
        defineAllObjects();

        if (firstRun) {
            window.Test.totalScore += window.Test.partialScore;
            window.Test.currentTest = 4;
            firstRun = false;
        }
        console.log("score: " + window.Test.totalScore);
        window.Test.partialScore = 0;
        tools.createHeader(h1, pContent);

        tools.addButton(mainTest4, "Starta minnestestet!");
    }

    return {
        startTest: startTest
    };
})();
