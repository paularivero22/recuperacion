'use strict';

function agrupar(...parametros) {
    let tipo;
    let grupos = {

    };

    for (let parametro of parametros) {
        tipo = typeof parametro;
        if(!(tipo in grupos)) {
            grupos[tipo] = [parametro];
        } else {
            grupos[tipo].push(parametro);            
        }
    }

    return grupos;
}

console.log(agrupar(4, 'hola', 5, 3.1, true, [1, 2, 3], null, undefined));
