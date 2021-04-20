var btnMancuernas = document.getElementById("Mancuernas");
var btnLigas = document.getElementById("Ligas");
var btnDiscos = document.getElementById("Discos");
var Total= 0;
var texto= document.getElementById("Total");
function AgregarMancuerna(Total){ 
    var texto= document.getElementById("Total");
    Total +=1*50;
    texto.innerHTML = "El Total es de: "+ Total;
    return Total;
    
}
function AgregarLigas(Total){ 
    var texto= document.getElementById("Total");
    Total +=1*20;
    
    texto.innerHTML = "El Total es de: "+ Total;
    return Total;
    
}
function AgregarDiscos(Total){ 
    var texto= document.getElementById("Total");
    Total +=1*80;
     texto.innerHTML = "El Total es de: "+ Total;
    return Total;
    
}
btnMancuernas.onclick=()=>{
    
   Total = AgregarMancuerna(Total);
    
}
btnLigas.onclick=()=>{
    Total = AgregarLigas(Total);
}
btnDiscos.onclick=()=>{
   Total = AgregarDiscos(Total);
}
