#pragma strict

//colors
private var color : Renderer;
private var g : Color = Color.green;
private var b : Color = Color.blue;
private var y : Color = Color.yellow;
private var colorsRandom : int;

function Start () {
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

}


