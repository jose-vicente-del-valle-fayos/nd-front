import React, {useState} from 'react';
import './estilos/estilo.scss';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion";
import Menu from "./componentes/menu";
import Cabecera from "./componentes/cabecera";
import Redirige from "./componentes/redirige";
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
    const [dom] = useState(String(process.env.REACT_APP_DOMINIO_PERMITIDO));
    return (
        dom !== window.location.hostname ?
        <Redirige url={"https://" + dom}/> :
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
