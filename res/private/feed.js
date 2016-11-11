$.getJSON( "/feed.json", function( data ) {
    var li = [data.length];
    var count = 0;
    $.each( data, function(key, val) {
        li[count] = key;
        count++;
    });
    alert(li);
    
    var feed = $("#feed");
    /*Tablet Changes*/
    if(document.documentElement.clientWidth < 768) {
        feed.css("column-count", "2");
        alert("2col");
    /*Mobile Changes*/
    }else if(document.documentElement.clientWidth < 426){
        feed.css("column-count", "1");
        alert("1col");
    /*PC*/
    }else{
        feed.css("column-count", "3");
        alert("3col");
    }
});