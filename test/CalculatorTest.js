require(["dojo/dom", "dojo/_base/window", "dojo/domReady!"],
    function (dom, window) {
        "use strict";

        var display,
            fixtureIsSetUp = false;

        module("Calculator", {
            setup: function () {
                if (!fixtureIsSetUp) {
                    var webPageUnderTest = dom.byId("webPageUnderTest").contentWindow;
                    window.setContext(webPageUnderTest.window, webPageUnderTest.window.document);
                    display = dom.byId("display");
                    fixtureIsSetUp = true;
                }
            },
            teardown: function () {
                dom.byId("clear").click();
                strictEqual(display.innerHTML, "0");
            }
        });

        test("1 + 4 = 5", function () {
            dom.byId("number1").click();
            strictEqual(display.innerHTML, "1");
            dom.byId("add").click();
            strictEqual(display.innerHTML, "1");
            dom.byId("number4").click();
            strictEqual(display.innerHTML, "4");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "5");
        });

        test("5 - 9 = -4", function () {
            dom.byId("number5").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("subtract").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("number9").click();
            strictEqual(display.innerHTML, "9");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "-4");
        });

        test("2 * 7 = 14", function () {
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("multiply").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("number7").click();
            strictEqual(display.innerHTML, "7");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "14");
        });

        test("3 / 2 = 1.5", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("divide").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "1.5");
        });

        test("3 / 2 + 8 * 5 - 6 = 41.5", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");

            dom.byId("divide").click();
            strictEqual(display.innerHTML, "3");

            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");

            dom.byId("add").click();
            strictEqual(display.innerHTML, "2");

            dom.byId("number8").click();
            strictEqual(display.innerHTML, "8");

            dom.byId("multiply").click();
            strictEqual(display.innerHTML, "8");

            dom.byId("number5").click();
            strictEqual(display.innerHTML, "5");

            dom.byId("subtract").click();
            strictEqual(display.innerHTML, "5");

            dom.byId("number6").click();
            strictEqual(display.innerHTML, "6");

            dom.byId("equals").click();
            strictEqual(display.innerHTML, "41.5");
        });

        test("toggle sign", function () {
            dom.byId("number1").click();
            strictEqual(display.innerHTML, "1");

            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "-1");

            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "1");
        });

        test("decimal point", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");

            dom.byId("decimalPoint").click();
            strictEqual(display.innerHTML, "3");

            dom.byId("number0").click();
            strictEqual(display.innerHTML, "3");

            dom.byId("number9").click();
            strictEqual(display.innerHTML, "3.09");
        });

        test("chain operations", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("divide").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "1.5");

            dom.byId("multiply").click();
            strictEqual(display.innerHTML, "1.5");
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "4.5");
        });

        test("Issue #7: Change sign then add fractional part point", function () {
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "-2");
            dom.byId("decimalPoint").click();
            strictEqual(display.innerHTML, "-2");
            dom.byId("number8").click();
            strictEqual(display.innerHTML, "-2.8");
        });

        test("Issue #7: Change sign then add digit", function () {
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "-2");
            dom.byId("number8").click();
            strictEqual(display.innerHTML, "-28");
        });

    });