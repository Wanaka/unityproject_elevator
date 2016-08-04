#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
		Debug.Log("hello world!");
		Destroy(other.gameObject);
		Debug.Log("Object Destroyed!");

}