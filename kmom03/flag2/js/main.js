/*jshint esversion: 6 */

(function () {
    'use strict';

    //var myContent = document.getElementById('content');
    var flagNameTarget = document.getElementById('country-id');
    var flagTarget = document.getElementById('flag');
    var flagSwednLink = document.getElementById('draw-sweden');
    var flagLaosLink = document.getElementById('draw-laos');
    var flagBhutanLink = document.getElementById('draw-bhutan');
    var flagSerbiaLink = document.getElementById('draw-serbia');
    let flagSweden = '<div class="flag-300x200 sweden">' +
            '<div div class="swe-horizontal" >' +
            '</div><div class="swe-vertical"></div>' +
        '</div >';
    let flagLaos = '<div class="flag-300x200 laos">' +
            '<div div class="laos-stripe" ></div>' +
            '<div class="laos-circle"></div>' +
        '</div >';
    let flagBhutan = '<div class="flag-300x200 bhutan">' +
            '<div class="bhutan-bottom-triangle"></div>' +
            '<img src="img/flags/flag_dragon_bhutan.svg" alt="Dragon" class="bhutan-dragon">' +
        '</div >';
    let flagSerbia = '<div class="flag-300x200 serbia">' +
            '<div class="serbia-midle-stripe"></div>' +
            '<div class="serbia-bottom-stripe"></div>' +
            '<img src="img/flags/Flag_of_Serbia_coat_of_arms.svg"' +
            ' alt="Double headed eagle" class="serbia-eagle">' +
        '</div>';
    let currentFlagId = '';
    const infoText = '(click on flag to remove it)';

    function drawFlag(flag) {
        console.log("Drawing/removing flag");
        flagTarget.innerHTML = flag;
    }

    function resetPreviouslySelectedFlag() {
        if (currentFlagId !== '') {
            document.getElementById(currentFlagId).classList.remove('selected');
            currentFlagId = '';
        }
    }

    function printFlagName(name) {
        flagNameTarget.innerHTML = name;
        resetPreviouslySelectedFlag();
    }

    flagSwednLink.addEventListener("click", function () {
        console.log("Event for clicking link Sweden.");
        printFlagName('Sweden ' + infoText);
        drawFlag(flagSweden);
        flagSwednLink.classList.add('selected');
        currentFlagId = 'draw-sweden';
    });
    flagLaosLink.addEventListener("click", function () {
        console.log("Event for clicking link Laos.");
        printFlagName('Laos ' + infoText);
        drawFlag(flagLaos);
        flagLaosLink.classList.add('selected');
        currentFlagId = 'draw-laos';
    });
    flagBhutanLink.addEventListener("click", function () {
        console.log("Event for clicking link Bhutan.");
        printFlagName('Bhutan ' + infoText);
        drawFlag(flagBhutan);
        flagBhutanLink.classList.add('selected');
        currentFlagId = 'draw-bhutan';
    });
    flagSerbiaLink.addEventListener("click", function () {
        console.log("Event for clicking link Serbia.");
        printFlagName('Serbia ' + infoText);
        drawFlag(flagSerbia);
        flagSerbiaLink.classList.add('selected');
        currentFlagId = 'draw-serbia';
    });

    flagTarget.addEventListener("click", function () {
        console.log("Event for clicking on flag.");
        printFlagName('Click on the country name in the menu to draw its flag');
        drawFlag('');
    });
})();
