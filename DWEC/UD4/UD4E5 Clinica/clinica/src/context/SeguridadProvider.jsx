import { useState, useEffect, createContext } from "react";

const SeguridadContext = createContext();

function SeguridadProvider({ children }) {

    const [datos, setDatos] = useState({
        usuario: "", contraseña: "", tienePermisos: false, rol: ""
    });

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        getUsuarios();
    }, []);

    const getUsuarios = async () => {
        try {
            const usuariosData = await $negocio.obtenerUsuarios();

            if (usuariosData.length === 0) {
                $negocio.limpiarLocalStorage();
                window.location.reload();
                return;
            }

            setUsuarios(usuariosData);
        } catch (e) {
            console.log(e);
        }
    }

    const logIn = async (user, contrasenia) => {
        let existe = false;

        for (let usuario of usuarios) {
            if (user === usuario.username) {
                existe = true;
                if (contrasenia === usuario.password) {
                    let nuevoDatos = { ...datos, usuario: usuario.username, contraseña: usuario.password, tienePermisos: true, rol: usuario.tipo };
                    setDatos(nuevoDatos);
                } else {
                    console.log("la contrasenia no es correcta");
                }
            }
        }
    };

    const logOut = async () => {
        let nuevoDatos = { ...datos, usuario: "", tienePermisos: false };
        setDatos(nuevoDatos);
    };

    return (
        <SeguridadContext.Provider
            value={{
                datos,
                logIn,
                logOut,
            }}
        >
            {children}
        </SeguridadContext.Provider>
    );
}

export { SeguridadContext, SeguridadProvider };