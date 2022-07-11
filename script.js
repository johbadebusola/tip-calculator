
let bill = document.querySelector("#bill");
let numOfPeople = document.querySelector("#people");
let tipBtn = document.querySelectorAll("#btn");
let tipAmountOutput = document.querySelector("#p2");
let totalBillPerPersonOutput = document.querySelector("#p3");

// looping through each of the tip button
tipBtn.forEach(e =>{
    e.addEventListener("click", calculate)
})
