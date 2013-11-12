define(["dojo/_base/declare"], function (declare) {
    "use strict";

    var MAXIMUM_SUPPORTED_TEXT_LENGTH = 20;

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

        textLengthMeetsOrExceedsMaxSupportedLength: function () {
            return this.text.length >= MAXIMUM_SUPPORTED_TEXT_LENGTH;
        },

        appendDecimalPoint: function () {
            if (this.textLengthMeetsOrExceedsMaxSupportedLength()) {
                alert("Sorry, I'm not designed to store numbers with more than 20 characters.");
                return;
            }

            if (this.textDoesNotContainDecimalPoint()) {
                this.text += ".";
            }
        },

        textDoesNotContainDecimalPoint: function () {
            return this.text.indexOf(".") === -1;
        },

        textEndsWithDecimalPoint: function () {
            return (this.text.indexOf(".") === this.text.length - 1);
        },

        appendDigit: function (digit) {
            if (this.textLengthMeetsOrExceedsMaxSupportedLength()) {
                alert("Sorry, I'm not designed to store numbers with more than 20 characters.");
                return;
            }

            if (this.text === "0") {
                if (digit !== "0") {
                    this.text = digit;
                }
            } else {
                this.text += digit;
            }
        },

        toggleSign: function () {
            if (this.getFloat() !== 0) {
                this.text = "-" + this.text;
                if (this.text.substring(0, 2) === "--") {
                    this.text = this.text.substring(2);
                }
            }
        },

        getPrecision: function () {
            var precision,
                indexOfDecimalPoint;
            if (this.textDoesNotContainDecimalPoint() || this.textEndsWithDecimalPoint()) {
                precision = 0;
            } else {
                indexOfDecimalPoint = this.text.indexOf(".");
                precision = (this.text.length - 1) - indexOfDecimalPoint;
            }
            return precision;
        },

        getFloat: function () {
            return parseFloat(this.text);
        },

        plus: function (operand2) {
            var result = this.getFloat() + operand2.getFloat(),
                precisionOfOperand1 = this.getPrecision(),
                precisionOfOperand2 = operand2.getPrecision(),
                precisionOfResult = Math.max(precisionOfOperand1, precisionOfOperand2);
            return new this.constructor(result.toFixed(precisionOfResult).toString());
        },

        minus: function (operand2) {
            var result = this.getFloat() - operand2.getFloat(),
                precisionOfOperand1 = this.getPrecision(),
                precisionOfOperand2 = operand2.getPrecision(),
                precisionOfResult = Math.max(precisionOfOperand1, precisionOfOperand2);
            return new this.constructor(result.toFixed(precisionOfResult).toString());
        },

        multiplyBy: function (operand2) {
            var result = this.getFloat() * operand2.getFloat(),
                precisionOfOperand1 = this.getPrecision(),
                precisionOfOperand2 = operand2.getPrecision(),
                precisionOfResult = precisionOfOperand1 + precisionOfOperand2;
            return new this.constructor(result.toFixed(precisionOfResult).toString());
        },

        divideBy: function (operand2) {
            var result = this.getFloat() / operand2.getFloat();
            return new this.constructor(result.toString());
        }
    });
});