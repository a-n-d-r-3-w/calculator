define(["dojo/_base/declare"], function (declare) {
    "use strict";
    return declare(null, {
        assertIsTruthy: function (condition) {
            if (!condition) {
                throw "Assertion failed.";
            }
        },
        assertIsSingleCharacter: function (text) {
            var isSingleCharacter = (text.length === 1);
            this.assertIsTruthy(isSingleCharacter);
        },
        assertIsDigitOrDecimalPoint: function (text) {
            this.assertIsSingleCharacter(text);
            var isDigit = ("0123456789.".indexOf(text) !== -1);
            this.assertIsTruthy(isDigit);
        }
    });
});