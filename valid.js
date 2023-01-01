function myfunction(){
var x =document.getElementById("pass");
if(x.type== "password"){
   x.type = "text";
}
  else{
x.type = "password";
}
}

function validate(){
var password = document.getElementById("pass").value;
var name = document.getElementById("name").value;
var length = document.getElementById("length").value;
if(password== "27527274jo" && name=="jonathanc" || length >=8) {
alert("Login Successful");
window.location.replace("account.html");
}
else{
 alert("Login Failed");
return;
}
}
