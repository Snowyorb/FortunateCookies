//Hello?
function nickNameCookie(){
   var nck = document.cookie = document.getElementById("nickname");
   console.log(nck);
   
}

document.getElementById("createFortune").addEventListener('click', function() {
  document.getElementById("createFortuneDiv").innerHTML = "<input type='text' name='newFortune' placeholder='Create Fortune Here'>";
}); 

