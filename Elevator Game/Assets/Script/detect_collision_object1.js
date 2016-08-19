#pragma strict

public var otherGameObject :  GameObject;

private var detectCollisionObject0 : detect_collision_object0;

function Start () {
	detectCollisionObject0 = otherGameObject.GetComponent(detect_collision_object0);
}

function Update () {}

function OnTriggerEnter (other : Collider) {

	//check if the correct block enter and add one point. Otherwise remove a life.
		if(other.gameObject.tag == "blueColor"){
			detectCollisionObject0.points+=detectCollisionObject0.addPoints;
			    Debug.Log("blueColor");
			    	   // Debug.Log("Reading another script works!!! " + detectCollisionObject0.points);

			detectCollisionObject0.checkCollision = true;
		} else{
			Debug.Log("NOO wrong blockssss");
			detectCollisionObject0.checkCollision = false;
		}
		
		if(detectCollisionObject0.checkCollision){
			Debug.Log(detectCollisionObject0.points + "point"); 
		}
}