define(["dojo/dom", "AccumulatorModel.js"], function (dom, AccumulatorModel) {
    "use strict";
    var view = dom.byId("accumulator");

    return {

        update : function () {
            view.innerHTML = AccumulatorModel.getValue();
        },

        addDecimalPoint: function () {
            var decimalPointNotFound = view.innerHTML.indexOf(".") === -1;
            if (decimalPointNotFound) {
                view.innerHTML += ".";
            }
        }

    };
});