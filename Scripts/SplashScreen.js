$(window).load(function () {
    $('#splashscreen').fadeOut(5000);
    $('#startGame').hide().delay(5000).fadeIn(1000);
    $("#startGame").click(function () {
        pageRedirect('index');
    })
})

function pageRedirect($page) {
    console.log('test1');
    if ($page === 'index') {
        console.log('test2');
        window.location.replace('./Index.html');
    }
}
