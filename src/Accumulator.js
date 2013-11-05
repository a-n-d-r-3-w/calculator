define(["dojo/dom", "AccumulatorMode.js"], function (dom, AccumulatorMode) {
    "use strict";
    var accumulator = dom.byId("accumulator"),
        mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_1;

    return {
        clear: function () {
            accumulator.innerHTML = "0";
            mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_1;
        },

        enterDigit: function (digit) {
            if (mode === AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_1) {
                accumulator.innerHTML = digit;
                mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_A_NON_FIRST_DIGIT_OF_OPERAND_1;
            } else if (mode === AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_A_NON_FIRST_DIGIT_OF_OPERAND_1) {
                accumulator.innerHTML += digit;
            } else if (mode === AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_2) {
                accumulator.innerHTML = digit;
                mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_A_NON_FIRST_DIGIT_OF_OPERAND_2;
            } else if (mode === AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_A_NON_FIRST_DIGIT_OF_OPERAND_2) {
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
            var accumulatorText = accumulator.innerHTML,
                startsWithMinus = accumulatorText.indexOf("-") === 0;
            if (startsWithMinus) {
                accumulator.innerHTML = accumulatorText.substring(1);
            } else {
                accumulator.innerHTML = "-" + accumulator.innerHTML;
            }
        },

        setInnerHtml: function (text) {
            accumulator.innerHTML = text;
        },

        getInnerHtml: function () {
            return accumulator.innerHTML;
        },

        getInnerHtmlAsFloat: function () {
            return parseFloat(accumulator.innerHTML);
        },

        setMode: function (newMode) {
            mode = newMode;
        }
    };
});