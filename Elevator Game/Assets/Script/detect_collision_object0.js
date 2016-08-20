#pragma strict
/*
public var checkCollision : boolean = false;
public var points : int;
public var addPoints : int;

private var scoreValue : int;
private var uiText : scoreText;

function Start () {
	scoreValue=1;
	//points = 0;
	//addPoints = 1;

	var uiTextObject : GameObject = GameObject.FindWithTag ("uitext"); //WORKS
    if (uiTextObject != null)
    {
        uiText = uiTextObject.GetComponent(scoreText);
    }
    if (uiText == null)
    {
        Debug.Log ("Cannot find 'GameController' script");
    }
}

function Update () {}

function OnTriggerEnter (other : Collider) {
	//check if the correct block enter and add one point. Otherwise remove a life.
		if(other.gameObject.tag == "yellowColor"){
			checkCollision = true;
		} else{
			Debug.Log("NOO wrong blockssss");
			checkCollision = false;
			Destroy(other.gameObject);
		}
		
		
		if(checkCollision){
			uiText.AddScore(scoreValue); // works
			checkCollision = false;
			Destroy(other.gameObject);
		}
		
}
 */