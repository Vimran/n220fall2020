function Convert(){
    var USDollar = Number(document.getElementById("USDollar"). value);
    var conversion = USDollar * .88;
    dvResult.innerHTML = ("Coverted Amount % " + conversion);
}