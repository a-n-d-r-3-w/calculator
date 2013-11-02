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

    test("add zero as first digit", function () {
        testModule.clear();
        testModule.addDigit("0");
        strictEqual(testModule.getContents(), "0");
    });

    // addDecimalPoint
    test("add decimal point", function () {
        testModule.clear();
        testModule.addDecimalPoint();
        strictEqual(testModule.getContents(), "0.");
    });

    // try to add two decimal points
    test("try to add two decimal points", function () {
        testModule.clear();
        testModule.addDecimalPoint();
        testModule.addDecimalPoint();
        strictEqual(testModule.getContents(), "0.");
    });

    // showNegativeSign
    test("show negative sign", function () {
        testModule.clear();
        testModule.addDigit("2");
        testModule.showNegativeSign();
        strictEqual(testModule.getContents(), "-2");
    });

    test("show negative sign twice", function () {
        testModule.clear();
        testModule.addDigit("2");
        testModule.showNegativeSign();
        testModule.showNegativeSign();
        strictEqual(testModule.getContents(), "-2");
    });

    test("hide negative sign", function () {
        testModule.clear();
        testModule.addDigit("2");
        testModule.showNegativeSign();
        testModule.hideNegativeSign();
        strictEqual(testModule.getContents(), "2");
    });

    test("show negative sign for zero", function () {
        testModule.clear();
        testModule.showNegativeSign();
        strictEqual(testModule.getContents(), "0");
    });

});