#pragma strict

public var scoreText : GUIText;
private var score : int;

function Start () {
   // scoreText = GameObject.Find("scoreText").GetComponent(GUIText);
    score = 0;
    UpdateScore();
}

function AddScore (newScoreValue : int) { // works
	   //Debug.Log (" this is AddScore"); 
    score += newScoreValue;
    // Debug.Log("score: " + score); // scoring works!
    UpdateScore ();
}

function UpdateScore () { // works
		//Debug.Log (" this is UpdateScore"); 
    scoreText.text = " " + score; // works!
}