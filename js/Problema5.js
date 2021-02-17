var numero = 0;
var numeroU= window.prompt ("Dame un numero");
var numeroinvertido= "";
for (var i= numeroU.length -1 ; i>=0 ;i--){
    numeroinvertido+=numeroU[i];
    
}
window.alert (numeroinvertido);
document.write (numeroinvertido);