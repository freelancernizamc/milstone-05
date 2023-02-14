// Video 27-1 Project overview, Tailwind review text align text color
// Video 27-2 Login form, input field, password text field, submit
// 27-3 Add event listener and compare email password
// step 1: add click event handler with the submit button
document.getElementById('button-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email input field
    // always remember to use value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step 3: get password
    // 3.a set id on the html element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);
    // Danger: Do not verify email password on the client side
    // step 4: verify email and password and check whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){
        // console.log('valid user');
        window.location.href = 'bank.html'
    }
    else{
        // console.log('invalid user');
        alert('Tui password vule gesos!! Toke ami tejjo sontan korlam');
    }
})



