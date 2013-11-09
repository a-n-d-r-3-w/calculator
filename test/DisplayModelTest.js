require(["../src/DisplayModel.js", "../lib/qunit-assert-close.js"],

    function (DisplayModel, assert) {

        "use strict";

        module("DisplayModel", {
            teardown: function () {
                DisplayModel.clear();
            }
        });

        test("default value and getValue", function () {
            strictEqual(DisplayModel.getValue(), 0);
        });

        test("setValue", function () {
            DisplayModel.setValue(-8);
            strictEqual(DisplayModel.getValue(), -8);
        });

        test("clear", function () {
            DisplayModel.setValue(-8);
            DisplayModel.clear();
            strictEqual(DisplayModel.getValue(), 0);
        });

        test("toggleSign", function () {
            DisplayModel.setValue(5);
            strictEqual(DisplayModel.getValue(), 5);
            DisplayModel.toggleSign();
            strictEqual(DisplayModel.getValue(), -5);
            DisplayModel.toggleSign();
            strictEqual(DisplayModel.getValue(), 5);
        });

        test("addDigitAtPlaceValue", function () {
            DisplayModel.addDigitAtPlaceValue(2, 0);
            strictEqual(DisplayModel.getValue(), 2);

            DisplayModel.addDigitAtPlaceValue(3, 0);
            strictEqual(DisplayModel.getValue(), 23);

            DisplayModel.addDigitAtPlaceValue(3, -1);
            strictEqual(DisplayModel.getValue(), 23.3);

            DisplayModel.addDigitAtPlaceValue(3, -1);
            strictEqual(DisplayModel.getValue(), 23.6);

            DisplayModel.addDigitAtPlaceValue(5, -3);
            strictEqual(DisplayModel.getValue(), 23.605);
        });

        test("addDigitAtPlaceValue that encounters floating point arithmetic limitation", function (assert) {
            DisplayModel.addDigitAtPlaceValue(3, -1);
            var tolerance = 1e-12;
            assert.close(DisplayModel.getValue(), 0.3, tolerance);
        });

        test("addDigitAtPlaceValue with unexpected place value", function () {
            throws(
                function() {
                    DisplayModel.addDigitAtPlaceValue(2, 3);
                }
            );
        });

    });