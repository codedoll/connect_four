$(document).ready(function() {

    makeDivs();


})


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

    console.log($("div[id*='6']"))
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
        highlightGuyOnBottom($this);


    });

}

function highlightGuyOnBottom($this) {
    var arr = [];
    console.log($this)

    var $oneLetter = $this.slice(0, -1)

    $(`div[id*='${$oneLetter}']`).each(function(index) {

        console.log($(this))

        if (!$(this).hasClass("clicked")) {
            arr.push($(this).attr('id'));

        }


        if ($(this).hasClass("clickable")) {
			$(this).removeClass("clickable")
        }

    })

    console.log(arr)

    console.log(arr[arr.length - 1])
    var lastElement = arr[arr.length - 1]
    $(`#${lastElement}`).addClass('clickable')
    $(`#${lastElement}`).removeClass('noclick')
}

