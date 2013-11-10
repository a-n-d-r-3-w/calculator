require(["../src/Operand.js"],
    function (Operand) {

        "use strict";

        module("Operand");

        test("constructor", function () {
            var operand = new Operand("2");
            ok(true);
        });

        test("getText", function () {
            var operand = new Operand("2");
            strictEqual(operand.getText(), "2");
        });

        test("setText", function () {
            var operand = new Operand("2");
            operand.setText("3");
            strictEqual(operand.getText(), "3");
        });

        test("appendDecimalPoint", function () {
            var operand = new Operand("2");
            operand.appendDecimalPoint();
            strictEqual(operand.getText(), "2.");
            operand.appendDecimalPoint();
            strictEqual(operand.getText(), "2.");
        });

        test("appendNumber", function () {
            var operand = new Operand("2");
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
            var operand = new Operand("2");
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
            var operand = new Operand("2");
            strictEqual(operand.getPrecision(), 0);
            operand.setText("2.");
            strictEqual(operand.getPrecision(), 0);
            operand.setText("2.0");
            strictEqual(operand.getPrecision(), 1);
            operand.setText("2.00");
            strictEqual(operand.getPrecision(), 2);
        });

        test("getFloat", function () {
            var operand = new Operand("-3.1415926");
            strictEqual(operand.getFloat(), -3.1415926);
        })

    });