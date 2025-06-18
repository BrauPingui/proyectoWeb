let Form=document.getElementById("Formulario");
let edad=document.getElementById("edad");
let cp=document.getElementById("codigoPostal");
let nombre=document.getElementById("nombreCompleto");
let genero=document.querySelector("input[name='genero']:checked")
let Genero=["masculino","femenino","otro"];
Form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("alerta");
    isNaN(nombreCompleto.value)?console.log("Nombre correcto"):console.log("Nombre incorrecto");
    isNaN(edad.value)?console.log("Edad incorrecta"):console.log("Edad correcta");
    if(isNaN(codigoPostal.value)&&codigoPostal.value.length!=5)
    {
        console.log("Código Postal incorrecto");
    }
    else
    {
        console.log("Código postal correcto");
    }
    Genero.indexOf(genero.value)!=-1?console.log("Genero válido"):console.log("Género inválido");
    
});