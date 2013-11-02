define(["dojo/_base/declare"], function (declare) {
    "use strict";
    return declare(null, {
        value: undefined,
        clear: function () {
            this.value = "0";
        },
        getContents: function () {
            return this.value;
        },
        addDigit: function (digit) {
            if (this.value === "0") {
                this.value = "";
            }
            this.value += digit;
        }
    });
});