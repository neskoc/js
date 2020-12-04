/* jshint esversion: 6 */

(function() {
    'use strict';

    let content = document.getElementById("content"),
        browserSizeSpan = document.getElementById('browserSize'),
        browserHeight = window.innerHeight,
        browserWidth = window.innerWidth,
        box1 = document.getElementById('box1'),
        elementSize = 200;
    // window.getComputedStyle(box1).getPropertyValue("left");
    let left = parseInt(window.getComputedStyle(box1).left),
        top = parseInt(window.getComputedStyle(box1).top);
    let colors = ['green', 'yellow', 'red', 'blue'];
    let step = 10,
        movingSteps = 20,
        timer;

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

    function toggleSelectedWithKeypress() {
        let selected = document.querySelectorAll(".selected");

        selected.forEach((element) => {
            element.classList.toggle("selected");
        });
    }

    function toggleCircle() {
        let selected = document.querySelectorAll(".selected");

        selected.forEach((element) => {
            element.classList.toggle("circle");
        });
    }

    function centerElement(element) {
        let hight = parseInt(window.innerHeight),
            width = parseInt(window.innerWidth),
            horOffset = parseInt(element.offsetWidth),
            vertOffset = parseInt(element.offsetHeight);

        element.style.top = (hight - vertOffset) / 2 + 'px';
        element.style.left = (width - horOffset) / 2 + 'px';
    }

    function resizeElement(element, key) {
        let clientWidth = parseInt(element.clientWidth),
            clientHeight = parseInt(element.clientHeight),
            leftPos = parseInt(element.style.left),
            topPos = parseInt(element.style.top);

        browserHeight = parseInt(window.innerHeight);
        browserWidth = parseInt(window.innerWidth);

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

        if (key === 'q') {
            topPos -= step / 2;
            leftPos -= step / 2;
        } else {
            topPos += step / 2;
            leftPos += step / 2;
        }

        topPos = (topPos < 0) ? 0 : topPos;
        leftPos = (leftPos < 0) ? 0 : leftPos;

        topPos = (topPos > browserHeight - clientHeight)
            ? (browserHeight - clientHeight)
            : topPos;
        leftPos = (leftPos > browserWidth - clientWidth)
            ? (browserWidth - clientWidth)
            : leftPos;

        element.style.width = clientWidth + 'px';
        element.style.height = clientHeight + 'px';
        element.style.left = leftPos + 'px';
        element.style.top = topPos + 'px';
    }

    function resizeElements(key) {
        let selected = document.querySelectorAll(".selected");

        selected.forEach((element) => {
            resizeElement(element, key);
        });
    }

    /**
     * Give a random number between min and max.
     * @param  min
     * @param  max
     * @return integer
     */
    function random(min, max) {
        return Math.floor((Math.random() * max) + min);
    }

    function getRandomAttributes(elementSize) {
        let randomColor = colors[random(0, colors.length)],
            randomForm = random(0, 2),
            topPos = random(0, window.innerHeight - elementSize),
            leftPos = random(0, window.innerWidth - elementSize);
        let randAttributes = {
            'randomColor': randomColor,
            'randomForm': randomForm,
            'topPos': topPos + 'px',
            'leftPos': leftPos + 'px'
        }

        return randAttributes;
    }

    function addElementEventListeners(element) {
        element.addEventListener("click", toggleSelected);
        element.addEventListener("dblclick", transitionRemove.bind(null, element, false));
    }

    function duplicateSelected() {
        let selected = document.querySelectorAll(".selected");

        selected.forEach((element) => {
            let clonedElement = element.cloneNode(true),
                randAttributes = getRandomAttributes(element.clientWidth);

            clonedElement.id = "";
            clonedElement.style.top = randAttributes.topPos;
            clonedElement.style.left = randAttributes.leftPos;
            clonedElement.style.zIndex = element.zIndex + 1;
            content.appendChild(clonedElement);
            addElementEventListeners(clonedElement);
        });
    }

    function removeElements() {
        let selected = document.querySelectorAll(".selected");
        selected.forEach((element) => {
            element.remove();
        });
    }

    function removeElement (element) {
        element.remove();
    }

    function transitionRemove(element) {
        window.setTimeout(removeElement.bind(null, element, false), 2000);
        element.classList.add("animateSize");
        element.style.width = '2px';
        element.style.height = '2px';
    }

    function shiftElementColor(element) {
        let color = element.style["background-color"] || "green";
        let colorIx = colors.indexOf(color);

        if (colorIx == colors.length - 1) {
            element.style.backgroundColor = colors[0];
        } else {
            element.style.backgroundColor = colors[colorIx + 1];
        }

    }

    function shiftColorForSelected() {
        let selected = document.querySelectorAll(".selected");

        selected.forEach((element) => {
            shiftElementColor(element);
        });
    }

    function changeElementAttributes(element) {
        let randAttributes = getRandomAttributes(element.clientWidth);

        element.style.backgroundColor = randAttributes.randomColor;
        element.style.top = randAttributes.topPos;
        element.style.left = randAttributes.leftPos;
        element.classList.toggle("circle");
    }

    function animateSelected() {
        let selected = document.querySelectorAll(".selected");
        selected.forEach((element) => {
            window.setTimeout(changeElementAttributes.bind(null, element, false), 200);
            window.setTimeout(changeElementAttributes.bind(null, element, false), 400);
            window.setTimeout(changeElementAttributes.bind(null, element, false), 600);
            window.setTimeout(changeElementAttributes.bind(null, element, false), 800);
            window.setTimeout(changeElementAttributes.bind(null, element, false), 1000);
        });
    }

    function changeZindex(value) {
        let selected = document.querySelectorAll(".selected");

        selected.forEach((element) => {
            let currentZindex = parseInt(element.style.zIndex) || 1;

            element.style.zIndex = currentZindex + value;
            // console.log(element.attributes);
        });
    }

    function selectAll() {
        let selected = document.querySelectorAll(".box");
        let counter = 0;

        selected.forEach((element) => {
            if (!element.classList.contains("selected")) {
                element.classList.add("selected");
                counter++;
            }
        });
        console.log('3.6 selected: ' + counter);
    }

    function addRandomElement() {
        let randomDiv = document.createElement("div");
        let randomColor = colors[random(0, colors.length)],
            randomForm = random(0, 2),
            topPosition = random(0, window.innerHeight - elementSize),
            leftPosition = random(0, window.innerWidth - elementSize);

        console.log('form: ' + randomForm + ' color: ' + randomColor);
        randomDiv.classList.add('box', 'center', 'green', 'size200');
        if (randomForm == 0) {
            randomDiv.classList.add('circle');
        }
        randomDiv.style.backgroundColor = randomColor;
        randomDiv.style.top = topPosition + 'px';
        randomDiv.style.left = leftPosition + 'px';
        content.appendChild(randomDiv);
        addElementEventListeners(randomDiv);
    }

    function moveSelectedElements(key) {
        let selected = document.querySelectorAll(".selected");

        selected.forEach((element) => {
            var boxTop = element.offsetTop,
                boxLeft = element.offsetLeft,
                boxWidth = element.clientWidth,
                boxHight = element.clientHeight;

            switch (key) {
                case 'arrowup':
                    if (boxTop >= movingSteps) {
                        element.style.top = (boxTop - movingSteps) + 'px';
                    }
                    break;
                case 'arrowdown':
                    if (boxTop <= window.innerHeight - boxHight - movingSteps - 2) {
                        element.style.top = (boxTop + movingSteps) + 'px';
                    }
                    break;
                case 'arrowleft':
                    if (boxLeft >= movingSteps) {
                        element.style.left = (boxLeft - movingSteps) + 'px';
                    }
                    break;
                case 'arrowright':
                    if (boxLeft <= window.innerWidth - boxWidth - movingSteps) {
                        element.style.left = (boxLeft + movingSteps) + 'px';
                    }
                    break;
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
                shiftColorForSelected();
                break;
            case 't':
                duplicateSelected();
                break;
            case 'y':
                removeElements();
                break;
            case 'a':
                changeZindex(1);
                break;
            case 's':
                changeZindex(-1);
                break;
            case 'd':
                animateSelected();
                break;
            case 'arrowup':
            case 'arrowdown':
            case 'arrowleft':
            case 'arrowright':
                moveSelectedElements(key);
                break;
            case '9':
                if (movingSteps < 30) {
                    movingSteps += 5;
                }
                break;
            case '0':
                if (movingSteps > 5) {
                    movingSteps -= 5;
                }
                break;
            case 'u':
                toggleSelectedWithKeypress();
                break;
            case 'i':
                selectAll();
                break;
            case 'p':
                addRandomElement();
                break;
        }
    }

    window.addEventListener("resize", centerElement.bind(null, box1), false);
    document.addEventListener("keydown", keyPressed);
    addElementEventListeners(box1);
    centerElement(box1);
    printInfo();

})();
