 $.getJSON( "https://api.github.com/users/dusterthefirst/repos", function( data ) {
    var items = "";
    $.each(data, function( key, val ) {
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
        if(language != "Game"){
            items += (`<div class='feeditem half'>
                        <a class='link' href='${link}'>
                            <b><div class='title'>
                                ${language} - ${name}
                            </div></b>
                            <i><div class='desc'>
                                ${fullname}
                            </div></i>
                        </a>
                        <hr>
                        <div class='feedcontent'>
                            ${description}
                        </div>
                        <i><div class='feeddate'>
                            ${lastupdate.split("T")[0]}
                        </div></i>
                    </div>`.replaceAll("    ", "").replaceAll("\n", ""));
        }
    });
     document.getElementById("creations").innerHTML = items;
     var childs = $("#creations").children();
     childs = childs.sort(sortByName).toArray();
     for (var i = 0; i < childs.length; i++) {
        childs[i].parentNode.appendChild(childs[i]);
     }
});

function sortByName(a, b) {
    return $(a).find(".title").text().toLowerCase().localeCompare($(b).find(".title").text().toLowerCase());
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};