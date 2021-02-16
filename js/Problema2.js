var tiempoI = (new Date ()).getTime();
var numero1 = Math.random () * 10;
var numero2= Math.random () * 10;
numero1= Math.round(numero1);
numero2= Math.round(numero2);
var suma= window.prompt ("Introduce la suma de los siguientes digitos: "+ numero1 + " y " + numero2);
var Tiempofinal= (new Date ()).getTime();
if (suma != numero1 + numero2) {
    window.alert ("Incorrecto");
    document.write ("Incorrecto <br> ");
                               }
else {
    window.alert ("Correcto" );
    document.write ("Correcto <br> ");
}
window.alert ("El tiempo de ejecucion fue de: "+(Tiempofinal-tiempoI)/1000);
document.write ("El tiempo de ejecucion fue de: "+(Tiempofinal-tiempoI)/1000);