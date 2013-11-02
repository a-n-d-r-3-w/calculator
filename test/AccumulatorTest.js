require(["../src/Accumulator.js"], function (Accumulator) {
    "use strict";

    var testModule;

    module("Accumulator", {
        setup: function () {
            testModule = new Accumulator();
        }
    });

    test("asdf", function () {
        ok(false);
    });

});