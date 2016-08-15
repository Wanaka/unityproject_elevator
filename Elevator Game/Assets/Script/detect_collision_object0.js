#pragma strict
private var checkCollision : boolean = false;

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	
		if(other.gameObject.tag == "yellowColor"){
			Debug.Log("collision 0 works");
			checkCollision = true;
		} else{
			Debug.Log("NOO wrong blockssss");
			checkCollision = false;
		}
		
if(checkCollision){Debug.Log("1" + "point"); }
	

}