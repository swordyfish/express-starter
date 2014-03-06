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

  $('#p6').click(function(){
  	context.strokeStyle = 'green';
  	context.strokeRect(250,300,200,100);
  });

  $('#p7').click(function(){ 
  	context.beginPath()
  	context.fillStyle = 'red'
  	context.arc(100,150,100,Math.PI/2,5*(Math.PI/2));
  	context.closePath()
  	context.fill()
  	context.strokeStyle = 'red'
  	context.stroke()
  });

  $('#p8').click(function(){
  	context.fillStyle = 'yellow'
  	context.fillRect(100,100,100,100);
  	context.strokeStyle = 'blue'
  	context.strokeRect(100,100,100,100);
  });
  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
