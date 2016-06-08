$(document).ready(function() {

    makeDivs();


})

var p1Click = [];
var p2Click = [];
var counter = 0;

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

        counter++;
        // console.log(counter)

        if (counter%2==0) {
            // console.log("counter%2==0")
            //console.log($(this))
           $(this).addClass('p1Click')
           p1Click.push($(this).attr('id'))
           console.log("p1Click: "+ p1Click)

        }
        
        else {
            // console.log("!counter%2==0")
            $(this).addClass('p2Click') 
            p2Click.push($(this).attr("id"))
            console.log("p2Click :" + p2Click)

        }

        highlightGuyOnBottom($this);


    });

}


function highlightGuyOnBottom($this) {
    var arr = [];

    console.log($this)

    var $oneLetter = $this.slice(0, -1)

    $(`div[id*='${$oneLetter}']`).each(function(index) {

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

