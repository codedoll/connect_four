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
var p1Score = 0;
var p2Score = 0;
    var $this;
    $('div').on("click", function(e) {

        $(this).addClass('clicked')
        $this = $(this).attr('id')

        turnTracker++;

        if (turnTracker%2==0) {
            $(this).addClass('p2Click') 
            p2Click.push($(this).attr('id'))
            countScores(p2Score, p2Click)
            console.log(`p2Score is ${p2Score}`)           
        }
        
        else {
            $(this).addClass('p1Click')
            p1Click.push($(this).attr("id"))
            countScores(p1Score,p1Click)
            console.log(`p1Score is ${p1Score}`)
        }

        highlightGuyOnBottom($this);

    });

}


// function countScores(pScore,pClick) {
//     var connect4 = 0;
//     var countConnect = 1;
//     var countConnect2 = 1;

//     console.log(pClick)

//         for (var i = 1; i < pClick.length; i++) {
//             var a = pClick[i];
//             console.log("char is " + a.charAt(0))
//             var b = pClick[i-1]
//             console.log(b)

//             if (a.charAt(0)==b.charAt(0)){
//                 countConnect++;
//                 console.log(countConnect + " is countConnect")
//             }

//             if (countConnect>3) {
//                 pScore++;
//                 console.log(pScore +" pScore is")
//             }

//         }
// }


function highlightGuyOnBottom($this) {
    var arr = [];

    console.log($this)

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

