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

  var x = 20

  var updateGame = function() {
    x += 5
    context.clearRect(0,0, canvas.width, canvas.height);
    drawCircle(x,20,20, 'purple');
    setTimeout(updateGame, 10);

    //PUT STUFF HERE
  };

  updateGame();
});
