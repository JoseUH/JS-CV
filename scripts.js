import {datos} from "./datos.js"
const info$$ = document.querySelector(".rightText");
const clickables$$ = document.querySelectorAll(".clickable");

let mostrar = "educación";

function cambiar () {
    mostrar === "educación" ? mostrar = "experiencia" : mostrar = "educación";
    pintar();
}

for (const clickable$$ of clickables$$) {
    clickable$$.addEventListener("click", cambiar);
}

function pintar () {

    if (mostrar === "educación") {

        info$$.innerHTML = "";
        for (const curso of datos.educacion) {
            info$$.innerHTML += `
                <div class="curso">
                    <h4 class="grado">${curso.grado}</h4>
                    <h3 class="titulo">${curso.titulo}</h3>
                    <p class="comienzoFinEduc">${curso.comienzo} - ${curso.finalizacion}</p>
                    <p class="lugar">${curso.lugar}</p>
                </div>
            `
        }
    
    } else {
    
        info$$.innerHTML = "";
        for (const puesto of datos.experiencia) {
            info$$.innerHTML += `
                <div class="puesto">
                    <h4 class="grado">${puesto.nombreEmpresa}</h4>
                    <h3 class="ocupacion">${puesto.ocupacion}</h3>
                    <p class="comienzoFin">${puesto.comienzo} - ${puesto.finalizacion}</p>
                </div>
            `
        }
    
    }

}

pintar();