$.getJSON( "/feed.json", function( data ) {
    var li = [data.length];
    var count = 0;
    $.each( data, function(key, val) {
        //var feeditem = window.getElementsByClassName("feeditem")[0];
        //var itemtitle = feeditem.getElementsByClassName("title")[0];
        li[count] = key;
        count++;
    });
    alert(li);
    
    var feed = $("#feed");
});