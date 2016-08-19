#pragma strict

private var scoreText : GUIText;
private  var score : int;

function Start () {
    score = 0;
    UpdateScore ();
}


function AddScore (newScoreValue : int) {
    score += newScoreValue;
    UpdateScore ();
}

function UpdateScore () {
    scoreText.text ="Score: " + score;
}