require(["dojo/dom", "dojo/on", "Operator.js", "AccumulatorModel.js", "AccumulatorView.js", "dojo/domReady!"],
    function (dom, on, Operator, AccumulatorModel, AccumulatorView) {
        "use strict";
        var operand1 = null,
            operand2 = null,
            operator = null,
            placeValue = 0,
            addDigitAtPlaceValue = function (digit) {
                AccumulatorModel.addDigitAtPlaceValue(digit, placeValue);
            };

        on(dom.byId("clear"), "click", function () {
            operand1 = null;
            operand2 = null;
            operator = null;
            AccumulatorModel.clear();
            AccumulatorView.updateView();
        });
        on(dom.byId("one"), "click", function () {
            addDigitAtPlaceValue(1);
            AccumulatorView.updateView();
        });
        on(dom.byId("two"), "click", function () {
            addDigitAtPlaceValue(2);
            AccumulatorView.updateView();
        });
        on(dom.byId("three"), "click", function () {
            addDigitAtPlaceValue(3);
            AccumulatorView.updateView();
        });
        on(dom.byId("four"), "click", function () {
            addDigitAtPlaceValue(4);
            AccumulatorView.updateView();
        });
        on(dom.byId("five"), "click", function () {
            addDigitAtPlaceValue(5);
            AccumulatorView.updateView();
        });
        on(dom.byId("six"), "click", function () {
            addDigitAtPlaceValue(6);
            AccumulatorView.updateView();
        });
        on(dom.byId("seven"), "click", function () {
            addDigitAtPlaceValue(7);
            AccumulatorView.updateView();
        });
        on(dom.byId("eight"), "click", function () {
            addDigitAtPlaceValue(8);
            AccumulatorView.updateView();
        });
        on(dom.byId("nine"), "click", function () {
            addDigitAtPlaceValue(9);
            AccumulatorView.updateView();
        });
        on(dom.byId("zero"), "click", function () {
            addDigitAtPlaceValue(0);
            AccumulatorView.updateView();
        });

        on(dom.byId("plusMinus"), "click", function () {
            AccumulatorModel.toggleSign();
            AccumulatorView.updateView();
        });

        on(dom.byId("decimalPoint"), "click", function () {
            placeValue -= 1;
            AccumulatorView.addDecimalPoint();
        });

        on(dom.byId("plus"), "click", function () {
            if (operator === null) {
                operand1 = Accumulator.getValue();
            } else {
                operand2 = Accumulator.getValue();
                operand1 = operator(operand1, operand2);
            }
            operator = Operator.add;
            Accumulator.getReadyForNextOperand();
        });
        on(dom.byId("minus"), "click", function () {
            operator = Operator.subtract;
            operand1 = Accumulator.getValue();
            Accumulator.getReadyForNextOperand();
        });
        on(dom.byId("multiply"), "click", function () {
            operator = Operator.multiply;
            operand1 = Accumulator.getValue();
            Accumulator.getReadyForNextOperand();
        });
        on(dom.byId("divide"), "click", function () {
            operator = Operator.divide;
            operand1 = Accumulator.getValue();
            Accumulator.getReadyForNextOperand();
        });

        on(dom.byId("equals"), "click", function () {
            if (operator !== null) {
                operand2 = Accumulator.getValue();
                var answer = operator(operand1, operand2);
                var answerAsString = answer.toString();
                Accumulator.setInnerHtml(answerAsString);
                Accumulator.getReadyForNextOperand();
                clearOperands();
                clearOperator();
            }
        });
    });