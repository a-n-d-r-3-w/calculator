require(["dojo/dom", "dojo/_base/window", "dojo/domReady!"],

    function (dom, window) {

        "use strict";

        var display,
            fixtureIsSetUp = false,
            changeDojoContextToWebPageUnderTest = function () {
                var webPageUnderTest = dom.byId("webPageUnderTest").contentWindow;
                window.setContext(webPageUnderTest.window, webPageUnderTest.window.document);
            };

        module("Calculator", {
            setup: function () {
                if (!fixtureIsSetUp) {
                    changeDojoContextToWebPageUnderTest();
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
            dom.byId("plus").click();
            strictEqual(display.innerHTML, "1");
            dom.byId("number4").click();
            strictEqual(display.innerHTML, "4");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "5");
        });

        test("5 - 9 = -4", function () {
            dom.byId("number5").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("minus").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("number9").click();
            strictEqual(display.innerHTML, "9");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "-4");
        });

        test("2 * 7 = 14", function () {
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("number7").click();
            strictEqual(display.innerHTML, "7");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "14");
        });

        test("3 / 2 = 1.5", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "1.5");
        });

        test("1 + 2 + 3 = ", function () {
            dom.byId("number1").click();
            strictEqual(display.innerHTML, "1");
            dom.byId("plus").click();
            strictEqual(display.innerHTML, "1");
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("plus").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "6");
        });

        test("3 / 2 + 8 * 5 - 6 = 41.5", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");

            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "3");

            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");

            dom.byId("plus").click();
            strictEqual(display.innerHTML, "1.5");

            dom.byId("number8").click();
            strictEqual(display.innerHTML, "8");

            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "9.5");

            dom.byId("number5").click();
            strictEqual(display.innerHTML, "5");

            dom.byId("minus").click();
            strictEqual(display.innerHTML, "47.5");

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
            strictEqual(display.innerHTML, "3.");

            dom.byId("number0").click();
            strictEqual(display.innerHTML, "3.0");

            dom.byId("number9").click();
            strictEqual(display.innerHTML, "3.09");
        });

        test("chain operations", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "1.5");

            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "1.5");
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "4.5");
        });

        test("Issue #7: Change sign then plus fractional part point", function () {
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "-2");
            dom.byId("decimalPoint").click();
            strictEqual(display.innerHTML, "-2.");
            dom.byId("number8").click();
            strictEqual(display.innerHTML, "-2.8");
        });

        test("Issue #7: Change sign then plus digit", function () {
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "-2");
            dom.byId("number8").click();
            strictEqual(display.innerHTML, "-28");
        });

        test("Start new operation by pressing number key", function () {
            dom.byId("number1").click();
            dom.byId("plus").click();
            dom.byId("number4").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "5");

            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("plus").click();
            dom.byId("number4").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "6");

            dom.byId("number6").click();
            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "-6");
            dom.byId("plus").click();
            dom.byId("number4").click();
            dom.byId("toggleSign").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "-10");
        });

        test("Start new operation by pressing decimal point", function () {
            dom.byId("number1").click();
            dom.byId("plus").click();
            dom.byId("number4").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "5");

            dom.byId("decimalPoint").click();
            dom.byId("number6").click();
            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "-0.6");
            dom.byId("plus").click();
            dom.byId("number4").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "3.4");
        });

        test("Issue #1: 0.3", function () {
            dom.byId("decimalPoint").click();
            strictEqual(display.innerHTML, "0.");
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "0.3");
        });

        test("Issue #1: 0.1 + 0.2", function () {
            dom.byId("decimalPoint").click();
            dom.byId("number1").click();
            dom.byId("plus").click();
            dom.byId("decimalPoint").click();
            dom.byId("number2").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "0.3");
        });

        test("Enter 003", function () {
            dom.byId("number0").click();
            strictEqual(display.innerHTML, "0");
            dom.byId("number0").click();
            strictEqual(display.innerHTML, "0");
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
        });

    });