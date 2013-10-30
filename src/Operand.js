define(["dojo/_base/declare"], function (declare) {
    "use strict";
    return declare(null, {
        value: undefined,
        add: function (secondOperand) {
            // TODO: Assert that value is defined
            return this.value + secondOperand;
        },
        constructor: function (value) {
            this.value = value;
        }
    });
});