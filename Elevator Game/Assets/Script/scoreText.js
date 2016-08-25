#pragma strict

public var scoreText : GUIText;
private var score : int;

public var lifeText : GUIText;
private var life : int;
function Start () {
   // scoreText = GameObject.Find("scoreText").GetComponent(GUIText);
    score = 0;
    life = 3;
    UpdateScore();
    UpdateLife();
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

function RemoveLife (newRemoveLife : int){
  life += newRemoveLife;
  UpdateLife();
}

function UpdateLife (){
  lifeText.text = "L: " + life; // works!
}