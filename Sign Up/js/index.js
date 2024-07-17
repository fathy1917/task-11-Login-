var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var required = document.getElementById("required");
var signup = document.getElementById("signup");

var userContainer = [];


if (localStorage.getItem('Users') != null) {
    userContainer = JSON.parse(localStorage.getItem('Users'));
}

function validateInputs(element) {
    var regex = {
        signupName: /^[a-z]{2,8}$/,
        signupEmail: /^[a-z]{2,10}@(gmail|yahoo)\.(com|net)$/,
        signupPassword: /^[a-zA-Z0-9]{6,12}$/  
    };
    if (regex[element.id].test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    }
}

signupName.addEventListener('input', function() { validateInputs(signupName); });
signupEmail.addEventListener('input', function() { validateInputs(signupEmail); });
signupPassword.addEventListener('input', function() { validateInputs(signupPassword); });


function signUp() {
    var obj = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    };

    if (checkInputsEmpty()) {
        required.innerHTML = `<p class="text-center text-danger mt-3">All Inputs Required</p>`;
    } else if (checkEmailExist()) {
        required.innerHTML = `<p class="text-center text-danger mt-3">Email already exists</p>`;
    } else {
        userContainer.push(obj);
        localStorage.setItem('Users', JSON.stringify(userContainer));
        clrForm();
        required.innerHTML = `<p class="text-center text-success mt-3">Success</p>`;
        location.href = '../Login/index.html';  
    }
}

function checkInputsEmpty() {
    return signupName.value === '' || signupEmail.value === '' || signupPassword.value === '';
}

function checkEmailExist() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email === signupEmail.value) {
            return true;
        }
    }
    return false;
}

function clrForm() {
    signupName.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
    signupName.classList.remove("is-valid", "is-invalid");
    signupEmail.classList.remove("is-valid", "is-invalid");
    signupPassword.classList.remove("is-valid", "is-invalid");
}

signup.addEventListener("click", signUp);
