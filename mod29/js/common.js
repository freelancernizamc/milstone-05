function getTextElementValueById(elementId){
    // calculate total
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    //calculate total
    
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    
    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);
    const finalAmount = currentSubTotal +taxAmount;
    setTextElementValueById('final-total', finalAmount);
}



// Video 29-6 Pin matcher overview Generate pin and display it
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}




function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // console.log(pin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

// Video 29-7 Use event bubble to create calculator and clear

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        // console.log(number);
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            // console.log(previousTypedNumber);
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
   else{
    
    
    const newTypeNumber = previousTypedNumber + number;
    typedNumberField.value = newTypeNumber;
   }
})

// Video 29-8 Verify match and show correct message

document.getElementById('verify-pin').addEventListener('click', function(){
    // console.log('verify pin clicked');
    const displayPinField = document.getElementById('display-pin');
    const currentpin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(typedNumber === currentpin){
        // console.log('correct pin');
        
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        // console.log('incorrect pin');
       
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
});

// Video 29-9 Pin Matcher overview and daily challenge
// Practice Video
// 29_5-1 Practice Money master and handle a few validation
// 29_5-2 Deploy, re-deploy to surge and common errors

