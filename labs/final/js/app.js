let displayStatus = document.getElementById(displayStatus);
let currentlyPlaying = true;
let currentPlayer = "X";
let gameStatus = ["", "", "", "", "", "", "", "", ""];
let txtWinner = "Player" + currentPlayer + "is the winner";
const txtTie = "It's a tie!";
let currentTurn = "It's" + currentPlayer + " 's turn";
displayStatus.innerHTML = currentTurn();
const winnings = [ /** these are the indexes that need to be populated in order to be the winner. The second resource helped me visualize this as it is a bit confusing to explain in words */
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function playCell(clickCell, clickCellIndex){ /** updates game with the move */
  gameStatus[clickCellIndex] = currentPlayer;
  clickCell.innerHTML = currentPlayer;
}
function changePlayer(){
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  displayStatus.innerHTML = currentTurn();
}
function result(){
 let winner = false;
 for (let i=0; i <= 7; i++){
   const winning = winnings[i];
   let a = gameStatus[winning[0]];
   let b = gameStatus[winning[1]];
   let c = gameStatus[winning[2]];
   if( a === '' || b === '' || c === ''){
     continue;
   }
   if(a === b && b === c){
     winner = true;
     break;
   }
 }
 if(winner) {
   gameStatus.innerHTML = txtWinner;
   currentlyPlaying = false;
   return;
 }
 let tie = !gameStatus.includes("");
 if(tie){
   displayStatus.innerHTML = txtTie();
   currentlyPlaying = false;
   return;
 }
 changePlayer();
}
function clickCell(clickCellEvent){
  let clickCell = clickCellEvent.target;
  const clickCellIndex = parseInt(clickCell.getAttribute('id')); /** getAttribute returns a string value. Here it is getting the id for the clicked cell */
  if (gameStatus[clickCellIndex] !== "" || !currentlyPlaying){ /** check if the call has been played */
    return;
  }
  playCell(clickCell, clickCellIndex);
  result();
}
function restartGame(){
  currentlyPlaying = true;
  currentPlayer = "X";
  gameStatus = ["", "", "", "", "", "", "", "", ""];
  displayStatus.innerHTML = currentTurn();
  document.querySelectorAll('grid')
    .forEach(grid => grid.innerHTML = "");
}
/*** got this line of code from the resource it is an event listener for clicking on the grid */
document.querySelectorAll('grid').forEach(grid => grid.addEventListener('click', clickCell));
