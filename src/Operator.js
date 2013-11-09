define(["../lib/sinful.js"], function () {

    return {
        add: function (operand1, operand2) {
            return Math.add(operand1, operand2);
        },

        subtract: function (operand1, operand2) {
            return Math.sub(operand1, operand2);
        },

        multiply: function (operand1, operand2) {
            return Math.mul(operand1, operand2);
        },

        divide: function (operand1, operand2) {
            return Math.div(operand1, operand2);
        }
    }

});