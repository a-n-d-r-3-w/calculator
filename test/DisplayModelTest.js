require(["../src/DisplayModel.js", "../lib/qunit-assert-close.js"],

    function (DisplayModel, assert) {

        "use strict";

        module("DisplayModel", {
            teardown: function () {
                DisplayModel.clear();
            }
        });

        test("default value and getText", function () {
            strictEqual(DisplayModel.getText(), "0");
        });

        test("setText", function () {
            DisplayModel.setText("-8");
            strictEqual(DisplayModel.getText(), "-8");
        });

        test("clear", function () {
            DisplayModel.setText("-8");
            DisplayModel.clear();
            strictEqual(DisplayModel.getText(), "0");
        });

        test("toggleSign", function () {
            DisplayModel.setText("5");
            strictEqual(DisplayModel.getText(), "5");
            DisplayModel.toggleSign();
            strictEqual(DisplayModel.getText(), "-5");
            DisplayModel.toggleSign();
            strictEqual(DisplayModel.getText(), "5");
        });

        test("addDigit", function () {
            DisplayModel.addDigit("0");
            strictEqual(DisplayModel.getText(), "0");

            DisplayModel.addDigit("0");
            strictEqual(DisplayModel.getText(), "0");

            DisplayModel.addDigit("2");
            strictEqual(DisplayModel.getText(), "2");

            DisplayModel.addDigit("3");
            strictEqual(DisplayModel.getText(), "23");

            DisplayModel.addDigit("0");
            strictEqual(DisplayModel.getText(), "230");
        });

        test("addDigitAtPlaceValue that exercises floating point arithmetic limitation", function (assert) {
            DisplayModel.addDecimalPoint();
            DisplayModel.addDigit("3");
            strictEqual(DisplayModel.getText(), "0.3");
        });

    });