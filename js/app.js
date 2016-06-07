$( document ).ready(function() {
getDivs();

});


function getDivs () {
	$('div').each(function(index) {

		var $idValue = $( this ).attr('id'); //Gets the id of the div
		$(this).html($idValue) //outputs it on html so that I can see the id of the div

		$(this).on("click", function(e) {
			alert($idValue)
		})

	});
}