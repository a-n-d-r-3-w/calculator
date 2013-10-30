require(["../src/Operand.js"], function (Operand) {
    "use strict";

    test("Create Operand", function () {
        var operand = new Operand();
        ok(operand, "Passed!");
    });

    test("Add two numbers", function () {
        var operand = new Operand({value: 1});
        strictEqual(operand.add(3), 4, "Passed!");
    });

    test("Add: First operand is undefined", function () {
        var operand = new Operand({value: undefined});
        deepEqual(operand.add(3), NaN, "Passed!");
    });

    test("Add: Second operand is undefined", function () {
        var operand = new Operand({value: 2});
        deepEqual(operand.add(undefined), NaN, "Passed!");
    });

});