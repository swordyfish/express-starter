$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game
  var drawCircle = function(x, y, radius, color) {
    context.fillStyle=color;
    context.beginPath()
    context.arc(x,y,radius,Math.PI/2,5*(Math.PI/2));
    context.closePath()
    context.fill();
  };

  var ball = {
    x: 20,
    y: 20,
    radius: 20
  }

  var updateGame = function() {
    ball.x += 5
    ball.y += 5
    context.clearRect(0,0, canvas.width, canvas.height);
    drawCircle(ball.x,ball.y,ball.radius, 'purple');
    setTimeout(updateGame, 10);

    //PUT STUFF HERE
  };

  updateGame();
});
