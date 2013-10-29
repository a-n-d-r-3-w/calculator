require(["../src/operators.js"], function (operators) {
    "use strict";

    test("Add two numbers", function () {
        strictEqual(operators.add(1, 1), 2, "Addition works");
    });

    test("Subtract two numbers", function () {
        strictEqual(operators.subtract(1, 1), 0, "Subtraction works");
    });
});