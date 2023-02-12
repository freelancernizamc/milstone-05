console.log('Panda');
// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।

const allHeadings = document.getElementsByTagName('h2');
 for (const h2 of allHeadings){
    h2.style.color = 'blue';

 }

//  ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।

const backPack = document.getElementById('backpack');

    backPack.style.backgroundColor = 'tomato';

    // ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা

     const cards = document.getElementsByClassName('card');
     for(const card of cards){
         card.style.borderRadius = '30px';
     }

     const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
    link.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "#FF4991";
    this.style.color = "black";
    });
  
    link.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "";
    });
    });

    // কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো
    function handleOnClick(){
        
        const handlerStatus = document.getElementById('handler-status');
        // handlerStatus.innerText = 'Handled by function attached on onclick attribute';
        console.log('This is Even Handler');
       }

    //    এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে চেষ্টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।

//     document.getElementById('btn-post').addEventListener('click', function(event){
//     const commentContainer = document.getElementById('comment-container');
//     const p = document.createElement('p');
//     p.innerText = newComent;
//     commentContainer.appendChild(p);
//     // Step 4: clear the text area
//     commentBox.value = '';

//    })

//    একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'email'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }
    
})


// . (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।
function changeImage() {
    document.getElementById("myImage").src = "https://i3.extraimage.xyz/pix/2023/02/11/uuWkUr.jpg";
  }
  
  function revertImage() {
    document.getElementById("myImage").src = "images/bags/bag-3.png";
  }

// (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে।

  document.getElementById('contact').addEventListener('dblclick', function(event) {
    var targetElement = event.target;
    console.log(targetElement.id);
    if (targetElement.id === "contact") {
        console.log(event.target);
      event.target.style.backgroundColor = "red";
    }
  });