require(["../src/Accumulator.js"], function (Accumulator) {
    "use strict";

    var testModule;

    module("Accumulator", {
        setup: function () {
            testModule = new Accumulator();
        }
    });

    test("clear and getContents", function () {
        testModule.clear();
        strictEqual(testModule.getContents(), "0");
    });

    test("add first non-zero digit", function () {
        testModule.clear();
        testModule.addDigit("4");
        strictEqual(testModule.getContents(), "4");
    });

    test("add two non-zero digits", function () {
        testModule.clear();
        testModule.addDigit("4");
        testModule.addDigit("3");
        strictEqual(testModule.getContents(), "43");
    });

    // addDecimalPoint

    // clear

    // showNegativeSign

    // hideNegativeSign

});