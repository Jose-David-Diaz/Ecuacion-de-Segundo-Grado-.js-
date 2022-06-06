function Calcular() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);
    var d = ((b * b) - 4 * a * c);
    document.getElementById('determinante').innerHTML = "Valor del determiante: " + d;

    if (d < 0){
        document.getElementById('mensaje').innerHTML = "No existen soluciones reales";
        document.getElementById('sol1').innerHTML = "";
        document.getElementById('sol2').innerHTML = "";
    } 
    else {
        var x1 = (-b+Math.sqrt(d))/(2*a);
        var x2 = (-b-Math.sqrt(d))/(2*a);
        document.getElementById('sol1').innerHTML = "Solucion: " + x1;
        document.getElementById('sol2').innerHTML = "Solucion: " + x2;
        document.getElementById('mensaje').innerHTML = "";
    }
}

function limpiarFormulario() {
    document.getElementById("miForm").reset();
}