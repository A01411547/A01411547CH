var numero1= window.prompt("Introduce numero ");
var codigohtml= "<table>";
for (var i = 1; i<= numero1; i++){
    codigohtml += "<tr> <td> ";
    codigohtml += i;
    codigohtml += "</td> <td>";
    codigohtml += i*i;
    codigohtml += "</td> <td>";
    codigohtml += i*i*i;
    codigohtml += "</td> </tr>";
    

    
    
    
    
}
var solucion1 = document.getElementById("solucion1");
codigohtml +="</table>";
document.write(codigohtml);


