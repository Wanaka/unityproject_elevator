#pragma strict

private var countdown : float = 1.2;
private var speed : float;

//colors
private var color : Renderer;
private var g : Color = Color.green;
private var b : Color = Color.blue;
private var y : Color = Color.yellow;
private var colorsRandom : int;

//scoring system
public var checkCollision : boolean = false;
private var scoreValue : int;
private var uiText : scoreText;

function Start () {
	speed = Random.Range(0.2, 0.6);
    color = GetComponent.<Renderer>();
	colorsRandom = Random.Range(0,3);

    //section of the uitext script and scoring point system
    scoreValue=1;

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

function Update () {

	 switch(colorsRandom) {
    case 0:
        color.material.color = y;
        gameObject.tag = "yellowColor"; //add tag of color
        break;
    case 1:
        color.material.color = g;
        gameObject.tag = "greenColor";  //add tag of color
        break;
    case 2:
        color.material.color = b;
        gameObject.tag = "blueColor";   //add tag of color
        break;
}

//Debug.Log(gameObject.tag);

 countdown-= Time.deltaTime;
 if(countdown<=0.0){

 // Move the object upward in world space 1 unit/second.
		transform.Translate(speed * Vector3.forward * Time.deltaTime, Space.World);
}

}
/*
    Need to change the location of the funcking collider and check for tags....to only send one point at the time no more

*/
function OnTriggerEnter (other : Collider) {
    //check if the correct block enter and add one point. Otherwise remove a life.
    if(gameObject.tag == "yellowColor" && other.gameObject.tag == "goalObjectTag0"){
           // uiText.AddScore(scoreValue); // works
            checkCollision = true;
            Debug.Log("yellow works");
            //Destroy(gameObject);
        } else if(gameObject.tag == "greenColor" && other.gameObject.tag == "goalObjectTag1"){
           // uiText.AddScore(scoreValue); // works
            checkCollision = true;
            Debug.Log("green works");
            //Destroy(gameObject);
        } else if(gameObject.tag == "blueColor" && other.gameObject.tag == "goalObjectTag2"){
            //uiText.AddScore(scoreValue); // works
            checkCollision = true;
            Debug.Log("blue works");
           // Destroy(gameObject);
        } else{
            //Debug.Log("NOO wrong blockssss");
            Destroy(gameObject);
        }

        if(checkCollision){
            checkCollision = false;
            uiText.AddScore(scoreValue); // works
            Destroy(gameObject);
        }
        
}