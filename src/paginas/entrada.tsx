import React, {useEffect, useState} from "react";
import {Link, Navigate, useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {variantesPagina, convertirFecha, smartyPants} from "../constantes/constantes";
import Pie from "../componentes/pie";
import Voz from "../componentes/voz";
import axios from "axios";
import {Comentario} from "../modelos/comentario";
import {Usuario} from "../modelos/usuario";
import Markdown from "react-markdown";
import remarkTextr from "remark-textr";

const Entrada = () => {
    const [entrada, setEntrada] = useState<any>();
    const [usuario, setUsuario] = useState(new Usuario());
    const [redirigirInicio, setRedirigirInicio] = useState("normal");
    const [redirigirError, setRedirigirError] = useState("normal");
    const params = useParams();

    useEffect( () => {
        document.title = "Nuestro Diario • Entrada";
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
    }, [params.id]);

    const eliminarEntrada = async () => {
        try {
            await axios.delete(process.env.REACT_APP_BASE_URL + "entrada/" + entrada.id);
            setRedirigirInicio("activado");
        } catch (e) {
            console.log(e);
        }
    }

    const eliminarComentario = async (id: number) => {
        try {
            await axios.delete(process.env.REACT_APP_BASE_URL + "comentario/" + id);
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
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            {entrada !== undefined && redirigirInicio !== "activado" && redirigirError !== "activado" && redirigirError !== "normal" ?
                <article>
                    <h2><Link to={"/entrada/" + entrada.id}>{entrada.titulo}</Link></h2>
                    <h3>{convertirFecha(entrada.fecha, true)} • {entrada.total_com === 0 ? "sin comentarios" : (entrada.total_com === 1 ? "1 comentario" : (entrada.total_com + " comentarios"))} • {entrada.visitas === 0 ? "sin visitas" : (entrada.visitas === 1 ? "1 visita" : (entrada.visitas + " visitas"))}{usuario.id !== 0 ?
                        <span> • <Link to={"#"} onClick={eliminarEntrada}>eliminar</Link></span> : ""}<Voz texto={entrada.titulo + ". " + convertirFecha(entrada.fecha, false) + ". " + entrada.contenido}/></h3>
                    <Markdown
                        remarkPlugins={[[remarkTextr, {plugins: [smartyPants]}]]}>{entrada.contenido}</Markdown>
                    {(entrada.total_com > 0) ? entrada.comentarios.map((comentario: Comentario, index: number) => {
                        return (
                            <div className={"comentario"} key={index}>
                                <h3>{convertirFecha(comentario.fecha, true)} • {comentario.usuario} •
                                    id{comentario.id}{usuario.id !== 0 ? <span> • <Link to={"#"}
                                                                                        onClick={() => eliminarComentario(comentario.id)}>eliminar</Link></span> : ""}</h3>
                                <Markdown
                                    remarkPlugins={[[remarkTextr, {plugins: [smartyPants]}]]}>{comentario.comentario}</Markdown>
                            </div>
                        );
                    }) : ""}
                </article>
                : ""}
            <Pie/>
        </motion.main>
    )
}

export default Entrada;