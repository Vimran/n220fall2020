let petDiv = document.getElementById("petDiv");

let myPet = {
    name: "Tom",
    energy: 4,
    happiness: 2,
    age: 3
}
document.getElementById("petDiv").innerHTML =
"Name: " + myPet.name + " Energy: " + myPet.energy + " Happiness: " + myPet.happiness;

function Feed(){
    myPet.energy = myPet.energy + 5;
    console.log(myPet.energy);
    document.getElementById("petDiv").innerHTML =
    "Name: " + myPet.name + " Energy: " + myPet.energy + " Happiness: " + myPet.happiness;
   
}
function Play(){
    myPet.happiness = myPet.happiness + 5;
    console.log(myPet.happiness);
    document.getElementById("petDiv").innerHTML =
    "Name: " + myPet.name + " Energy: " + myPet.energy + " Happiness: " + myPet.happiness;

}




