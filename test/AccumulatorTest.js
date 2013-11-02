require(["../src/Accumulator.js"], function (Accumulator) {
    "use strict";

    var testModule;

    module("Accumulator", {
        setup: function () {
            testModule = new Accumulator();
        }
    });

    test("clear", function () {
        testModule.clear();
        ok(true);
    });

    // getContents

    // addDigit

    // addDecimalPoint

    // clear

    // showNegativeSign

    // hideNegativeSign

});