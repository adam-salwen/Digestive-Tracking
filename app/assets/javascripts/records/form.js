$(document).ready(function() {
    $("body").append("<p> Testing Testing 123 </p>");
    

    $('button').click(function() {
	var test=$('#record_rType_1').val();

	$('body').append('<p>' + test + '</p>');

    });

});

