define(["dojo/dom", "dojo/_base/declare", "NumberAsText.js", "Operator.js", "Display.js"],
    function (dom, declare, NumberAsText, Operator, Display) {
        "use strict";

        return declare(null, {
            clear: function () {
                this.operand1 = new NumberAsText("0");
                this.operand2 = new NumberAsText("");
                this.operator = null;
                this.activeOperand = this.operand1;
                this.display = new Display(this.activeOperand.getText());
                this.result = new NumberAsText("");
                this.lastButtonPressedWasEquals = false;
            },

            updateDisplayWithActiveOperand: function () {
                this.display.setText(this.activeOperand.getText());
            },

            addDigit: function (digit) {
                if (this.lastButtonPressedWasEquals) {
                    this.clear();
                }
                this.activeOperand.appendDigit(digit);
                this.updateDisplayWithActiveOperand();
            },

            toggleSign: function () {
                this.activeOperand.toggleSign();
                this.updateDisplayWithActiveOperand();
                this.lastButtonPressedWasEquals = false;
            },

            addDecimalPoint: function () {
                if (this.lastButtonPressedWasEquals) {
                    this.clear();
                }
                this.activeOperand.appendDecimalPoint();
                this.updateDisplayWithActiveOperand();
            },

            copyResultIntoOperand1: function () {
                this.operand1.setText(this.result.getText());
            },

            clearOperand2: function () {
                this.operand2.setText("");
            },

            plus: function () {
                if (this.expressionIsComplete()) {
                    this.computeResult();
                    this.copyResultIntoOperand1();
                    this.clearOperand2();
                }
                this.operator = Operator.PLUS;
                this.activeOperand = this.operand2;
                this.lastButtonPressedWasEquals = false;
            },

            minus: function () {
                if (this.expressionIsComplete()) {
                    this.computeResult();
                    this.copyResultIntoOperand1();
                    this.clearOperand2();
                }
                this.operator = Operator.MINUS;
                this.activeOperand = this.operand2;
                this.lastButtonPressedWasEquals = false;
            },

            multiplyBy: function () {
                if (this.expressionIsComplete()) {
                    this.computeResult();
                    this.copyResultIntoOperand1();
                    this.clearOperand2();
                }
                this.operator = Operator.MULTIPLY_BY;
                this.activeOperand = this.operand2;
                this.lastButtonPressedWasEquals = false;
            },

            divideBy: function () {
                if (this.expressionIsComplete()) {
                    this.computeResult();
                    this.copyResultIntoOperand1();
                    this.clearOperand2();
                }
                this.operator = Operator.DIVIDE_BY;
                this.activeOperand = this.operand2;
                this.lastButtonPressedWasEquals = false;
            },

            equals: function () {
                if (this.expressionIsComplete()) {
                    this.computeResult();
                }
                this.lastButtonPressedWasEquals = true;
            },

            operatorExists: function () {
                return this.operator !== null;
            },

            operand1HasContent: function () {
                return this.operand1.getText() !== "";
            },

            operand2HasContent: function () {
                return this.operand2.getText() !== "";
            },

            expressionIsComplete: function () {
                return this.operand1HasContent() && this.operatorExists() && this.operand2HasContent();
            },

            computeResult: function () {
                if (this.operator === Operator.PLUS) {
                    this.result = this.operand1.plus(this.operand2);
                } else if (this.operator === Operator.MINUS) {
                    this.result = this.operand1.minus(this.operand2);
                } else if (this.operator === Operator.MULTIPLY_BY) {
                    this.result = this.operand1.multiplyBy(this.operand2);
                } else if (this.operator === Operator.DIVIDE_BY) {
                    this.result = this.operand1.divideBy(this.operand2);
                } else {
                    throw new Error("Unexpected operator.");
                }
                this.updateDisplayWithResult();
            },

            updateDisplayWithResult: function () {
                this.display.setText(this.result.getText());
            }

        });
    });