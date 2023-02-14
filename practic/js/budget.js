document.getElementById("kitkat-buy-btn").addEventListener("click", function(){
    // console.log('hello kitkat');
    // const quantity = document.getElementById("kitkat-quantity").value;
    const quantity = getInputValue("kitkat-quantity");
    const kitkatCost = quantity*200;
    setInnerText("chocolate", kitkatCost);
    total();
    // console.log(kitkatCost);
    // document.getElementById("chocolate").innerText = kitkatCost;
});
// function handleKitkat(){
//     console.log("hello kitkat");===> for use this function write in html onclick="handleKitkat()"
// }

document.getElementById("rose-buy-btn").addEventListener("click", function(){
    // const quantity = document.getElementById("rose-quantity").value;
    const quantity = getInputValue("rose-quantity");
    const roseCost = quantity*100;
    // document.getElementById("rose").innerText = roseCost;
    setInnerText("rose", roseCost);
    total();
});
document.getElementById("diary-buy-btn").addEventListener("click", function(){
    // const quantity = document.getElementById("diary-quantity").value;
    const quantity = getInputValue("diary-quantity");
    const diaryCost = quantity*100;
    // document.getElementById("diary").innerText = diaryCost;
    setInnerText("diary", diaryCost);
    total();
});

function setInnerText(id){
    document.getElementById(id).innerText = value;
}

function getInputValue(id){
    const value = document.getElementById(id).value;
    return parseInt(value);
}

// total

function total(parameter){
    const chocolate = document.getElementById("chocolate").innerText;
    const rose = document.getElementById("rose").innerText;
    const diary = document.getElementById("diary").innerText;
    const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
    // console.log(totalSum);
    // document.getElementById("total").innerText = totalSum;
    setInnerText("total", totalSum);
}

// promocode
document.getElementById("promoApplyBtn").addEventListener("click", function(){
    const promoCode = getInputValue("promo-code");
    // console.log(promoCode);
    if(promoCode == "DISCO30"){
        const total = document.getElementById("total").innerText;
        const sum = total - parseInt(total)*0.3;
        // console.log(sum);
        setInnerText("all-total", sum);
    }
    else{
        alert("wrong promocode try again with vaid code");
    }

});