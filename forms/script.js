/*
*/
const form = document.querySelector('#firstname');
const voorNaam = document.querySelector("#display-firstname");
console.log(form);
console.log(voorNaam);
form.addEventListener('keyup', function() {
    voorNaam.innerHTML = document.getElementById("firstname").value;
});

const age = document.querySelector('#age');
const hardeWaarheid = document.querySelector('#a-hard-truth');
age.addEventListener('keyup', function() {
    if (document.getElementById("age").value >= 18) {
        hardeWaarheid.style.visibility = "visible";
    }
        else{
        hardeWaarheid.style.visibility = "hidden";
        }
    
})

const pas = document.querySelector('#pwd');
const pasConf = document.querySelector('#pwd-confirm');
pas.addEventListener('keyup', function(){
    if (condition) {
        
    } else {
        
    }
})

/*
if(password.value.length < 6 || password.value !== passwordConfirm.value) {
  password.style.backgroundColor = "red";
  passwordConfirm.style.backgroundColor = "red";
}
else {
  password.style.backgroundColor = "white";
  passwordConfirm.style.backgroundColor = "white";
}
*/