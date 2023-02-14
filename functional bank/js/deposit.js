// console.log('deposit file connected');
// console.log(myUtility);



document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked');
    /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    Video 28-6 (advanced) Share one function between two input field
    Video 28-7 (advanced) get and set element value using a function
    1. get previous deposit total by id
    */
   const newDepositAmount = getInputFieldValueById('deposit-field');
   const previousDepositTotal = getTextElementValueById('deposit-total');
//    calculate new deposit total
const newDepositTotal = previousDepositTotal + newDepositAmount;
// set deposit value
setTextElementValueById('deposit-total', newDepositTotal);

// get previous balance by using the function
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueById('balance-total', newBalanceTotal);

})

// Video 28-8 (advanced) Shared Balance update function
