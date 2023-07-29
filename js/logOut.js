var logoutBtn = document.getElementById('logoutBtn')
var username = localStorage.getItem('userName')
var welcomeUser = document.getElementById('welcomeUser')

welcomeUser.innerHTML =
  `
  <h1 class="p-2 text-center text-info " id="welcomeUser">
  [WELCOME ${username.toUpperCase()}]
  </h1>
  `


logoutBtn.addEventListener('click' , function(){
  localStorage.removeItem('username')
})