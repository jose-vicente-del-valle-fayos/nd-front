import React, {useEffect, useState} from "react";
import {Link, Navigate, useParams} from "react-router-dom";
import {convertirFecha, smartyPants, registrarVisita, verificarVisitas} from "../constantes/constantes";
import Pie from "../componentes/pie";
import Voz from "../componentes/voz";
import Audio from "../componentes/audio";
import Portapapeles from '../componentes/portapapeles';
import axios from "axios";
import {Comentario} from "../modelos/comentario";
import {Usuario} from "../modelos/usuario";
import Markdown from "react-markdown";
import remarkTextr from "remark-textr";
import {Helmet} from "react-helmet-async";

const Entrada = () => {
    const [entrada, setEntrada] = useState<any>();
    const [usuario, setUsuario] = useState(new Usuario());
    const [redirigirInicio, setRedirigirInicio] = useState("normal");
    const [redirigirError, setRedirigirError] = useState("normal");
    const params = useParams();

    useEffect( () => {
        (
            async () => {
                try {
                    const {data} = await axios.get(process.env.REACT_APP_BASE_URL + "entrada/" + params.id);
                    if(data.datos !== undefined) {
                        data.datos.id === 0 ? setRedirigirError("activado") : setRedirigirError("desactivado");
                        setEntrada(data.datos);
                    }
                } catch(e) {
                    console.log(e);
                }
            }
        )();
        (
            async () => {
                try {
                    const {data} = await axios.get(process.env.REACT_APP_BASE_URL + "usuario");
                    setUsuario(new Usuario(
                        data.id,
                        data.sobrenombre,
                        data.nombre,
                        data.apellidos,
                        data.correo,
                        data.entradas,
                        data.total_ent,
                    ));
                } catch(e) {
                }
            }
    )();
    registrarVisita(Number(params.id)).then(r => console.log("usted ha visitado la entrada " + params.id));
    const interval = setInterval(() => verificarVisitas([{ id: Number(params.id) }]), 500);
    return () => clearInterval(interval);
    }, [params.id]);

    const eliminarEntrada = async () => {
        try {
            await axios.delete(process.env.REACT_APP_BASE_URL + "entrada/" + usuario.id + "/" + entrada.id);
            setRedirigirInicio("activado");
        } catch (e) {
            console.log(e);
        }
    }

    const eliminarComentario = async (id: number) => {
        try {
            await axios.delete(process.env.REACT_APP_BASE_URL + "comentario/" + usuario.id + "/" + id);
            setRedirigirInicio("activado");
        } catch (e) {
            console.log(e);
        }
    }

    if(redirigirInicio === "activado") {
        return <Navigate to={"/"}/>;
    }

    if(redirigirError == "activado") {
        return <Navigate to={"/error"}/>;
    }

    return (
        <main className={"fade-in"}>
            {entrada !== undefined && redirigirInicio !== "activado" && redirigirError !== "activado" && redirigirError !== "normal" ?
                <article>
                    <Helmet>
                        <title>{entrada.titulo.slice(0, 60)} • Nuestro Diario</title>
                        <meta name="description" content={entrada.contenido.slice(0, 160)}/>
                        <meta property="og:title" content={entrada.titulo.slice(0, 60) + " • Nuestro Diario"}/>
                        <meta property="og:description" content={entrada.titulo.slice(0, 60)}/>
                        <meta property="og:site_name" content="Nuestro Diario"/>
                        <meta property="og:type" content="website"/>
                        <meta property="og:url" content={"https://" + String(process.env.REACT_APP_DOMINIO_PERMITIDO)}/>
                    </Helmet>
                    <h2><Link to={"/entrada/" + entrada.id}>{entrada.titulo}</Link></h2>
                    <h3>{convertirFecha(entrada.fecha, true)} • {entrada.visitas === 0 ? "sin visitas" : (entrada.visitas === 1 ? "1 visita" : (entrada.visitas.toLocaleString("es-ES") + " visitas"))}{usuario.id !== 0 ?
                        <span> • <Link to={"#"} onClick={eliminarEntrada}>borrar</Link></span> : null}<span className={"alineado-derecha"}><Voz
                        texto={entrada.titulo + ". " + convertirFecha(entrada.fecha, false) + ". " + entrada.contenido}/><Portapapeles
                        url={"https://nuestrodiario.es/entrada/" + entrada.id}/></span></h3>
                    <Markdown
                        remarkPlugins={[[remarkTextr, {plugins: [smartyPants]}]]}>{entrada.contenido}</Markdown>
                    {(entrada.imagen !== "sin-imagen" && ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"].includes(entrada.imagen.split('.').pop())) ? <img alt={entrada.titulo} src={entrada.imagen}/> : null}
                    {(entrada.imagen !== "sin-imagen" && ["mp3", "MP3"].includes(entrada.imagen.split('.').pop())) ? <Audio src={entrada.imagen} /> : null}
                    {(entrada.total_com > 0) ? entrada.comentarios.map((comentario: Comentario, index: number) => {
                        return (
                            <div className={"comentario"} key={index}>
                                <h3>{convertirFecha(comentario.fecha, true)} • {comentario.usuario}
                                    {usuario.id !== 0 ? <span> • id{comentario.id} • <Link to={"#"} onClick={() => eliminarComentario(comentario.id)}>borrar</Link></span> : null}</h3>
                                <Markdown
                                    remarkPlugins={[[remarkTextr, {plugins: [smartyPants]}]]}>{comentario.comentario}</Markdown>
                            </div>
                        );
                    }) : null}
                </article>
                : null}
            <Pie/>
        </main>
    )
}

export default Entrada;