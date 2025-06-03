import { useContext, useState } from "react";
import { SeguridadContext } from "../context/SeguridadProvider";
import userImg from '../assets/user.jpg';
import usuarios from '../data/usuarios';
import './login.css';

function Login() {
    const { datos, logIn, logOut } = useContext(SeguridadContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const entrar = () => {
        const usuario = usuarios.find(u => u.username === username);

        if (!usuario) {
            setMensaje("El usuario no existe");
            return;
        }

        if (usuario.password !== password) {
            setMensaje("La contraseña es incorrecta");
            return;
        }

        setMensaje("");
        logIn(usuario.username);
    };


    const salir = () => {
        setUsername("");
        setPassword("");
        setMensaje("");
        logOut();
    }

    return (
        <>
            <div className="login-container">
                {datos.tienePermisos ? (
                    <div className="perfil">
                        <img
                            src={userImg}
                            alt="Prueba"
                            width={200}
                            height={200}
                        />
                        <br />
                        <span>{datos.usuario}</span>
                        <br />
                        <button onClick={salir}>Salir</button>
                    </div>
                ) : (
                    <>
                        <h1>Iniciar Sesion</h1>
                        <label>Nombre de Usuario:
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            /></label>

                        <label>Contraseña
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            /></label>

                        <button onClick={entrar}>Entrar</button>

                        {mensaje &&
                            <p className="error">{mensaje}</p>
                        }

                    </>
                )}
            </div>
        </>
    );
}

export default Login;