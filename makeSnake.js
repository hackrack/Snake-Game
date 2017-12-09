var snake = document.getElementById("snake");
var snakeField = document.getElementById("snakeField");

var down = 0;
var right = 0;
var doDown;
var doTop;
var doLeft;
var doRight;
var doDownLocked = false;
var snakeTail;
document.body.onkeyup = function(e){
    if (e.keyCode == 32) { // spacebar starts the game
      setInterval( () => { // every 5 seconds create new div random postions
        var newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "red";
        newDiv.style.height = 10+"px";
        newDiv.style.width = 10+"px";
        newDiv.style.position = "absolute";
        newDiv.style.top = Math.floor(Math.random() * 50) * 10 + "px";
        newDiv.style.left = Math.floor(Math.random() * 50) * 10 + "px";
        snakeField.appendChild(newDiv);
        newDiv.setAttribute("id", "snakeTail");
        snakeTail = document.getElementById("snakeTail");
        setInterval( () => {
          snakeField.removeChild(snakeField.appendChild(newDiv)); // every 5 seconds remove the div
          // snakeField.removeChild(snakeField); // every 5 seconds remove the div
        }, 5000);
      }, 5000);
      document.addEventListener('keydown', (event) => {
        var keyName = event.key;
        function goDown() {
          down += 10;
          snake.style.top = down+"px";
        }

        function goUp() {
          down -= 10;
          snake.style.top = down+"px";
        }

        function goRight() {
          right += 10;
          snake.style.left = right+"px";
        }

        function goLeft() {
          right -= 10;
          snake.style.left = right+"px";
        }

        function rotate () {
          var x = document.getElementById("snake");
          x.style.transform = "rotate(90deg)";
        }

        if (keyName === "ArrowDown") {
            doDown = setInterval( () => {
              goDown();
              rotate();
              if (down === 500) {
                clearInterval(doDown);
              }
            }, 100);
          clearInterval(doRight);
          clearInterval(doLeft);
          clearInterval(doTop);
        } else if (keyName === "ArrowUp") {
          doTop = setInterval( () => {
            goUp();
            rotate();
            if (down === 0) {
              clearInterval(doTop);
            }
          }, 100)
          clearInterval(doDown);
          clearInterval(doLeft);
          clearInterval(doRight);
        } else if (keyName === "ArrowLeft") {
          doLeft = setInterval( () => {
            goLeft();
            rotate();
            if (right === 0) {
              clearInterval(doLeft);
            }
          }, 100)
          clearInterval(doDown);
          clearInterval(doRight);
          clearInterval(doTop);
        } else if (keyName === "ArrowRight") {
          doRight = setInterval( () => {
            rotate();
            goRight();
            if (right === 500) {
              clearInterval(doRight);
            }
          }, 100);
          clearInterval(doDown);
          clearInterval(doLeft);
          clearInterval(doTop);
        }
      });
    }
}
