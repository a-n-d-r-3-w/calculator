define(["dojo/dom", "dojo/_base/declare", "CalculatorNumber.js", "Operator.js", "Display.js"],
    function (dom, declare, CalculatorNumber, Operator, Display) {
        "use strict";

        var operand1,
            operand2,
            operator,
            activeOperand,
            result,
            lastButtonPressedWasEquals,
            display;

        return declare(null, {
            clear: function () {
                operand1 = new CalculatorNumber("0");
                operand2 = new CalculatorNumber("");
                operator = null;
                activeOperand = operand1;
                display = new Display(activeOperand.getText());
                result = new CalculatorNumber("");
                lastButtonPressedWasEquals = false;
            },

            addDigit: function (digit) {
                if (lastButtonPressedWasEquals) {
                    this.clear();
                }
                activeOperand.appendNumber(digit);
                display.setText(activeOperand.getText());
            },

            toggleSign: function () {
                activeOperand.toggleSign();
                display.setText(activeOperand.getText());
                lastButtonPressedWasEquals = false;
            },

            addDecimalPoint: function () {
                if (lastButtonPressedWasEquals) {
                    this.clear();
                }
                activeOperand.appendDecimalPoint();
                display.setText(activeOperand.getText());
            },

            plus: function () {
                if (this.operatorExists()) {
                    this.computeResult();
                    operand1.setText(result.getText());
                    operand2.setText("0");
                }
                operator = Operator.PLUS;
                activeOperand = operand2;
                lastButtonPressedWasEquals = false;
            },

            minus: function () {
                if (this.operatorExists()) {
                    this.computeResult();
                    operand1.setText(result.getText());
                    operand2.setText("0");
                }
                operator = Operator.MINUS;
                activeOperand = operand2;
                lastButtonPressedWasEquals = false;
            },

            multiplyBy: function () {
                if (this.operatorExists()) {
                    this.computeResult();
                    operand1.setText(result.getText());
                    operand2.setText("0");
                }
                operator = Operator.MULTIPLY_BY;
                activeOperand = operand2;
                lastButtonPressedWasEquals = false;
            },

            divideBy: function () {
                if (this.operatorExists()) {
                    this.computeResult();
                    operand1.setText(result.getText());
                    operand2.setText("0");
                }
                operator = Operator.DIVIDE_BY;
                activeOperand = operand2;
                lastButtonPressedWasEquals = false;
            },

            operand2HasContent: function () {
                return operand2.getText() !== "";
            },

            equals: function () {
                if (this.operatorExists() && this.operand2HasContent()) {
                    this.computeResult();
                }
                lastButtonPressedWasEquals = true;
            },

            operatorExists: function () {
                return operator !== null;
            },

            computeResult: function () {
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
            }

        });
    });