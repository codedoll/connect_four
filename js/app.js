$(document).ready(function() {

    makeDivs();

})


var p1Click = [];
var p2Click = [];

var turnTracker = 0; //looks at whose turn it is


function makeDivs() {

    var $allSections = $('#gameboard').find("section");
    $sectionID = $allSections.attr('id');
    var counter = 1;

    $allSections.each(function(index) {
        // console.log($allSections.length)
        for (var i = 0; i < 6; i++) {

            console.log($(this).index('section'))
            var sectionIndex = $(this).index('section')

            var $thisID = $(this).attr('id');
            console.log(counter)

            $(this).append(`<div id = ${$thisID}${counter}${sectionIndex} class="noclick"></div>`)

            // var $getDivs = $(this).find("div");
            // $getDivs.each(function(index){
            //     $(this).attr("id")
            // })
            // var letter = ["A","B","C","D","E","F"];


            //                 console.log(i)
            //                 console.log(letter[i])

            // $(this).attr('id',`${letter[index]}`)
            if (counter < 6) {
                counter++;
            } else {
                counter = 1;
            }
        }

    })


    // $('div').each(function(index) {

    //     var $idValue = $(this).attr('id'); //Gets the id of the div
    //     $(this).html($idValue) //outputs it on html so that I can see the id of the div
    //     $(this).addClass('noclick')

    // })

    activateTop();
}


function activateTop() { //makes the div on top clickable

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

        if (turnTracker % 2 == 0) {
            $(this).addClass('p2Click')
            p2Click.push($(this).attr('id'))

            var $p2Score = $('#p2Score')
            countScores($p2Score, p2Click)
            $('#turn').removeClass('red')

            $('#turn').html('blue')
            $('#turn').addClass('blue')

        } else {
            $(this).addClass('p1Click')
            p1Click.push($(this).attr("id"))

            var $p1Score = $('#p1Score')
            $('#turn').removeClass('blue')

            $('#turn').html('red')
            $('#turn').addClass('red')


            countScores($p1Score, p1Click)
        }

        highlightGuyOnBottom($this);

    });

}


function highlightGuyOnBottom($this) {
    var arr = [];

    // console.log($this)

    var $oneLetter = $this.slice(0, -2)

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
    if (!$('#whoseturn').hasClass('won')) {

        var lastElement = arr[arr.length - 1]
        $(`#${lastElement}`).addClass('clickable')
        $(`#${lastElement}`).removeClass('noclick')
    }

}


function countScores($pScore, pClick) {
    if (pClick.length > 3) {
        countScores2($pScore, pClick)
    }
}


function countScores2($pScore, array) {
    var arr = array.sort();
    var x = [];
    var y = [];
    var z = [];
    console.log(arr)

    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i])

        var a = arr[i];
        var aa = a.charAt(0)
        var bb = a.charAt(1)
        var cc = a.substring(a.length - 2)

        x.push(aa)
        y.push(bb)
        z.push(cc)

        y = y.map(Number);
        z = z.map(Number);


        ySort = y.sort();
        zSort = z.sort();


    }

    console.log("x array: " + x)
    console.log("y array: " + y)
    console.log("z array: " + z)

    console.log("ySort: " + ySort)
    console.log("zSort: " + zSort)

    console.log("i is " + i)
    var i = 0;

    var counter = 0;
    var array1 = [];
    var r = 0;


    for (i = 0; i < arr.length - 3; i++) {

        var yy = y[i + 1]
        var yyy = y[i + 2]
        var yyyy = y[i + 3]

        var yySort = ySort[i + 1]
        var yyySort = ySort[i + 2]
        var yyyySort = ySort[i + 3]
            // console.log(x[i],x[i+1],x[i+2],x[i+2])

        if (x[i] === x[i + 1] && x[i + 1] === x[i + 2] && x[i + 2] === x[i + 3]) {

            if (y[i] + 1 == yy && y[i + 1] + 1 == yyy && y[i + 2] + 1 == yyyy) {


                counter++;
                console.log(arr)
                youWon(arr, $pScore)



            }
        }


        if (ySort[i] == yySort && ySort[i + 1] == yyySort && ySort[i + 2] == yyyySort) {
            if (z[i] + 1 == z[i + 1] && z[i + 1] + 1 == z[i + 2] && z[i + 2] + 1 == z[i + 3]) {
                // console.log(ySort[i]+"="+yySort+ "&&" + ySort[i + 1]+ "==" +yyySort+ "&&" +ySort[i + 2]+ "==" +yyyySort)
                counter++;
                youWon(arr, $pScore)

            }
        }

        // else if (y[i] - 1 == y[i-1] && y[i - 1] - 1 == y[i-2] && y[i - 2] - 1 == y[i-3])  {
        //     if (z[i] + 1 == z[i+1] && z[i + 1] + 1 == z[i+2] && z[i + 2] + 1 == z[i+3]) {
        //        alert("YO") 
        //         // $('div').addClass("noclick")
        //         // $('div').removeClass('clickable nodisplay');
        //         // removeClickable () 
        //         // counter++;
        //         // youWon(arr,$pScore)

        //     }
        // }

        // else if (y[i] == yy && y[i + 1] == yyy && y[i + 2] == yyyy) {

        //     // console.log("hi" + y[i],yy, y[i + 1], yyy, y[i + 2], yyyy)
        //     // console.log(x.join().replace(/,/g, ''))

        //     var compressed = x.join().replace(/,/g, '');
        //     console.log(compressed)

        //     if ("ABCDEF".indexOf(compressed) >= 0) {
        //         counter++
        //         $($pScore).html(counter);
        //         compressed = []
        //         return compressed;
        //     }
        // }

    }

    // DEREK NOTES
    // look at first element at postion 0
    // if position 0 + 1 === positon 0, move to the next
    //  if positon1 === positon 1 + 1

    //      look at first element at postion 0
    // if position 0 + 1 != positon 0 exit loop,
    //  move to next index

    // for (var i = 0; i < playerpicks-3; i++) {
    //  if position 0 + 1 === positon 0 && if position 0 + 2 === positon 0
    // }


    // console.log(arr)


}


function youWon(arr, $pScore) {
    $('div').addClass("noclick")
    $('div').removeClass('clickable nodisplay');

    $('#whoseturn').html('congratulations!');
    $('#whoseturn').addClass('won')



    if (arr === p1Click) {
        $($pScore).html("<span class='blue fade-in won'>blue won</span>");
        $('div').removeClass('clickable nodisplay');
    } else if (arr === p2Click) {
        $($pScore).html("<span class='red fade-in won'>red won</span>");
        $('div').removeClass('clickable nodisplay');
    }
    // console.log(y[i]+1,yy)
    // console.log(y[i+1]+1,yyy)
    // console.log(y[i+2]+1,yyyy)
    //  console.log(y[i],y[i+1],y[i+2],y[i+3])

}