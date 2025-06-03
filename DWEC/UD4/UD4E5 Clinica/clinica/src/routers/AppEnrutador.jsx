import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";

import InicioPage from "../pages/InicioPage";
import PacientesPage from "../pages/PacientesPage";
import DetallesPacientePage from "../pages/DetallesPacientePage";
import ExpedientesPage from "../pages/ExpedientesPage";
import DetallesExpedientePage from "../pages/DetallesExpedientePage";
import UsuariosPage from "../pages/UsuariosPage";
import DetallesUsuarioPage from "../pages/DetallesUsuarioPage";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

function AppEnrutador() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<InicioPage />} />
                    <Route path="pacientes" element={<PacientesPage />} />
                    <Route path="detallesPaciente/:id" element={<DetallesPacientePage />} />
                    <Route path="expedientes" element={<ExpedientesPage />}></Route>
                    <Route path="detallesExpediente/:id" element={<DetallesExpedientePage />} />
                    <Route path="usuarios" element={<UsuariosPage />}></Route>
                    <Route path="detallesUsuario/:id" element={<DetallesUsuarioPage />}></Route>
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppEnrutador;