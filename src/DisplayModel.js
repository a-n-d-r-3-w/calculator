define([], function () {
    "use strict";
    var value = 0,

        addDigitAtOnesPlaceValue = function (digit) {
            // I explicitly do not use:
            //
            //     value = 10 * value + Math.sign(value) * parseInt(digit);
            //
            // because when value = 0, we want "digit" to be added to "value".
            // However, the line shown above will not add "digit" to "value",
            // because the sign of 0 is 0.
            value = (value >= 0) ?
                10 * value + parseInt(digit) :
                10 * value - parseInt(digit);
        },

        addDigitAtFractionalPlaceValue = function (digit, placeValue) {
            value = (value >= 0) ?
                value + Math.pow(10, placeValue) * parseInt(digit) :
                value - Math.pow(10, placeValue) * parseInt(digit);
        };

    return {
        clear: function () {
            value = 0;
        },

        addDigitAtPlaceValue: function (digit, placeValue) {
            if (placeValue === 0) {
                addDigitAtOnesPlaceValue(digit);
            } else if (placeValue < 0) {
                addDigitAtFractionalPlaceValue(digit, placeValue);
            } else if (placeValue > 0) {
                throw "Unexpected placeValue.";
            }
        },

        toggleSign: function () {
            value *= -1;
        },

        getValue: function () {
            return value;
        },

        setValue: function (newValue) {
            value = newValue;
        }
    };
});