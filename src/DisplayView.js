define(["dojo/dom", "DisplayModel.js"], function (dom, DisplayModel) {
    "use strict";
    var view = dom.byId("accumulator");

    return {

        update : function () {
            view.innerHTML = DisplayModel.getValue();
        },

        addDecimalPoint: function () {
            var decimalPointNotFound = view.innerHTML.indexOf(".") === -1;
            if (decimalPointNotFound) {
                view.innerHTML += ".";
            }
            // TODO: If the decimal point is the first key of the next operand,
            // then we should clear the view and show the decimal point only.
        }

    };
});