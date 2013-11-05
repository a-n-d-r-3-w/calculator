require(["dojo/dom", "dojo/on", "Operator.js", "AccumulatorModel.js", "AccumulatorView.js", "dojo/domReady!"],
    function (dom, on, Operator, AccumulatorModel, AccumulatorView) {
        "use strict";
        var operand1 = null,
            operand2 = null,
            operator = null,
            placeValueForNextDigit = 0,
            enteringFractionalPart = false,
            printLog = function () {
                console.log("operand1 = " + operand1);
                console.log("operand2 = " + operand2);
                console.log("operator = " + operator);
            },
            addDigit = function (digit) {
                AccumulatorModel.addDigitAtPlaceValue(digit, placeValueForNextDigit);
                if (enteringFractionalPart) {
                    placeValueForNextDigit -= 1;
                }
            },
            addDigitAndUpdateAccumulatorView = function (digit) {
                addDigit(digit);
                AccumulatorView.update();
            },
            setOperand1AndGetReadyForTheUserToInputOperand2 = function () {
                operand1 = AccumulatorModel.getValue();
                placeValueForNextDigit = 0;
                AccumulatorModel.clear();
            },
            computeIntermediateResultAndGetReadyForTheUserToInputTheNextOperand = function () {
                operand2 = AccumulatorModel.getValue();
                operand1 = operator(operand1, operand2);
                placeValueForNextDigit = 0;
                AccumulatorModel.clear();
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
            };

        on(dom.byId("clear"), "click", function () {
            clearOperandsAndOperatorAndPlaceValue();
            AccumulatorModel.clear();
            AccumulatorView.update();
        });
        on(dom.byId("number1"), "click", function () {
            addDigitAndUpdateAccumulatorView(1);
        });
        on(dom.byId("number2"), "click", function () {
            addDigitAndUpdateAccumulatorView(2);
        });
        on(dom.byId("number3"), "click", function () {
            addDigitAndUpdateAccumulatorView(3);
        });
        on(dom.byId("number4"), "click", function () {
            addDigitAndUpdateAccumulatorView(4);
        });
        on(dom.byId("number5"), "click", function () {
            addDigitAndUpdateAccumulatorView(5);
        });
        on(dom.byId("number6"), "click", function () {
            addDigitAndUpdateAccumulatorView(6);
        });
        on(dom.byId("number7"), "click", function () {
            addDigitAndUpdateAccumulatorView(7);
        });
        on(dom.byId("number8"), "click", function () {
            addDigitAndUpdateAccumulatorView(8);
        });
        on(dom.byId("number9"), "click", function () {
            addDigitAndUpdateAccumulatorView(9);
        });
        on(dom.byId("number0"), "click", function () {
            addDigitAndUpdateAccumulatorView(0);
        });

        on(dom.byId("plusMinus"), "click", function () {
            AccumulatorModel.toggleSign();
            AccumulatorView.update();
        });

        on(dom.byId("decimalPoint"), "click", function () {
            enteringFractionalPart = true;
            placeValueForNextDigit -= 1;
            AccumulatorView.addDecimalPoint();
        });

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

        on(dom.byId("equals"), "click", function () {
            if (operator !== null) {
                operand2 = AccumulatorModel.getValue();
                var answer = operator(operand1, operand2);
                AccumulatorModel.setValue(answer);
                AccumulatorView.update();
                clearOperandsAndOperatorAndPlaceValue();
            }
        });
    });