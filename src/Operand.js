define(["dojo", "dojo/_base/declare"], function (dojo, declare) {
    "use strict";
    return declare(null, {
        value: undefined,
        add: function (secondOperand) {
            // TODO: Assert that value is defined
            return this.value + secondOperand;
        },
        constructor: function (args) {
            dojo.mixin(this, args);
        }
    });
});