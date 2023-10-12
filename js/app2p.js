var win = window.open("http://foo.com");
setTimeout(function(){
    win.location = "http://bar.com";
    setTimeout(function(){
        win.close();
    }, 10000);
}, 10000);
