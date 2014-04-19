$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
var balls = [];
var numBalls = 10;
for (var i = 0; i< numBalls; i++){
  var b = {
    x:canvas.width*Math.random(),
    y:canvas.height*Math.random(),
    vx:7*Math.random(),
    vy:7*Math.random(),
    radius:25
  }
  balls.push(b);
}

  var drawCircle = function(x, y, radius, color) {
    context.fillStyle=color;
    context.beginPath();
    context.arc(x,y,radius,Math.PI/2,5*(Math.PI/2));
    context.closePath();
    context.fill();
  };

var reactions = [];

  // Run an interation of the game

  var updateGame = function() {
  for (var i = 0; i< balls.length; i++)  { 
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    if ((balls[i].x >= canvas.width-balls[i].radius) || (balls[i].x <= balls[i].radius)) {
      balls[i].vx = -balls[i].vx;
    } 
    if ((balls[i].y >= canvas.height-balls[i].radius || (balls[i].y <= balls[i].radius))) {
      balls[i].vy = - balls[i].vy;
}};
context.clearRect(0,0, canvas.width, canvas.height);
  for (var i = 0; i< balls.length; i++){
      drawCircle(balls[i].x,balls[i].y,balls[i].radius, "pink");
    }


  for (var i = 0; i< reactions.length; i++){
      reactions[i].timer ++;
    if (reactions[i].timer > 200) {
      reactions[i].radius --;
    }
    else if (reactions[i].radius < 30) {
      reactions[i].radius ++;
    }
    if (reactions[i].radius === 0) {
      reactions.splice(i,1);
      i--
    }
  };

  for (var i = 0; i< reactions.length; i++){
      drawCircle(reactions[i].x,reactions[i].y,reactions[i].radius,reactions[i].color);
    }
    // PUT STUFF HERE

  for (var j = 0; j < reactions.length; j++){ 
        for (var i = 0; i < balls.length; i++) {
          var xdiff = balls[i].x - reactions[j].x
          var ydiff = balls[i].y - reactions[j].y
          var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff)
          var collided = false
        if (dist < balls[i].radius + reactions[j].radius) {
          (collided = true);
        }
        
        if (collided === true) {
          var d = {
            x:balls[i].x,
            y:balls[i].y,
            radius:1,
            timer: 0
            
          } 
          reactions.push(d);
            balls.splice(i,1);
          i--
        }};
}

    requestAnimationFrame(updateGame);
  };

var colors = ['antiquewhite', 'aquamarine', 'coral', 'lightsteelblue', 'plum', 'tan'];
  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  var c = {
    x:e.pageX - $(this).offset().left,
    y:e.pageY - $(this).offset().top,
    radius:1,
    color: colors[Math.floor(Math.random()*colors.length)],
    timer: 0
  }
  reactions.push(c);
  });

  updateGame();
});
