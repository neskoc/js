/*jshint esversion: 6 */

(function () {
    'use strict';

    var flagNameTarget = document.getElementById('country-id');
    var flagTarget = document.getElementById('flag');
    let currentFlagId = '';
    const infoText = '(click on flag to remove it)';

    let countryNames = [
        'Sweden',
        'Laos',
        'Bhutan',
        'Serbia'
    ];
    let flagDivs = [
        '<div class="swe-horizontal" ></div><div class="swe-vertical"></div>',
        '<div class="laos-stripe" ></div><div class="laos-circle"></div>',
        '<div class="bhutan-bottom-triangle"></div>' +
        '<img src="img/flags/flag_dragon_bhutan.svg" alt="Dragon" class="bhutan-dragon">',
        '<div class="serbia-midle-stripe"></div><div class="serbia-bottom-stripe"></div>' +
        '<img src="img/flags/Flag_of_Serbia_coat_of_arms.svg" alt="Double headed eagle"' +
        ' class="serbia-eagle">'
    ];

    let flagObj = {
        country: NaN,
        flagHtml: NaN,
        backSideHtml: NaN,
        flagDiv: NaN,
        backSideDiv: '<div class="backside"></div>',
        flagLink: NaN,
        front: NaN,

        countryFlagHtmlToElement: function(flagHtml) {
            let div= document.createElement('div');

            div.id = this.country.toLowerCase();
            div.className = 'flag-300x200 ' + this.country.toLowerCase();
            div.innerHTML = flagHtml;
            return div;
        },

        init: function (country, flagDiv) {
            this.country = country;
            this.flagDiv = flagDiv;
            console.log(this.country + ': init');
            this.flagHtml = this.countryFlagHtmlToElement(flagDiv);
            this.backSideHtml = this.countryFlagHtmlToElement(this.backSideDiv);
            this.flagLink = document.getElementById('draw-' + country.toLowerCase());
            console.log(this.flagLink);
            this.addLinkEventListener();
        },

        resetPreviouslySelectedFlag: function() {
            if (currentFlagId !== '') {
                document.getElementById(currentFlagId).classList.remove('selected');
                currentFlagId = '';
            }
        },

        drawFlag: function (flagHtml, fromLink = true) {
            let mess = "Click on the country name in the menu to draw its flag " +
                "or on the flag to switch between front and back side.";
            let countryFlagTarget = document.getElementById(this.country.toLowerCase());

            if (this.front & !fromLink) {
                countryFlagTarget.innerHTML = this.backSideDiv;
                console.log("drawFlag: Drawing the back side " + this.country + '.');
            } else {
                if (!countryFlagTarget) {
                    flagTarget.appendChild(flagHtml);
                    this.addFlagTargetEventListner();
                } else {
                    countryFlagTarget.innerHTML = this.flagDiv;
                }
                console.log("drawFlag: Removing old flag / Drawing new flag " + this.country + '.');
            }
            flagNameTarget.innerHTML = mess;
        },

        addFlagTargetEventListner: function () {
            let outerThis = this;
            let countryTarget = document.getElementById(this.country.toLowerCase());

            countryTarget.addEventListener("click", function () {
                console.log("Event for clicking on flag.");
                if (outerThis.front) {
                    outerThis.resetPreviouslySelectedFlag();
                    console.log("EventListner: Drawing the backside " + outerThis.country);
                    outerThis.drawFlag(outerThis.backSideHtml, false);
                    outerThis.front = false;
                } else {
                    outerThis.drawFlag(outerThis.flagHtml);
                    outerThis.front = true;
                }
            });
        },

        addLinkEventListener: function() {
            let outerThis = this;

            outerThis.flagLink.addEventListener("click", function () {
                outerThis.front = true;
                console.log("Event for clicking on link " + outerThis.country);
                flagNameTarget.innerHTML = this.country + ' ' + infoText;
                outerThis.resetPreviouslySelectedFlag();
                outerThis.drawFlag(outerThis.flagHtml, true);
                outerThis.flagLink.classList.add('selected');
                currentFlagId = 'draw-' + outerThis.country.toLowerCase();
            });
        }
    };

    let flagObjects = [];

    for (let ix=0; ix < countryNames.length; ix++) {
        flagObjects[ix] = Object.create(flagObj);
        flagObjects[ix].init(countryNames[ix], flagDivs[ix]);
    }
})();
