define(["dojo/dom", "DisplayModel.js"], function (dom, DisplayModel) {
    "use strict";
    var view = dom.byId("display");

    return {
        update : function () {
            view.innerHTML = DisplayModel.getValue();
        }
    };
});