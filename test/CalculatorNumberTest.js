require(["../src/CalculatorNumber.js"],
    function (CalculatorNumber) {

        "use strict";

        module("Operand");

        test("constructor", function () {
            var operand = new CalculatorNumber("2");
            ok(true);
        });

        test("getText", function () {
            var operand = new CalculatorNumber("2");
            strictEqual(operand.getText(), "2");
        });

        test("setText", function () {
            var operand = new CalculatorNumber("2");
            operand.setText("3");
            strictEqual(operand.getText(), "3");
        });

        test("appendDecimalPoint", function () {
            var operand = new CalculatorNumber("2");
            operand.appendDecimalPoint();
            strictEqual(operand.getText(), "2.");
            operand.appendDecimalPoint();
            strictEqual(operand.getText(), "2.");
        });

        test("appendNumber", function () {
            var operand = new CalculatorNumber("2");
            operand.appendNumber("3");
            strictEqual(operand.getText(), "23");
            operand.setText("0");
            operand.appendNumber("0");
            operand.appendNumber("0");
            strictEqual(operand.getText(), "0");
            operand.appendNumber("7");
            strictEqual(operand.getText(), "7");
        });

        test("toggleSign", function () {
            var operand = new CalculatorNumber("2");
            operand.toggleSign();
            strictEqual(operand.getText(), "-2");
            operand.toggleSign();
            strictEqual(operand.getText(), "2");
            operand.setText("0");
            strictEqual(operand.getText(), "0");
            operand.toggleSign();
            strictEqual(operand.getText(), "0");
            operand.setText("0.");
            operand.toggleSign();
            strictEqual(operand.getText(), "0.");
        });

        test("getPrecision", function () {
            var operand = new CalculatorNumber("2");
            strictEqual(operand.getPrecision(), 0);
            operand.setText("2.");
            strictEqual(operand.getPrecision(), 0);
            operand.setText("2.0");
            strictEqual(operand.getPrecision(), 1);
            operand.setText("2.00");
            strictEqual(operand.getPrecision(), 2);
        });

        test("getFloat", function () {
            var operand = new CalculatorNumber("-3.1415926");
            strictEqual(operand.getFloat(), -3.1415926);
        });

        test("plus", function () {
            var operand1 = new CalculatorNumber("2"),
                operand2 = new CalculatorNumber("5"),
                result = operand1.plus(operand2);
            strictEqual(result.getText(), "7");

            operand1.setText("2");
            operand2.setText("5.0");
            result = operand1.plus(operand2);
            strictEqual(result.getText(), "7.0");

            operand1.setText("2.2332434");
            operand2.setText("5.0");
            result = operand1.plus(operand2);
            strictEqual(result.getText(), "7.2332434");
        });

        test("minus", function () {
            var operand1 = new CalculatorNumber("2"),
                operand2 = new CalculatorNumber("5"),
                result = operand1.minus(operand2);
            strictEqual(result.getText(), "-3");

            operand1.setText("2");
            operand2.setText("5.0");
            result = operand1.minus(operand2);
            strictEqual(result.getText(), "-3.0");

            operand1.setText("2.50");
            operand2.setText("5.0");
            result = operand1.minus(operand2);
            strictEqual(result.getText(), "-2.50");
        });

        test("multiplyBy", function () {
            var operand1 = new CalculatorNumber("2"),
                operand2 = new CalculatorNumber("5"),
                result = operand1.multiplyBy(operand2);
            strictEqual(result.getText(), "10");

            operand1.setText("2");
            operand2.setText("5.0");
            result = operand1.multiplyBy(operand2);
            strictEqual(result.getText(), "10.0");

            operand1.setText("2.50");
            operand2.setText("5.0");
            result = operand1.multiplyBy(operand2);
            strictEqual(result.getText(), "12.500");
        });

    });