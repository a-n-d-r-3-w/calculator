require(["dojo/dom", "dojo/on", "dojo/domReady!"], function (dom, on) {
    "use strict";

    var getNumberOfDigits = function (numberAsAString) {
        var digits = numberAsAString.match(/[0-9]/g);
        console.log(digits.toString());
        return digits.length;
    };

    var addDigitToAccumulatorText = function (digit) {
        assertIsDigit(digit);

        var accumulator = dom.byId("accumulator");
        var text = accumulator.innerHTML;

        console.log("text length" + text);

        assert(text, "Accumulator text is undefined or empty.");
        var MAX_NUM_DIGITS = 8;
        if (text[0] === "0") {
            accumulator.innerHTML = digit;
        } else if (text.length < MAX_NUM_DIGITS) {
            accumulator.innerHTML += digit;
        }
    };

    on(dom.byId("clear"), "click", function () {
        dom.byId("accumulator").innerHTML = "0";
    });
    on(dom.byId("one"), "click", function () {
        addDigitToAccumulatorText("1");
    });
    on(dom.byId("two"), "click", function () {
        addDigitToAccumulatorText("2");
    });
    on(dom.byId("three"), "click", function () {
        addDigitToAccumulatorText("3");
    });
    on(dom.byId("four"), "click", function () {
        addDigitToAccumulatorText("4");
    });
    on(dom.byId("five"), "click", function () {
        addDigitToAccumulatorText("5");
    });
    on(dom.byId("six"), "click", function () {
        addDigitToAccumulatorText("6");
    });
    on(dom.byId("seven"), "click", function () {
        addDigitToAccumulatorText("7");
    });
    on(dom.byId("eight"), "click", function () {
        addDigitToAccumulatorText("8");
    });
    on(dom.byId("nine"), "click", function () {
        addDigitToAccumulatorText("9");
    });
    on(dom.byId("zero"), "click", function () {
        addDigitToAccumulatorText("0");
    });
    on(dom.byId("plusMinus"), "click", function () {
        alert("plusMinus");
    });
    on(dom.byId("decimalPoint"), "click", function () {
        addDigitToAccumulatorText(".");
    });
    on(dom.byId("plus"), "click", function () {
        alert("+");
    });
    on(dom.byId("minus"), "click", function () {
        alert("-");
    });
    on(dom.byId("multiply"), "click", function () {
        alert("x");
    });
    on(dom.byId("divide"), "click", function () {
        alert("/");
    });
    on(dom.byId("equals"), "click", function () {
        alert("=");
    });
});