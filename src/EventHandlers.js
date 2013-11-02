require(["dojo/dom", "dojo/on", "dojo/domReady!"], function (dom, on) {
    "use strict";
    on(dom.byId("clear"), "click", function () {
        alert("clear");
    });
    on(dom.byId("one"), "click", function () {
        alert("1");
    });
    on(dom.byId("two"), "click", function () {
        alert("2");
    });
    on(dom.byId("three"), "click", function () {
        alert("3");
    });
    on(dom.byId("four"), "click", function () {
        alert("4");
    });
    on(dom.byId("five"), "click", function () {
        alert("5");
    });
    on(dom.byId("six"), "click", function () {
        alert("6");
    });
    on(dom.byId("seven"), "click", function () {
        alert("7");
    });
    on(dom.byId("eight"), "click", function () {
        alert("8");
    });
    on(dom.byId("nine"), "click", function () {
        alert("9");
    });
    on(dom.byId("zero"), "click", function () {
        alert("0");
    });
    on(dom.byId("plusMinus"), "click", function () {
        alert("plusMinus");
    });
    on(dom.byId("decimalPoint"), "click", function () {
        alert("decimalPoint");
    });
    on(dom.byId("plus"), "click", function () {
        alert("+");
    });
    on(dom.byId("minus"), "click", function () {
        alert("-");
    });
    on(dom.byId("multiply"), "click", function () {
        alert("x");
    });
    on(dom.byId("divide"), "click", function () {
        alert("/");
    });
    on(dom.byId("equals"), "click", function () {
        alert("=");
    });
});