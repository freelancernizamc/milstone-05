// calculate kitkat chocolate price with quantity
// document
//   .getElementById("kitkat-buy-btn")
//   .addEventListener("click", function () {
//     const kitkatCost = multiplePriceWithQuantity("kitkat-quantity", 200);
//     setInnerText("chocolate", kitkatCost);
//     document.getElementById("kitkat-quantity").value = "";
//     total();
//   });

// function handleKitkat() {
//     const kitkatCost = multiplePriceWithQuantity("kitkat-quantity", 200);
//     setInnerText("chocolate", kitkatCost);
//     document.getElementById("kitkat-quantity").value = "";
//     total();
//   }
//   // calculate rose  price with quantity
//   document.getElementById("rose-buy-btn").addEventListener("click", function () {
//     const roseCost = multiplePriceWithQuantity("rose-quantity", 100);
//     setInnerText("rose", roseCost);
//     document.getElementById("rose-quantity").value = "";
//     total();
//   });
//   // calculate diary  price with quantity
//   document.getElementById("diary-buy-btn").addEventListener("click", function () {
//     const diaryCost = multiplePriceWithQuantity("diary-quantity", 500);
//     setInnerText("diary", diaryCost);
//     document.getElementById("diary-quantity").value = "";
//     total();
//   });
//   function total(params) {
//     const chocolate = stringToNumberConverter("chocolate");
//     const rose = stringToNumberConverter("rose");
//     const diary = stringToNumberConverter("diary");
//     const total = chocolate + rose + diary;
//     setInnerText("total", total);
//   }
//   // pass the id of the tag this function will convert just innertext to number
//   function stringToNumberConverter(id) {
//     const element = document.getElementById(id).innerText;
//     return parseFloat(element);
//   }
//   // this function will take id & value of tag and set innertext
//   function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
//   }
  
//   // this fucntion will calculate the quatity and price of gift this fucntion will take two parameter inutField id & price of gift
//   function multiplePriceWithQuantity(id, price) {
//     const quantity = document.getElementById(id).value;
//     const totalPrice = parseInt(quantity) * parseInt(price);
//     return totalPrice;
//   }
  
//   function handlePromoCode(params) {
//     const promoCode = document.getElementById("promo-code").value;
//     if (promoCode == "DISCO30") {
//       const total = stringToNumberConverter("total");
//       setInnerText("all-total", total - total * 0.3);
//     } else {
//       alert("promo code is not correct");
//     }
//   }
  




// Editor


let textArea = document.getElementById("editor");

    function alignText(alignment) {
      textArea.style.textAlign = alignment;
    }

    function toggleBold() {
        if (textArea.style.fontWeight === 'bold') {
          textArea.style.fontWeight = 'normal';
        } else {
          textArea.style.fontWeight = 'bold';
        }
      }

    function toggleItalic() {
        if (textArea.style.fontStyle === 'italic') {
          textArea.style.fontStyle = 'normal';
        } else {
          textArea.style.fontStyle = 'italic';
        }
      }

    //   color picker
    
    let colorPicker = document.getElementById("color-picker");

    // function changeColor() {
    //   textArea.style.color = colorPicker.value;
    // }
    // function changeColor() {
    //     let selectedText = window.getSelection().toString();
    //     if (selectedText) {
    //       let span = document.createElement("span");
    //       span.style.color = colorPicker.value;
    //       span.appendChild(document.createTextNode(selectedText));
    //       let range = window.getSelection().getRangeAt(0);
    //       range.deleteContents();
    //       range.insertNode(span);
    //     } else {
    //       textArea.style.color = colorPicker.value;
    //     }
    //   }
  

    function changeColor() {
        let selectedText = window.getSelection().toString();
        if (selectedText) {
          let span = document.createElement("span");
          span.style.color = colorPicker.value;
          span.appendChild(document.createTextNode(selectedText));
          let range = window.getSelection().getRangeAt(0);
          range.deleteContents();
          range.insertNode(span);
        } else {
          textArea.style.color = colorPicker.value;
        }
      }
       

      // document.getElementById("add-btn").addEventListener('click', function(){
      //   const value = document.getElementById('text-input').value;
      //   const container = document.getElementById("parent-container");
      //   const li = document.createElement("li");
      //   li.innerText = value;
      //   container.appendChild(li);
      // });

      document.getElementById("add-btn").addEventListener('click', function(){
        const value = document.getElementById("text-input").value;
        const container = document.getElementById("parent-container");
        const li = document.createElement('li');
        li.innerText = value;
        li.classList.add("new-li");
        container.appendChild(li);
        const alllist = document.getElementsByClassName("new-li");
        for(const item of alllist){
          item.addEventListener('click', function(e){
            // console.log(e.target.parentNode);
            e.target.parentNode.removeChild(e.target);
          })
          
        }
        
      });



      // document.getElementById("p-1").innerText = "Hellow-1";
      // document.getElementById("p-2").innerText = "Hellow-1";
      // document.getElementById("p-3").innerText = "Hellow-1";
      // document.getElementById("p-4").innerText = "Hellow-1";
      
  document.getElementById("hit").addEventListener("click", function(){
      // document.getElementById("p-1").innerText = "Bangladesh";
      // document.getElementById("p-2").innerText = "Bangladesh";
      // document.getElementById("p-3").innerText = "Bangladesh";
      // document.getElementById("p-4").innerText = "Bangladesh";
      setInnerText("p-1", "Bangladesh");
      setInnerText("p-2", "Chaina");
      setInnerText("p-3", "India");
      setInnerText("p-4", "USA");
      const inputValue = getInputValue("text-input");
      console.log(inputValue);
    });

function setInnerText(id, value){
  document.getElementById(id).innerText = value;
}


function getInputValue(id){
  const value = document.getElementById(id).value;
  // console.log(value);
  return value;
}




// digital watch
function digitalClock() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  const time = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerText = time;

  setTimeout(digitalClock, 1000);
}

digitalClock();