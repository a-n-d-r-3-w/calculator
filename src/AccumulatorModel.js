define(["dojo/dom"], function (dom) {
    "use strict";
    var value = 0;

    return {
        clear: function () {
            value = 0;
        },

        addDigitAtPlaceValue: function (digit, placeValue) {
            if (placeValue === 0) {
                value = Math.pow(10, placeValue) * value + parseInt(digit);
            } else if (placeValue < 0) {
                value = value + Math.pow(10, placeValue) * parseInt(digit);
            } else if (placeValue > 0) {
                throw "Unexpected placeValue.";
            }
        },

        toggleSign: function () {
            value *= -1;
        },

        getValue: function () {
            return value;
        }
    };
});