define(["dojo/_base/declare"], function (declare) {
    "use strict";
    var text;
    return declare(null, {
        constructor: function (newText) {
            this.setText(newText);
        },
        setText: function (newText) {
            text = newText;
        },
        getText: function () {
            return text;
        },
        appendDecimalPoint: function () {
            if (text.indexOf(".") === -1) {
                text += ".";
            }
        },
        appendNumber: function (number) {
            if (text === "0") {
                if (number === "0") {
                    // do nothing
                } else {
                    text = number;
                }
            } else {
                text += number;
            }
        },
        toggleSign: function () {
            if (text === "0" ||
                text === "0.") {
                // do nothing
            } else {
                text = "-" + text;
                if (text.substring(0, 2) === "--") {
                    text = text.substring(2);
                }
            }
        },
        getPrecision: function () {
            var precision,
                indexOfDecimalPoint = text.indexOf(".");
            if (indexOfDecimalPoint === -1 ||
                indexOfDecimalPoint === text.length - 1) {
                precision = 0;
            } else {
                precision = (text.length - 1) - indexOfDecimalPoint;
            }
            return precision;
        }
    });
});