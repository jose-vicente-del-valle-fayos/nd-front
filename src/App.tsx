import React, {useState, useLayoutEffect} from "react";
import "./estilos/estilo.scss";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import { HelmetProvider } from "react-helmet-async";
import Menu from "./componentes/menu";
import Cabecera from "./componentes/cabecera";
import Redirige from "./componentes/redirige";
import Inicio from "./paginas/inicio";
import Especial from "./paginas/especial";
import Conozcame from "./paginas/conozcame";
import Archivo from "./paginas/archivo";
import Entrada from "./paginas/entrada";
import Escribame from "./paginas/escribame";
import Acceso from "./paginas/acceso";
import Administracion from "./paginas/administracion";
import Aviso from "./paginas/aviso";
import Privacidad from "./paginas/privacidad";
import Error from "./paginas/error";

const futureFlags = { v7_startTransition: true, v7_relativeSplatPath: true, };

const Wrapper = ({children}: any) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <HelmetProvider>
            <Wrapper>
                <Routes location={location} key={location.pathname}>
                    <Route path={"/"} element={<Inicio/>}/>
                    <Route path={"/especial"} element={<Especial/>}/>
                    <Route path={"/conozcame"} element={<Conozcame/>}/>
                    <Route path={"/archivo"} element={<Archivo/>}/>
                    <Route path={"/entrada/:id"} element={<Entrada/>}/>
                    <Route path={"/escribame"} element={<Escribame/>}/>
                    <Route path={"/acceso"} element={<Acceso/>}/>
                    <Route path={"/administracion"} element={<Administracion/>}/>
                    <Route path={"/aviso"} element={<Aviso/>}/>
                    <Route path={"/privacidad"} element={<Privacidad/>}/>
                    <Route path={"*"} element={<Error/>}/>
                </Routes>
            </Wrapper>
        </HelmetProvider>
    );
};

const App = () => {
    const [dom] = useState(String(process.env.REACT_APP_DOMINIO_PERMITIDO));
    return (
        dom !== window.location.hostname ?
        <Redirige url={"https://" + dom}/> :
        <div className="App">
            <BrowserRouter future={futureFlags}>
                <Cabecera/>
                <Menu/>
                <AnimatedRoutes/>
            </BrowserRouter>
        </div>
    );
}

export default App;
