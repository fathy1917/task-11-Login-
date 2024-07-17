var wlc = document.getElementById("wlc").innerHTML = `Welcome ${localStorage.getItem("userName")}`
var logout = document.getElementById("logout")


logout.addEventListener("click", function(){
    location.href = '../Login/index.html'
})
