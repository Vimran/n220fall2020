var divs;
for(let i = 1; i<=100; i++){
    let div = document.createElement('div');
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    div.style.width="20px";
    div.style.height="20px";
    div.style.float="left";
    div.style.backgroundColor = "rgb("+ red +", "+ green +", "+ blue +")";
    document.body.appendChild(div);
}
