$(document).ready(menu);

function menu() {
    $("<div/>").attr("id", "map").css({
        "position": "absolute",
        "width": "100%"
    }).appendTo("body");

    $("<img/>").attr("src", "images/menu.jpg")
        .attr("id", "img")
        .css({
            "width": "80%"
        }).appendTo("#map")

    var btn = $("<button/>").attr("id", "btn").text("Play").appendTo("#map");
    btn.click(function () {
        $("body").empty();
        game();
    });

    btn.css({
        "position": "absolute",
        "top": "70%",
        "left": "40%",
        "font-size": "30"

    });

}