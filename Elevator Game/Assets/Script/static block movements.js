#pragma strict
public var minZ : float =0.05f;
public var maxZ : float =0.1f;

public var minY : float =0.05f;
public var maxY : float =0.1f;

function Start () {
	//z positions
	minZ=transform.position.z;
	maxZ=transform.position.z + 0.1;

	//y positions
	minY=transform.position.y;
	maxY=transform.position.y + 0.1;
}

function Update () {
	transform.position =new Vector3(transform.position.x, transform.position.y, Mathf.PingPong(Time.time * 0.08, maxZ-minZ)+minZ);
}