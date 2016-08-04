#pragma strict

var block : Transform;
var countdown : float;



function Start () {
	countdown = Random.Range(0,10);
}

function Update () {

	countdown -= Time.deltaTime;

	if(countdown <=0){

	for (var y = 0; y < 1; y++) {
        for (var x = 0; x < 1; x++) {
            Instantiate(block, Vector3 (3.7, -0.4, -2), Quaternion.identity);
        }
    }
		//Debug.Log("THIS IS BLOCK SCRIPT");
		countdown = Random.Range(0,10);
}


}