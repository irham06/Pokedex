$(document).ready(function(){
	$('#About').click(function(){
		$('.about').fadeIn();
		$('.basestats').hide();
	});

	$('#Basestats').click(function(){
		$('.about').hide();
		$('.basestats').fadeIn();
	})
});



