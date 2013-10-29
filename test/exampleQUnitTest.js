require(["../src/operators.js"], function (operators) {
    "use strict";

    test("Add two numbers", function () {
        ok(operators.add(1, 1) === 2, "Passed!");
    });
});