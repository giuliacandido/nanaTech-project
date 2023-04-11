
//label animation
const inputs = document.querySelectorAll('input');
inputs.forEach((inp) => {
    inp.addEventListener('focus', () => {
        inp.classList.add('active');
    })

    inp.addEventListener('blur', () => {
        if(inp.value !== '') return;
        inp.classList.remove('active');
    })
})

//css animation when forms change
const toggle_btn = document.querySelectorAll('.toggle');
const main = document.querySelector('main');

toggle_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        main.classList.toggle('sign-in-mode');
    })
})

//sign up form validation
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

const isValidPsw = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(password));
}


const signUpForm = document.querySelector('.sign-up-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const pswInput = document.querySelector('#psw');
const repeatPswInput = document.querySelector('#repeat-psw');

//invalidate inputs
const invalidInput = (input, message) => {
    input.classList.add('error');
    input.nextElementSibling.classList.add('error');
    input.parentElement.lastElementChild.classList.add('error');
    input.parentElement.lastElementChild.innerText = message
}

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    allInputs.forEach((input) => {
        if(!input.value){
            invalidInput(input, 'please fill this camp');
        }
    })

    if(!isValidEmail(emailInput.value)){
            invalidInput(emailInput, 'please enter a valid email address');
        }

    if(!isValidPsw(pswInput.value)){
                invalidInput(pswInput, 'password must have 1 number, 1 letter and 8 characters');
        }

    if(repeatPswInput.value !== pswInput.value){
              invalidInput(repeatPswInput, 'the passwords do not match, please try again.');
        }


})


//reset inputs when gain focus
const allInputs = [nameInput, emailInput, pswInput, repeatPswInput];
allInputs.forEach((el) => {
    el.addEventListener('focus', () => {
        el.classList.remove('error');
        el.nextElementSibling.classList.remove('error');
        el.parentElement.lastElementChild.classList.remove('error');
    })
})



//login form validation
const signInForm = document.querySelector('.sign-in-form');
const loginName = document.querySelector('#login-name');
const loginPsw = document.querySelector('#login-psw');
const eyeIcon = document.querySelectorAll('i');

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!loginName.value){
        invalidInput(loginName, 'please fill this camp');
    }

    if(!loginPsw.value){
        invalidInput(loginPsw, 'please fill this camp');
    }

    const loginInputs = [loginName, loginPsw];
    loginInputs.forEach((el) => {
        el.addEventListener('focus', () => {
            el.classList.remove('error');
            el.nextElementSibling.classList.remove('error');
            el.parentElement.lastElementChild.classList.remove('error');
        })
    })
})

//show and hide password
eyeIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
        showPassword(pswInput, icon);
        showPassword(loginPsw, icon);
    })
})

const showPassword = (element, icon) => {
    if(element.getAttribute('type') === 'password'){
        element.setAttribute('type', 'text');
        icon.classList.add('active');
    }else {
        element.setAttribute('type', 'password');
        icon.classList.remove('active');
    }
}

