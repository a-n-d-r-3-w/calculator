require(["dojo/dom", "dojo/on", "Operation.js", "Accumulator.js", "AccumulatorMode.js", "dojo/domReady!"],
    function (dom, on, Operation, Accumulator, AccumulatorMode) {
        "use strict";
        var operand1 = null,
            operand2 = null,
            operation = null;

        on(dom.byId("clear"), "click", function () {
            operand1 = null;
            operand2 = null;
            operation = null;
            Accumulator.clear();
        });
        on(dom.byId("one"), "click", function () {
            Accumulator.enterDigit("1");
        });
        on(dom.byId("two"), "click", function () {
            Accumulator.enterDigit("2");
        });
        on(dom.byId("three"), "click", function () {
            Accumulator.enterDigit("3");
        });
        on(dom.byId("four"), "click", function () {
            Accumulator.enterDigit("4");
        });
        on(dom.byId("five"), "click", function () {
            Accumulator.enterDigit("5");
        });
        on(dom.byId("six"), "click", function () {
            Accumulator.enterDigit("6");
        });
        on(dom.byId("seven"), "click", function () {
            Accumulator.enterDigit("7");
        });
        on(dom.byId("eight"), "click", function () {
            Accumulator.enterDigit("8");
        });
        on(dom.byId("nine"), "click", function () {
            Accumulator.enterDigit("9");
        });
        on(dom.byId("zero"), "click", function () {
            Accumulator.enterDigit("0");
        });

        on(dom.byId("plusMinus"), "click", function () {
            Accumulator.togglePlusMinus();
        });

        on(dom.byId("decimalPoint"), "click", function () {
            Accumulator.enterDecimalPoint();
        });

        on(dom.byId("plus"), "click", function () {
            operation = Operation.add;
            operand1 = Accumulator.getInnerHtmlAsFloat();
            Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_2);
        });
        on(dom.byId("minus"), "click", function () {
            operation = Operation.subtract;
            operand1 = Accumulator.getInnerHtmlAsFloat();
            Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_2);
        });
        on(dom.byId("multiply"), "click", function () {
            operation = Operation.multiply;
            operand1 = Accumulator.getInnerHtmlAsFloat();
            Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_2);
        });
        on(dom.byId("divide"), "click", function () {
            operation = Operation.divide;
            operand1 = Accumulator.getInnerHtmlAsFloat();
            Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_2);
        });

        on(dom.byId("equals"), "click", function () {
            operand2 = Accumulator.getInnerHtmlAsFloat();
            var answer = operation(operand1, operand2);
            var answerAsString = answer.toString();
            Accumulator.setInnerHtml(answerAsString);
            Accumulator.setMode(AccumulatorMode.THE_NEXT_DIGIT_THE_USER_ENTERS_IS_THE_FIRST_DIGIT_OF_OPERAND_1);
        });
    });