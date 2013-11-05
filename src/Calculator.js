require(["dojo/dom", "dojo/on", "Operator.js", "AccumulatorModel.js", "AccumulatorView.js", "dojo/domReady!"],
    function (dom, on, Operator, AccumulatorModel, AccumulatorView) {
        "use strict";
        var operand1 = null,
            operand2 = null,
            operator = null,
            placeValue = 0,
            printLog = function () {
                console.log("operand1 = " + operand1);
                console.log("operand2 = " + operand2);
                console.log("operator = " + operator);
            },
            addDigitAtPlaceValue = function (digit) {
                AccumulatorModel.addDigitAtPlaceValue(digit, placeValue);
            },
            setOperand1AndGetReadyForTheUserToInputOperand2 = function () {
                operand1 = AccumulatorModel.getValue();
                AccumulatorModel.clear();
            },
            computeIntermediateResultAndGetReadyForTheUserToInputTheNextOperand = function () {
                operand2 = AccumulatorModel.getValue();
                operand1 = operator(operand1, operand2);
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
            };

        on(dom.byId("clear"), "click", function () {
            operand1 = null;
            operand2 = null;
            operator = null;
            AccumulatorModel.clear();
            AccumulatorView.update();
        });
        on(dom.byId("one"), "click", function () {
            addDigitAtPlaceValue(1);
            AccumulatorView.update();
        });
        on(dom.byId("two"), "click", function () {
            addDigitAtPlaceValue(2);
            AccumulatorView.update();
        });
        on(dom.byId("three"), "click", function () {
            addDigitAtPlaceValue(3);
            AccumulatorView.update();
        });
        on(dom.byId("four"), "click", function () {
            addDigitAtPlaceValue(4);
            AccumulatorView.update();
        });
        on(dom.byId("five"), "click", function () {
            addDigitAtPlaceValue(5);
            AccumulatorView.update();
        });
        on(dom.byId("six"), "click", function () {
            addDigitAtPlaceValue(6);
            AccumulatorView.update();
        });
        on(dom.byId("seven"), "click", function () {
            addDigitAtPlaceValue(7);
            AccumulatorView.update();
        });
        on(dom.byId("eight"), "click", function () {
            addDigitAtPlaceValue(8);
            AccumulatorView.update();
        });
        on(dom.byId("nine"), "click", function () {
            addDigitAtPlaceValue(9);
            AccumulatorView.update();
        });
        on(dom.byId("zero"), "click", function () {
            addDigitAtPlaceValue(0);
            AccumulatorView.update();
        });

        on(dom.byId("plusMinus"), "click", function () {
            AccumulatorModel.toggleSign();
            AccumulatorView.update();
        });

        on(dom.byId("decimalPoint"), "click", function () {
            placeValue -= 1;
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
                operand1 = null;
                operand2 = null;
                operator = null;
            }
        });
    });