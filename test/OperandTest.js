require(["../src/Operand.js"], function (Operand) {
    "use strict";

    test("Create Operand", function () {
        var operand = new Operand();
        ok(operand, "Passed!");
    });

});