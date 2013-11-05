require(["../src/Operator.js"], function (Operator) {
    "use strict";

    module("Operator");

    test("add", function () {
        strictEqual(Operator.add(7, 4), 11);
    });

    test("subtract", function () {
        strictEqual(Operator.subtract(7, 4), 3);
    });

    test("multiply", function () {
        strictEqual(Operator.multiply(7, 4), 28);
    });

    test("divide", function () {
        strictEqual(Operator.divide(7, 4), 1.75);
    });

});