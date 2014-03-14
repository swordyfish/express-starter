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

var drawTriplet = function(x, y, radius, color) {
    drawCircle(x,y-radius*(1/3),radius,color)
    drawCircle(x-radius*(2/3),y+radius*(2/3),radius,color)
    drawCircle(x+radius*(2/3),y+radius*(2/3),radius,color)
};

var drawTriangle = function(x, y, sideLen, color) {
  context.fillStyle=color
  context.beginPath()
  context.moveTo(x,y)
  context.lineTo(x-sideLen,y+Math.sqrt(3)*sideLen)
  context.lineTo(x+sideLen,y+Math.sqrt(3)*sideLen)
  context.lineTo(x,y)
  context.fill()
};

var drawTriforce = function(x, y, color){
  context.strokeStyle=color
  drawTriangle(x,y,25, color)
  drawTriangle(x-25,y+25*Math.sqrt(3),25, color)
  drawTriangle(x+25,y+25*Math.sqrt(3),25, color)
};

var drawTripleTriforce = function(x, y, color){
  context.strokeStyle=color
  drawTriforce(x,y, color)
  drawTriforce(x-50,y+50*Math.sqrt(3), color)
  drawTriforce(x+50,y+50*Math.sqrt(3), color)
};

var drawSierpinski = function(x, y, color){
  context.strokeStyle=color
  drawTripleTriforce(x,y, color)
  drawTripleTriforce(x-100,y+100*Math.sqrt(3), color)
  drawTripleTriforce(x+100,y+100*Math.sqrt(3), color)
};
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

  $('#p6').click(function(){
    drawTriplet(300,250,50, 'green');
  });

  $('#p7').click(function(){
    drawTriplet(400,250,50, 'blue');
  });

   $('#p8').click(function(){
    drawTriplet(100,100,50, 'purple');
    drawTriplet(400,100,50, 'teal');
    drawTriplet(100,300,50, 'olive');
    drawTriplet(400,300,50, 'maroon');
  });

  $('#p9').click(function(){
    drawTriangle(100,10,50, 'blue');
  });

  $('#p10').click(function(){
    drawTriforce(100,10,'purple');
  });

  $('#p11').click(function(){
    drawTripleTriforce(300,10,'pink');
  });

  $('#p12').click(function(){
    drawSierpinski(200,0,'orange');
  });
  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
