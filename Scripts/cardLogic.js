$("pickQuestion").click(function(){
    $.ajax({
        type: "GET",
        url: "http://localhost/cards/scripts/cards.json"
    })

})