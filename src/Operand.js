define(["dojo", "dojo/_base/declare"], function (dojo, declare) {
    "use strict";
    return declare(null, {
        value: undefined,
        plus: function (secondOperand) {
            return this.value + secondOperand;
        },
        minus: function (secondOperand) {
            return this.value - secondOperand;
        },
        multiplyBy: function (secondOperand) {
            return this.value * secondOperand;
        },
        divideBy: function (secondOperand) {
            return this.value / secondOperand;
        },
        constructor: function (args) {
            dojo.mixin(this, args);
        }
    });
});