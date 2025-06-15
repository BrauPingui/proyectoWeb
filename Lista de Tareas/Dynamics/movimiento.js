const Tarea=document.getElementById("aTarea");
const contene=document.getElementById("contene");
const eTarea=document.getElementById("eTarea");
Tarea.addEventListener("click", ()=>{
     const cuadro=document.createElement("div");
     cuadro.className= "tar";
     contene.appendChild(cuadro);
     cuadro.innerHTML="Tarea";
})

eTarea.addEventListener("click", ()=>{
     const ultimo= contene.children;
     const ultcuad=ultimo[ultimo.length-1];
     ultcuad?contene.removeChild(ultcuad):null;
})