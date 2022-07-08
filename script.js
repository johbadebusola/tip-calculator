
// Tip percentage button
let bill = document.querySelector("#bill");
let numOfPeople = document.querySelector("#people");
let btn = document.querySelectorAll("#btn");
let tipAmountOutput = document.querySelector("#p2");
let totalBillPerPersonOutput = document.querySelector("#p3");



// looping through each button
btn.forEach(e =>{
    e.addEventListener("click", add)
})

function add(){
//  this.cLassList.add("active");

// To validate if number of people is empty
if (numOfPeople.value.trim() === "") {
    numOfPeople.setAttribute("style","border: 2px solid red")
    return;
}else{
    numOfPeople.setAttribute("style","border: 2px solid green")
}

// Calculations for amount of tip per person
let tipAmountPerPerson = ((this.value/100) * bill.value) / numOfPeople.value;
tipAmountOutput.innerHTML = "$" + tipAmountPerPerson.toFixed(2);

// Calculations for amount of total amount  per person
let billPerPerson = bill.value / numOfPeople.value;
let totalBillPerPerson = +billPerPerson + +tipAmountPerPerson;
totalBillPerPersonOutput.innerHTML = "$" +  totalBillPerPerson.toFixed(2);
console.log(totalBillPerPerson.toFixed(2));

reset.setAttribute("style","background-color:hsl(172, 67%, 45%);")
}



//Rdeset button
let reset = document.querySelector("#reset");
reset.addEventListener("click", e =>{
    totalBillPerPersonOutput.innerHTML = "$0.00";
    tipAmountOutput.innerHTML = "$0.00";
    reset.setAttribute("style","background-color:hsl(183, 100%, 10%);")
})
