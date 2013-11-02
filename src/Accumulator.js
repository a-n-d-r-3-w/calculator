define(["dojo/_base/declare"], function (declare) {
    "use strict";
    return declare(null, {
        value: undefined,
        clear: function () {
            this.value = "0";
        }
    });
});