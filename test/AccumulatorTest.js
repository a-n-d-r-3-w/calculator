require(["../src/Accumulator.js"], function (Accumulator) {
    "use strict";

    var accumulator;

    module("Accumulator", {
        setup: function () {
            accumulator = new Accumulator();
        }
    });

    test("clear and getContents", function () {
        accumulator.clear();
        strictEqual(accumulator.getContents(), "0");
    });

    test("add first non-zero digit", function () {
        accumulator.clear();
        accumulator.addDigit("4");
        strictEqual(accumulator.getContents(), "4");
    });

    test("add two non-zero digits", function () {
        accumulator.clear();
        accumulator.addDigit("4");
        accumulator.addDigit("3");
        strictEqual(accumulator.getContents(), "43");
    });

    test("add zero as first digit", function () {
        accumulator.clear();
        accumulator.addDigit("0");
        strictEqual(accumulator.getContents(), "0");
    });

    test("add decimal point", function () {
        accumulator.clear();
        accumulator.addDecimalPoint();
        strictEqual(accumulator.getContents(), "0.");
    });

    test("try to add two decimal points", function () {
        accumulator.clear();
        accumulator.addDecimalPoint();
        accumulator.addDecimalPoint();
        strictEqual(accumulator.getContents(), "0.");
    });

    test("show negative sign", function () {
        accumulator.clear();
        accumulator.addDigit("2");
        accumulator.showNegativeSign();
        strictEqual(accumulator.getContents(), "-2");
    });

    test("show negative sign twice", function () {
        accumulator.clear();
        accumulator.addDigit("2");
        accumulator.showNegativeSign();
        accumulator.showNegativeSign();
        strictEqual(accumulator.getContents(), "-2");
    });

    test("hide negative sign", function () {
        accumulator.clear();
        accumulator.addDigit("2");
        accumulator.showNegativeSign();
        accumulator.hideNegativeSign();
        strictEqual(accumulator.getContents(), "2");
    });

    test("show negative sign for zero", function () {
        accumulator.clear();
        accumulator.showNegativeSign();
        strictEqual(accumulator.getContents(), "0");
    });

    test("enter more than 8 characters", function () {
        accumulator.clear();
        accumulator.addDigit("1");
        accumulator.addDigit("1");
        accumulator.addDigit("1");
        accumulator.addDigit("1");
        accumulator.addDigit("1");
        accumulator.addDigit("1");
        accumulator.addDigit("1");
        accumulator.addDigit("1");
        accumulator.addDigit("1");
        strictEqual(accumulator.getContents(), "11111111");
    });

});