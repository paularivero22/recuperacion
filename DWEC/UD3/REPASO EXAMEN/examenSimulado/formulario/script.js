
async function validarFormulario(nombre, email, contrasenia, confirmarContrasenia, telefono, genero, terminos) {
    try {
        await validarNombre(nombre);
        await validarEmail(email);
        await validarContrasenia(contrasenia);
        await validarConfirmarContrasenia(contrasenia, confirmarContrasenia);
        await validarTelefono(telefono);
        await validarGenero(genero);
        await validarCasilla(terminos);

        return true;
    } catch (error) {
        return error;
    }
}

function validarNombre(nombre) {
    return new Promise((resuelve, rechazo) => {
        if (nombre.length < 3) {
            rechazo("El nombre debe tener al menos 3 caracteres");
            return;
        }

        for (let i = 0; i < nombre.length; i++) {
            let caracter = nombre[i];
            if (!isNaN(caracter) && caracter !== ' ') {
                rechazo("No debe contener numeros")
                return;
            }
        }

        resuelve(true);
    })

}

function validarEmail(email) {
    return new Promise((resuelve, rechazo) => {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regexEmail.test(email)) {
            resuelve(true);
        } else {
            rechazo("El email debe tener un formato valido");
        }
    })
}

function validarContrasenia(contrasenia) {

    return new Promise((resuelve, rechazo) => {
        if (contrasenia.length < 8) {
            rechazo("La contraseña debe tener minimo 8 caracteres");
            return;
        }

        let numeros = 0;
        for (let i = 0; i < contrasenia.length; i++) {
            let caracter = contrasenia[i];
            if (!isNaN(caracter)) {
                numeros++;
            }
        }

        let hayMayusculas = false;
        if (contrasenia !== contrasenia.toLowerCase()) {
            hayMayusculas = true;
        }

        if (!hayMayusculas || numeros < 1) {
            rechazo("La contraseña debe contener minimo una mayuscula y un numero");
            return;
        }

        resuelve(true);
    })
}

function validarConfirmarContrasenia(contrasenia, confirmarContrasenia) {
    return new Promise((resuelve, rechazo) => {
        if (contrasenia === confirmarContrasenia) {
            resuelve(true);
        } else {
            rechazo("Las contraseñas deben coincidir");
        }
    })
}

function validarTelefono(telefono) {
    return new Promise((resuelve, rechazo) => {
        if (telefono.length === 9) {
            resuelve(true);
        } else {
            rechazo("El telefono debe tener 9 digitos");
        }
    })
}

function validarGenero(genero) {
    return new Promise((resuelve, rechazo) => {
        if (genero.value === "") {
            rechazo("Debes elegir un genero valido");
        } else {
            resuelve(true);
        }
    })
}

function validarCasilla(terminos) {
    return new Promise((resuelve, rechazo) => {
        if (terminos.checked) {
            resuelve(true);
        } else {
            rechazo("Debes aceptar los terminos y condiciones");
        }
    })
}

window.addEventListener("load", function () {
    //campos
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const contraseniaInput = document.getElementById('contrasenia');
    const confirmarContraseniaInput = document.getElementById('confirmarContrasenia');
    const telefonoInput = document.getElementById('telefono');
    const generoSelect = document.getElementById('genero');
    const terminosCheckbox = document.getElementById('terminos');

    //boton
    const enviar = document.getElementById('enviar');

    //erorres
    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorEmail');
    const errorContrasenia = document.getElementById('errorContrasenia');
    const errorConfirmarContrasenia = document.getElementById('errorConfirmarContrasenia');
    const errorTelefono = document.getElementById('errorTelefono');
    const errorGenero = document.getElementById('errorGenero');
    const errorTerminos = document.getElementById('errorTerminos');

    enviar.addEventListener("click", async function (e) {
        e.preventDefault();

        errorNombre.textContent = '';
        errorEmail.textContent = '';
        errorContrasenia.textContent = '';
        errorConfirmarContrasenia.textContent = '';
        errorTelefono.textContent = '';
        errorGenero.textContent = '';
        errorTerminos.textContent = '';

        let invalidos = document.querySelectorAll(".invalido");
        for (let invalido of invalidos) {
            invalido.classList.remove("invalido");
        }

        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const contrasenia = contraseniaInput.value;
        const confirmarContrasenia = confirmarContraseniaInput.value;
        const telefono = telefonoInput.value.trim();
        const genero = generoSelect;
        const terminos = terminosCheckbox;

        const resultado = await validarFormulario(nombre, email, contrasenia, confirmarContrasenia, telefono, genero, terminos);

        if (resultado === true) {
            alert("Formulario enviado");
        } else {
            if (resultado.toLowerCase().includes('nombre')) {
                errorNombre.textContent = resultado;
                nombreInput.classList.add('invalido');
            } else if (resultado.toLowerCase().includes('email')) {
                errorEmail.textContent = resultado;
                emailInput.classList.add('invalido');
            } else if (resultado.toLowerCase().includes('contraseña')) {
                if (resultado.toLowerCase().includes('coincidir')) {
                    errorConfirmarContrasenia.textContent = resultado;
                    confirmarContraseniaInput.classList.add('invalido');
                } else {
                    errorContrasenia.textContent = resultado;
                    contraseniaInput.classList.add('invalido');
                }
            } else if (resultado.toLowerCase().includes('telefono')) {
                errorTelefono.textContent = resultado;
                telefonoInput.classList.add('invalido');
            } else if (resultado.toLowerCase().includes('genero')) {
                errorGenero.textContent = resultado;
                generoSelect.classList.add('invalido');
            } else if (resultado.toLowerCase().includes('aceptar')) {
                errorTerminos.textContent = resultado;
                terminosCheckbox.classList.add('invalido');
            } else {
                console.error(resultado);
            }
        }

    })
})