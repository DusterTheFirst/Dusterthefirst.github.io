var feeditm = null;
$.ajax({
    url : "/res/private/feed.html",
    async: false,
    success : function(result){
        feeditm = result;
    }
});
$.getJSON( "/feed.json", function( data ) {
    //make list for data
    var li = [data.length];
    //counter
    var count = 0;
    //feeditem
    var contain = document.createElement("div");
    contain.innerHTML = feeditm;
    //loops through all posts
    $.each( data, function(key, val) {
        var elms = {};
        $.each(val, function(key, val){
            elms[key] = val;
        })
        alert("notded");
        var tempcontain = contain.cloneNode(true);
        var link = tempcontain.getElementsByClassName("link")[0];
        var title = tempcontain.getElementsByClassName("title")[0];
        var desc = tempcontain.getElementsByClassName("desc")[0];
        var content = tempcontain.getElementsByClassName("feedcontent")[0];
        var date = tempcontain.getElementsByClassName("feedate")[0];
        alert(tempcontain.innerHTML);
        title.innerHTML = key;
//        desc.innerHTML = elms["linkname"];
//        content.innerHTML = elms["content"];
//        date.innerHTML = elms["date"];
//        link.href = elms["link"];
        li[count] = tempcontain;
        count++;
        alert(elms);
    });
    alert(li);
    
    var feed = document.getElementById("feed");
    var htm = "";
    for(var i = 0; i<5; i++){
        if(li[i] != null){
            htm += li[i].innerHTML;
        }
    }
    feed.innerHTML = htm;
    alert(htm);
});