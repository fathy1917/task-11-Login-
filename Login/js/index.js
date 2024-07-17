var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var login = document.getElementById("login");
var required = document.getElementById("required");

var user = [];
if(localStorage.getItem('Users') != null) {
    user = JSON.parse(localStorage.getItem('Users'));
}

login.addEventListener("click", function(){
    if(signinEmail.value.trim() === "" || signinPassword.value.trim() === ""){
        required.innerHTML = `<p class="text-center text-danger mt-3">All inputs are required</p>`;
    }else{
        checkValidation();
    }
});

function checkValidation(){
    var isValid = false;
    for(var i = 0; i < user.length; i++){
        if(signinEmail.value === user[i].email && signinPassword.value === user[i].password){
            localStorage.setItem("userName", user[i].name);
            location.href = '../Home/index.html';
            isValid = true;
            break;
        }
    }
    if(!isValid){
        required.innerHTML = `<p class="text-center text-danger mt-3">Incorrect email or password</p>`;
    }
}
