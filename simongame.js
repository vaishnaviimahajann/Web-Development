// colors
let btns = ["yellow", "red", "purple", "green"];

let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");

// game start
document.addEventListener("keydown", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

// level up function
function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    gameseq.push(randomColor);

    let randomBtn = document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
}

// button flash
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

// user button press
for (let btn of allBtns) {
    btn.addEventListener("click", function () {
        let userColor = btn.classList[1];
        userseq.push(userColor);

        btnFlash(btn);
        checkAns(userseq.length - 1);
    });
}

// check answer
function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = "Game Over, Press Any Key to Restart";
        reset();
    }
}

// reset game
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
