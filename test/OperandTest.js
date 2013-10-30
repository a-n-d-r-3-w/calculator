require(["../src/Operand.js"], function (Operand) {
    "use strict";

    test("Create Operand", function () {
        var operand = new Operand();
        ok(operand, "Passed!");
    });

    test("Add", function () {
        var operand = new Operand();
        operand.value = 1;
        strictEqual(operand.add(3), 4, "Passed!");
    });

});