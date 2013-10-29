define([], function () {
    "use strict";

    var add,
        subtract,
        multiply,
        divide;

    add = function (operand1, operand2) {
        return operand1 + operand2;
    };

    subtract = function (operand1, operand2) {
        return operand1 - operand2;
    };

    multiply = function (operand1, operand2) {
        return operand1 * operand2;
    };

    divide = function (dividend, divisor) {
        return dividend / divisor;
    };

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };
});