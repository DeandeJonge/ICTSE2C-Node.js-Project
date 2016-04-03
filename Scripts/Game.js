//if this function is called, the page will be redirectend to the url between the brackets.
function Click() {
    if (document.getElementById("playerName").value.length > 0) {
        document.getElementById('playerName').textContent;
        window.location.replace('./game.html');
    } else {
        alert("Please enter a player name.")
    }
}