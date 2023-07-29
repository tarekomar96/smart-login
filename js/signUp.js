var userName = document.getElementById('userNameInput')
var userEmail = document.getElementById('userEmailInput')
var userPassword = document.getElementById('userPasswordInput')
var signUpButton = document.getElementById('signUpButton')
var inValid = document.getElementById('inValid')



var emails ;
if(localStorage.getItem('Emails') != null ){
  emails = JSON.parse(localStorage.getItem('Emails'));

}else{
  emails = [];
}



signUpButton.addEventListener('click' ,function(e){
  if(  userName.value == '' || userEmail.value == '' || userPassword.value == '' ){
    inValid.innerHTML = 
    `
    <div class="alert alert-danger text-center" role="alert">
      (All inputs is required)
    </div>
    `
 
  }else if( userName.value != '' && userEmail.value != '' && userPassword.value != '' ){
    
    if(checkEmail() == false){
      inValid.innerHTML = 
      `
      <div class="alert alert-danger text-center" role="alert">
        (Email already exists)
      </div>
      `
     
    }else{
      addEmails();
      
    }
  }
})




function checkEmail(){
  if(localStorage.getItem('Emails') != null){
    var userInfo = JSON.parse(localStorage.getItem('Emails'));
    for(var i = 0 ; i < userInfo.length ; i++){
      console.log(userInfo[i].user);
        if(userInfo[i].user.toLowerCase() == userName.value.toLowerCase() && userInfo[i].password.toLowerCase() == userPassword.value.toLowerCase() && userInfo[i].email.toLowerCase() == userEmail.value.toLowerCase()){
          return false
        }
      }
    }
}




function addEmails(){
  var emailInfo = {
    user : userName.value,
    email : userEmail.value,
    password : userPassword.value
  }
  emails.push(emailInfo)
  localStorage.setItem('Emails' , JSON.stringify(emails));
  inValid.innerHTML = `
  <h5 class="text-center text-success">Success(Go To Sign In Page)</h5>
  `
  console.log(emails);
}




