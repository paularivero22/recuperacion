
function validarFormulario(nombre, email, contrasenia, confirmarContrasenia, telefono, genero, terminos) {
    return validarNombre(nombre)
        .then(() => validarEmail(email))
        .then(() => validarContrasenia(contrasenia))
        .then(() => validarConfirmarContrasenia(contrasenia, confirmarContrasenia))
        .then(() => validarTelefono(telefono))
        .then(() => validarGenero(genero))
        .then(() => validarCasilla(terminos))
        .then(() => true);
}

function validarNombre(nombre) {
    return new Promise((resuelve, rechazo) => {
        if (nombre.length < 3) {
            rechazo("El nombre debe tener al menos 3 caracteres");
            return;
        }

        for (let i = 0; i < nombre.length; i++) {
            let caracter = nombre[i];
            if (!isNaN(caracter)) {
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

    enviar.addEventListener("click", function (e) {
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

        validarFormulario(nombre, email, contrasenia, confirmarContrasenia, telefono, genero, terminos)
            .then(() => {
                alert("Formulario enviado");
            })
            .catch((error) => {
                if (error.toLowerCase().includes('nombre')) {
                    errorNombre.textContent = error;
                    nombreInput.classList.add('invalido');
                } else if (error.toLowerCase().includes('email')) {
                    errorEmail.textContent = error;
                    emailInput.classList.add('invalido');
                } else if (error.toLowerCase().includes('contraseña')) {
                    if (error.toLowerCase().includes('coincidir')) {
                        errorConfirmarContrasenia.textContent = error;
                        confirmarContraseniaInput.classList.add('invalido');
                    } else {
                        errorContrasenia.textContent = error;
                        contraseniaInput.classList.add('invalido');
                    }
                } else if (error.toLowerCase().includes('telefono')) {
                    errorTelefono.textContent = error;
                    telefonoInput.classList.add('invalido');
                } else if (error.toLowerCase().includes('genero')) {
                    errorGenero.textContent = error;
                    generoSelect.classList.add('invalido');
                } else if (error.toLowerCase().includes('aceptar')) {
                    errorTerminos.textContent = error;
                    terminosCheckbox.classList.add('invalido');
                } else {
                    console.error(error);
                }
            });
    });
})