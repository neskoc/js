/**
 * @preserve bf0614771a78f9e9eb173d4b79de96b9
 *
 * bf0614771a78f9e9eb173d4b79de96b9
 * js
 * lab3
 * v1
 * necu20
 * 2020-11-03 11:53:03
 * v4.0.0 (2019-03-05)
 *
 * Generated 2020-11-03 12:53:03 by dbwebb lab-utility v4.0.0 (2019-03-05).
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
 * Lab 3 - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a function `sumRangeNumbers()` that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values `18 and 91`, answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function sumRangeNumbers(lowest, highest) {
    let sum = 0;

    for (let ix = lowest; ix <= highest; ix++) {
        sum += ix;
    }
    return sum;
}

let result = sumRangeNumbers(18, 91);

console.log(result);


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a function called `fruitColor()` that takes one argument called
 * `fruit` and returns the color of the fruit.
 *
 * The function should be aware of the following fruits (`banana, apple, kiwi,
 * plum`) with respective color (`yellow, green, green, red`).
 *
 * Try it out using the fruit `kiwi` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function getFruitColor(fruit) {
    let fruitColor;

    switch (fruit) {
        case 'banana':
            fruitColor = 'yellow';
            break;
        case 'apple':
            fruitColor = 'green';
            break;
        case 'kiwi':
            fruitColor = 'green';
            break;
        case 'plum':
            fruitColor = 'red';
            break;
        default:
            fruitColor = 'unknown fruit';
    }
    return fruitColor;
}

ANSWER = getFruitColor('kiwi');

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create a function `printRange()` that takes two arguments `rangeStart` and
 * `rangeStop` and returns a string with all numbers comma-separated in the
 * range.
 *
 * Try it using the arguments `25 and 42`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printRange(rangeStart, rangeStop) {
    let range = '';
    let first = true;

    for (let ix = rangeStart; ix <= rangeStop; ix++) {
        if (first) {
            first =false;
        } else {
            range +=',';
        }
        range += ix;
    }
    return range;
}

ANSWER = printRange(25, 42);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a function `printRangeReversed()` that takes two arguments
 * `rangeStart` and `rangeStop` and returns a string with all numbers
 * comma-separated in the range.
 *
 * Try it using the arguments `42 and 25`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 function printRangeReversed(rangeStart, rangeStop) {
     let range = '';
     let first = true;

     for (let ix = rangeStart; ix >= rangeStop; ix--) {
         if (first) {
             first =false;
         } else {
             range +=',';
         }
         range += ix;
     }
     return range;
 }

ANSWER = printRangeReversed(42, 25);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a function `printAnyRange()` that takes two arguments `rangeStart`
 * and `rangeStop` and returns a string with all numbers comma-separated in
 * the range.
 *
 * If `rangeStart` is smaller than `rangeStop` then call the function
 * `printRange()`.
 *
 * If `rangeStart` is greater than `rangeStop` the call the function
 * `printRangeReversed()`.
 *
 * Try it using the arguments `25 and 42` (both ways).
 *
 * Answer with the result using arguments 25 and 42.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printAnyRange(rangeStart, rangeStop) {
    let range;

    if (rangeStop > rangeStart) {
        range = printRange(rangeStart, rangeStop);
    } else {
        range = printRangeReversed(rangeStart, rangeStop);
    }
    return range;
}

console.log(printAnyRange(42, 25));

ANSWER = printAnyRange(25, 42);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a function called `stringRepeat()` that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: `blue` and `6`. The number represents the number of times the
 * string should be added to a string.
 *
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function stringRepeat(content, multiply) {
    let result = '';

    for (let ix = 1; ix <= multiply; ix++) {
        result += content;
    }
    return result;
}

ANSWER = stringRepeat('blue', 6);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a function `inRange()` that takes three arguments, `rangeStart`,
 * `rangeStop` and `value`.
 *
 * The function should return boolean `true` if value is greater than
 * rangeStart and less than rangeStop. Otherwise it should return boolean
 * `false`.
 *
 * Try it out using the range `192 - 525` and the value `323`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function inRange(rangeStart, rangeStop, value) {
    if (value < rangeStop && value > rangeStart) {
        return true;
    }
    return false;
}

ANSWER = inRange(192, 525, 323);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Try out the function `inRange()` using the range `192 - 525` and the value
 * `666`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



ANSWER = inRange(192, 525, 666);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9 (1 points)
 *
 * Create a function called `degreesToRadians()` that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 *
 * Test your function with the value `90` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function degreesToRadians(degree) {
    return Math.round(degree * Math.PI / 180 * 10000) / 10000;
}

ANSWER = degreesToRadians(90);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10 (1 points)
 *
 * Create a function called `fizzBuzz()` that takes two arguments `start` and
 * `stop` and returns a comma-separated string.
 *
 * The arguments represents the starting point and stop point of the game
 * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
 * run from start to stop and add `Fizz`, `Buzz` or both to your
 * result-variable at appropriate numbers.
 *
 * Each entry to your result should be comma-separated. If `stop` is equal or
 * lower than `start`, the function should return an appropriate error
 * message.
 *
 * Test the function using `start=3 and stop=25`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function fizzBuzz(start, stop) {
    let res = '';
    let first = true;
    let fizz = false;

    for (let ix = start; ix <= stop; ix++) {
        if (start >= stop) {
            return 'start must be lower then stop';
        }
        if (first) {
            first = false;
        } else {
            res += ',';
        }
        if (ix % 3 === 0 || ix % 5 === 0) {
            if (ix % 3 === 0) {
                res += 'Fizz';
                fizz = true;
            }
            if (ix % 5 === 0) {
                if (fizz) {
                    res += ' ';
                }
                res += 'Buzz';
            }
            fizz = false;
        } else {
            res += ix;
        }
    }
    return res;
}

ANSWER = fizzBuzz(3, 25);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. Solve them for extra points. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 (3 points)
 *
 * Create a function called `printSum()` that should take two variables, the
 * sum of the players hand and the sum of the dealers hand.
 *
 * Your hand should be three cards with the values: `8, 9 and 3`.
 * The dealers hand should be three card with the values: `3, 11, 9`.
 * The function should return the sum and the player: `Player: 20, Dealer:
 * 23`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

const playersHand = [8, 9, 3];
const dealersHand = [3, 11, 9];

function printSum(playersHand, dealersHand) {
    let playersSum = 0;
    let dealersSum = 0;

    function sumTwo(a, b) {
        return a + b;
    }

    playersHand.forEach((item) => {
        playersSum = sumTwo(playersSum, item);
    });

    dealersHand.forEach((item) => {
        dealersSum = sumTwo(dealersSum, item);
    });
    let res = 'Player: ' + playersSum + ', ' + 'Dealer: ' + dealersSum;

    return res;
}

ANSWER = printSum(playersHand, dealersHand);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (3 points)
 *
 * Create a function called `printResult()` that should take two variables,
 * the sum of the players hand and the sum of the dealers hand.
 *
 * Players hand should be three cards with the values: `8, 9 and 3`. The
 * dealers hand should be three card with the values: `3, 11, 9`.
 *
 * This time you should include the check from lab 2 where you find out the
 * boundaries of the player and the dealer.
 * Player hand = 21 (black jack).
 * Player hand less than 21 (safe).
 * Player hand larger than 21 (busted).
 * Dealer hand less than 17 (safe).
 * Dealer hand larger or equal to 17 and less than 21 (stop).
 * Dealer hand = 21 (black jack).
 * Delaer hand larger than 21 (busted).
 *
 * Return a string in the format: `Player: safe, Dealer: busted`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/

function playHand(hand) {
    let status;

    if (hand < 21) {
        status = 'safe';
    } else if (hand === 21) {
        status = 'black jack';
    } else {
        status = 'busted';
    }
    return status;
}

function printResult(playersHand, dealersHand) {
    let playersSum = 0;
    let dealersSum = 0;

    function sumTwo(a, b) {
        return a + b;
    }

    playersHand.forEach((item) => {
        playersSum = sumTwo(playersSum, item);
    });

    dealersHand.forEach((item) => {
        dealersSum = sumTwo(dealersSum, item);
    });
    let res = 'Player: ' + playHand(playersSum) + ', ' + 'Dealer: ' + playHand(dealersSum);

    return res;
}




ANSWER = printResult(playersHand, dealersHand);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (3 points)
 *
 * Create a function called `calculateInterest()` that returns the money you
 * have after x years of interest, given three arguments: `969, 36 and 5`.
 * First argument represents the start money, the second argument represents
 * the number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/

function calculateInterest(startSaving, years, interest) {
    let endSaving = startSaving;

    for (let ix = 1; ix <= years; ix++) {
        endSaving = endSaving * (1 + interest / 100);
    }
    return Math.round(endSaving * 10000) / 10000;
}

ANSWER = calculateInterest(969, 36, 5);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
