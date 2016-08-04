#pragma strict
public var speed = 2;

function Start () {

}

function Update () {
//Up
 if( Input.GetKey( KeyCode.W ) ){
 // Move the object upward in world space 1 unit/second.
		transform.Translate(speed * Vector3.up * Time.deltaTime, Space.World);
}
//Down
 if( Input.GetKey( KeyCode.S ) ){
 // Move the object down in world space 1 unit/second.
		transform.Translate(speed * Vector3.down * Time.deltaTime, Space.World);
}
}