alert('Poopiehead!!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {alert('Hello world!')
  // WRITE CODE HERE
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() { 
	$('#houdini_text').hide();
  //WRITE CODE HERE
});

$('#reappear').click(function() {
	$('#houdini_text').show();
  //WRITE CODE HERE
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
// WRITE CODE HERE
$('#pinkie').click(function(){
	$('#tickled_text').css('color','pink');
});

// Problem 4 (Greet Me) -----------------------------------------------------
$('#my_name_button').click(function(){
	alert('hi '+$('#my_name').val());

});


// WRITE CODE HERE
