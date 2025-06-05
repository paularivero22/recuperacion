import { useEffect, useState, useContext } from "react";
import $negocio from '../core/negocio.js';
import './tablas.css';
import { SeguridadContext } from "../context/SeguridadProvider";

function UsuariosPage() {
    const [usuarios, setUsuarios] = useState([]);
    const { datos } = useContext(SeguridadContext);

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

    const borrarUsuario = async (id) => {
        await $negocio.eliminarUsuario(id);
        await getUsuarios();
    }

    return (
        <>
            {datos.rol === "admin" ? (
                <div className="contenido">
                    <table>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Contraseña</th>
                                <th>Tipo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {usuarios && usuarios.map((usuario, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{usuario.username}</td>
                                        <td>{usuario.password}</td>
                                        <td>{usuario.tipo}</td>
                                        <td>
                                            <button name="borrar" onClick={() => borrarUsuario(usuario.id)}>Borrar</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h2>No tienes permiso para acceder a esta sección</h2>
            )}
        </>
    );
}

export default UsuariosPage;