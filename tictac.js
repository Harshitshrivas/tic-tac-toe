
let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset");
let newgame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

const winpatters = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let turn= true;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn){
            box.innerText = "X";
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;

        checkwinner();
    })
});

const checkwinner = () => {
     let winnerFound = false;
    for(let Pattern of winpatters){
        let pos1val =  boxes[Pattern[0]].innerText;
        let pos2val = boxes[Pattern[1]].innerText;
        let pos3val = boxes[Pattern[2]].innerText;
if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
        if(pos1val === pos2val && pos2val === pos3val ){
            showwinner(pos1val);
            winnerFound = true;
                break;
        }
     }
    }
    // draw pata karne k liya 
     if (!winnerFound) {
        let allFilled = true;
        boxes.forEach((box) => {
            if (box.innerText === "") {
                allFilled = false;
            }
        });
        if (allFilled) {
            msg.innerText = "🤝 It's a Draw!";
            msgcontainer.classList.remove("hide");
        }
    }
}

const showwinner=(winner)=>{
 msg.innerText = `Congatulation, Player ${winner} wins!`;
 msgcontainer.classList.remove("hide");
 disabledboxes();
}

const disabledboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetgame = ()=>{
    turn = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
     newgame.addEventListener('click',resetgame);
     resetbtn.addEventListener('click',resetgame);  
     
    