$( document ).ready(function() {

makeDivs();
checkIfLast ()
getTheArray();

});

var arrA = [];
var arrB = [];
var arrC = [];
var arrD = [];
var arrC = [];

function makeDivs (aDivs) {

	$('div').each(function(index) {
		var $idValue = $( this ).attr('id'); //Gets the id of the div
		$(this).html($idValue) //outputs it on html so that I can see the id of the div
	});

}



function checkIfLast () {

	$('div').on("click", function(e) {



		if (arrA.length == 0) {
			var getFirst = $(this).attr('id')
			$firstChar = getFirst.slice(0,-1)


			$(this).addClass("clicked")

			getTheArray($firstChar);

		}
	})
			
}
	// var $lastElement = $currentDiv[$currentDiv.length-1].id;

			// $(this).addClass('clicked')

			// console.log("the last element is " + $lastElement)

	// $('div[id^="A"]').each(function(index) {
	// 	arrA.push($(this).attr('id'))
	// 	console.log(arrA)
	// });

	// var $lastElement = $currentDiv[$currentDiv.length-1].id;

		// if ($(this).attr('id') == $lastElement) {
		// 	$(this).addClass('clicked')

		// 	console.log("the last element is " + $lastElement)

		// 		}

		

function getTheArray($firstChar) {

	var $yes = $(`div[id^="${$firstChar}"]`);

	$yes.each(function() {
		if (!$(this).hasClass('clicked')) {
		arrA.push(($(this).attr('id')))
		console.log(arrA)
	}
	});

	gotoNext(arrA);
}


function gotoNext() {

		$('div').on("click", function(e) {
			if ($(this).attr('id') == (arrA[arrA.length-1])) {
				$(this).addClass("clicked")
			}

		});

}