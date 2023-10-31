document.getElementById('btn').addEventListener('click',()=>{
   btn.classList.toggle('active')
   
   document.querySelector('nav').classList.toggle('show')
})


ReBtn = document.querySelector('#ReBtn');
email = document.getElementById('email')
age = document.getElementById('age')
pass = document.getElementById('password')
cpass = document.getElementById('Cpassword')
username = document.getElementById('name')



var numbers = /[0-9]/g;
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;

var users = []

// var passes = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

ReBtn.addEventListener('click', (e)=>{
   e.preventDefault()

   if(age.value == '' || username.value == '' || email.value == '' || pass.value === '' || cpass.value === '' ){

  email.style.border = '3px solid red'
  pass.style.border = '3px solid red'
  cpass.style.border = '3px solid red'
  age.style.border = '3px solid red'
  username.style.border = '3px solid red'
  }

  let userVal = username.value
  let emailVal = email.value
  let ageVal = age.value
  let passVal = pass.value
  let cpassVal = cpass.value
  
if (userVal.value == '' || userVal.length > 20) {
   document.getElementById('errorU').style.display = 'block';
   document.getElementById('errorU').innerHTML = "Enter Your Name"
}else{
   document.getElementById('errorU').style.display = "none"
}

if (emailVal == '') {
   document.getElementById('errorE').style.display = 'block';
   document.getElementById('errorE').innerHTML = "Enter a valid Email"
}else{
   document.getElementById('errorE').style.display = "none"
}

  if (age.value < 18 || age.value > 99){
   document.getElementById('errorA').style.display = 'block';
   document.getElementById('errorA').innerHTML = "Enter a valid age (18-99)"
  }else{
   document.getElementById('errorA').style.display = "none"
}



if (pass.value.length < 7 || pass.value.length > 11) {
  document.getElementById('error2').innerHTML = "Password must be at least 7 or less than 10 digits"
}else if(!pass.value.match(numbers)){
  document.getElementById('error2').innerHTML = "Your password must include a number, uppercase and lowercase"
}else if(!pass.value.match(upperCaseLetters)){
  document.getElementById('error2').innerHTML = "Your password must include a number, uppercase and lowercase"
}else if(!pass.value.match(lowerCaseLetters)){
  document.getElementById('error2').innerHTML = "Your password must include a number, uppercase and lowercase"
}else{
   document.getElementById('error2').style.display = "none"
}

  if (passVal != cpassVal) {
  document.getElementById('error3').innerHTML = "Password does not match"
   }else{
      document.getElementById('error3').style.display = "none"
   }

      var formData = JSON.parse(localStorage.getItem('formData')) || [];
  
      var exist = formData.length && 
  JSON.parse(localStorage.getItem('formData')).some(data =>
        data.email.toLowercase() == email.toLowerCase() &&
        data.password.toLowercase() == password.toLowerCase()
  );

      if (!exist) {
        formData.push({ email, age, username, password});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.getElementById('registra').reset();
        document.getElementById('email').focus();
        alert('Account Created')
      }else{
        alert('Acount already exist')
      }
}
)

// var emaill = document.getElementById('email2')
// var pass = document.getElementById('pass2')

// function login(e){

//   var email = document.getElementById('email').value, password = document.getElementById('password').value
//   var formData = JSON.parse(localStorage.getItem('formData')) || [];
//   var exist = formData.length && 
//   JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowercase() == email && data.password.toLowercase() == password)
//    if(!exist){
//     alert('Incorect details')
//    }else{
//     location.href = "/dashboard.html"
//    }
//    e.preventDefault();
//   }

document.querySelector('.d-dp').addEventListener('click', ()=>{
   document.querySelector('.dp').style.display = "block"
})

document.querySelector('.cancel').addEventListener('click', ()=>{
   document.querySelector('.dp').style.display = "none"
})

function clicklog(){
  document.getElementById("carry").classList.add('blured')
   document.getElementById("clickdev").style.display = "block";
}

function golog(){
  document.getElementById("carry").classList.remove('blured')
   document.getElementById("clickdev").style.display = "none";
   document.getElementById("clickdev2").style.display = "none";  
}

function clickreg() {
  document.getElementById("carry").classList.add('blured')
   document.getElementById("clickdev2").style.display = "block";
   document.getElementById("clickdev").style.display = "none";
}