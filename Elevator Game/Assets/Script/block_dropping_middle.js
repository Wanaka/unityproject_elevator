#pragma strict

var block : Transform;
var countdown : float;



function Start () {
	countdown = Random.Range(10,15);
}

function Update () {

	countdown -= Time.deltaTime;

	if(countdown <=0){

	for (var y = 0; y < 1; y++) {
        for (var x = 0; x < 1; x++) {
            Instantiate(block, Vector3 (0.12, 0.05, -2.5), Quaternion.identity);
        }
    }
		//Debug.Log("THIS IS BLOCK SCRIPT");
		countdown = Random.Range(10,15);
}


}