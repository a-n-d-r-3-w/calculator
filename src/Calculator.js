require(["dojo/dom", "dojo/on", "Operator.js", "DisplayModel.js", "DisplayView.js", "dojo/domReady!"],
    function (dom, on, Operator, DisplayModel, DisplayView) {
        "use strict";
        var operand1 = null,
            operand2 = null,
            operator = null,

            placeValueForNextDigit = 0,

            enteringFractionalPart = false,

            addDigit = function (digit) {
                DisplayModel.addDigitAtPlaceValue(digit, placeValueForNextDigit);
                if (enteringFractionalPart) {
                    placeValueForNextDigit -= 1;
                }
                DisplayView.update();
            },

            setOperand1AndGetReadyForTheUserToInputOperand2 = function () {
                operand1 = DisplayModel.getValue();
                placeValueForNextDigit = 0;
                DisplayModel.clear();
            },

            computeIntermediateResultAndGetReadyForTheUserToInputTheNextOperand = function () {
                operand2 = DisplayModel.getValue();
                operand1 = operator(operand1, operand2);
                placeValueForNextDigit = 0;
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

            clearOperandsAndOperatorAndPlaceValue = function () {
                operand1 = null;
                operand2 = null;
                operator = null;
                placeValueForNextDigit = 0;
            },

            toggleSign = function toggleSign() {
                DisplayModel.toggleSign();
                DisplayView.update();
            },

            computeResultAndClearState = function () {
                if (operator !== null) {
                    operand2 = DisplayModel.getValue();
                    var answer = operator(operand1, operand2);
                    DisplayModel.setValue(answer);
                    DisplayView.update();
                    clearOperandsAndOperatorAndPlaceValue();
                }
            },

            attachEventHandlerForClearButton = function () {
                on(dom.byId("clear"), "click", function () {
                    clearOperandsAndOperatorAndPlaceValue();
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

                on(dom.byId("plusMinus"), "click", function () {
                    toggleSign();
                });

                on(dom.byId("decimalPoint"), "click", function () {
                    enteringFractionalPart = true;
                    placeValueForNextDigit -= 1;
                    DisplayView.addDecimalPoint();
                });
            },

            attachEventHandlersForOperatorButtons = function () {
                // TODO: Refactor this so the DOM id and the operator name are the same, and
                // can be passed as an argument to a method called attachEventHandlerForOperatorButton.
                on(dom.byId("plus"), "click", function () {
                    setOperatorAndSetOperandAndComputeIntermediateResultIfNecessary(Operator.add);
                });

                on(dom.byId("minus"), "click", function () {
                    setOperatorAndSetOperandAndComputeIntermediateResultIfNecessary(Operator.subtract);
                });

                on(dom.byId("multiply"), "click", function () {
                    setOperatorAndSetOperandAndComputeIntermediateResultIfNecessary(Operator.multiply);
                });

                on(dom.byId("divide"), "click", function () {
                    setOperatorAndSetOperandAndComputeIntermediateResultIfNecessary(Operator.divide);
                });
            },

            attachEventHandlersForEqualsButton = function () {
                on(dom.byId("equals"), "click", function () {
                    computeResultAndClearState();
                });

            },

            attachEventHandlers = function () {
                attachEventHandlerForClearButton();
                attachEventHandlersForNumberPadButtons();
                attachEventHandlersForOperatorButtons();
                attachEventHandlersForEqualsButton();
            };

        attachEventHandlers();

    });