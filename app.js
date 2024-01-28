asignarTextoElemento('h1',"Adiviana el numero secreto");
let numeroMaximo = 100;
asignarTextoElemento('p',`Ingresa un numero entre el 1 y el ${numeroMaximo}`);
let numeroSecreto = generarNumeroAleatorio();
let numeroIntentos = 0;
let listaNumerosSorteados = [];

function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+ 1;
    return numeroAleatorio;
  }
function asignarTextoElemento(elemento, texto){ 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarCampo() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    numeroIntentos++;
    console.log(numeroIntentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Has adiviando el numero secreto en ${numeroIntentos} ${numeroIntentos > 1 ?'intentos':'intento' }!!`);
        deshabilitarBoton('intentar');
        habilitarBoton('reiniciar');
    }else{
        if(numeroSecreto < numeroDeUsuario){
            asignarTextoElemento('p',`El numero que ingresaste es mayor al numero secreto, llevas ${numeroIntentos} ${numeroIntentos > 1 ?'intentos':'intento' } !!`);
        }else{
            asignarTextoElemento('p',`El numero que ingresaste es menor al numero secreto, llevas ${numeroIntentos} ${numeroIntentos > 1 ?'intentos':'intento' } !!`);
        }
        limpiarCampo();
    }
    return;
}

function reiniciarJuego(){
    numeroIntentos = 0;
    limpiarCampo();
    generarNumeroSecreto();
    asignarTextoElemento('p','Ingresa un numero entre el 1 y el 10');
    habilitarBoton('intentar');
    deshabilitarBoton('reiniciar');

}
function limpiarCampo(){
    document.querySelector('#numeroUsuario').value = '';
}
function habilitarBoton(elemento){
    elemento = document.getElementById(elemento);  
    elemento.disabled = false;
}
function deshabilitarBoton(elemento){
    elemento = document.getElementById(elemento);  
    elemento.disabled = true;
}
function generarNumeroSecreto(){
    numeroSecreto = generarNumeroAleatorio();
    if(listaNumerosSorteados.includes(numeroSecreto)){
        generarNumeroSecreto(); 
        if(listaNumerosSorteados.length === numeroMaximo){
            listaNumerosSorteados = [];
        }
    }else{
        listaNumerosSorteados.push(numeroSecreto);
    }
}