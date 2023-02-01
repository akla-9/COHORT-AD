const form = document.querySelector(".login");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.querySelector(".btn");


form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement; 
    const errorDisplay = inputControl.querySelector('.invalid');
    errorDisplay.innerText = message;
    inputControl.classList.add('invalid');
    inputControl.classList.remove('valid');
}

const setValid = element =>{
    const inputControl = element.parentElement; 
    const errorDisplay = inputControl.querySelector('.invalid');
    errorDisplay.innerText = "";
    inputControl.classList.add('valid');
    inputControl.classList.remove('invalid');
}


const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    
    if(usernameValue ===""){
        setError(username, 'Username is required');
    } 
    else {
        setValid(username);
    }

    if(passwordValue ===""){
        setError(password, 'Password is required');
    } 
    else {
        setValid(password);
    }

    if(usernameValue !="" && passwordValue!="") {
        submit.addEventListener ('click', ()=>{
            window.location.href="page2.html"
        })
    }
}


