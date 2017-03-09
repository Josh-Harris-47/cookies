var placecookie = function(){
  document.cookie = "username="+document.getElementById('newname').value;
};

var greeter = function(){
  if(document.cookie){
  document.getElementById("greeting").insertAdjacentHTML('beforeend', '<h1>Welcome '+document.cookie.split('=')[1]+'!</h1>')
  };
};
greeter();
