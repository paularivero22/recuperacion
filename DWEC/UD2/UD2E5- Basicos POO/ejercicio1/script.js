'use strict';

class Persona {

    constructor(nombre, nacimiento, hobbies) {
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.hobbies = hobbies;
    }

    get edad() {
        let fechaActual = new Date();
        let edad = 0;
        
        let mesNacimiento = this.nacimiento.getMonth();
        let mesActual = fechaActual.getMonth();

        if (mesActual >= mesNacimiento) {
            edad = fechaActual.getFullYear() - this.nacimiento.getFullYear();
        } else {
            edad = (fechaActual.getFullYear() - this.nacimiento.getFullYear()) - 1;
        }
        return edad;
    }

    saludar() {
        let hobbiesStr = "";
        for(let i = 0; i < this.hobbies.length; i++) {
            hobbiesStr += `${this.hobbies[i]}, `;
        }

        return `Hola me llamo ${this.nombre} y me gusta ${hobbiesStr}`;
    }
}

let fechaNac = new Date('2004-11-2');

let p = new Persona('paula', fechaNac, ['musica', 'leer']);

console.log(p.saludar());
console.log(`Edad: ${p.edad}`); 