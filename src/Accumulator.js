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
            var isZero = this.value === "0";
            var alreadyShowing = this.value.indexOf("-") !== -1;
            if (!isZero && !alreadyShowing) {
                this.value = "-" + this.value;
            }
        },
        hideNegativeSign: function () {
            var negativeSignIsShowing = this.value.indexOf("-") !== -1;
            if (negativeSignIsShowing) {
                this.value = this.value.substring(1);
            }
        }
    });
});