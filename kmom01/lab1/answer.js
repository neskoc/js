/**
 * @preserve 0d499be94d6cf42818017169f0d31b35
 *
 * 0d499be94d6cf42818017169f0d31b35
 * js
 * lab1
 * v1
 * necu20
 * 2020-10-30 01:15:15
 * v4.0.0 (2019-03-05)
 *
 * Generated 2020-10-30 02:15:15 by dbwebb lab-utility v4.0.0 (2019-03-05).
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
 * Lab 1 - variables and builtins
 *
 * The foundation of variables, numbers, strings and basic arithmetic and
 * built in functions.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Variables, numbers and built-in functions
 *
 * Use variables, numbers and built-in functions.
 *
 * One way to round a float to a certain amount of decimals is:
 *
 * Math.round(val*10000)/10000
 *
 * Where `val` is your float number.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create two variables, `floatOne` and `floatTwo`.
 *
 * Give them the values `262.47` and `400.53`.
 *
 * Create a variable called `result` and assign to it the sum of the variables
 * above.
 *
 * Answer with the result, rounded to two decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var floatOne = 262.47;

var floatTwo = 400.53;

var result = floatOne + floatTwo;


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a variable `someIntText` and give it a string value of `"394.750
 * werewolf"`.
 *
 * Use the function `parseInt()` to find out the integer representation of the
 * text.
 *
 * Assign the value to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var someIntText = "394.750 werewolf";

result = parseInt(someIntText);

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use your variable `someIntText`.
 *
 * Use the function `parseFloat()` to find out the float representation of the
 * text.
 *
 * Assign the value to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = parseFloat(someIntText);

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Use the method `max()`, in Math, to find out the highest number in the
 * serie:
 *
 * 147,376,726,598
 *
 * Assign the number to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var arr = [147, 376, 726, 598];

result = arr.reduce(function(a, b) {
    return Math.max(a, b);
});

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Use the Math property `PI` to get the float value of 'Pi'. Round the result
 * to 4 decimals.
 *
 * Assign the number to your `result`-variable.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

const pi = Math.PI;

result =  Math.round(pi * 10000) / 10000;

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Strings and built-in functions
 *
 * Work with strings and find out about the built-in functions.
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Create a variable called `wordOne` and assign the word "crocodile" to it.
 *
 * Add (concatenate) the number `488` to the word and answer with the
 * resulting variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var wordOne = 'crocodile';

wordOne += 488;


ANSWER = wordOne;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Use the built-in method `charAt()` on the word "chicken" to return the
 * character at a given index.
 *
 * Answer with the character at index 2.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var chicken = 'chicken';

result = chicken.charAt(2);

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (1 points)
 *
 * Use the built-in method `toUpperCase()` to transform the string:
 *
 * `"Do you want to hear the most annoying sound in the world?"` to uppercase.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var tmpStr = 'Do you want to hear the most annoying sound in the world?';

result = tmpStr.toUpperCase();

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/**
 * Exercise 2.4 (1 points)
 *
 * Use the built-int property `length` to find out the length of the string:
 * `"chicken"`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var chickenLen = chicken.length;

ANSWER = chickenLen;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.4", ANSWER, false);

/**
 * Exercise 2.5 (1 points)
 *
 * Use the built-int method `substr()` to extract the last three characters of
 * the word: `"chicken"`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = chicken.substr(chickenLen - 3, chickenLen);

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Extra assignments
 *
 * Solve these optional questions to earn extra points.
 *
 */



/**
 * Exercise 3.1 (3 points)
 *
 * Create a Date object called `myDate` and initiate it with: `"Aug 21,
 * 2008"`.
 *
 * Use the built-in function `Date.getFullYear()` to get the year from your
 * Date object.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myDate = new Date('Aug 21, 2008');

result = myDate.getFullYear();


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (3 points)
 *
 * Create a new Date object that is equal to `myDate` plus `22` days.
 *
 * Use `Date.getDate()` and answer with the day of the month.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var newDate = myDate;

newDate.setDate(newDate.getDate() + 22);

ANSWER = newDate.getDate();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
