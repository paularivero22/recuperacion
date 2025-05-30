import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";

import InicioPage from "../pages/InicioPage";
import CochesPage from "../pages/CochesPage";
import DetallesPage from "../pages/DetallesCochePage";
import Login from "../pages/Login";
import Error from "../pages/Error";

function AppEnrutador() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<InicioPage />} />
                    <Route path="coches" element={<CochesPage />} />
                    <Route path="detallesCoche/:id" element={<DetallesPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppEnrutador;