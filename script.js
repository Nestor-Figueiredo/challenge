const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage = "none"
}

function btnCopiar(){
    const textoCopiado = copiar(mensagem.value)
    inputTexto.value = textoCopiado
    inputTexto.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a", "ai"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let x=0; x < matrizCodigo.length; x++) {
        if(stringEncriptada.includes(matrizCodigo[x][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[x][0], matrizCodigo[x][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let x=0; x < matrizCodigo.length; x++) {
        if(stringDesencriptada.includes(matrizCodigo[x][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[x][0], matrizCodigo[x][1]);
        }
    }
    return stringDesencriptada;
}

function copiar(stringCopiada) {
    return stringCopiada;
}