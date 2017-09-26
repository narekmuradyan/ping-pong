function game() {
    console.log('starting game');
    $("<div/>").attr("id", "content").appendTo("body")
    $("<div/>").attr("id", "game").appendTo("#content")
    $("<div/>").attr("id", "ball").appendTo("#game")
   
    var ball = {
        speed: 3,
        x: 290,
        y: 140,
        directionX: 1,
        directionY: 1
    };


    setInterval(gameLoop, 1000 / 60);


    function gameLoop() {
        moveBall();
    }

    function moveBall() {
        var gameWidth = parseInt($("#game").width());
        var gameHeight = parseInt($("#game").height());


        if (ball.y + ball.speed * ball.directionY > (gameHeight - parseInt($("#ball").height()))) {
            ball.directionY = -1
        }


        if (ball.y + ball.speed * ball.directionY < 0) {
            ball.directionY = 1
        }


        if (ball.x + ball.speed * ball.directionX > (gameWidth - parseInt($("#ball").width()))) {
            ball.directionX = -1
        }


        if (ball.x + ball.speed * ball.directionX < 0) {
            ball.directionX = 1
        }


        ball.x += ball.speed * ball.directionX;
        ball.y += ball.speed * ball.directionY;


        $("#ball").css({ "left": ball.x, "top": ball.y });
    };
    
}
