require(["../src/Operand.js"], function () {
    "use strict";

    test("Create Operand", function () {
        var operand = new aliu.Operand();
        ok(operand, "Passed!");
    });

});