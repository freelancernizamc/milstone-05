const incomeInput = document.getElementById("income");
const foodInput = document.getElementById("food");
const rentInput = document.getElementById("rent");
const clothInput = document.getElementById("cloth");
const expensesInput = document.getElementById("total-expenses");
const calculateBtn = document.getElementById("calculate-btn");


document.getElementById('calculate-btn').addEventListener("click", function(){

// function calculateExpenses() {
    const incomeInput = document.getElementById("income");
    const foodInput = document.getElementById("food");
    const rentInput = document.getElementById("rent");
    const clothInput = document.getElementById("clothes");
    const income = parseFloat(incomeInput.value);
    const food = parseFloat(foodInput.value);
    const rent = parseFloat(rentInput.value);
    const clothes = parseFloat(clothInput.value);
    const totalExpenses = food + rent + clothes;
    
    
    const remainingBalance = income-totalExpenses;
    document.getElementById("total-expenses").innerText = totalExpenses;
     document.getElementById("balance").innerText = remainingBalance;
   
    
});

document.getElementById('save-btn').addEventListener('click', function(){
    const savePercentage = document.getElementById("save");
      const savingsAmount = parseFloat(savePercentage.value);
      const incomeInput = document.getElementById("income");
      const income = parseFloat(incomeInput.value);
      const totalExpenses = food + rent + clothes;
      
        
    //   Validate saving percentage value
  if (savingsAmount < 0) {
    alert("Please Provide positive saving value");
  }
  else{
    const newSavingsAmount = (savingsAmount/100) * income;
    

    document.getElementById("saving-amount").innerText = newSavingsAmount;
    const remainingBalance = income-totalExpenses;
    
     const balance = document.getElementById('balance').innerText;
    const newBalance = parseFloat(balance) - parseFloat(newSavingsAmount);
    document.getElementById('new-balance').innerText = newBalance;
   
    
    
  }

});




