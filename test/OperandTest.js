require(["../src/Operand.js"], function (Operand) {
    "use strict";

    var two;

    module("Operand", {
        setup: function () {
            two = new Operand({value: 2});
        }
    });

    test("Add two numbers", function () {
        strictEqual(two.plus(3), 5, "Passed!");
    });

    test("Subtract two numbers", function () {
        strictEqual(two.minus(3), -1, "Passed!");
    });

    test("Multiply two numbers", function () {
        strictEqual(two.multiplyBy(4.2), 8.4, "Passed!");
    });

    test("Divide two numbers", function () {
        strictEqual(two.divideBy(4), 0.5, "Passed!");
    });

});