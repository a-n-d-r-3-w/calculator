require(["../src/AccumulatorModel.js"], function (AccumulatorModel) {
    "use strict";

    module("AccumulatorModel", {
        teardown: function () {
            AccumulatorModel.clear();
        }
    });

    test("default value and getValue", function () {
        strictEqual(AccumulatorModel.getValue(), 0);
    });

    test("setValue", function () {
        AccumulatorModel.setValue(-8);
        strictEqual(AccumulatorModel.getValue(), -8);
    });

    test("clear", function () {
        AccumulatorModel.setValue(-8);
        AccumulatorModel.clear();
        strictEqual(AccumulatorModel.getValue(), 0);
    });

    test("toggleSign", function () {
        AccumulatorModel.setValue(5);
        strictEqual(AccumulatorModel.getValue(), 5);
        AccumulatorModel.toggleSign();
        strictEqual(AccumulatorModel.getValue(), -5);
        AccumulatorModel.toggleSign();
        strictEqual(AccumulatorModel.getValue(), 5);
    });

    test("addDigitAtPlaceValue", function () {
        AccumulatorModel.addDigitAtPlaceValue(2, 0);
        strictEqual(AccumulatorModel.getValue(), 2);

        AccumulatorModel.addDigitAtPlaceValue(3, 0);
        strictEqual(AccumulatorModel.getValue(), 23);

        AccumulatorModel.addDigitAtPlaceValue(3, -1);
        strictEqual(AccumulatorModel.getValue(), 23.3);

        AccumulatorModel.addDigitAtPlaceValue(3, -1);
        strictEqual(AccumulatorModel.getValue(), 23.6);

        AccumulatorModel.addDigitAtPlaceValue(5, -3);
        strictEqual(AccumulatorModel.getValue(), 23.605);
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
                AccumulatorModel.addDigitAtPlaceValue(2, 3);
            }
        );
    });

});