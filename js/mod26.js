// Video 26-0 What is Dom
// Video 26-1 What is Event, different types of event in web

// Video 26-2 Add onclick handler directly or via javascript
// on click option 2 important
function makeRed(){
    document.body.style.backgroundColor ='red';
}

// option 3 e use sometime
 const makeBlueButton = document.getElementById('make-blue');
 makeBlueButton.onclick = makeBlue;

 function makeBlue(){
    document.body.style.backgroundColor = 'blue'; 
 }

 const purpleButton = document.getElementById('make-purple');
 purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';

 }

//  Video 26-3 Different ways to use addEventListener on a button
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor ='pink';
}

const makeTometoButton = document.getElementById('make-tometo');
makeTometoButton.addEventListener('click', function makeTometo(){
    document.body.style.backgroundColor = 'orange';
})

// final option : important we will use it some time
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
    document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod';
    })


    // Video 26-4 Most common ways to set Event Handlers

    function handleOnClick(){
        
        const handlerStatus = document.getElementById('handler-status');
        handlerStatus.innerText = 'Handled by function attached on onclick attribute';
       }

       document.getElementById('even-listener').addEventListener('click', function(){
        const handlerStatus = document.getElementById('handler-status');
        handlerStatus.innerText = 'Text updated by add Event listener button';
       })

    //    option 2: recap
    document.getElementById('button-update').addEventListener('click', function(){
        const inputField = document.getElementById('input-field');
        const inputText = inputField.value;
        const p = document.getElementById('input-text-display');
        p.innerText = inputText;
        inputField.value = '';
    })

    // Video 26-5 Create a comment box and display comment
// Step 1: add event listener to the post button
   document.getElementById('btn-post').addEventListener('click', function(){
    // console.log('post button clicked');
    // step 2: get the comment inside the text area
    const commentBox = document.getElementById('new-comment');
    const newComent =commentBox.value;
    // step-3: set the comment inside the comment container
    // 1. get the comment container
    //  2. create a new element (p tag)
    // 3. set the text of the comment as innerText of the p tag
    // 4. add the p tha using appendChild
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComent;
    commentContainer.appendChild(p);
    // Step 4: clear the text area
    commentBox.value = '';

   })

//    Video 26-6 Simple github like delete confirmation button
// document.getElementById('text-in').addEventListener('focus', function(){
//     console.log('Event triggered inside the input field')
// })
// document.getElementById('text-in').addEventListener('blurr', function(){
//     console.log('Event triggered inside the input field')
// })
// document.getElementById('btn-more').addEventListener('mouseenter', function(){
//     // console.log('Event Trigger');
// })
document.getElementById('btn-more').addEventListener('keydown', function(event){
    // console.log('Event.target.value');
})

document.getElementById('btn-more').addEventListener('keypress', function(event){
     console.log('Event.target.value');
})
document.getElementById('btn-more').addEventListener('keyup', function(event){
     console.log('Event.target.value');
})

document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('button-delete');
    if(text === 'email'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none';
})

// Video 26-7 (semi-advanced) Event bubble and Stop propagating

document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 click');
    event.stopPropagation();
})
document.getElementById('list-ul').addEventListener('click', function(event){
    console.log('ul clicked');
    event.stopImmediatePropagation();
})
document.getElementById('list-container').addEventListener('click', function(){
    console.log('section container clicked');
})


// Video 26-8 (advanced) Event delegate and benefit of Event bubble

const items = document.getElementsByClassName('item');
for(const item of items){
    item.addEventListener('click', function(event){
        // 
        event.target.parentNode.removeChild(event.target);

    })

}
document.getElementById('list-container2').addEventListener('click', function(event){
    // console.log(event.target);
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('btn-add-item').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container2');
    const li = document.createElement('li');
    li.innerText = 'Brand New item added';
    li.classList.add('item');
    listContainer.appendChild(li);
})

// Video 26-9 DOM events summary and home work

// option 1
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}
// Option 2
document.getElementById('make-red').addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})