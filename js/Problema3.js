var cantidad = window.prompt("Dame la cantidad de digitos");
var numeros = [];
var numn = 0;
var nump = 0;
var numc = 0;
for (var i= 0; i<cantidad ;i ++){
    numeros.push (window.prompt("Dame un numero: "));
}
for (var i=0; i<cantidad; i++){
    if (numeros[i]<0){
        numn ++;
    }
    else if (numeros[i]==0){
        numc ++;
    }
    else { 
        nump ++;
         }    
    
}
document.write (" Los numeros negativos son: " + numn  + " <br> Los numeros mayores a cero son: " + nump + " <br> El numero de ceros es: " + numc);
