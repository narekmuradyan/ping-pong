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
        "font-size":"30"

    });

    // var sound = $("<img/>").attr("id", "sound").attr("src", "imagaes/sound.png").appendTo("#map").text("Sound")
    //     .css({
    //         "position": "absolute",
    //         "top": "450px"
    //     });

    // var clikSound = $("<audio/>").appendTo("body");
    // clikSound[0].src = "sound/clik.wav";
    // sound.click(function () {
    //     console.log($(this));
    //     clikSound(0).play();
    //     if ($(this).chidren("img").attr("src") == "images/sound.png") {
    //         $(this).chidren("img").attr("src", "images/soff.jpg")
    //     }
    // })

}