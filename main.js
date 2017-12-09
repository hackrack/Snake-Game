// DOM Nodes
var snake = document.getElementById("snake");
var snakeField = document.getElementById("snakeField");
var snakeTail;

var down = 0;
var right = 0;
var snakeTail;
var movingInterval;
var offsetTop;
var offsetLeft;
 
const generateNewPray = () => {
    var newDiv = document.createElement("div");
        newDiv.style.top = Math.floor(Math.random() * 50) * 10 + "px";
        newDiv.style.left = Math.floor(Math.random() * 50) * 10 + "px";
        snakeField.appendChild(newDiv);
        newDiv.setAttribute("id", "snakeTail");
        snakeTail = document.getElementById("snakeTail");
}

const removePray = () => {
    snakeField.removeChild(snakeTail); // every 5 seconds remove the div
}



const isGameOver = () => {
    if (down < 0 || right < 0) {
       //  console.log("game over")
       // alert("Game Over")
       location.reload() // Resets the game
    } else if (down > 500 || right > 500) {
       //  console.log("game over")
       // alert("Game Over")
       location.reload() // Resets the game
    }
}

const didSnakeAtePray = () => {
    if (snake.offsetLeft === snakeTail.offsetLeft && snake.offsetTop === snakeTail.offsetTop) {
        snakeTail.id = ""
        // snakeTail.style = ""
        snakeTail.classList.add("eaten")
        snakeTail.style.borderTopLeftRadius = "50px";
        snakeTail.style.borderTopRightRadius = "50px";
        snake.appendChild(snakeTail)
    }
}

const rotateBody = () => {

}


function goDown() {
  offsetTop = snake.offsetTop;
  offsetLeft = snake.offsetLeft;
    rotate(180);
    down += 10;
    snake.style.top = down+"px";
    isGameOver()
    didSnakeAtePray()
}

function goUp() {
    rotate(360);
    down -= 10;
    snake.style.top = down+"px";
    isGameOver()
    didSnakeAtePray()
}

function goRight() {
    rotate(90);
    right += 10;
    snake.style.left = right+"px";
    isGameOver()
    didSnakeAtePray()
}

function goLeft() {
  offsetTop = snake.offsetTop;
  offsetLeft = snake.offsetLeft;
    rotate(-90);
    right -= 10;
    snake.style.left = right+"px";
    isGameOver()
    didSnakeAtePray()
}

function rotate (deg) {
  var train = document.getElementsByClassName("eaten");
  // if (train.length > 1) {
  //   var trainTop = train[train.length -1].style.top;
  //   var trainLeft = train[train.length -1].style.left;
  //
  //   var trainPositionTop = Number(trainTop.slice(0, -2));
  //   var trainPositionLeft = Number(trainLeft.slice(0, -2));
  //   if (trainTop === snake.style.top && trainLeft === snake.style.left) {
  //     train.style.transform = `rotate(${deg}deg)`;
  //   }
  // }

  snake.style.transform = `rotate(${deg}deg)`;
}


const move = (key) => {
    switch(key) {
        case "ArrowDown":
            clearInterval(movingInterval)
            movingInterval = setInterval(() => goDown(), 100);
            break;
        case "ArrowUp":
            clearInterval(movingInterval)
            movingInterval = setInterval(() => goUp(), 100);
            break;
        case "ArrowLeft":
            clearInterval(movingInterval)
            movingInterval = setInterval(() => goLeft(), 100);
            break;
        case "ArrowRight":
            clearInterval(movingInterval)
            movingInterval = setInterval(() => goRight(), 100);
            break;
    }
}


//Event listeners
document.body.onkeyup = function(e){
    if (e.keyCode == 32) { // spacebar starts the game
        setInterval( () => {
            generateNewPray()// Every 5s generate a new pray
            setTimeout(() => removePray(), 4900)
            }, 5000);
    }
}

document.addEventListener('keydown', (event) => {
        var keyName = event.key;
        move(keyName)
});
