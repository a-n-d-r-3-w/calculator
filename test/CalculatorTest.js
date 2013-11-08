require(["dojo/dom", "dojo/_base/window", "dojo/domReady!"],
    function (dom, window) {
        "use strict";

        module("Calculator", {
            setup: function () {
                var iframe = dom.byId("webPageUnderTest").contentWindow;
                window.setContext(iframe.window, iframe.window.document);
            }
        });

        test("dummy", function () {
            var one = dom.byId("number1");
            var display = dom.byId("accumulator");
            console.log(display.innerHTML);
            one.click();
            console.log(display.innerHTML);
            ok(true); // dummy assertion
        });

    });