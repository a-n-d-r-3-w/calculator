require(["dojo/dom", "dojo/_base/window", "dojo/domReady!"],
    function (dom, window) {
        "use strict";

        module("Calculator");

        test("dummy", function () {
            var iframe = dom.byId("webPageUnderTest").contentWindow;

            // Change context from current window to iframe
            window.setContext(iframe.window, iframe.window.document);

            var one = dom.byId("number1");
            var display = dom.byId("accumulator");
            console.log(display.innerHTML);
            one.click();
            console.log(display.innerHTML);
            ok(true); // dummy assertion
        });

    });