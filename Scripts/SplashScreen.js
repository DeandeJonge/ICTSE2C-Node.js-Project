//This function will load handle the splash screen.
// It will fadeout the picture and the text and fade in the button to go to the pregame page.
$(window).load(function () {
    $('#splashscreen').fadeOut(5000);
    $('#startGame').hide().delay(5000).fadeIn(1000);
    $("#startGame").click(function () {
        pageRedirect('index');
    })


})
//function to change the page. This will redirect you to the pregame screen.
function pageRedirect($page) {
    if ($page === 'index') {
        window.location.replace('./preGame.html');
    }
}
