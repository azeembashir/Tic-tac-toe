let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgCont = document.querySelector(".msg-cont");
let newBtn = document.querySelector("#new-btn");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgCont.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
    
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
}

const showWinner =(winner)=> {
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgCont.classList.remove("hide");
        disableBoxes();
        
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let poss1Val = boxes[pattern[0]].innerText;
        let poss2Val = boxes[pattern[1]].innerText;
        let poss3Val = boxes[pattern[2]].innerText;

        if(poss1Val != "" && poss2Val != "" && poss3Val != "") {
            if(poss1Val == poss2Val && poss2Val == poss3Val) {
                console.log("Winner", poss1Val);

                showWinner(poss1Val);

                
            }
        }
        
    }
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
