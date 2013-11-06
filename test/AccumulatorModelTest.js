require(["../src/AccumulatorModel.js"], function (AccumulatorModel) {
    "use strict";

    module("AccumulatorModel");

    test("setValue and getValue", function () {
        AccumulatorModel.setValue(-8);
        strictEqual(AccumulatorModel.getValue(), -8);
    });

    test("default value", function () {
        strictEqual(AccumulatorModel.getValue(), 0);
    });

    test("clear", function () {
        AccumulatorModel.setValue(-8);
        AccumulatorModel.clear();
        strictEqual(AccumulatorModel.getValue(), 0);
    });

    test("toggleSign", function () {
        strictEqual(Operator.divide(7, 4), 1.75);
    });

});