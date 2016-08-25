#pragma strict

public var myObjects : GameObject[];
private var arrayNumber : float;
private var collectRandomGameObjects = new Array ();

private var getY : float;
private var posY : float;
private var posX : float = 0.03;
private var posZ : float =  2.9;
private var randomFirst : float;
private var lastRandom : float;
private var counterForLoop : int;
private var createInstWhileLoop : boolean = true;
private var zeroTrue : boolean = true;
private var oneTrue : boolean = true;
private var twoTrue : boolean = true;
private var checkAllBooleansTrue : boolean = true;
private var instanteGoalObjects : boolean = false;


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
//as long as checkAllBooleansTrue is true, keep going!
while(checkAllBooleansTrue){

  // check if all booleans are false
  if(zeroTrue == false && oneTrue == false && twoTrue == false){
    instanteGoalObjects = true;
    checkAllBooleansTrue = false;
  }

//we need placeholding numbers to check of the o 1 and 2 has already been chosen.

switch(randomFirst) {
  case 0:
  if(zeroTrue){
    collectRandomGameObjects.Add(randomFirst);
    Debug.Log("nummer 0");
    randomFirst = Random.Range(1,3);
    zeroTrue = false;
  }else{
    randomFirst = Random.Range(1,3);
  }
  break;

  case 1:
  if(oneTrue){
    collectRandomGameObjects.Add(randomFirst);
    Debug.Log("nummer 1");
    randomFirst = Random.Range(0,2); // randomize between 0 and 1
    if(randomFirst == 0){ //if randomnumber = 0 then randomfirst = 0 otherwise = 2
      randomFirst = 0;
    } else{
      randomFirst = 2;
    }
    oneTrue = false;
  }
  break;

  case 2:
  if(twoTrue){
    collectRandomGameObjects.Add(randomFirst);
    Debug.Log("nummer 2");
    randomFirst = Random.Range(0,2);
    twoTrue = false;
  }else{
    randomFirst = Random.Range(0,2);
  }
  break;
}



    Debug.Log("collectRandomGameObjects: " + collectRandomGameObjects);

}//end while loop

//should only run AFTER the array with the goal objects has been created. And run only once.
while(instanteGoalObjects){
// switch case that creates the instantiate and creates its
for(var m=0; m < collectRandomGameObjects.length; m++){

  //get correct positions
    switch(m) {
    case 0:
    getY = 1.2;
    break;
    case 1:
    getY = -0.4;
    break;
    case 2:
    getY = -2.1;
    break;
    }

    createInstantes(collectRandomGameObjects[m], getY);
  }//end for loop
  instanteGoalObjects = false;
}//end while loop
}//end update