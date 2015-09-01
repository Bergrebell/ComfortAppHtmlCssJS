
$('#temp > input[type="button"]').click(function(){
	console.log("a temp button pressed");
	event.preventDefault();

    $('#temp input[type="button"].active').removeClass('active');
        $(this).addClass('active');
});



$('#lighting > input[type="button"]').click(function(){
	console.log("a lighting button pressed");
	event.preventDefault();

    $('#lighting input[type="button"].active').removeClass('active');
        $(this).addClass('active');
});



$('#noise > input[type="button"]').click(function(){
	console.log("a noise button pressed");
	event.preventDefault();

    $('#noise input[type="button"].active').removeClass('active');
        $(this).addClass('active');
});






$('#submitButton').click(function(){
	console.log("submitButton clicked");

	$(".active").each( function () {
		console.log( $(this).val() );
		// hack - because nearest parent is a div of JQM without an id
		console.log( $(this).parent().attr("id"));
	});
});