var cantidad = document.getElementById("cant");
var btnCalc = document.getElementById("resumen");
var btnBorrar = document.getElementById("borrar");
var categoria = document.getElementById("opt");
var leyenda = document.getElementById("leyenda");
var formulario = document.getElementById("form");

btnCalc.addEventListener("click", calcular);
btnBorrar.addEventListener("click", limpiar);

function calcular(){
    switch(categoria.value){
        case '1':
         total=(parseInt(cantidad.value) * 200) * .2;
         leyenda.innerText="valor del ticket: "+total;
         break;
         case '2':
            total=(parseInt(cantidad.value) * 200) * .5;
            leyenda.innerText="valor del ticket: "+total;
            break;
        case '3':
            total=(parseInt(cantidad.value) * 200) * .85;
            leyenda.innerText="valor del ticket: "+total;
            break;

    }
}

function limpiar(){
    formulario.reset();
}