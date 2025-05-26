import React, { useState } from "react";


function UserFilter() {
    const datos = [
        { name: "Juan", age: 22 },
        { name: "Lucía", age: 30 },
        { name: "Carlos", age: 19 },
        { name: "Marta", age: 45 },
        { name: "Ana", age: 28 },
    ];

    const [busquedaNombre, setBusquedaNombre] = useState("");
    const [busquedaEdad, setBusquedaEdad] = useState("");
    const [usuarios, setUsuarios] = useState(datos);

    const filtrar = () => {
        let usuariosFiltrados = [...datos];

        if (busquedaNombre !== "") {
            usuariosFiltrados = usuariosFiltrados.filter((u) =>
                u.name.toLowerCase().includes(busquedaNombre.toLowerCase())
            );
        }

        if (busquedaEdad !== "") {
            const edad = parseInt(busquedaEdad);
            usuariosFiltrados = usuariosFiltrados.filter((u) => u.age >= edad);
        }

        setUsuarios(usuariosFiltrados);
    };

    const limpiarFiltros = () => {
        setBusquedaNombre("");
        setBusquedaEdad("");
        setUsuarios(datos);
    };

    return (
        <>
            <input
                type='text'
                value={busquedaNombre}
                placeholder='Buscar por nombre...'
                onChange={(e) => setBusquedaNombre(e.target.value)}></input>
            <input
                placeholder="Edad mínima"
                type="number"
                value={busquedaEdad}
                onChange={(e) => setBusquedaEdad(e.target.value)}
            />
            <button id='buscar' onClick={filtrar}>Buscar</button>
            <button onClick={limpiarFiltros}>Limpiar</button>

            {usuarios.length === 0 ? (
                <p>No se encontraron usuarios</p>
            ) : (
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                    </tr>
                    {usuarios.map((user, key) => (
                        <tr key={key}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </table>
            )}
        </>
    );
}

export default UserFilter;