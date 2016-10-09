$(document).ready(function() {
    $("body").append("<p> Testing Testing 123 </p>");
    $('p#pooVolume').hide()
    $('p#foodMedIn').hide();
    $('p#labName').hide();
    $('p#labVal').hide();

    $('input[name="record[rType]"]').click(function() {
	$('p#pooVolume').hide()
	$('p#foodMedIn').hide();
	$('p#labName').hide();
	$('p#labVal').hide();

	var rType=$('input[name="record[rType]"]:checked').val();
	$('body').append('<p>' + rType + '</p>');
	$('body').append('<p>' + 'test' + rType +'test' +  '</p>');
	switch(parseInt(rType, 10) ) {
	case 1:
	    $('p#pooVolume').fadeIn('fast');
	    break;
	case 3:
	    $('p#labName').fadeIn('fast');
	    $('p#labVal').fadeIn('fast');
	    break
	case 4:
	    $('p#foodMedIn').fadeIn('fast');
	    break;
	    
	default:
	    $('body').append('<p>' + 'now' + '</p>');
	
	    break;
	};


    });

});

