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
            if (!isSingleCharacter) {
                throw "Not single character.";
            }
        }
    });
});