var user=document.getElementById("user");
var pwd=document.getElementById("pwd");
var btn=document.getElementById("btn");
//function validate(){
  //  if(user.value.trim()==""||pwd.value.trim()==""){
    //    alert("field cannot be empty");
      //  return false;
  //  }else if(pwd.value.length<5){
        //alert("password should be greater than 5");
    //    pwd.style.border="2px solid red";
      //  err1.textcontent="password should be greater than 5";
        //return false;

//    }
  //  else{
    //     pwd.style.border="2px solid green";
      //  err1.textcontent=""

    
        //return true;
//
  //  }
//}

function validate(){
    let regex=/^([a-zA=-Z0-9.-]+)@([a-zA-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3}?)$/
    if(regex.test(user.value)){
        return true
    }else{
        alert("email is invalid")
        return false

    }
}