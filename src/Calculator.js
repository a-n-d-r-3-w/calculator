require([
    "dojo/dom",
    "dojo/on",
    "CalculatorNumber.js",
    "Operator.js",
    "dojo/domReady!"],

    function (dom,
              on,
              CalculatorNumber,
              Operator) {

        "use strict";

        var operand1 = new CalculatorNumber("0"),
            operand2 = new CalculatorNumber("0"),
            operator = null,
            activeOperand = null,
            result = null,

            display = dom.byId("display"),

            addDigit = function (digit) {
                activeOperand.appendNumber(digit);
                display.innerHTML = activeOperand.getText();
            },

            computeResult = function () {
                if (operator === Operator.PLUS) {
                    result = operand1.plus(operand2);
                } else if (operator === Operator.MINUS) {
                    result = operand1.minus(operand2);
                } else if (operator === Operator.MULTIPLY_BY) {
                    result = operand1.multiplyBy(operand2);
                } else if (operator === Operator.DIVIDE_BY) {
                    result = operand1.divideBy(operand2);
                } else {
                    throw new Error("Unexpected operator.");
                }
                display.innerHTML = result.getText();
            },

            attachEventHandlerForClearButton = function () {
                on(dom.byId("clear"), "click", function () {
                    operand1.setText("0");
                    operand2.setText("0");
                    operator = null;
                    activeOperand = operand1;
                    display.innerHTML = activeOperand.getText();;
                    result = null;
                });
            },

            attachEventHandlerForNumberButton = function (digit) {
                on(dom.byId("number" + digit), "click", function () {
                    addDigit(digit);
                });
            },

            attachEventHandlersForNumberPadButtons = function () {
                var i;
                for (i = 0; i < 10; i += 1) {
                    attachEventHandlerForNumberButton(i.toString());
                }

                on(dom.byId("toggleSign"), "click", function () {
                    activeOperand.toggleSign();
                    display.innerHTML = activeOperand.getText();
                });

                on(dom.byId("decimalPoint"), "click", function () {
                    activeOperand.appendDecimalPoint();
                    display.innerHTML = activeOperand.getText();
                });
            },

            attachEventHandlersForOperatorButtons = function () {
                on(dom.byId("plus"), "click", function () {
                    if (operator !== null) {
                        computeResult();
                        operand1.setText(result.getText());
                        operand2.setText("");
                    }
                    operator = Operator.PLUS;
                    activeOperand = operand2;
                });

                on(dom.byId("minus"), "click", function () {
                    if (operator !== null) {
                        computeResult();
                        operand1.setText(result.getText());
                        operand2.setText("");
                    }
                    operator = Operator.MINUS;
                    activeOperand = operand2;
                });

                on(dom.byId("multiplyBy"), "click", function () {
                    if (operator !== null) {
                        computeResult();
                        operand1.setText(result.getText());
                        operand2.setText("");
                    }
                    operator = Operator.MULTIPLY_BY;
                    activeOperand = operand2;
                });

                on(dom.byId("divideBy"), "click", function () {
                    if (operator !== null) {
                        computeResult();
                        operand1.setText(result.getText());
                        operand2.setText("");
                    }
                    operator = Operator.DIVIDE_BY;
                    activeOperand = operand2;
                });
            },

            attachEventHandlerForEqualsButton = function () {
                on(dom.byId("equals"), "click", function () {
                    computeResult();
                });

            },

            attachEventHandlers = function () {
                attachEventHandlerForClearButton();
                attachEventHandlersForNumberPadButtons();
                attachEventHandlersForOperatorButtons();
                attachEventHandlerForEqualsButton();
            };

        attachEventHandlers();
        activeOperand = operand1;

    });