    // console.log('mod29 file connected');
// Video 29-1 Module Overview and shopping cart increase case count
document.getElementById('btn-case-plus').addEventListener('click', function(){
    // console.log('case button clicked');
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
    // console.log(previousCaseNumber);
});
/*
1. add event listener to the case plus button
2. get the value inside the number field

*/
// Video 29-2 shopping cart handle decrease and update price

document.getElementById('btn-case-minus').addEventListener('click', function(){
    // console.log('case minus button clicked');
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    const newCaseNumber = previousCaseNumber- 1;
    caseNumberField.value = newCaseNumber;
})



