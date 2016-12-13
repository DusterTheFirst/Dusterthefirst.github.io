 $.getJSON( "https://api.github.com/users/dusterthefirst/repos", function( data ) {
  var items = "";
  $.each( data, function( key, val ) {
      var name, link, fullname, description, language, lastupdate, lic;
      $.each(val, function(key, val){
        switch(key) {
            case "name":
                name = val;
                break;
            case "full_name":
                fullname = val;
                break;
            case "html_url":
                link = val;
                break;
            case "description":
                description = val;
                break;
            case "language":
                language = val;
                break;
            case "updated_at":
                lastupdate = val;
                break;
        }
      });
      language = description.split(" - ")[0];
      description = description.split(" - ")[1];
      if(language == "Game"){
          items += ("<div class='feeditem half'><a class='link' href='" + link + "'><b><div class='title'>" + language + " - " + name + "</div></b><i><div class='desc'>" + fullname +"</div></i></a><hr><div class='feedcontent'>" + description + "</div><i><div class='feeddate'>" + lastupdate.split("T")[0] + "</div></i></div>");
      }
  });
  document.getElementById("games").innerHTML = items;
});