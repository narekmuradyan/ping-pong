function game() {
    console.log('starting game');
    $("<div/>").attr("id", "content").appendTo("body")
    $("<div/>").attr("id", "game").appendTo("#content")
    $("<div/>").attr("id", "ball").appendTo("#game")
    $("<div/>").attr("id", "pabbieA").appendTo("#game")
    $("<div/>").attr("id", "pabbieB").appendTo("#game")
    $("<div/>").attr("id", "scoreA").appendTo("#content")

    var pauseBall = false;

    var score = {
        bA: 0,
        pB: 0
    };

    var ball = {
        speed: 3,
        x: 290,
        y: 140,
        directionX: 1,
        directionY: 1
    };

    var pA = {
        speed: 3,
        x1: $("#pabbieA").position().left,
        x2: $("#pabbieA").position().left + $("#pabbieA").width(),
        y1: $("#pabbieA").position().top,
        y2: $("#pabbieA").position().top + $("#pabbieA").height(),
        update: function () {
            this.y1 = $("#pabbieA").position().top;
            this.y2 = this.y1 + $("#pabbieA").height();
        }
    };

    var pB = {
        speed: 3,
        x1: $("#pabbieB").position().left,
        x2: $("#pabbieB").position().left + $("#pabbieB").width(),
        y1: $("#pabbieB").position().top,
        y2: $("#pabbieB").position().top + $("#pabbieB").height(),
        update: function () {
            this.y1 = $("#pabbieB").position().top;
            this.y2 = this.y1 + $("#pabbieB").height();
        }
    }

    function moveBall() {
        var gameWidth = parseInt($("#game").width());
        var gameHeight = parseInt($("#game").height());

        if (pauseBall) return;


        if (ball.y + ball.speed * ball.directionY >
            (gameHeight - parseInt($("#ball").height()))) {
            ball.directionY = -1
        }


        if (ball.y + ball.speed * ball.directionY < 0) {
            ball.directionY = 1
        }


        if (ball.x + ball.speed * ball.directionX >
            (gameWidth - parseInt($("#ball").width()))) {
            ball.directionX = -1
            ball.x = 290;
            ball.y = 140;
            pauseBall = true;
            $("#ball").animate({
                "left": ball.x,
                "top": ball.y,
            }, 2000, function () {
                pauseBall = false;
            });
            score.pB = score.pB + 1;
            return;
        }

        if (ball.x + ball.speed * ball.directionX < 0) {
            ball.directionX = 1
            ball.x = 290;
            ball.y = 140;
            pauseBall = true;
            $("#ball").animate({
                "left": ball.x,
                "top": ball.y,
            }, 2000, function () {
                pauseBall = false;
            });
            score.pB = score.pB + 1;
            return;
        }

        if (ball.x + ball.speed * ball.directionX < pA.x2) {
            if (ball.y + ball.speed * ball.directionY > pA.y1 &&
                ball.y + ball.speed * ball.directionY < pA.y2) {
                ball.directionX = 1
            }

        }
        if (ball.x + ball.speed * ball.directionX >
            pB.x1 - parseInt($("#ball").width())) {
            if (ball.y + ball.speed * ball.directionY > pB.y1 &&
                ball.y + ball.speed * ball.directionY < pB.y2) {
                ball.directionX = -1
            }

        }

        ball.x += ball.speed * ball.directionX;
        ball.y += ball.speed * ball.directionY;

        $("#ball").css({ "left": ball.x, "top": ball.y });
    };

    var dynamic = $("#dynamic");
    var directions = {};
    var speed = 4;

    $('html').keyup(stop).keydown(charMovement);

    function charMovement(e) {
        directions[e.which] = true;
        console.log(directions)
    }

    function stop(e) {
        delete directions[e.which];
    }

    function moveA(e) {
        for (var i in directions) {

            if (pA.y1 > 0 && i == 38) {
                $("#pabbieA").css("top", (pA.y1 - speed) + "px");
            }

            if (pA.y2 < $("#game").height() && i == 40) {
                $("#pabbieA").css("top", ($("#pabbieA").position().top + speed) + "px");
            }
        }
        pA.update();
    }

    function moveB(e) {
        for (var i in directions) {

            if (pB.y1 > 0 && i == 87) {
                $("#pabbieB").css("top", (pB.y1 - speed) + "px");
            }

            if (pB.y2 < $("#game").height() && i == 83) {
                $("#pabbieB").css("top", ($("#pabbieB").position().top + speed) + "px");
            }
        }
        pB.update();
    }

    setInterval(gameLoop, 1000 / 60);

    function gameLoop() {
        moveBall();
        moveA();
        moveB();
    }
}