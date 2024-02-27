// const num = document.getElementById("number");
// const lower = document.getElementById("lower");
// const add = document.getElementById("add");

// let count = 0;

// lower.addEventListener("click", lowerNum);
// add.addEventListener("click", addNum);

// function lowerNum(e) {
//     e.preventDefault();
//     count--;
//     num.innerText = count;

//     if (count <= -1) {
//         num.classList.add("red");

//         num.classList.remove("green");
//     }


// }

// function addNum(e) {
//     e.preventDefault();
//     count++;
//     num.innerText = count;

//     if (count >= 1) {
//         num.classList.add("green");

//         num.classList.remove("red");
//     }

// }

// function updateColors() {
//     if (count >= 1) {
//         num.classList.add("green");

//         num.classList.remove("red");
//     }
//     else if (count <= -1) {
//         num.classList.add("red");

//         num.classList.remove("green");
//     }
//     else {
//         num.classList.add("black");
//         num.classList.remove("red");
//         num.classList.remove("green");
//     }
// }

// JavaScript code
const num = document.getElementById("number");
const lower = document.getElementById("lower");
const add = document.getElementById("add");

let count = 0;

lower.addEventListener("click", lowerNum);
add.addEventListener("click", addNum);

function updateColor() {
    num.style.color = count < 0 ? "red" : count > 0 ? "green" : "black";
}

function lowerNum(e) {
    e.preventDefault();
    count--;
    num.innerText = count;
    updateColor();
}

function addNum(e) {
    e.preventDefault();
    count++;
    num.innerText = count;
    updateColor();
}

// Initialize the color based on the initial count value
updateColor();
