require([
    "dojo/dom",
    "dojo/on",
    "CalculatorNumber.js",
    "Operator.js",
    "Display.js",
    "dojo/domReady!"],

    function (dom,
              on,
              CalculatorNumber,
              Operator,
              Display) {

        "use strict";

        var operand1,
            operand2,
            operator,
            activeOperand,
            result,
            lastButtonPressedWasEquals,
            display,

            clear = function () {
                operand1 = new CalculatorNumber("0");
                operand2 = new CalculatorNumber("");
                operator = null;
                activeOperand = operand1;
                display = new Display(activeOperand.getText());
                result = new CalculatorNumber("");
                lastButtonPressedWasEquals = false;
            },

            addDigit = function (digit) {
                if (lastButtonPressedWasEquals) {
                    clear();
                }
                activeOperand.appendNumber(digit);
                display.setText(activeOperand.getText());
            },

            operatorExists = function () {
                return operator !== null;
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
                display.setText(result.getText());
            },

            attachEventHandlerForClearButton = function () {
                on(dom.byId("clear"), "click", function () {
                    clear();
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
                    display.setText(activeOperand.getText());
                    lastButtonPressedWasEquals = false;
                });

                on(dom.byId("decimalPoint"), "click", function () {
                    if (lastButtonPressedWasEquals) {
                        operand1.setText("0");
                        operand2.setText("0");
                        operator = null;
                        activeOperand = operand1;
                        display.setText(activeOperand.getText());
                        result = null;
                        lastButtonPressedWasEquals = false;
                    }
                    activeOperand.appendDecimalPoint();
                    display.setText(activeOperand.getText());
                });
            },

            attachEventHandlersForOperatorButtons = function () {
                on(dom.byId("plus"), "click", function () {
                    if (operatorExists()) {
                        computeResult();
                        operand1.setText(result.getText());
                        operand2.setText("0");
                    }
                    operator = Operator.PLUS;
                    activeOperand = operand2;
                    lastButtonPressedWasEquals = false;
                });

                on(dom.byId("minus"), "click", function () {
                    if (operatorExists()) {
                        computeResult();
                        operand1.setText(result.getText());
                        operand2.setText("0");
                    }
                    operator = Operator.MINUS;
                    activeOperand = operand2;
                    lastButtonPressedWasEquals = false;
                });

                on(dom.byId("multiplyBy"), "click", function () {
                    if (operatorExists()) {
                        computeResult();
                        operand1.setText(result.getText());
                        operand2.setText("0");
                    }
                    operator = Operator.MULTIPLY_BY;
                    activeOperand = operand2;
                    lastButtonPressedWasEquals = false;
                });

                on(dom.byId("divideBy"), "click", function () {
                    if (operatorExists()) {
                        computeResult();
                        operand1.setText(result.getText());
                        operand2.setText("0");
                    }
                    operator = Operator.DIVIDE_BY;
                    activeOperand = operand2;
                    lastButtonPressedWasEquals = false;
                });
            },

            attachEventHandlerForEqualsButton = function () {
                on(dom.byId("equals"), "click", function () {
                    if (operand1.getText() !== "" &&
                        operatorExists() &&
                        operand2.getText() !== "") {
                        computeResult();
                    }
                    lastButtonPressedWasEquals = true;
                });

            },

            attachEventHandlers = function () {
                attachEventHandlerForClearButton();
                attachEventHandlersForNumberPadButtons();
                attachEventHandlersForOperatorButtons();
                attachEventHandlerForEqualsButton();
            };

        attachEventHandlers();
        clear();
    });