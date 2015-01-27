(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.Roman = require('./roman-numerals.js');

},{"./roman-numerals.js":2}],2:[function(require,module,exports){
module.exports = (function () {
    var Roman = {};

    var nums = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    /* Public methods */

    /**
     *  generate
     *
     *  @param {number}
     */
    Roman.generate = function (arabicNumeral) {
        if (typeof arabicNumeral !== 'number' ||
            arabicNumeral % 1 === 0 || // Check if it is an integer
            arabicNumeral < 1 ||
            arabicNumeral > 3999) {
                return undefined;
            }

        var romanNumeral = '';

        var romanNumsArray = Object.keys(nums);

        while (arabicNumeral > 0) {
            var i = 0;
            while (nums[romanNumsArray[i]] > arabicNumeral) {
                i++;
            }

            arabicNumeral -= nums[romanNumsArray[i]];
            romanNumeral += romanNumsArray[i];
        }

        return romanNumeral;
    }

    /**
     *  parse
     *
     *  @param {string}
     */
    Roman.parse = function (romanNumeral) {
        if (typeof romanNumeral !== 'string') {
            return undefined;
        }

        var romanArray = romanNumeral.split('');
        var arabicNumeral = 0;

        // Go through each character in roman Array.
        for (var i = 0; i < romanArray.length; i++) {
            // Get the number
            var number = nums[romanArray[i]];

            if (isNaN(number)) {
                return undefined;
            }

            var nextNumber = nums[romanArray[i + 1]];

            // If the current character is less than the next character, it is
            // a two-parter, so get the next character, decrement the first
            // from the second, and add the result to arabicNumeral.
            if (number < nextNumber) {
                i += 1;
                number = nextNumber - number;
            }

            arabicNumeral += number;
        }

        return arabicNumeral;
    }

    return Roman;
}());

},{}]},{},[1]);
