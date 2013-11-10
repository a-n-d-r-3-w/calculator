define(["dojo/_base/declare"], function (declare) {
    "use strict";
    return declare(null, {
        text: "",

        constructor: function (newText) {
            this.setText(newText);
        },

        setText: function (newText) {
            this.text = newText;
        },

        getText: function () {
            return this.text;
        },

        appendDecimalPoint: function () {
            if (this.text.indexOf(".") === -1) {
                this.text += ".";
            }
        },

        appendNumber: function (number) {
            if (this.text === "0") {
                if (number === "0") {
                    // do nothing
                } else {
                    this.text = number;
                }
            } else {
                this.text += number;
            }
        },

        toggleSign: function () {
            if (this.text === "0" ||
                this.text === "0.") {
                // do nothing
            } else {
                this.text = "-" + this.text;
                if (this.text.substring(0, 2) === "--") {
                    this.text = this.text.substring(2);
                }
            }
        },

        getPrecision: function () {
            var precision,
                indexOfDecimalPoint = this.text.indexOf(".");
            if (indexOfDecimalPoint === -1 ||
                indexOfDecimalPoint === this.text.length - 1) {
                precision = 0;
            } else {
                precision = (this.text.length - 1) - indexOfDecimalPoint;
            }
            return precision;
        },

        getFloat: function () {
            return parseFloat(this.text);
        },

        plus: function (operand2) {
            var result = this.getFloat() + operand2.getFloat(),
                newPrecision = Math.max(this.getPrecision(), operand2.getPrecision());
            return new this.constructor(result.toFixed(newPrecision).toString());
        },

        minus: function (operand2) {
            var result = this.getFloat() - operand2.getFloat(),
                newPrecision = Math.max(this.getPrecision(), operand2.getPrecision());
            return new this.constructor(result.toFixed(newPrecision).toString());
        },

        multiplyBy: function (operand2) {
            var result = this.getFloat() * operand2.getFloat(),
                newPrecision = this.getPrecision() + operand2.getPrecision();
            return new this.constructor(result.toFixed(newPrecision).toString());
        }
    });
});