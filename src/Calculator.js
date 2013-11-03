require(["dojo/dom", "dojo/on", "dojo/domReady!"],
    function (dom, on) {
        "use strict";

        var operand1 = 0,
            operand2 = 0,
            operator = "",

            addDigitToAccumulatorText = function (digit) {
                var accumulator = dom.byId("accumulator");
                accumulator.innerHTML += digit;
            };

        on(dom.byId("clear"), "click", function () {
            dom.byId("accumulator").innerHTML = "0";
        });
        on(dom.byId("one"), "click", function () {
            addDigitToAccumulatorText("1");
        });
        on(dom.byId("two"), "click", function () {
            addDigitToAccumulatorText("2");
        });
        on(dom.byId("three"), "click", function () {
            addDigitToAccumulatorText("3");
        });
        on(dom.byId("four"), "click", function () {
            addDigitToAccumulatorText("4");
        });
        on(dom.byId("five"), "click", function () {
            addDigitToAccumulatorText("5");
        });
        on(dom.byId("six"), "click", function () {
            addDigitToAccumulatorText("6");
        });
        on(dom.byId("seven"), "click", function () {
            addDigitToAccumulatorText("7");
        });
        on(dom.byId("eight"), "click", function () {
            addDigitToAccumulatorText("8");
        });
        on(dom.byId("nine"), "click", function () {
            addDigitToAccumulatorText("9");
        });
        on(dom.byId("zero"), "click", function () {
            addDigitToAccumulatorText("0");
        });
        on(dom.byId("plusMinus"), "click", function () {
            var accumulatorText = dom.byId("accumulator").innerHTML;
            var startsWithMinus = accumulatorText.indexOf("-") === 0;
            if (startsWithMinus) {
                accumulator.innerHTML = accumulatorText.substring(1);
            } else {
                accumulator.innerHTML = "-" + accumulator.innerHTML;
            }
        });
        on(dom.byId("decimalPoint"), "click", function () {
            addDigitToAccumulatorText(".");
        });
        on(dom.byId("plus"), "click", function () {
            operator = "+";
            operand1 = parseFloat(dom.byId("accumulator").innerHTML);
            dom.byId("accumulator").innerHTML = "0";
        });
        on(dom.byId("minus"), "click", function () {
            operator = "-";
            operand1 = parseFloat(dom.byId("accumulator").innerHTML);
            dom.byId("accumulator").innerHTML = "0";
        });
        on(dom.byId("multiply"), "click", function () {
            operator = "*";
            operand1 = parseFloat(dom.byId("accumulator").innerHTML);
            dom.byId("accumulator").innerHTML = "0";
        });
        on(dom.byId("divide"), "click", function () {
            operator = "/";
            operand1 = parseFloat(dom.byId("accumulator").innerHTML);
            dom.byId("accumulator").innerHTML = "0";
        });
        on(dom.byId("equals"), "click", function () {
            operand2 = parseFloat(dom.byId("accumulator").innerHTML);
            if (operator === "+") {
                dom.byId("accumulator").innerHTML = operand1 + operand2;
            } else if (operator === "-") {
                dom.byId("accumulator").innerHTML = operand1 - operand2;
            } else if (operator === "*") {
                dom.byId("accumulator").innerHTML = operand1 * operand2;
            } else if (operator === "/") {
                dom.byId("accumulator").innerHTML = operand1 / operand2;
            }
        });
    });