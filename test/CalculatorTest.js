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

        test("Issue #15: 6, =, 0 should display 0", function () {
            dom.byId("number6").click();
            strictEqual(display.innerHTML, "6");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "6");
            dom.byId("number0").click();
            strictEqual(display.innerHTML, "0");
        });

        test("Issue #16: 3, *, /, = should display 3", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "3");
        });

        test("Issue #16: 6, *, /, 2 = should display 3", function () {
            dom.byId("number6").click();
            strictEqual(display.innerHTML, "6");
            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "6");
            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "6");
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "3");
        });

        test("Issue #16: 6, /, * should display 6", function () {
            dom.byId("number6").click();
            strictEqual(display.innerHTML, "6");
            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "6");
            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "6");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "6");
        });

        test("Issue #16: 5, *, -, 6 should display -1", function () {
            dom.byId("number5").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("minus").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("number6").click();
            strictEqual(display.innerHTML, "6");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "-1");
        });

        test("Issue #16: 5, /, - should display 5", function () {
            dom.byId("number5").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("minus").click();
            strictEqual(display.innerHTML, "5");
        });

        test("Issue #16: 8.9, *, / should display 8.9", function () {
            dom.byId("number8").click();
            strictEqual(display.innerHTML, "8");
            dom.byId("decimalPoint").click();
            strictEqual(display.innerHTML, "8.");
            dom.byId("number9").click();
            strictEqual(display.innerHTML, "8.9");
            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "8.9");
            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "8.9");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "8.9");
        });

        test("Issue #16: 777, *, * should display 777", function () {
            dom.byId("number7").click();
            strictEqual(display.innerHTML, "7");
            dom.byId("number7").click();
            strictEqual(display.innerHTML, "77");
            dom.byId("number7").click();
            strictEqual(display.innerHTML, "777");
            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "777");
            dom.byId("multiplyBy").click();
            strictEqual(display.innerHTML, "777");
        });

        test("Issue #16: 777, /, / should display 777", function () {
            dom.byId("number7").click();
            strictEqual(display.innerHTML, "7");
            dom.byId("number7").click();
            strictEqual(display.innerHTML, "77");
            dom.byId("number7").click();
            strictEqual(display.innerHTML, "777");
            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "777");
            dom.byId("divideBy").click();
            strictEqual(display.innerHTML, "777");
        });

        test("Issue #13: Very large positive numbers", function () {
            var i;
            for (i = 0; i < 20; i += 1) {
                dom.byId("number5").click();
            }
            strictEqual(display.innerHTML, "55555555555555555555");
            dom.byId("multiplyBy").click();
            dom.byId("number9").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "500000000000000000000");
            dom.byId("multiplyBy").click();
            dom.byId("number5").click();
            dom.byId("number6").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "2.8e+22");
        });

        test("Issue #13: Very large negative numbers", function () {
            var i;
            for (i = 0; i < 19; i += 1) {
                dom.byId("number5").click();
            }
            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "-5555555555555555555");
            dom.byId("multiplyBy").click();
            dom.byId("number9").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "-50000000000000000000");
            dom.byId("multiplyBy").click();
            dom.byId("number5").click();
            dom.byId("number6").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "-2.8e+21");
        });

        test("Issue #13: Very small numbers", function () {
            dom.byId("decimalPoint").click();
            var i;
            for (i = 0; i < 17; i += 1) {
                dom.byId("number0").click();
            }
            dom.byId("number5").click();
            strictEqual(display.innerHTML, "0.000000000000000005");
            dom.byId("divideBy").click();
            dom.byId("number9").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "5.555555555555556e-19");
        });

        test("Issue #13: Very small negative numbers", function () {
            dom.byId("decimalPoint").click();
            var i;
            for (i = 0; i < 16; i += 1) {
                dom.byId("number0").click();
            }
            dom.byId("number5").click();
            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "-0.00000000000000005");
            dom.byId("divideBy").click();
            dom.byId("number9").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "-5.5555555555555555e-18");
        });

        test("Issue #17 4, +, 6, =, toggleSign should show 10", function () {
            dom.byId("number4").click();
            dom.byId("plus").click();
            dom.byId("number6").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "10");
            dom.byId("toggleSign").click();
            strictEqual(display.innerHTML, "10");

            dom.byId("number4").click();
            dom.byId("toggleSign").click();
            dom.byId("plus").click();
            dom.byId("number6").click();
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "2");
        });

    });