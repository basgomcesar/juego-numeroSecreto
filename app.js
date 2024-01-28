const numeroMaximo = 100;
let numeroSecreto;
let numeroIntentos = 0;
const listaNumerosSorteados = [];

asignarTextoElemento('h1', "Adivina el numero secreto");
asignarTextoElemento('p', `Ingresa un numero entre el 1 y el ${numeroMaximo}`);
generarNumeroSecreto();

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * numeroMaximo) + 1;
}

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

function verificarCampo() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    numeroIntentos++;

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Has adivinado el numero secreto en ${numeroIntentos} ${numeroIntentos > 1 ? 'intentos' : 'intento'}!!`);
        deshabilitarBoton('intentar');
        habilitarBoton('reiniciar');
    } else {
        let mensaje = `El numero que ingresaste es ${numeroDeUsuario > numeroSecreto ? 'mayor' : 'menor'} al numero secreto, llevas ${numeroIntentos} ${numeroIntentos > 1 ? 'intentos' : 'intento'} !!`;
        asignarTextoElemento('p', mensaje);
        limpiarCampo();
    }
}

function reiniciarJuego() {
    numeroIntentos = 0;
    limpiarCampo();
    generarNumeroSecreto();
    asignarTextoElemento('p', `Ingresa un numero entre el 1 y el ${numeroMaximo}`);
    habilitarBoton('intentar');
    deshabilitarBoton('reiniciar');
}

function limpiarCampo() {
    document.querySelector('#numeroUsuario').value = '';
}

function habilitarBoton(elemento) {
    document.getElementById(elemento).disabled = false;
}

function deshabilitarBoton(elemento) {
    document.getElementById(elemento).disabled = true;
}

function generarNumeroSecreto() {
    numeroSecreto = generarNumeroAleatorio();
    while (listaNumerosSorteados.includes(numeroSecreto)) {
        listaNumerosSorteados.push(numeroSecreto);
        numeroSecreto = generarNumeroAleatorio();

        if (listaNumerosSorteados.length === numeroMaximo) {
            listaNumerosSorteados.length = 0;
        }
    }
    listaNumerosSorteados.push(numeroSecreto);
}
