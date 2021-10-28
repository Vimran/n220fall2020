function Tip(){
    var bill = Number(document.getElementById("totalBill"). value);
    var tip = bill * .18;
    var total = bill + tip;
    dvResult.innerHTML = ("Tip: $ " + tip + " " + "Total: $ " + total);
    //console.log("Tip: " + tip + " " + "Total: " + total);
}