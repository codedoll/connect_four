$(document).ready(function() {

    makeDivs();


})


// var p1Click = [];
// var p2Click = [];   

// var turnTracker = 0;


function makeDivs() {



    $('div').each(function(index) {

        var $idValue = $(this).attr('id'); //Gets the id of the div
        $(this).html($idValue) //outputs it on html so that I can see the id of the div
        $(this).addClass('noclick')

        console.log($(this))
    })

    


}

