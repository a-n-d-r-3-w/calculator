define([], function () {
    "use strict";
    var value = 0,
        addDigitAtOnesPlaceValue = function (digit) {
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