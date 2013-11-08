require(["dojo/dom", "dojo/_base/window", "dojo/domReady!"],
    function (dom, window) {
        "use strict";

        var display;

        module("Calculator", {
            setup: function () {
                var iframe = dom.byId("webPageUnderTest").contentWindow;
                window.setContext(iframe.window, iframe.window.document);
                display = dom.byId("accumulator");
            },
            teardown: function () {
                dom.byId("clear").click();
                strictEqual(display.innerHTML, "0");
            }
        });

        test("1 + 4 = 5", function () {
            dom.byId("number1").click();
            strictEqual(display.innerHTML, "1");
            dom.byId("plus").click();
            strictEqual(display.innerHTML, "1");
            dom.byId("number4").click();
            strictEqual(display.innerHTML, "4");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "5");
        });

    });