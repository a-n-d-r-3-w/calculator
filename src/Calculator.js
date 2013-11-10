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
              Operand,
              Operator,
              DisplayModel,
              DisplayView) {

        "use strict";

        var operand1 = new CalculatorNumber(""),
            operand2 = new CalculatorNumber(""),
            operator = null,

            displayShowsResult = false,

            addDigit = function (digit) {
                if (displayShowsResult) {
                    DisplayModel.setText("0");
                    DisplayView.update();
                    displayShowsResult = false;
                }
                DisplayModel.addDigit(digit);
                DisplayView.update();
            },

            setOperand1AndGetReadyForTheUserToInputOperand2 = function () {
                operand1.setText(DisplayModel.getText());
                DisplayModel.clear();
            },

            computeIntermediateResultAndGetReadyForTheUserToInputTheNextOperand = function () {
                operand2.setText(DisplayModel.getText());
                operand1.setText(operator(operand1.getFloat(), operand2.getFloat()).toString());
                DisplayModel.clear();
            },

            setOperatorAndSetOperandAndComputeIntermediateResultIfNecessary = function (newOperator) {
                var theCurrentExpressionContainsAnOperator = (operator !== null);
                if (theCurrentExpressionContainsAnOperator) {
                    computeIntermediateResultAndGetReadyForTheUserToInputTheNextOperand();
                } else {
                    setOperand1AndGetReadyForTheUserToInputOperand2();
                }
                operator = newOperator;
            },

            reset = function () {
                operand1.setText("");
                operand2.setText("");
                operator = null;
            },

            toggleSign = function () {
                DisplayModel.toggleSign();
                DisplayView.update();
            },

            addDecimalPoint = function () {
                if (displayShowsResult) {
                    DisplayModel.setText("0");
                    DisplayView.update();
                    displayShowsResult = false;
                }
                DisplayModel.addDecimalPoint();
                DisplayView.update();
            },

            computeResultAndClearState = function () {
                if (operator !== null) {
                    operand2.setText(DisplayModel.getText());
                    var answer = operator(operand1.getFloat(), operand2.getFloat());

                    var operand1Precision = operand1.getPrecision(),
                        operand2Precision = operand2.getPrecision();

                    var newPrecision;
                    if (operator === Operator.add ||
                        operator === Operator.subtract) {
                        newPrecision = Math.max(operand1Precision, operand2Precision);
                        DisplayModel.setText(answer.toFixed(newPrecision).toString());
                    } else if (operator === Operator.multiply) {
                        newPrecision = operand1Precision + operand2Precision;
                        DisplayModel.setText(answer.toFixed(newPrecision).toString());
                    } else {
                        DisplayModel.setText(answer.toString());
                    }

                    DisplayView.update();
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
                    toggleSign();
                });

                on(dom.byId("decimalPoint"), "click", function () {
                    addDecimalPoint();
                });
            },

            attachEventHandlerForOperatorButton = function (operatorName) {
                on(dom.byId(operatorName), "click", function () {
                    setOperatorAndSetOperandAndComputeIntermediateResultIfNecessary(Operator[operatorName]);
                });
            },

            attachEventHandlersForOperatorButtons = function () {
                attachEventHandlerForOperatorButton("add");
                attachEventHandlerForOperatorButton("subtract");
                attachEventHandlerForOperatorButton("multiply");
                attachEventHandlerForOperatorButton("divide");
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