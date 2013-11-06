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
        }

    };
});