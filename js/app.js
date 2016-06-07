$( document ).ready(function() {

$('div').each(function(index) {

	var $idValue = $( this ).attr('id');

	$(this).html($idValue)


});


});
