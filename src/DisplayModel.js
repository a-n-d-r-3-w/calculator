define([], function () {

    "use strict";

    var text = "0";

    return {
        clear: function () {
            text = "0";
        },

        addDigit: function (digit) {
            if (text === "0") {
                if (digit === "0") {
                    // do nothing
                } else {
                    text = digit;
                }
            } else {
                text += digit;
            }
        },

        addDecimalPoint: function () {
            var textContainsDecimalPoint = (text.indexOf(".") !== -1);
            if (textContainsDecimalPoint) {
                // do nothing
            } else {
                text += ".";
            }
        },

        toggleSign: function () {
            var textStartsWithMinusSign = (text.indexOf("-") === 0);
            if (textStartsWithMinusSign) {
                text = text.substring(1);
            } else {
                text = "-" + text;
            }
        },

        getText: function () {
            return text;
        },

        setText: function (newText) {
            text = newText;
        },

        getFloat: function () {
            return parseFloat(text);
        }
    };
});