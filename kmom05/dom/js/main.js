/*jshint esversion: 6 */

(function () {
    'use strict';

    let content = document.getElementById('content'),
        browserSizeSpan = document.getElementById('browserSize'),
        browserHeight = window.innerHeight,
        browserWidth = window.innerWidth,
        box1 = document.getElementById('box1'),
        box1Size = {};
    // window.getComputedStyle(box1).getPropertyValue("left");
    let left = parseInt(window.getComputedStyle(box1).left),
        top = parseInt(window.getComputedStyle(box1).top);

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

    window.addEventListener("resize", centerElement.bind(null, box1), false);
    centerElement(box1);
    printInfo();

})();
