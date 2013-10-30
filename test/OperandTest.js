require(["../src/Operand.js"], function (Operand) {
    "use strict";

    module("Addition");

    test("Create Operand", function () {
        var operand = new Operand();
        ok(operand, "Passed!");
    });

    test("Add two numbers", function () {
        var operand = new Operand({value: 1});
        strictEqual(operand.plus(3), 4, "Passed!");
    });

    test("Add: First operand is undefined", function () {
        var operand = new Operand({value: undefined});
        deepEqual(operand.plus(3), NaN, "Passed!");
    });

    test("Add: Second operand is undefined", function () {
        var operand = new Operand({value: 2});
        deepEqual(operand.plus(undefined), NaN, "Passed!");
    });

    module("Subtraction");

    test("Subtract two numbers", function () {
        var operand = new Operand({value : 1});
        strictEqual(operand.minus(2), -1, "Passed!");
    });

});