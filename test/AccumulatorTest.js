require(["../src/Accumulator.js"], function (Accumulator) {
    "use strict";

    test("setToZero", function () {
        Accumulator.setToZero();
        strictEqual(Accumulator.getInnerHtml(), "0");
    });

    test("enterDigit", function () {
        Accumulator.setToZero();
        Accumulator.enterDigit("1");
        strictEqual(Accumulator.getInnerHtml(), "1");
    });

});