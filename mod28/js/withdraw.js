// Video 28-3 (recap) Update deposit and balance and read code
// Video 28-4 Money withdraw and reduce balance for withdraw

// console.log('withdraw file connected');
/*
1. add event handler with the withdraw button
2. get the withdraw amount
3. clear the withdraw input field
4. get previous withdraw total
5. calculate total withdraw amount and set it to the withdraw total element
6. get previous balance
7. calculate new balance and set it to the balance total element
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked');
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    // step-3
    withdrawField.value = '';
    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    // step-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-7

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})

// Video 28-5 (semi-advanced) Common function to reduce code repeat
