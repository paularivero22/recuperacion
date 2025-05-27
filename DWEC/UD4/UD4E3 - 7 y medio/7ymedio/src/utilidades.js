import Baraja from './Baraja.js';

const baraja = Baraja;

function barajarCartas() {
    let numeros = [];

    for(let i = 1; i <= 40; i++ ){
        numeros.push(i);
    }

    numeros.sort(() => {return Math.random() - 0.5});
    return numeros;
}

function sumarCartas(mano) {
    let suma = 0;
    for(let carta of mano) {
        suma += carta.valor;
    }
    return suma;
}

function recuperarCarta(identificador) {
    for(let carta of baraja) {
        if(carta.identificador === identificador) {
            return carta;
        }
    }
    return null;
}

export {barajarCartas, sumarCartas, recuperarCarta};