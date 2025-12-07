// Variables LET
let tema = true;
let ojo = true;

// Variables CONST
const ojoIMG = document.getElementById("ojo");


// Funciones
const canvioTema = function () {
    if(tema){
        document.getElementById("css").href = "./css/index/indexOscuro.css";
        ojoIMG.src = "./img/ojo/CerradoClaro.png";
    } else {
        document.getElementById("css").href = "./css/index/indexClaro.css";
        ojoIMG.src = "./img/ojo/CerradoOscuro.png";
    }
    tema = !tema;
}
const canviarOjo = function () {
    if(tema) {
        if(ojo) {
            ojoIMG.src = "./img/ojo/CerradoOscuro.png";
        } else {
            ojoIMG.src = "./img/ojo/OjoOscuro.png";
        }
    } else {
        if(ojo) {
            ojoIMG.src = "./img/ojo/CerradoClaro.png";
        } else {
            ojoIMG.src = "./img/ojo/OjoClaro.png";
        }
    }
    ojo = !ojo;
}

// ADDLISTER
document.getElementById("tema").addEventListener("click", canvioTema);
ojoIMG.addEventListener("click", canviarOjo);