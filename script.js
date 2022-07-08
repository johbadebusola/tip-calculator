//Rdeset button
let reset = document.querySelector("#reset");
reset.addEventListener("click", e =>{
    
})

// Tip percentage button
let bill = document.querySelector("#bill");
let numOfPeople = document.querySelector("#people");
let btn = document.querySelectorAll("#btn");
let tipAmountOutput = document.querySelector("#p2");
btn.forEach(e =>{
    e.addEventListener("click", add)
})

function add(){
//  this.cLassList.add("active");


let tipAmountPerPerson = ((this.value/100) * bill.value) / numOfPeople.value;

if (numOfPeople.value.trim() === "") {
    numOfPeople.setAttribute("style","border: 2px solid red")
    return;
}else{
    numOfPeople.setAttribute("style","border: 2px solid green")
}


tipAmountOutput.innerHTML = "$" + tipAmountPerPerson.toFixed(2);

    // console.log(((this.value/100) * bill.value) / numOfPeople.value);
}