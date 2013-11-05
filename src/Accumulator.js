define(["dojo/dom", "AccumulatorMode.js"], function (dom, AccumulatorMode) {
    "use strict";
    var accumulator = dom.byId("accumulator"),
        mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_AN_OPERAND,
        prependWithMinusSign = function () {
            accumulator.innerHTML = "-" + accumulator.innerHTML;
        },
        removeMinusSign = function () {
            accumulator.innerHTML = accumulatorText.substring(1);
        },
        startsWithMinusSign = function () {
            return accumulatorText.indexOf("-") === 0;
        };

    return {
        clear: function () {
            accumulator.innerHTML = "0";
            mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_AN_OPERAND;
        },

        enterDigit: function (digit) {
            if (mode === AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_AN_OPERAND) {
                accumulator.innerHTML = digit;
                mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_A_NON_FIRST_DIGIT_OF_AN_OPERAND;
            } else if (mode === AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_A_NON_FIRST_DIGIT_OF_AN_OPERAND) {
                accumulator.innerHTML += digit;
            }
        },

        enterDecimalPoint: function () {
            var decimalPointNotFound = accumulator.innerHTML.indexOf(".") === -1;
            if (decimalPointNotFound) {
                accumulator.innerHTML += ".";
            }
        },

        togglePlusMinus: function () {
            if (startsWithMinusSign()) {
                removeMinusSign();
            } else {
                prependWithMinusSign();
            }
        },

        setInnerHtml: function (text) {
            accumulator.innerHTML = text;
        },

        getInnerHtml: function () {
            return accumulator.innerHTML;
        },

        getValue: function () {
            return parseFloat(accumulator.innerHTML);
        },

        getReadyForNextOperand: function () {
            mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_AN_OPERAND;
        }
    };
});