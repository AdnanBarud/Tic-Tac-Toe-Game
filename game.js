let boxes = document.querySelectorAll(".box");
let button = document.querySelector("#reset");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector(".msg")
let newBtn= document.querySelector("#new-game-btn");
let resetBtn= document.querySelector("#reset");



// player value initiation
let playerX=true;

// pattern for wining 
const winingPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
];



//creating arrow function for showing wineer text and whos win
let showWinner= (winner)=>{
    msg.innerText=`${winner} is the Winner`;
    msgContainer.classList.remove("hide");
    disabledButton();
};

//if match draw the then this function print msg on scree
const drawGame=()=>{
    msg.innerText=("Match Has Draw Play Again")
    msgContainer.classList.remove("hide");
};

const forx = ()=>{
    msgContainer.classList.remove("hide");
}

//for checking player click or not creating arrow function
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(playerX===true){
            box.innerText = "X";
            playerX=false;
            box.classList.add("forX");
            
            
        }
        else{
            box.innerText ="O"
            playerX=true;
            box.classList.remove("forX");
        }
        box.disabled=true;
        
        checkWinner();
    })
})


//for checking winner writing fucnction
let checkWinner = (arr)=>{
    for(let pattern of winingPattern){
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
      
        if(pos1!=""&& pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
                return;
            }
            
            
        }
    } 
    let allFilled = Array.from(boxes).every((box) => box.innerText !== "");
    if (allFilled) {
        drawGame();
    }
}; 

//adding arrow function for disabling button
//this button using when player win
let disabledButton= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//adding arrow function for enabling button
//this button using when we click on newgame or reset game
let enabledButton= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

//creating reset button for newbotton 
const resetGame =()=>{
    enabledButton();
    msgContainer.classList.add("hide");
};

//adding new-game and reset-game for functioning
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);