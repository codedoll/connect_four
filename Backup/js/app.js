$(document).ready(function() {

    makeDivs();


})


var p1Click = [];
var p2Click = [];   

var turnTracker = 0;


function makeDivs() {

    $('div').each(function(index) {

        var $idValue = $(this).attr('id'); //Gets the id of the div
        $(this).html($idValue) //outputs it on html so that I can see the id of the div
        $(this).addClass('noclick')

        // 	$(this).on("click", function(e) {
        // 		$(this).addClass('clicked')
        // });

    })

    activateTop();
}


function activateTop() {

    // console.log($("div[id*='6']"))
    var $a = $("div[id*='6']");

    $($a).each(function(index) {
        $(this).removeClass('noclick')
    })

    nowClickable();


}


    
function nowClickable() {

    var $this;
    $('div').on("click", function(e) {

        $(this).addClass('clicked')
        $this = $(this).attr('id')

        turnTracker++;

        if (turnTracker%2==0) {
            $(this).addClass('p2Click') 
            p2Click.push($(this).attr('id'))
            
            var $p2Score = $('#p2Score')
			checkArray($p2Score,p2Click)
            $('#turn').html('blue')

        }
        
        else {
            $(this).addClass('p1Click')
            p1Click.push($(this).attr("id"))
            
            var $p1Score = $('#p1Score')
			$('#turn').html('red')

          	checkArray($p1Score,p1Click)
        }

        highlightGuyOnBottom($this);

    });

}


function highlightGuyOnBottom($this) {
    var arr = [];

    // console.log($this)

    var $oneLetter = $this.slice(0, -1)

    $(`div[id*='${$oneLetter}']`).each(function(index) { //http://stackoverflow.com/questions/7841048/how-to-check-if-an-element-does-not-have-a-specific-class

        // console.log($(this))
        if (!$(this).hasClass("clicked")) {
            arr.push($(this).attr('id'));
        }

        if ($(this).hasClass("clickable")) {
         $(this).removeClass("clickable")
     }

 })

    // console.log(arr)
    // console.log(arr[arr.length - 1])

    var lastElement = arr[arr.length - 1]
    $(`#${lastElement}`).addClass('clickable')
    $(`#${lastElement}`).removeClass('noclick')

}


function checkArray ($pScore,pClick) {
    if (pClick.length>20){
        countScores($pScore,pClick)
    }
}



function countScores($pScore,pClick) {


    var arr = pClick.sort();
    console.log(arr)

        var x=0;

        $($pScore).html("hi")


}
