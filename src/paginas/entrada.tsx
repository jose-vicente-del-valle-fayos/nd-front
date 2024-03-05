import React, {useEffect, useState} from "react";
import {Link, Navigate, useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {variantesPagina, baseURL, convertirFecha} from "../constantes/constantes";
import Pie from "../componentes/pie";
import axios from "axios";
import {Comentario} from "../modelos/comentario";
import {Usuario} from "../modelos/usuario";
import Markdown from 'react-markdown'

const Entrada = () => {
    const [entradas, setEntradas] = useState<any[]>([]);
    const [usuario, setUsuario] = useState(new Usuario());
    const [redirigir, setRedirigir] = useState(false);
    const params = useParams();

    useEffect( () => {
        document.title = "Nuestro Diario · Entrada";
        (
            async () => {
                try {
                    const {data} = await axios.get(baseURL + "entrada/" + params.id);
                    setEntradas([data.datos]);
                } catch (e) {
                    console.log(e);
                }
            }
        )();
        (
            async () => {
                try {
                    const {data} = await axios.get(baseURL + "usuario");
                    setUsuario(new Usuario(
                        data.id,
                        data.sobrenombre,
                        data.nombre,
                        data.apellidos,
                        data.correo,
                        data.entradas,
                        data.total_ent,
                    ));
                } catch (e) {
                    setUsuario(new Usuario());
                }
            }
        )();
    }, [params.id]);

    const eliminarEntrada = async () => {
        try {
            await axios.delete(baseURL + "entrada/" + entradas[0].id);
            setRedirigir(true);
        } catch (e) {
            console.log(e);
        }
    }

    const eliminarComentario = async (id: number) => {
        try {
            await axios.delete(baseURL + "comentario/" + id);
            setRedirigir(true);
        } catch (e) {
            console.log(e);
        }
    }

    if(redirigir) {
        return <Navigate to={"/"}/>;
    }

    return (
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            {(entradas && (entradas.length > 0)) ?
                <article>
                    <h2><Link to={"/entrada/" + entradas[0].id}>{entradas[0].titulo}</Link></h2>
                    <h3>{convertirFecha(entradas[0].fecha, true)} · {entradas[0].usuario} · {entradas[0].total_com === 0 ? "sin comentarios" : (entradas[0].total_com === 1 ? "1 comentario" : (entradas[0].total_com + " comentarios"))} · {entradas[0].visitas} visitas{usuario.id !== 0 ? <span> · <Link to={"#"} onClick={eliminarEntrada}>eliminar</Link></span> : ""}<span
                        className="alineado-derecha"><Link to={"/"} title="Volver atrás"><i className="mdi">arrow_back</i></Link></span></h3>
                    <Markdown>{entradas[0].contenido}</Markdown>
                    {(entradas[0].total_com > 0) ? entradas[0].comentarios.map((comentario: Comentario, index: number) => {
                        return (
                            <div className={"comentario"} key={index}>
                                <h3>{convertirFecha(comentario.fecha, true)} · {comentario.usuario} · id{comentario.id}{usuario.id !== 0 ? <span> · <Link to={"#"} onClick={() => eliminarComentario(comentario.id)}>eliminar</Link></span> : ""}</h3>
                                <Markdown>{comentario.comentario}</Markdown>
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