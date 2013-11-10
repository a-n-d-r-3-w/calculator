require([
    "dojo/dom",
    "dojo/on",
    "CalculatorNumber.js",
    "Operator.js",
    "DisplayModel.js",
    "DisplayView.js",
    "dojo/domReady!"],

    function (dom,
              on,
              CalculatorNumber,
              Operator,
              DisplayModel,
              DisplayView) {

        "use strict";

        var operand1 = new CalculatorNumber("0"),
            operand2 = new CalculatorNumber("0"),
            operator = null,
            activeOperand = null,
            result = null,

            display = dom.byId("display"),

            displayShowsResult = false,

            reset = function () {
                operand1.setText("0");
                operand2.setText("0");
                activeOperand = operand1;
                operator = null;
//                display.innerHTML = operand1.getText();
            },

            addDigit = function (digit) {
                if (displayShowsResult) {
                    reset();
                    displayShowsResult = false;
                }
                activeOperand.appendNumber(digit);
                display.innerHTML = activeOperand.getText();
            },

            computeResultAndClearState = function () {
                if (operator !== null) {
                    computeResult();
                    display.innerHTML = result.getText();
                    displayShowsResult = true;
                    reset();
                }
            },

            attachEventHandlerForClearButton = function () {
                on(dom.byId("clear"), "click", function () {
                    reset();
                    DisplayModel.clear();
                    DisplayView.update();
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
                });

                on(dom.byId("decimalPoint"), "click", function () {
                    addDecimalPoint();
                });
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
                    throw new Error("Unexpected operator:" + operator.toString());
                }
            },

            computeIntermediateResultIfNecessary = function () {
                var theCurrentExpressionContainsAnOperator = (operator !== null);
                if (theCurrentExpressionContainsAnOperator) {
                    operand2.setText(display.innerHTML);
                    computeResult();
                    display.innerHTML = result.getText();
                    operand1 = result;
                } else {
                    operand1.setText(display.innerHTML);
                    activeOperand = operand2;
                }
            },

            attachEventHandlersForOperatorButtons = function () {
                on(dom.byId("plus"), "click", function () {
                    computeIntermediateResultIfNecessary();
                    operator = Operator.PLUS;
                });

                on(dom.byId("minus"), "click", function () {
                    computeIntermediateResultIfNecessary();
                    operator = Operator.MINUS;
                });

                on(dom.byId("multiplyBy"), "click", function () {
                    computeIntermediateResultIfNecessary();
                    operator = Operator.MULTIPLY_BY;
                });

                on(dom.byId("divideBy"), "click", function () {
                    computeIntermediateResultIfNecessary();
                    operator = Operator.DIVIDE_BY;
                });
            },

            attachEventHandlerForEqualsButton = function () {
                on(dom.byId("equals"), "click", function () {
                    computeResultAndClearState();
                });

            },

            attachEventHandlers = function () {
                attachEventHandlerForClearButton();
                attachEventHandlersForNumberPadButtons();
                attachEventHandlersForOperatorButtons();
                attachEventHandlerForEqualsButton();
            };

        attachEventHandlers();
        reset();

    });