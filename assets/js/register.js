function registerAccount(){
 let username = document.querySelector("#inputUsername").value
 let password = document.querySelector("#inputPassword").value
 if(username === "" || password === ""){
  document.querySelector("#message").innerHTML = "<p class='text-center text-danger'>Please enter all fields</p>"
  return
 }else{
   localStorage.setItem("username", username)
   localStorage.setItem("password", password)
   window.location.href = "login.html"
 }
}