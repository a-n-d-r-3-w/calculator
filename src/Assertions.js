define(["dojo/_base/declare"], function (declare) {
    "use strict";
    return declare(null, {
        assertIsTruthy: function (condition) {
            if (!condition) {
                throw "Assertion failed.";
            }
        },
        assertIsDigit: function (digit) {

        }
    });
});