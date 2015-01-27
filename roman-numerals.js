var Roman = (function () {
    var Roman = {};

    var nums = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    /* Public methods */
    Roman.generate = function (arabicNumeral) {

    }

    Roman.parse = function (romanNumeral) {
        var romanArray = romanNumeral.split('');
        var arabicNumeral = 0;

        // Go through each character in roman Array.
        for (var i = 0; i < romanArray.length; i++) {
            // Get the number
            var number = nums[romanArray[i]];

            var nextNumber = nums[romanArray[i + 1]];

            // If the current character is less than the next character, it is
            // a two parter, so get the next character, decrement the first
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
