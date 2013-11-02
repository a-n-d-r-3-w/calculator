require(["../src/Assertions.js"], function (Assertions) {
    "use strict";

    var assertions;

    module("Assertions", {
        setup: function () {
            assertions = new Assertions();
        }
    });

    test("Assert truthy value", function () {
        assertions.assertIsTruthy(true);
        ok(true);
    });

    test("Assert falsy value throws error", function () {
        throws(function () {
            assertions.assertIsTruthy(false);
        });
    });

    test("Assert is single character", function () {
        assertions.assertIsSingleCharacter("0");
        ok(true);
    });

    test("Assert non-single character throws error", function () {
        throws(function () {
            assertions.assertIsSingleCharacter("");
        });
    });

    test("Assert non-single character throws error", function () {
        throws(function () {
            assertions.assertIsSingleCharacter("12");
        });
    });
});