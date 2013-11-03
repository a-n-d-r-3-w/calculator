require(["../src/Accumulator.js"], function (Accumulator) {
    "use strict";

    test("Clear the accumulator", function () {
        Accumulator.clear();
        strictEqual(Accumulator.getInnerHtml(), "0");
    });

    test("Enter the first digit of the first operand", function () {
        Accumulator.clear();
        Accumulator.enterDigit("1", false);
        strictEqual(Accumulator.getInnerHtml(), "1");
    });

    test("Enter multiple digits", function () {
        Accumulator.clear();
        Accumulator.enterDigit("1", false);
        Accumulator.enterDigit("1", false);
        strictEqual(Accumulator.getInnerHtml(), "11");
    });

    test("Enter multiple zeros", function () {
        Accumulator.clear();
        Accumulator.enterDigit("0", false);
        Accumulator.enterDigit("0", false);
        strictEqual(Accumulator.getInnerHtml(), "0");
    });

});