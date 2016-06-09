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
            countScores($p2Score, p2Click)
        }
        
        else {
            $(this).addClass('p1Click')
            p1Click.push($(this).attr("id"))
            
            var $p1Score = $('#p1Score')
          countScores($p1Score,p1Click)
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





function countScores($pScore,pClick) {
    var connect4 = 0;
    var countConnect = 0;
    var countConnect2 = 0;
    var pScore = 0

    var arr = pClick.sort();
    console.log(pClick)

        var x=0;

    for (var i = 1; i < arr.length; i++) {
        
      
        // if (x>3) {
        //     $($pScore).html(x/4)
        // }

    }
            // console.log(arr)

            // console.log(x)

}
