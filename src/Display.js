define(["dojo/dom", "dojo/_base/declare"], function (dom, declare) {
    "use strict";
    return declare(null, {
        display: dom.byId("display"),
        constructor: function (text) {
            this.setText(text);
        },
        setText: function (text) {
            this.display.innerHTML = text;
        },
        getText: function () {
            return this.display.innerHTML;
        }
    });
});