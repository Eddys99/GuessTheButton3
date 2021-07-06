var correctButton = Math.floor(Math.random() * 3) + 1;

function checkButton(buttonId) {
    var checkClickedButton = buttonId;
    if (correctButton == checkClickedButton) {
        document.getElementById(buttonId).className = "btn btn-success";
        document.getElementById("message").innerHTML = "Correct ! :)";
    } else {
        document.getElementById(buttonId).className = "btn btn-danger";
        document.getElementById("message").innerHTML = "Wrong ! :(";
    }
}

function restartEverything() {
    location.reload();
}