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
    context.beginPath();
    context.arc(x,y,radius,Math.PI/2,5*(Math.PI/2));
    context.closePath();
    context.fill();
  };

  var ball = {
    x: 20,
    y: 20,
    vx: 5,
    vy: 5,
    radius: 20
  };

  $('#canvas').click(function() {
    ball.vx = -ball.vx;
    ball.vy = -ball.vy;
    poop.vx = -poop.vx;
    poop.vy = -poop.vy;
  });

  var updateGame = function() {
    ball.x += ball.vx;
    ball.y += ball.vy;
    if ((ball.x >= canvas.width-ball.radius) || (ball.x <= ball.radius)) {
      ball.vx = -ball.vx;
    } 
    if ((ball.y >= canvas.height-ball.radius || (ball.y <= ball.radius))) {
      ball.vy = - ball.vy;
    } 
    
    context.clearRect(0,0, canvas.width, canvas.height);
    drawCircle(ball.x,ball.y,ball.radius, 'purple');
    setTimeout(updateGame, 10);

    //PUT STUFF HERE
  };

  updateGame();
});
