#pragma strict

public var myObjects : GameObject[];
private var arrayNumber : float;
private var collectRandomGameObjects = new Array ();

private var getY : float;
private var posY : float;
private var posX : float = 0.3;
private var posZ : float =  2.9;
private var randomFirst : float;
private var randomFirstPosition: float;
private var lastRandom : float;
private var counterForLoop : int;
private var createInstWhileLoop : boolean = true;
private var zeroTrue : boolean = true;
private var oneTrue : boolean = true;
private var twoTrue : boolean = true;
private var checkAllBooleansTrue : boolean = true;

function Start () {
//set random numbers to randomFirst
randomFirst = Random.Range(0,3);
}

//create instantes in function
function createInstantes(_collectRandomGameObjects, _posY) {
    var collect = _collectRandomGameObjects;
    posY = _posY;
    return Instantiate(myObjects[collect], Vector3 (posX, posY, posZ), Quaternion.identity);
     // arrayNumber = _arrayNumber;
}

function Update () {
/*
I dont get it to work with the random numbers to get the correct location...it's bugging me fucking much...

try creating an arry to keep the randomized gameobjects

count through the for loop of the gameObjects and make them match the ranodmfirst numbers to be set in the right section
*/

//as long as checkAllBooleansTrue is true, keep going!
while(checkAllBooleansTrue){

  // check if all booleans are false
  if(zeroTrue == false && oneTrue == false && twoTrue == false){
    checkAllBooleansTrue = false;
  }

//we need placeholding numbers to check of the o 1 and 2 has already been chosen.
switch(randomFirst) {
  case 0:
  if(zeroTrue){
    collectRandomGameObjects.Add(randomFirst);
    randomFirstPosition = randomFirst;
    Debug.Log("nummer 0");
    randomFirst = Random.Range(1,3);
    zeroTrue = false;
  }else{
    randomFirst = Random.Range(0,3);
  }
  break;
  case 1:
  if(oneTrue){
    collectRandomGameObjects.Add(randomFirst);
    randomFirstPosition = randomFirst;
    Debug.Log("nummer 1");
    randomFirst = Random.Range(0,3);
    oneTrue = false;
    while(randomFirst == "1") {
      randomFirst = Random.Range(0,3);
    }

  } else{
    oneTrue = false;
    randomFirst = Random.Range(0,3);
  }
  break;
  case 2:
  if(twoTrue){
    collectRandomGameObjects.Add(randomFirst);
    randomFirstPosition = randomFirst;
    Debug.Log("nummer 2");
    randomFirst = Random.Range(0,2);
    twoTrue = false;
  }else{
    randomFirst = Random.Range(0,3);
  }
  break;
}

// switch case that creates the instantiate and creates its

    /*
      try to make a for loop looping through the collectrandomobject array and then figure out how to 
      change the getY in switch.
*/
for(var m=0; m < collectRandomGameObjects.length; m++){

  //get correct positions
    switch(m) {
    case 0:
    getY = 1.2;
    //createInstantes(collectRandomGameObjects[0], getY);
    break;
    case 1:
    getY = -0.4;
    //createInstantes(collectRandomGameObjects[1], getY);
    break;
    case 2:
    getY = -2.1;
    //createInstantes(collectRandomGameObjects[2], getY);
    break;
    }

    createInstantes(collectRandomGameObjects[m], getY);
}//end for loop


    Debug.Log("collectRandomGameObjects: " + collectRandomGameObjects);

}//end while loop


/*
need to connect the two sections w/ the cubes. 
The cube randomized in first place should be located to the first position, and so on...
must be a number collector for the three diff. position to know which is which,
*/

//instantiate the gol cubes and their position





}//end update