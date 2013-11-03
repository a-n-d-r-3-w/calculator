require(["dojo/dom", "dojo/on", "../src/Operator.js", "Accumulator.js", "dojo/domReady!"],
    function (dom, on, Operator, Accumulator) {
        "use strict";
        var operand1 = null,
            operand2 = null,
            operator = null;

        on(dom.byId("clear"), "click", function () {
            operand1 = null;
            operand2 = null;
            operator = null;
            dom.byId("accumulator").innerHTML = "0";
        });
        on(dom.byId("one"), "click", function () {
            Accumulator.enterDigit("1", operator);
        });
        on(dom.byId("two"), "click", function () {
            Accumulator.enterDigit("2", operator);
        });
        on(dom.byId("three"), "click", function () {
            Accumulator.enterDigit("3", operator);
        });
        on(dom.byId("four"), "click", function () {
            Accumulator.enterDigit("4", operator);
        });
        on(dom.byId("five"), "click", function () {
            Accumulator.enterDigit("5", operator);
        });
        on(dom.byId("six"), "click", function () {
            Accumulator.enterDigit("6", operator);
        });
        on(dom.byId("seven"), "click", function () {
            Accumulator.enterDigit("7", operator);
        });
        on(dom.byId("eight"), "click", function () {
            Accumulator.enterDigit("8", operator);
        });
        on(dom.byId("nine"), "click", function () {
            Accumulator.enterDigit("9", operator);
        });
        on(dom.byId("zero"), "click", function () {
            Accumulator.enterDigit("0", operator);
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
        });
        on(dom.byId("minus"), "click", function () {
            operator = Operator.SUBTRACT;
            operand1 = Accumulator.getValueAsFloat();
        });
        on(dom.byId("multiply"), "click", function () {
            operator = Operator.MULTIPLY;
            operand1 = Accumulator.getValueAsFloat();
        });
        on(dom.byId("divide"), "click", function () {
            operator = Operator.DIVIDE;
            operand1 = Accumulator.getValueAsFloat();
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