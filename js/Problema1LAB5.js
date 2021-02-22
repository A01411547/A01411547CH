function validador (password){
    var expresionRegular = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (expresionRegular.test(password)){
        ayuda.innerHTML= "Esta es una buena contraseña";
        

    }
    else {
       ayuda.innerHTML=  "Esta contraseña no es buena.";
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
}
var password= document.getElementById("password");
var ayuda= document.getElementById ("ayuda");
password.onkeyup= ()=>{
   
    validador(password.value);
    
}