// Problem 2 (Peekaboo) ------------------------------------------------------
// WRITE CODE HERE


$('#toggle_img').click(function() { 
	if ( $('#toggle_img').text() == 'Come Back!') {
		$('#toggle_img').text('Go Away!');
		$('#main_img').show();
	}
	else {
		$('#toggle_img').text('Come Back!');
		$('#main_img').hide();
	}
});
 

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE

$('#change_img').click(function() {
	$('#main_img').attr('src','/static/img/'+
		$('#new_img_file').val())
});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
	alert($(this).attr('src'));
  // WRITE CODE HERE
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE

$('.clack').click(function(){
	$('#bigimage').attr('src',$(this).attr('src'));
});