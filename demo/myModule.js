// In demo/myModule.js (which means this code defines
// the "demo/myModule" module):

define([
    // The dojo/dom module is required by this module, so it goes
    // in this list of dependencies.
    "dojo/dom"
], function (dom) {
    // Once all modules in the dependency list have loaded, this
    // function is called to define the demo/myModule module.
    //
    // The dojo/dom module is passed as the first argument to this
    // function; additional modules in the dependency list would be
    // passed in as subsequent arguments.

    var oldText = {};

    // This returned object becomes the defined value of this module
    return {
        setText: function(id, text){
            var node = dom.byId(id);
            oldText[id] = node.innerHTML;
            node.innerHTML = text;
        },
        restoreText: function(id){
            var node = dom.byId(id);
            node.innerHTML = oldText[id];
            delete oldText[id];
        }
    };
});

// Require the module we just created
require(["demo/myModule"], function(myModule){
    // Use our module to change the text in the greeting
    myModule.setText("greeting", "Hello Dojo!");

    // After a few seconds, restore the text to its original state
    setTimeout(function(){
        myModule.restoreText("greeting");
    }, 3000);
});