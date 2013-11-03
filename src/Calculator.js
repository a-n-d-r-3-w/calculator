require(["dojo/dom", "dojo/on", "../src/Operator.js", "Accumulator.js", "dojo/domReady!"],
    function (dom, on, Operator, Accumulator) {
        "use strict";
        var operand1 = null,
            operand2 = null,
            operator = null,
            nextInputIsForOperand2 = false;

        on(dom.byId("clear"), "click", function () {
            operand1 = null;
            operand2 = null;
            operator = null;
            Accumulator.setToZero();
        });
        on(dom.byId("one"), "click", function () {
            Accumulator.enterDigit("1", nextInputIsForOperand2);
        });
        on(dom.byId("two"), "click", function () {
            Accumulator.enterDigit("2", nextInputIsForOperand2);
        });
        on(dom.byId("three"), "click", function () {
            Accumulator.enterDigit("3", nextInputIsForOperand2);
        });
        on(dom.byId("four"), "click", function () {
            Accumulator.enterDigit("4", nextInputIsForOperand2);
        });
        on(dom.byId("five"), "click", function () {
            Accumulator.enterDigit("5", nextInputIsForOperand2);
        });
        on(dom.byId("six"), "click", function () {
            Accumulator.enterDigit("6", nextInputIsForOperand2);
        });
        on(dom.byId("seven"), "click", function () {
            Accumulator.enterDigit("7", nextInputIsForOperand2);
        });
        on(dom.byId("eight"), "click", function () {
            Accumulator.enterDigit("8", nextInputIsForOperand2);
        });
        on(dom.byId("nine"), "click", function () {
            Accumulator.enterDigit("9", nextInputIsForOperand2);
        });
        on(dom.byId("zero"), "click", function () {
            Accumulator.enterDigit("0", nextInputIsForOperand2);
        });

        on(dom.byId("plusMinus"), "click", function () {
            Accumulator.togglePlusMinus();
        });

        on(dom.byId("decimalPoint"), "click", function () {
            Accumulator.enterDecimalPoint();
        });

        on(dom.byId("plus"), "click", function () {
            operator = Operator.ADD;
            operand1 = Accumulator.getValueAsFloat();
            nextInputIsForOperand2 = true;
        });
        on(dom.byId("minus"), "click", function () {
            operator = Operator.SUBTRACT;
            operand1 = Accumulator.getValueAsFloat();
            nextInputIsForOperand2 = true;
        });
        on(dom.byId("multiply"), "click", function () {
            operator = Operator.MULTIPLY;
            operand1 = Accumulator.getValueAsFloat();
            nextInputIsForOperand2 = true;
        });
        on(dom.byId("divide"), "click", function () {
            operator = Operator.DIVIDE;
            operand1 = Accumulator.getValueAsFloat();
            nextInputIsForOperand2 = true;
        });

        on(dom.byId("equals"), "click", function () {
            operand2 = Accumulator.getValueAsFloat();
            if (operator === Operator.ADD) {
                Accumulator.setInnerHtml((operand1 + operand2).toString());
            } else if (operator === Operator.SUBTRACT) {
                Accumulator.setInnerHtml((operand1 - operand2).toString());
            } else if (operator === Operator.MULTIPLY) {
                Accumulator.setInnerHtml((operand1 * operand2).toString());
            } else if (operator === Operator.DIVIDE) {
                Accumulator.setInnerHtml((operand1 / operand2).toString());
            }
        });
    });