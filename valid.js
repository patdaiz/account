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
if(password== "Amin2020" && name=="Amin" || length >=8) {
alert("Login Successful");
alert("welcome Amin");
window.location.replace("account.html");
}
else{
 alert("Login Failed");
return;
}
}

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        2500
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
}
)

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
