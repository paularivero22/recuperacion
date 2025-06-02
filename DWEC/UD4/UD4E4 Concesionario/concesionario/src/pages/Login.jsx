import { useContext, useState } from "react";
import { SeguridadContext } from "../context/SeguridadProvider";
import userImg from '../assets/user.jpg';
import './login.css';

function Login() {
    const { datos, logIn, logOut } = useContext(SeguridadContext);
    const [nombre, setNombre] = useState("");

    function handleClick() {
        if (datos.tienePermisos) {
            setNombre("");
            logOut();
        } else {
            if (nombre === "") {
                return;
            }
            /* No es recomendable buscar directamente */
            //const nombre =
            document.querySelector('input[name="nombre"]').value;
            logIn(nombre);
        }
    }
    const handleChange = (e) => {
        setNombre(e.target.value);
    };

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
                        <button onClick={handleClick}>Salir</button>
                    </div>
                ) : (
                    <>
                        <b><span>Nombre: </span></b>
                        <input
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={handleChange}
                        />
                        <button onClick={handleClick}>Entrar</button>
                    </>
                )}
            </div>
        </>
    );
}

export default Login;