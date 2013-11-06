require(["../src/DisplayView.js", "dojo/domReady!"], function (DisplayView) {
    "use strict";

    module("DisplayView");

    test("update", function () {
        DisplayView.update();
        ok(true); // dummy assertion
    });

});