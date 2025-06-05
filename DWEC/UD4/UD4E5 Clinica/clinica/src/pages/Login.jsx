import { useState, useContext } from "react";
import { SeguridadContext } from "../context/SeguridadProvider";

function Login() {
    const { datos, logIn, logOut } = useContext(SeguridadContext);
    const [usuario, setUsuario] = useState("");
    const [contrasenia, setContrasenia] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (datos.tienePermisos) {
            logOut();
            setUsuario("");
            setContrasenia("");
            window.location.reload();
        } else {
            logIn(usuario, contrasenia);
        }
    }

    return (
        <>
            {datos.tienePermisos ? (
                <>
                    <h1>{datos.usuario}</h1>
                    <button type="submit" onClick={handleSubmit}>Salir</button>
                </>
            ) : (
                <>
                    <h1>Iniciar Sesión</h1>
                    <label htmlFor="usuario">Nombre de usuario: </label>
                    <input
                        type="text"
                        value={usuario}
                        name="usuario"
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <br /><br />

                    <label htmlFor="contrasenia">Contraseña: </label>
                    <input
                        type="text"
                        value={contrasenia}
                        name="contrasenia"
                        onChange={(e) => setContrasenia(e.target.value)}
                    />
                    <br /><br />

                    <button type="submit" onClick={handleSubmit}>Entrar</button>
                </>
            )}

        </>
    );
}

export default Login;