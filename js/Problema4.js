var matriz = [];
var columnas = window.prompt ("Dame el numero de columnas:");
var filas = window.prompt ("Dame el numero de filas: ");
for (let i=0; i<filas;i++){
    var filaN= [];
    for (let j=0;j<columnas;j++){
       filaN.push (window.prompt ("Dame un numero para: "+j));
    }
    matriz.push (filaN);
    
    
}
var arregloDePromedio = [];
 var promedio= 0;
var suma= 0;
 for (let i=0; i<filas; i++){
     suma=0;
     for (let j=0; j<columnas; j++){
         suma+= parseFloat(matriz [i][j]);
         
     }
     promedio= parseFloat (suma)/ parseFloat(columnas);
     arregloDePromedio.push(promedio);
 }
window.alert(arregloDePromedio);
document.write (arregloDePromedio);
