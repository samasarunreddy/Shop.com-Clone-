let userData = JSON.parse(localStorage.getItem("userDetails"));
let loginData = document.querySelector("form");
loginData.addEventListener("submit",function(event){
    event.preventDefault();
    let data = {
        email : loginData.email.value,
        password : loginData.password.value,
    }
    localStorage.setItem("loginData",JSON.stringify(data));
    loginfunc(data);
})

let userEmail;
let userPassword;
let loginEmail;
let loginPassword;
function loginfunc(data){
    for(let i in userData){
        userEmail = userData.email;
        userPassword = userData.password;
    }
    for(let j in data){
        loginEmail = data.email;
        loginPassword = data.password;
    }
    if(userEmail===loginEmail && userPassword===loginPassword){
        alert ("Logged in Successfully");
        window.location.href = "./homepage.html";
    }else{
        alert ("Inavlid Credentials");
    }
}