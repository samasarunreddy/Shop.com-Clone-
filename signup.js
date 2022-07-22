let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj = {
        name : form.name.value,
        email : form.email.value,
        mbl : form.number.value,
        gender : form.gender.value,
        password : form.password.value,
    }
    localStorage.setItem("userDetails",JSON.stringify(obj));
    alert ("Account created successfully");
});