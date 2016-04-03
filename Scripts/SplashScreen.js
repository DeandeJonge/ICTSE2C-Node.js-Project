$(window).load(function () {
    $('#splashscreen').fadeOut(5000);
    $('#startGame').hide().delay(5000).fadeIn(1000);
    $("#startGame").click(function () {
        pageRedirect('index');
    })

})

function pageRedirect($page) {
    if ($page === 'index') {
        window.location.replace('./Index.html');
    }
}
