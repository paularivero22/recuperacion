'use strict';

function Animal(tipo, nombre) {
    this.tipo = tipo;
    this.nombre = nombre;

    this.comer = function () {
        console.log(`${this.nombre} está comiendo`);
    }

    this.dormir = function () {
        console.log(`${this.nombre} está durmiendo`);
    }

    this.hacerRuido = function () {
        if (this.tipo.toLowerCase() === 'perro') {
            console.log(`${this.nombre} hace guau`);
        } else if (this.tipo.toLowerCase() === 'gato') {
            console.log(`${this.nombre} hace miau`);
        } else {
            console.log(`${this.nombre} hace ruido`);
        }
    }
}

class AnimalES6 {
    constructor(tipo, nombre) {
        this.tipo = tipo;
        this.nombre = nombre;
    }

    comer() {
        console.log(`${this.nombre} está comiendo`);
    }

    dormir() {
        console.log(`${this.nombre} está durmiendo`);
    }

    hacerRuido() {
        console.log(`${this.nombre} hace ruido`);
    }
}

class Perro extends AnimalES6{
    constructor(nombre, raza) {
        super("perro", nombre); 
        this.raza = raza;
    }

    hacerRuido() {
        console.log(`${this.nombre} hace guau`);
    }
}

class Gato extends AnimalES6{
    constructor(nombre, color) {
        super("gato", nombre);
        this.color = color;
    }

    hacerRuido() {
        console.log(`${this.nombre} hace miau`);
    }
}

let perro = new Animal('perro', 'Laika');
let gato = new Animal('gato', 'Misha');
perro.comer();
perro.dormir();
perro.hacerRuido();

gato.comer();
gato.dormir();
gato.hacerRuido();

let perro2 = new Perro('Laika', 'Border Collie');
perro2.hacerRuido();

let gato2 = new Gato('Misha', 'Gris');
gato2.hacerRuido();