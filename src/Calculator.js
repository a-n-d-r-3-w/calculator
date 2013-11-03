require(["dojo/dom", "dojo/on", "dojo/domReady!"],
    function (dom, on) {
        "use strict";

        var operand1 = null,
            operand2 = null,
            operator = null,
            accumulator = dom.byId("accumulator"),
            needToClearAccumulator = false,

            enterDigit = function (digit) {
                if (accumulator.innerHTML === "0" || needToClearAccumulator) {
                    accumulator.innerHTML = digit;
                    needToClearAccumulator = false;
                } else {
                    accumulator.innerHTML += digit;
                }
            },

            Operator = {
                ADD: 0,
                SUBTRACT: 1,
                MULTIPLY: 2,
                DIVIDE: 3
            };

        on(dom.byId("clear"), "click", function () {
            operand1 = null;
            operand2 = null;
            operator = null;
            accumulator.innerHTML = "0";
        });
        on(dom.byId("one"), "click", function () {
            enterDigit("1");
        });
        on(dom.byId("two"), "click", function () {
            enterDigit("2");
        });
        on(dom.byId("three"), "click", function () {
            enterDigit("3");
        });
        on(dom.byId("four"), "click", function () {
            enterDigit("4");
        });
        on(dom.byId("five"), "click", function () {
            enterDigit("5");
        });
        on(dom.byId("six"), "click", function () {
            enterDigit("6");
        });
        on(dom.byId("seven"), "click", function () {
            enterDigit("7");
        });
        on(dom.byId("eight"), "click", function () {
            enterDigit("8");
        });
        on(dom.byId("nine"), "click", function () {
            enterDigit("9");
        });
        on(dom.byId("zero"), "click", function () {
            enterDigit("0");
        });
        on(dom.byId("plusMinus"), "click", function () {
            var accumulatorText = accumulator.innerHTML,
                startsWithMinus = accumulatorText.indexOf("-") === 0;
            if (startsWithMinus) {
                accumulator.innerHTML = accumulatorText.substring(1);
            } else {
                accumulator.innerHTML = "-" + accumulator.innerHTML;
            }
        });
        on(dom.byId("decimalPoint"), "click", function () {
            enterDigit(".");
        });
        on(dom.byId("plus"), "click", function () {
            operator = Operator.ADD;
            operand1 = parseFloat(accumulator.innerHTML);
            needToClearAccumulator = true;
        });
        on(dom.byId("minus"), "click", function () {
            operator = Operator.SUBTRACT;
            operand1 = parseFloat(accumulator.innerHTML);
            needToClearAccumulator = true;
        });
        on(dom.byId("multiply"), "click", function () {
            operator = Operator.MULTIPLY;
            operand1 = parseFloat(accumulator.innerHTML);
            needToClearAccumulator = true;
        });
        on(dom.byId("divide"), "click", function () {
            operator = Operator.DIVIDE;
            operand1 = parseFloat(accumulator.innerHTML);
            needToClearAccumulator = true;
        });
        on(dom.byId("equals"), "click", function () {
            operand2 = parseFloat(accumulator.innerHTML);
            if (operator === Operator.ADD) {
                accumulator.innerHTML = operand1 + operand2;
            } else if (operator === Operator.SUBTRACT) {
                accumulator.innerHTML = operand1 - operand2;
            } else if (operator === Operator.MULTIPLY) {
                accumulator.innerHTML = operand1 * operand2;
            } else if (operator === Operator.DIVIDE) {
                accumulator.innerHTML = operand1 / operand2;
            }
        });
    });