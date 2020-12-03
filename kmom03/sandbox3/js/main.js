/*jshint esversion: 6 */

(function () {
    'use strict';

    let myCanvas = document.getElementById('canvas');
    let nrOfSidesElement = document.getElementById('dice-sides');
    let nrOfCastsElement = document.getElementById('dice-casts');
    let castSubmit = document.getElementById('cast-id');
    let castResults = document.getElementById('results-id');

    let nrOfSides;
    let nrOfCasts;
    let castsSum;
    let castsMean;
    let casts = [];

    let diceDots = [
        [5],
        [1, 9],
        [1, 5, 9],
        [1, 3, 7, 9],
        [1, 3, 5, 7, 9],
        [1, 2, 3, 7, 8, 9],
        [1, 2, 3, 5, 7, 8, 9],
        [1, 2, 3, 4, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];
    let diceColors = ['red', 'blue', 'green', 'yellow', 'black',
        'orange', 'brown', 'magenta', 'grey', 'cyan'];

    function random(max) {
        return Math.floor(Math.random() * max + 1);
    }

    function rollDice(times) {
        let localSum = 0;
        let localCasts = [];

        for (let ix = 1; ix <= times; ix++) {
            localCasts[ix - 1] = random(nrOfSides);
            localSum += localCasts[ix - 1];
        }
        casts = [...localCasts];
        castsSum = localSum;
        castsMean = Math.round(100 * localSum / times) / 100;
        console.log('sum: ' + castsSum + ' mean: ' + castsMean);
    }

    function drawAllDices(lcasts) {
        let dicesDivs = '';

        lcasts.forEach(element => {
            dicesDivs += drawDice(element);
        });
        return dicesDivs;
    }

    function drawDice(dots) {
        var diceDiv = '<div class="dice color-' + diceColors[dots - 1] + '">';
        const positionDivBefore = '<div class="position';
        const positionDivAfter = ' circle"></div>';

        diceDots[dots - 1].forEach(element => {
            diceDiv += positionDivBefore + element + positionDivAfter;
        });
        diceDiv += '</div>';
        return diceDiv;
    }
    function showResults() {
        const sumText = 'Summa: ' + castsSum;
        const meanText = ' | Medelvärde: ' + castsMean;

        castResults.innerHTML = sumText + meanText + '<hr>';
    }

    function submitEvent() {
        console.log('Event for clicking on submit.');
        nrOfSides = Number(nrOfSidesElement.value);
        nrOfCasts = Number(nrOfCastsElement.value);
        const sMax = Number(nrOfSidesElement.max);
        const sMin = Number(nrOfSidesElement.min);
        const cMin = Number(nrOfCastsElement.min);

        if (nrOfSides > sMax || nrOfSides < sMin ||
            nrOfCasts < cMin) {
            return;
        }
        console.log('sides: ' + nrOfSides + ' casts: ' + nrOfCasts);
        rollDice(nrOfCasts);
        console.log('casts: ' + casts);
        myCanvas.innerHTML = drawAllDices(casts);
        showResults();
    }

    castSubmit.addEventListener("click", submitEvent);
    window.console.log('Sandlådans konsol!');
})();
