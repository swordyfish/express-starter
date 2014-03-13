$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle=color;
    context.strokeRect(x, y, sideLen, sideLen);
  };

  var drawCircle = function(x, y, radius, color) {
    context.strokeStyle=color;
    context.beginPath()
    context.arc(x,y,radius,Math.PI/2,5*(Math.PI/2));
    context.closePath()
    context.stroke();
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function(){
    drawCircle(300,300,25, 'green');
    drawCircle(300,350,25, 'green');
    drawCircle(275,325,25, 'green');
    drawCircle(325,325,25, 'green');
    drawSquare(275,300,50, 'red');
    drawCircle(300,325,25, 'blue');
  });

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
