define(["dojo/dom", "AccumulatorModel.js"], function (dom, AccumulatorModel) {
    "use strict";
    var innerHTML = dom.byId("accumulator").innerHTML;

    return {

        updateView : function () {
            innerHTML = AccumulatorModel.getValue().toString();
        },

        addDecimalPoint: function () {
            var decimalPointNotFound = accumulatorView.innerHTML.indexOf(".") === -1;
            if (decimalPointNotFound) {
                accumulatorView.innerHTML += ".";
            }
        }

    };
});