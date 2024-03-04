var btnEncript = document.querySelector(".btn-encript");
var btnDesencript = document.querySelector(".btn-desencript");
var people = document.querySelector(".container-people");
var container = document.querySelector(".container-msg");
var result = document.querySelector(".text-result");


btnEncript.onclick = encript;
btnDesencript.onclick = descript;

function encript(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    result.textContent = encriptarTexto(cajatexto);
}

function descript(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    result.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".text-text")
    return cajatexto.value
}


function ocultarAdelante(){
    people.classList.add("ocultar");
    container.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copy"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".text-result").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});


