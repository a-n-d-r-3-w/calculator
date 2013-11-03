require(["dojo/dom", "dojo/on", "../src/Operator.js", "dojo/domReady!"],
    function (dom, on, Operator) {
        "use strict";

        var operand1 = null,
            operand2 = null,
            operator = null,
            accumulator = dom.byId("accumulator"),

            enterDigit = function (digit) {
                if (accumulator.innerHTML === "0" || operator !== null) {
                    accumulator.innerHTML = digit;
                } else {
                    accumulator.innerHTML += digit;
                }
            },

            enterDecimalPoint = function () {
                var decimalPointNotFound = accumulator.innerHTML.indexOf(".") === -1;
                if (decimalPointNotFound) {
                    accumulator.innerHTML += ".";
                }
            },

            togglePlusMinus = function () {
                var accumulatorText = accumulator.innerHTML,
                    startsWithMinus = accumulatorText.indexOf("-") === 0;
                if (startsWithMinus) {
                    accumulator.innerHTML = accumulatorText.substring(1);
                } else {
                    accumulator.innerHTML = "-" + accumulator.innerHTML;
                }
            },

            getValueAsFloat = function () {
                return parseFloat(accumulator.innerHTML);
            },

            setInnerHtml = function (text) {
                accumulator.innerHTML = text;
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
            togglePlusMinus();
        });

        on(dom.byId("decimalPoint"), "click", function () {
            enterDecimalPoint();
        });

        on(dom.byId("plus"), "click", function () {
            operator = Operator.ADD;
            operand1 = getValueAsFloat();
        });
        on(dom.byId("minus"), "click", function () {
            operator = Operator.SUBTRACT;
            operand1 = getValueAsFloat();
        });
        on(dom.byId("multiply"), "click", function () {
            operator = Operator.MULTIPLY;
            operand1 = getValueAsFloat();
        });
        on(dom.byId("divide"), "click", function () {
            operator = Operator.DIVIDE;
            operand1 = getValueAsFloat();
        });

        on(dom.byId("equals"), "click", function () {
            operand2 = getValueAsFloat();
            if (operator === Operator.ADD) {
                setInnerHtml((operand1 + operand2).toString());
            } else if (operator === Operator.SUBTRACT) {
                setInnerHtml((operand1 - operand2).toString());
            } else if (operator === Operator.MULTIPLY) {
                setInnerHtml((operand1 * operand2).toString());
            } else if (operator === Operator.DIVIDE) {
                setInnerHtml((operand1 / operand2).toString());
            }
        });
    });