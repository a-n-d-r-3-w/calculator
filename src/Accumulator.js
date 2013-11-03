define({
    enterDigit: function (digit) {
        if (accumulator.innerHTML === "0" || operator !== null) {
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
    }
});