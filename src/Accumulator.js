define(["dojo/dom", "AccumulatorMode.js"], function (dom, AccumulatorMode) {
    "use strict";
    var accumulatorView = dom.byId("accumulator"),
        accumulatorModel = 0,
        mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_AN_OPERAND,
        currentPowerOfTen = 0,
        prependWithMinusSign = function () {
            accumulatorView.innerHTML = "-" + accumulatorView.innerHTML;
        },
        removeMinusSign = function () {
            accumulatorView.innerHTML = accumulatorView.innerHTML.substring(1);
        },
        startsWithMinusSign = function () {
            return accumulatorView.innerHTML.indexOf("-") === 0;
        },
        updateView = function () {
            accumulatorView.innerHTML = accumulatorModel.toString();
        };

    return {
        clear: function () {
            accumulatorView.innerHTML = "0";
            updateView();
//            mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_AN_OPERAND;
        },

        enterDigit: function (digit) {
            if (currentPowerOfTen < 0) {
                currentPowerOfTen -= currentPowerOfTen;
            }
            accumulatorModel = Math.pow(10, currentPowerOfTen) * accumulatorModel + parseInt(digit);
            updateView();
//            if (mode === AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_AN_OPERAND) {
//                accumulatorView.innerHTML = digit;
//                mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_A_NON_FIRST_DIGIT_OF_AN_OPERAND;
//            } else if (mode === AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_A_NON_FIRST_DIGIT_OF_AN_OPERAND) {
//                accumulatorView.innerHTML += digit;
//            }
        },

        enterDecimalPoint: function () {
            currentPowerOfTen = -1;
            var decimalPointNotFound = accumulatorView.innerHTML.indexOf(".") === -1;
            if (decimalPointNotFound) {
                accumulatorView.innerHTML += ".";
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
            accumulatorView.innerHTML = text;
        },

        getInnerHtml: function () {
            return accumulatorView.innerHTML;
        },

        getValue: function () {
            return parseFloat(accumulatorView.innerHTML);
        },

        getReadyForNextOperand: function () {
            mode = AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_AN_OPERAND;
        }
    };
});