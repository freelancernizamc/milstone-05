// console.log('withdraw file connected');
/*
1. add withdrawbutton event function
2. get withdraw amount by using getInputFieldValueById function
3. previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw total and set the value
4.5 set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
*/


document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw clicked');
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // console.log(newWithdrawAmount);
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})

// Video 28-9 (advanced) Nested function and error handling
