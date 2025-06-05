import { useContext } from "react";
import { Link } from "react-router-dom";
import "./AppMenu.css";
import { SeguridadContext } from "../context/SeguridadProvider";

function AppMenu() {
    const { datos } = useContext(SeguridadContext);

    return (
        <nav className="navegacion">
            <ul>
                <li><Link to="/">Inicio</Link></li>

                {datos.rol === "gestion" || datos.rol === "admin" ? (
                    <li><Link to="/pacientes">Pacientes</Link></li>
                ) : (null)}

                {datos.rol === "medico" || datos.rol === "admin" ? (
                    <li><Link to="/expedientes">Expedientes</Link></li>
                ) : (null)}

                {datos.rol === "admin" ? (
                    <li><Link to="/usuarios">Usuarios</Link></li>
                ) : (null)}
                
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>);
}
export default AppMenu;
