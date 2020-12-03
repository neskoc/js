/**
 * @preserve 0fbe96f9ec9f942d8ba2143fc2bc44a1
 *
 * 0fbe96f9ec9f942d8ba2143fc2bc44a1
 * js
 * lab2
 * v1
 * necu20
 * 2020-11-01 19:36:26
 * v4.0.0 (2019-03-05)
 *
 * Generated 2020-11-01 20:36:26 by dbwebb lab-utility v4.0.0 (2019-03-05).
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
 * Lab 2 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create five variables: `card1, card2, card3, card4, card5`.
 *
 * Assign the values `5, 9, 11, 8, 7` to the variables created above.
 *
 * Add them up and put the sum in a variable called `result`.
 *
 * Answer with the variable `result`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    var card1, card2, card3, card4, card5;

    card1 = 5;
    card2 = 9;
    card3 = 11;
    card4 = 8;
    card5 = 7;
    var result = card1 + card2 + card3 + card4 + card5;

    ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use an `if statement` to see if the five cards (card1-card5) have a
 * combined sum that is higher than 21.
 *
 * Create a variable `status` and give it a different value depending on the
 * following.
 *
 * * If the sum is higher than 21, give your variable the value `"busted"`.
 * * Else give it the value `"safe"`.
 *
 * Answer with your status-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    var status;

    if (result > 21) {
        status = 'busted';
    } else {
        status = 'safe';
    }

    ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use `if else statements` to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with a string corresponding to the result:
 * lower = `"safe"`
 * higher = `"busted"`
 * 21 = `"black jack"`
 *
 * Store the response in your status-variable and answer with it.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    var sum = card1 + card2 + card3;

    if (sum < 21) {
        status = 'safe';
    } else if (sum === 21) {
        status = 'blask jack';
    } else {
        status = 'busted';
    }


    ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (2 points)
 *
 * Create three variables: `dealer1, dealer2, dealer3`.
 *
 * Assign the values `1, 6, 9` to the variables.
 *
 * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
 * to see what the dealer should do. Combine as you feel needed.
 *
 * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
 * the sum is higher than or equal to 17 and lower than 21 answer with
 * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
 * than 21 answer with `"busted"`.
 *
 * Store the response in a variable, and answer with it.
 *
 * PS. You can change the sum to test that your if-statement really works for
 * all values, just to try it out.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    var [dealer1, dealer2, dealer3] = [1, 6, 9];

    sum = dealer1 + dealer2 + dealer3;
    console.log(sum);
    if (sum < 17) {
        status = 'pick';
    } else if (sum >= 17 && sum < 21) {
        status = 'stop';
    } else {
        status = 'busted';
    }

    ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Use a switch-case statement to create a message with the type of fruit and
 * its color. You have the following type of fruits with a corresponding
 * color:
 *
 * * banana: yellow
 * * apple: green
 * * kiwi: green
 * * plum: purple
 *
 * Create a variable `myFruit` which holds the current type of your fruit. If
 * 'myFruit' is banana, the result should be a variable containing the string
 * value `"The banana is yellow."`
 *
 * Ensure that your switch-case works for all values.
 *
 * Answer with the result where `myFruit = "apple"`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    var fruit = {
        type: '',
        color: '',
        init: function(type, color) {
            this.type = type;
            this.color = color;
        },
    };
    var myFruit = 'apple';
    var helpStr = 'The ' + myFruit + ' is ';


    switch (myFruit) {
        case 'banana':
            result = helpStr + 'yellow.';
            break;
        case 'apple':
        case 'kiwi':
            result = helpStr + 'green.';
            break;
        case 'plum':
            result = helpStr + 'purple.';
    }


    ANSWER = result;

    var banana = Object.create(fruit);
    var apple = Object.create(fruit);
    var kiwi = Object.create(fruit);
    var plum = Object.create(fruit);

    banana.init('banana', 'yellow');
    apple.init('apple', 'green');
    kiwi.init('kiwi', 'green');
    plum.init('plum', 'purple');
    myFruit = Object.create(fruit);
    myFruit.init('apple', 'purple');

    switch (myFruit) {
        case banana:
            result = helpStr + 'yellow.';
            break;
        case apple:
        case kiwi:
            result = helpStr + 'green.';
            break;
        case plum:
            result = helpStr + 'purple.';
    }
    console.log('message: ' + result);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 *
 * Extend your switch-case statement with a `default value`. The result should
 * be:
 *
 * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    var pear = Object.create(fruit);

    pear.init('pear', 'green');
    myFruit.init('pear', 'green');

    switch (myFruit) {
        case banana:
            result = helpStr + 'yellow.';
            break;
        case apple:
        case kiwi:
            result = helpStr + 'green.';
            break;
        case plum:
            result = helpStr + 'purple.';
            break;
        default:
            result = 'That is an unknown fruit.';
    }

    ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Use a `for-loop` to increment `875` with the value `4`, `16` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
    var startVal = 875;
    var res = startVal;

    for (var ix = 1; ix <= 16; ix++) {
        res += 4;
    }

    ANSWER = res;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 *
 * Use a for-loop to decrement `587` with the value `8`, `14` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    startVal = 587;
    res = startVal;

    for (ix = 1; ix <= 14; ix++) {
        res -= 8;
    }

    ANSWER = res;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3 (3 points)
 *
 * Use a for-loop to add all the even values in the range `28` to `48` to a
 * string with each number separated by a comma `,`.
 *
 * The result should not end with a comma. You should neither have a space
 * after the comma.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/

    result = '';
    var first = true;

    for (ix = 28; ix <= 48; ix += 2) {
        if (!first) {
            result += ',';
        } else {
            first = false;
        }
        result += ix;
    }

    ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */



/**
 * Exercise 4.1 (1 points)
 *
 * Use a `while-loop` to increment `16` with the value `4` until it has
 * reached or passed `875`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    var incrementResult = 16;
    var count = 0;

    while (incrementResult <= 875) {
        incrementResult += 4;
        count++;
    }

    ANSWER = count;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, true);

/**
 * Exercise 4.2 (1 points)
 *
 * Use a while-loop to subtract `8` from `587` until the value has reached or
 * passed `0`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    var decrementResult = 587;

    count = 0;
    while (decrementResult >= 0) {
        decrementResult -= 8;
        count++;
    }

    ANSWER = count;
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/**
 * Exercise 4.3 (3 points)
 *
 * Use a while-loop to add all the values, to a comma-separated string, in the
 * range `22` to `67`, where the value is divisable by 5 or 7.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

    result = '';
    first = true;

    for (ix = 22; ix < 67; ix += 1) {
        if ((Math.round(ix / 5) === ix / 5) || (Math.round(ix / 7) === ix / 7)) {
            if (!first) {
                result += ',';
            } else {
                first = false;
            }
            result += ix;
        }
    }

    ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
