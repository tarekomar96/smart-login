var userEmail = document.getElementById('userEmailInput')
var userPassword = document.getElementById('userPasswordInput')
var signInBtn = document.getElementById('signInBtn');
var inValid = document.getElementById('inValid');



signInBtn.addEventListener('click' , function(e){
  if(  userEmail.value == '' || userPassword.value == ''  ){
      inValid.innerHTML = 
      `
      <div class="alert alert-danger text-center" role="alert">
        (All inputs are required)
      </div>
      `
  } 
  else if(  userEmail.value != '' && userPassword.value != '' ){
    
    if(checkEmail() === true){
      inValid.innerHTML = 
      `
      <div class="alert alert-success text-centerc" role="alert">
        Correct Email!
      </div>
      `
    }else if(checkEmail() === false){
      inValid.innerHTML = 
      `
      <div class="alert alert-danger text-center" role="alert">
        (Need To Create Email(Go To Sign Up page))
      </div>
      `
   
    }
    else{
      inValid.innerHTML = 
      `
      <div class="alert alert-danger text-center" role="alert">
        (Incorrect Email or Password )
      </div>
      `
 
    }
  }
})


function checkEmail(){
  if(localStorage.getItem('Emails') != null){
    var userInfo = JSON.parse(localStorage.getItem('Emails'));
    for(var i = 0 ; i < userInfo.length ; i++){
      console.log(userInfo[i].user);
        if( userInfo[i].password.toLowerCase() == userPassword.value.toLowerCase() && userInfo[i].email.toLowerCase() == userEmail.value.toLowerCase()){
          localStorage.setItem('userName' , userInfo[i].email)
          console.log(localStorage.getItem('userName'));
          return true
        }
      }
    }else if(localStorage.getItem('Emails') === null){
      return false
    }
}






