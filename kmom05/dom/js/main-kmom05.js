/*jshint esversion: 6 */

(function () {
    'use strict';

    let content = document.getElementById("content"),
        browserSizeSpan = document.getElementById('browserSize'),
        browserHeight = window.innerHeight,
        browserWidth = window.innerWidth,
        box1 = document.getElementById('box1'),
        box1Size = {};
    // window.getComputedStyle(box1).getPropertyValue("left");
    let left = parseInt(window.getComputedStyle(box1).left),
        top = parseInt(window.getComputedStyle(box1).top);
    let colors = ['green', 'yellow', 'red', 'blue'];
    let step = 10;

    function centerElement(element) {
        let hight = parseInt(window.innerHeight),
            width = parseInt(window.innerWidth),
            horOffset = parseInt(element.offsetWidth),
            vertOffset = parseInt(element.offsetHeight);

        element.style.top = (hight - vertOffset) / 2 + 'px';
        element.style.left = (width - horOffset) / 2 + 'px';
    }

    function printInfo() {
        console.log('Kmom05 1.1');
        console.log(`Browser windows size: (${browserHeight}, ${browserHeight})`);
        console.log(`box1 size: (${box1.offsetWidth},${box1.offsetHeight})`);
        console.log(`box1 position: (${left},${top})`);
    }

    function toggleSelected() {
        event.target.classList.toggle("selected");
        console.log('2.2');
        console.log(event);
    }

    function toggleCircle() {
        let selected = document.querySelectorAll(".selected");
        selected.forEach((element) => {
            element.classList.toggle("circle");
        });
    }

    function resizeElement(element, key) {
        let clientWidth = element.clientWidth,
            clientHeight = element.clientHeight;

        browserHeight = window.innerHeight;
        browserWidth = window.innerWidth;
        if (key === 'q') {
            clientWidth += step;
            clientHeight += step;
        } else {
            clientWidth -= step;
            clientHeight -= step;
        }

        if (clientWidth < step) {
            clientWidth = step;
        }
        if (clientHeight < step) {
            clientHeight = step;
        }

        if (clientHeight > browserHeight) {
            clientWidth = clientHeight = browserHeight - step;
        } else if (clientWidth > browserWidth) {
            clientHeight = clientWidth = browserWidth - step;
        }
        element.style.width = clientWidth + 'px';
        element.style.height = clientHeight + 'px';
        centerElement(element);
    }

    function resizeElements(key) {
        let selected = document.querySelectorAll(".selected");
        selected.forEach((element) => {
            resizeElement(element, key);
        });
    }

    function shiftColor() {
        let selected = document.querySelectorAll(".selected");
        selected.forEach((element) => {
            let color = element.style["background-color"]; // TODO
            let colorIx = colors.indexOf(color);

            if (colorIx == colors.length - 1) {
                element.style.backgroundColor = colors[0];
            } else {
                element.style.backgroundColor = colors[colorIx + 1];
            }
        });
    }

    function keyPressed() {
        let key = event.key.toLowerCase();
        switch (key) {
            case 'e':
                toggleCircle();
                break;
            case 'q':
            case 'w':
                resizeElements(key);
                break;
            case 'r':
                shiftColor();
                break;
        }
    }

    window.addEventListener("resize", centerElement.bind(null, box1), false);
    document.addEventListener("keydown", keyPressed);
    box1.addEventListener("click", toggleSelected);
    centerElement(box1);
    printInfo();

})();
