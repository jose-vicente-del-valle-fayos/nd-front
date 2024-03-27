import React, {useEffect, useState} from 'react';
import './estilos/estilo.scss';
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import Menu from "./componentes/menu";
import Cabecera from "./componentes/cabecera";
import Inicio from "./paginas/inicio";
import Especial from "./paginas/especial";
import Conoceme from "./paginas/conoceme";
import Archivo from "./paginas/archivo";
import Entrada from "./paginas/entrada";
import Escribeme from "./paginas/escribeme";
import Acceso from "./paginas/acceso";
import Administracion from "./paginas/administracion";
import Aviso from "./paginas/aviso";
import Privacidad from "./paginas/privacidad";
import Error from "./paginas/error";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<Inicio/>}/>
                <Route path={"/especial"} element={<Especial/>}/>
                <Route path={"/conoceme"} element={<Conoceme/>}/>
                <Route path={"/archivo"} element={<Archivo/>}/>
                <Route path={"/entrada/:id"} element={<Entrada/>}/>
                <Route path={"/escribeme"} element={<Escribeme/>}/>
                <Route path={"/acceso"} element={<Acceso/>}/>
                <Route path={"/administracion"} element={<Administracion/>}/>
                <Route path={"/aviso"} element={<Aviso/>}/>
                <Route path={"/privacidad"} element={<Privacidad/>}/>
                <Route path={"*"} element={<Error/>}/>
            </Routes>
        </AnimatePresence>
    );
};

const App = () => {
    const [dom] = useState(process.env.REACT_APP_DOMINIO_PERMITIDO);
    const navigate = useNavigate();
    useEffect(() => {
        if(dom !== window.location.hostname) {
            navigate(String(dom), {replace: true});
        }
    }, [dom])
    return (
        <div className="App">
            <BrowserRouter>
                <Cabecera/>
                <Menu/>
                <AnimatedRoutes/>
            </BrowserRouter>
        </div>
    );
}

export default App;
