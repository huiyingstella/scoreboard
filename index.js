let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")
let count = 0
let number = 0

function increment1() {
    count = count + 1
    homeEl.textContent = count
}
function increment2() {
    count = count + 2
    homeEl.textContent = count
}
function increment3() {
    count = count + 3
    homeEl.textContent = count
}
function save1() {
    let countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr
    homeEl.textContent = 0
    count = 0
}

function add1() {
    number = number + 1
    guestEl.textContent = number
}
function add2() {
    number = number + 2
    guestEl.textContent = number
}
function add3() {
    number = number + 3
    guestEl.textContent = number
}
function sum() {
    let numberStr = number + " - "
    sumEl.textContent = sumEl.textContent + numberStr
    guestEl.textContent = 0
    number = 0
}