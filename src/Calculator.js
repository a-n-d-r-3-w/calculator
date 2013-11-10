require([
    "dojo/dom",
    "dojo/on",
    "Operator.js",
    "DisplayModel.js",
    "DisplayView.js",
    "dojo/domReady!"],

    function (dom,
              on,
              Operator,
              DisplayModel,
              DisplayView) {

        "use strict";

        var operand1 = null,
            operand2 = null,
            operator = null,

            displayShowsResult = false,

            addDigit = function (digit) {
                if (displayShowsResult) {
                    DisplayModel.setText("");
                    DisplayView.update();
                    displayShowsResult = false;
                }
                DisplayModel.addDigit(digit);
                DisplayView.update();
            },

            setOperand1AndGetReadyForTheUserToInputOperand2 = function () {
                operand1 = DisplayModel.getFloat();
                DisplayModel.clear();
            },

            computeIntermediateResultAndGetReadyForTheUserToInputTheNextOperand = function () {
                operand2 = DisplayModel.getFloat();
                operand1 = operator(operand1, operand2);
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
                operand1 = null;
                operand2 = null;
                operator = null;
            },

            toggleSign = function () {
                DisplayModel.toggleSign();
                DisplayView.update();
            },

            addDecimalPoint = function () {
                DisplayModel.addDecimalPoint();
                DisplayView.update();
            },

            computeResultAndClearState = function () {
                if (operator !== null) {
                    operand2 = DisplayModel.getFloat();
                    var answer = operator(operand1, operand2);
                    DisplayModel.setText(answer.toString());
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
                    attachEventHandlerForNumberButton(i);
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