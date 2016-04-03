//if this function is called, the page will be redirectend to the url between the brackets.
function Click() {
    if (document.getElementById("playerName") != null) {
        document.getElementById('playerName').textContent;
        window.location.replace('./game.html');
    } else {
        alert("Please enter a player name.")
    }
}