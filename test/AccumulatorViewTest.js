require(["../src/AccumulatorView.js", "../src/AccumulatorModel.js"], function (AccumulatorView, AccumulatorModel) {
    "use strict";

    module("AccumulatorView", {
        setup: function () {
            AccumulatorModel.clear();
        },
        teardown: function () {
            AccumulatorModel.clear();
            AccumulatorView.update();
        }
    });

    test("update", function () {
        ok(true);
    });

});