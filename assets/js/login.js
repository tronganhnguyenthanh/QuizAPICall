function checkLoginSystem(){
 let username = document.querySelector("#inputUsername").value
 let password = document.querySelector("#inputPassword").value
 if(username === "" || password === ""){
  document.querySelector("#message").innerHTML = "<p class='text-center text-danger'>Please enter all fields</p>"
  return
 }else{
   if(username === localStorage.getItem("username") && password === localStorage.getItem("password")){
    window.location.href = "index.html"
   }else{
     document.querySelector("#message").innerHTML = `<a href="register.html" style="text-decoration:none">
      <p class='text-center text-danger'>Please sign up your new account</p>
     </a>
     `
   }
 }
}