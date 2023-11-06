var cantidad  = document.getElementById("exampleFormControlInput3");
var btnCalc   = document.getElementById("resumen");
var btnBorrar = document.getElementById("borrar");
var categoria = document.getElementById("opt");
var leyenda   = document.getElementById("Total");
var formulario = document.getElementById("form");



btnCalc.addEventListener("click",calcular);
btnBorrar.addEventListener("click",limpiar);

function calcular(){
    switch(categoria.value){
        case '1':
          total=(parseInt(cantidad.value)*200)*.2;
          leyenda.innerText= total;
          break;
        case '2':
          console.log("cantidad."+cantidad.value)
          total=(parseInt(cantidad.value)*200)*.5;
          leyenda.innerText=total;
          break;
        case '3':
          console.log("cantidad:"+cantidad.value)
          total=(parseInt(cantidad.value)*200)*.85;
          leyenda.innerText=total;
          break;

    }
}

function limpiar(){
    formulario.reset();
    leyenda.innerText="";
}