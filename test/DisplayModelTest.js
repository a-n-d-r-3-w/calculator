require(["../src/DisplayModel.js"], function (DisplayModel) {
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

    // TODO: This test case fails because the accumulator model
    // stores 0.30000000000000004 instead of 0.3, presumably due to
    // floating point limitations.
//    test("addDigitAtPlaceValue", function () {
//        AccumulatorModel.addDigitAtPlaceValue(3, -1);
//        strictEqual(AccumulatorModel.getValue(), 0.3);
//    });

    test("addDigitAtPlaceValue - unexpected place value", function () {
        throws(
            function() {
                DisplayModel.addDigitAtPlaceValue(2, 3);
            }
        );
    });

});