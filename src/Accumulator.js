define(["dojo/_base/declare"], function (declare) {
    "use strict";
    return declare(null, {
        value: undefined,
        clear: function () {
            this.value = "0";
        },
        getContentsAsString: function () {
            return this.value;
        },
        getContentsAsFloat: function () {
            return parseFloat(this.value);
        },
        addDigit: function (digit) {
            if (this.value === "0") {
                this.value = "";
            }
            var reachedMaximumCapacity = this.value.length === 8;
            if (!reachedMaximumCapacity) {
                this.value += digit;
            }
        },
        addDecimalPoint: function () {
            var alreadyContainsDecimalPoint = this.value.indexOf(".") !== -1;
            if (!alreadyContainsDecimalPoint) {
                this.value += ".";
            }
        },
        showNegativeSign: function () {
            var valueIsZero = this.value === "0";
            var negativeSignIsAlreadyShowing = this.value.indexOf("-") !== -1;
            if (!valueIsZero && !negativeSignIsAlreadyShowing) {
                this.value = "-" + this.value;
            }
        },
        hideNegativeSign: function () {
            this.value = this.value.replace("-", "");
        }
    });
});