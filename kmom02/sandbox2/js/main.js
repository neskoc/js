(function () {
    'use strict';

    var myContent = document.getElementById('content');
    var myContentHight = myContent.offsetHeight;
    var myContentWidth = myContent.clientWidth;
    var box = document.createElement("div");
    var step = 1;

    box.className = "box";
    myContent.appendChild(box);

    document.addEventListener("keydown", function(kbevent) {
        let key = kbevent.key;
        // console.log('key: ' + key);
        var boxTop = box.offsetTop;
        var boxLeft = box.offsetLeft;
        var boxWidth = box.offsetWidth;
        var boxHight = box.offsetHeight;

        switch (key) {
            case 'ArrowUp':
                box.style.backgroundColor = "grey";
                if (boxTop >= step) {
                    box.style.top = (boxTop - step) + 'px';
                }
                break;
            case 'ArrowDown':
                box.style.backgroundColor = "green";
                if (boxTop <= myContentHight - boxHight - step - 2) {
                    box.style.top = (boxTop + step) + 'px';
                }
                break;
            case 'ArrowLeft':
                box.style.backgroundColor = "orange";
                if (boxLeft >= step) {
                    box.style.left = (boxLeft - step) + 'px';
                }
                break;
            case 'ArrowRight':
                box.style.backgroundColor = "yellow";
                if (boxLeft <= myContentWidth - boxWidth - step) {
                    box.style.left = (boxLeft + step) + 'px';
                }
                break;
            case 'i':
                if (step < 30) {
                    step += 5;
                }
                break;
            case 'd':
                if (step > 5) {
                    step -= 5;
                }
                break;
        }
        console.log('key: ' + key + ' step: ' + step);

        /*
        console.log('boxTop: ' + box.offsetTop);
        console.log('boxLeft: ' + box.offsetLeft);
        */
    });

    document.addEventListener("keyup", function () {
        box.style.backgroundColor = "blue";
    });
})();
