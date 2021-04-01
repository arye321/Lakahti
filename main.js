// learn jquery ajax 
// http://net.tutsplus.com/tutorials/javascript-ajax/5-ways-to-make-ajax-calls-with-jquery/

// no need to specify document ready

$(function(){
    // don't cache ajax or content won't be fresh
    $.ajaxSetup ({
        cache: false
    });
    var ajax_load = "<img src='http://i.imgur.com/pKopwXp.gif' alt='loading...' />";
    
    // load() functions
    var loadUrl = "http://fiddle.jshell.net/dvb0wpLs/show/";
    $("#loadbasic").click(function(){
        $("#result").html(ajax_load).load(loadUrl);
    });

// end  
});
