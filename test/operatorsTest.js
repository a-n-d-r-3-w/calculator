require(["../src/operators.js"], function (operators) {
    "use strict";

    test("Add two numbers", function () {
        strictEqual(operators.add(4, 6), 10, "Passed!");
    });

    test("Subtract two numbers", function () {
        strictEqual(operators.subtract(1, 5), -4, "Passed!");
    });

    test("Multiply two numbers", function () {
        strictEqual(operators.multiply(3, -4), -12, "Passed!");
    });

    test("Divide two numbers", function () {
        strictEqual(operators.divide(7, 2), 3.5, "Passed!");
    });
});