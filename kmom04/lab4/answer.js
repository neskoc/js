/*jshint esversion: 6 */

/**
 * @preserve 1a758afd804efb1e01418551d8ee6501
 *
 * 1a758afd804efb1e01418551d8ee6501
 * js
 * lab4
 * v1
 * necu20
 * 2020-11-13 00:47:24
 * v4.0.0 (2019-03-05)
 *
 * Generated 2020-11-13 01:47:24 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 4 - arrays
 *
 * Practise arrays. You might find useful help here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Array
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Arrays
 *
 * To copy an array use array.slice() to make a real copy, not a shallow one.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a variable `array2` holding an array with the words:
 * `[beef,chicken,pork,sausage,tofu]`. Return the element on position: `2` in
 * array2.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/

let array2 = ['beef', 'chicken', 'pork', 'sausage', 'tofu'];

ANSWER = array2[2];

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use the variable `array2`. Concatenate the first item and the last item as
 * a string. Separate the string with `-`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
let result = array2[0] + '-' + array2[array2.length - 1];

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create an array, `array1`, with the items `49,72,-10,0,-412,739,6,1500`.
 *
 * Merge the two arrays, `array1` and `array2`, into a third variable
 * `array3`.
 *
 * Answer with array3.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/
let array1 = [49, 72, -10, 0, -412, 739, 6, 1500];
let array3 = array1.concat(array2);

ANSWER = array3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a variable `array21` as a clone of `array2`.
 * Sort `array21`.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
let array21 = [...array2];

    ANSWER = array21;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a variable `array11` as a copy of `array1`.
 * Sort `array11` according to its values. The smallest value comes first and
 * the largest value comes last.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/

let array11 = [...array1];

array11.sort(function (a, b) {
    return a - b;
});

ANSWER = array11;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a variable `array22` which holds the same content as `array2` - but
 * all strings are uppercase.
 * Use the built-in Array-function `map()` to solve it.
 *
 * Answer with the array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
let array22 = array2.map(str => str.toUpperCase());

ANSWER = array22;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a new array, `array12`. It should contain all positive numbers from
 * the `array1`.
 * Use the built-in array-function `filter()` to solve it.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/
let array12 = array1.filter(val => val > 0);

    ANSWER = array12;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Create a function `arrayAverage()` that takes one array as argument and
 * returns the average of all elements in that array.
 *
 * Try out the function using `array1` and answer with the rounded integer
 * result.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/

function arrayAverage(arr) {
    return arr.reduce(function(val1, val2) {
        return val1 + val2;
    }, 0) / arr.length;
}

ANSWER = arrayAverage(array1);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Modify arrays
 *
 * Learn how to modify arrays.
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Create a new array `myArray` and make it a copy of `array1`. Switch place
 * on the first and the last element, with the help of built-in
 * array-functions.
 * Use the array-functions `pop(), push(), shift() and unshift()`.
 *
 * Answer with `myArray`.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/

let myArray = [...array1];
let first = myArray.shift();

myArray.unshift(myArray.pop());
myArray.push(first);

ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * In `myArray` change the `3rd and 4th` value to the boolean value `false`
 * using built-in array-function `splice()`.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/
// let el3 = myArray[2];
myArray.splice(2, 1, false);
myArray.splice(3, 1, false);

ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (1 points)
 *
 * Remove the `4th and 5th` item in 'myArray'. Then insert the string `MEGA`
 * after the item `3rd`. Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/
myArray.splice(3, 2);
myArray.splice(3, 0, 'MEGA');

    ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
