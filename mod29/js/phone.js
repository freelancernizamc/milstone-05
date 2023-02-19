// console.log('phone connected');




function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    // const newPhoneNumber = previousPhoneNumber + 1;
    // phoneNumberField.value = newPhoneNumber;
    
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber -1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotelElement = document.getElementById('phone-total');
    phoneTotelElement.innerText = phoneTotalPrice;
}



// function getTextElementValueById(elementId){
//     // calculate total
//     const phoneTotalElement = document.getElementById(elementId);
//     const currentPhoneTotalString = phoneTotalElement.innerText;
//     const currentPhoneTotal = parseInt(currentPhoneTotalString);
//     return currentPhoneTotal;
// }

// function calculateSubTotal(){
//     //calculate total
    
//     const currentPhoneTotal = getTextElementValueById('phone-total');
//     const currentCaseTotal = getTextElementValueById('case-total');
//     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
//     const subTotalElement = document.getElementById('sub-total');
//     subTotalElement.innerText = currentSubTotal;
    
// }

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumberString = phoneNumberField.value;
    // const previousPhoneNumber = parseInt(phoneNumberString);
    
    // const newPhoneNumber = previousPhoneNumber + 1;
    // phoneNumberField.value = newPhoneNumber;






});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
});
// Video 29-4 (semi-advanced) Set Phone plus and minus button working
// Video 29-5 (advanced) Calculate subtotal tax amount and final total

