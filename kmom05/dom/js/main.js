/*jshint esversion: 6 */

(function () {
    'use strict';

    /* Formatera datumet och tiden i formatet yyyy/mm/dd och hh:mm:ss.
     Se till så att det läggs på en nolla vid entalen, till exempel 13:4:55 = 13:04:55
     */
    var myContent = document.getElementById('content');

    myContent.innerHTML = '<h3>Nenads sandlåda!</h3>';

    window.console.log('Sandlådans konsol!');

    var today = new Date(Date.now());

    var yyyy = today.getFullYear().toString().padStart(4, '0');
    var MM = today.getMonth().toString().padStart(2, '0');
    var dd = today.getDay().toString().padStart(2, '0');
    var hh = today.getHours().toString().padStart(2, '0');
    var mm = today.getMinutes().toString().padStart(2, '0');
    var ss = today.getSeconds().toString().padStart(2, '0');
    var datumStr = yyyy + '/' + MM + '/' + dd + ' ' + hh + ':' + mm + ':' + ss;
    var textnode = document.createTextNode('Formaterat datum: ' + datumStr);

    myContent.appendChild(textnode);

    window.console.log('1. Dagens datum: ' + today);
    window.console.log('Dagens datum: ' + datumStr);

    // window.console.log(newDate);
})();
