require(["dojo/dom", "dojo/on", "Operation.js", "Accumulator.js", "AccumulatorMode.js", "dojo/domReady!"],
    function (dom, on, Operation, Accumulator, AccumulatorMode) {
        "use strict";
        var operand1 = null,
            operand2 = null,
            operation = null,
            thePreviousButtonPressedWasEquals = false,
            clear = function () {
                operand1 = null;
                operand2 = null;
                operation = null;
                Accumulator.clear();
                thePreviousButtonPressedWasEquals = false;
            };

        on(dom.byId("clear"), "click", function () {
            clear();
        });
        on(dom.byId("one"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("1");
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("two"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("2");
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("three"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("3");
            thePreviousButtonPressedWasEquals = false;

        });
        on(dom.byId("four"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("4");
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("five"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("5");
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("six"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("6");
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("seven"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("7");
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("eight"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("8");
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("nine"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("9");
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("zero"), "click", function () {
            if (thePreviousButtonPressedWasEquals) {
                clear();
            }
            Accumulator.enterDigit("0");
            thePreviousButtonPressedWasEquals = false;
        });

        on(dom.byId("plusMinus"), "click", function () {
            Accumulator.togglePlusMinus();
            thePreviousButtonPressedWasEquals = false;
        });

        on(dom.byId("decimalPoint"), "click", function () {
            Accumulator.enterDecimalPoint();
            thePreviousButtonPressedWasEquals = false;
        });

        on(dom.byId("plus"), "click", function () {
            operation = Operation.add;
            operand1 = Accumulator.getInnerHtmlAsFloat();
            Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_2);
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("minus"), "click", function () {
            operation = Operation.subtract;
            operand1 = Accumulator.getInnerHtmlAsFloat();
            Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_2);
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("multiply"), "click", function () {
            operation = Operation.multiply;
            operand1 = Accumulator.getInnerHtmlAsFloat();
            Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_2);
            thePreviousButtonPressedWasEquals = false;
        });
        on(dom.byId("divide"), "click", function () {
            operation = Operation.divide;
            operand1 = Accumulator.getInnerHtmlAsFloat();
            Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_2);
            thePreviousButtonPressedWasEquals = false;
        });

        on(dom.byId("equals"), "click", function () {
            if (operation !== null) {
                operand2 = thePreviousButtonPressedWasEquals ?
                    operand2 // repeat the last operation
                    : Accumulator.getInnerHtmlAsFloat();
                var answer = operation(operand1, operand2);
                operand1 = answer;
                var answerAsString = answer.toString();
                Accumulator.setInnerHtml(answerAsString);
                Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_1);
                thePreviousButtonPressedWasEquals = true;
            }
        });
    });