require(["dojo/request"], function(request){
    request("http://api.duckduckgo.com/?q=1%2B2&format=json&pretty=1&t=calculator&no_html=1&callback=?").then(function(data){
        alert(data);
    }, function(err){
        // handle an error condition
    }, function(evt){
        // handle a progress event
    });
});