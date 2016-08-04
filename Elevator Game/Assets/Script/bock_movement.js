#pragma strict

private var countdown : float = 1.2;
private var speed : float;

//colors
private var color : Renderer;
private var g : Color = Color.green;
private var b : Color = Color.blue;
private var y : Color = Color.yellow;
private var colorsRandom : int;

function Start () {
	speed = Random.Range(0.2, 0.6);
    color = GetComponent.<Renderer>();
	colorsRandom = Random.Range(0,3);
}

function Update () {

	 switch(colorsRandom) {
    case 0:
        color.material.color = y;
        break;
    case 1:
        color.material.color = g;
        break;
    case 2:
        color.material.color = b;
        break;
}

 countdown-= Time.deltaTime;
 if(countdown<=0.0){

 // Move the object upward in world space 1 unit/second.
		transform.Translate(speed * Vector3.forward * Time.deltaTime, Space.World);
}

}


