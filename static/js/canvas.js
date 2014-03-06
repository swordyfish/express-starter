$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  $('#p1').click(function(){
  	context.strokeRect(250,100,200,100);
  });

  $('#p2').click(function(){
  	context.strokeRect(100,100,100,100);
  });

  $('#p3').click(function(){ 
  	context.beginPath()
  	context.arc(100,150,100,Math.PI/6,Math.PI/2);
  	context.stroke()
  });

    $('#p4').click(function(){ 
  	context.beginPath()
  	context.arc(100,100,100,Math.PI/2,5*(Math.PI/2));
  	context.closePath()
  	context.stroke()
  });

    $('#p5').click(function(){ 
  	context.beginPath()
  	context.moveTo(100,100);
  	context.lineTo(200,200);
  	context.closePath()
  	context.stroke()
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
