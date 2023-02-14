
// Video 27-4 Navigate to another page, Deposit, withdraw, Balance grid
// 27-5 Create Deposit and withdraw amount Input Fields
// 27-6 Get User deposit and set deposit total value
// step1:add event listener to the deposit button

    document.getElementById('btn-deposit').addEventListener('click', function(){

   // step 2: get the deposit amount from the deposit input field
     // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //  console.log(typeof newDepositAmount);
    // step 3: get the current deposit total
    // for non input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof previousDepositTotal);
    // step 4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
        // step 5: get balance current total
        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-6 calculate current total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
// set the balance total
balanceTotalElement.innerText = currentBalanceTotal;
    

// 27-7 Update deposit and balance and handle string add
// step-7: clear the deposit field
depositField.value = '';
})

// Video 27-8 Money withdraw and reduce balance for withdraw

/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw field
2.5 also make sure to convert the input into a number by using parseFloat
3.get previous withdraw total
*/
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked');
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
      // step 7: clear the input field
   withdrawField.value = '';
    // console.log(newWithDrawAmount);
    if(isNaN(newWithDrawAmount)){
        alert('Please provide a valid number');
        return;
    }
    // step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);
    // step 4: calculate total withdraw amount
    // step 5:
 
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

 

   if(newWithDrawAmount > previousBalanceTotal){
    alert('Baap ar bank e ato taka nai');
    return;
   }

   const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;
//    console.log(previousBalanceTotal);
// 6. calculate new balance total
const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
balanceTotalElement.innerText = newBalanceTotal;
   
   
   
    
})
