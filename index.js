const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#error-message');
const denominations = [2000,500,200,100,50,20,10,5,2,1]
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector('#next-button');
const resultContainer = document.querySelector(".result");
const tableContainer = document.querySelector(".final-result");

checkButton.addEventListener("click", display);
nextButton.addEventListener("click", () => {
    resultContainer.style.display = 'flex';

});

function display() {
    validate()
    tableContainer.style.display = "flex";
}

function validate() {
    message.style.display = "None";
    if(isNaN(billAmount.value) || isNaN(cashGiven.value)) {
        showMessage("Please enter a valid number!")
    } else {
        if(billAmount.value > 0) {
            const amountToBeGiven = cashGiven.value - billAmount.value;
            numberOfNotes(amountToBeGiven);
        }else {
            showMessage("Please enter a number greater than 0!")
        }
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function numberOfNotes(amount) {
    for(let i = 0; i < denominations.length; i++) {
        const notes = Math.trunc(amount / denominations[i]);
        amount %= denominations[i]; 
        noOfNotes[i].innerText = notes;
    }
    
}