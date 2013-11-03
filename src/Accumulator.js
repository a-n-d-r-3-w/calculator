define(["dojo/dom"], function (dom) {
    "use strict";
    var accumulator = dom.byId("accumulator");
    return {
        clear: function () {
            accumulator.innerHTML = "0";
        },

        enterDigit: function (digit, operatorIsSet) {
            if (accumulator.innerHTML === "0" || operatorIsSet) {
                accumulator.innerHTML = digit;
            } else {
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

        getValueAsFloat: function () {
            return parseFloat(accumulator.innerHTML);
        },

        setInnerHtml: function (text) {
            accumulator.innerHTML = text;
        },

        getInnerHtml: function () {
            return accumulator.innerHTML;
        }
    };
});