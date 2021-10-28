let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");
function greeter(){
    let username = "Hello" + " " + txtName.value + "!";
    dvResult.innerHTML = username;
    //console.log(username);
}