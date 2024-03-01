import React, {SyntheticEvent, useEffect, useState} from "react";
import {motion} from "framer-motion";
import {variantesPagina, baseURL} from "../constantes/constantes";
import axios from "axios";
import {Navigate} from "react-router-dom";
import Pie from "../componentes/pie";
import {Usuario} from "../modelos/usuario";

const Administracion = () => {
    const [redirigir, setRedirigir] = useState(false);
    const [usuario, setUsuario] = useState(new Usuario());
    const [eid, setEid] = useState(0);
    const [eidus, setEidus] = useState(0);
    const [eusuario, setEusuario] = useState("");
    const [eespecial, setEespecial] = useState(false);
    const [etitulo, setEtitulo] = useState("");
    const [efecha, setEfecha] = useState("2006-01-02");
    const [econtenido, setEcontenido] = useState("");
    const [eexito, setEexito] = useState(false);
    const [cid, setCid] = useState(0);
    const [cident, setCident] = useState(0);
    const [cusuario, setCusuario] = useState("");
    const [ccorreo, setCcorreo] = useState("anonimo");
    const [cfecha, setCfecha] = useState("2006-01-02");
    const [ccomentario, setCcomentario] = useState("");
    const [cexito, setCexito] = useState(false);

    const crearActualizarEntrada = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            let nuevaEntrada = {
                id_us: eidus,
                usuario: eusuario,
                especial: eespecial,
                titulo: etitulo,
                fecha: efecha,
                contenido: econtenido
            };
            console.log(nuevaEntrada);
            if(eid === 0) {
                await axios.post(baseURL + "entrada", nuevaEntrada);
                setEexito(true);
            } else {
                await axios.put(baseURL + "entrada" + eid, nuevaEntrada);
                setEexito(true);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const crearActualizarComentario = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            let nuevoComentario = {
                id_ent: cident,
                usuario: cusuario,
                correo: ccorreo,
                fecha: cfecha,
                comentario: ccomentario
            };
            if(cid === 0) {
                await axios.post(baseURL + "comentario", nuevoComentario);
                setCexito(true);
            } else {
                await axios.put(baseURL + "comentario" + cid, nuevoComentario);
                setCexito(true);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        document.title = "Nuestro Diario · Administración";
        (
            async () => {
                try {
                    const {data} = await axios.get(baseURL + "usuario",{
                        withCredentials: true,
                    });
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
                    console.log(e);
                    setRedirigir(true);
                }
            }
        )();
    });

    if(redirigir) {
        return <Navigate to={"/acceso"}/>;
    }
    if(eexito) {
        setTimeout(() => {setEexito(false)}, 3000);
    }
    if(cexito) {
        setTimeout(() => {setCexito(false)}, 3000);
    }

    return (
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            <h2>Insertar entrada</h2>
            <h3>{usuario.nombreCompleto}</h3>
            <p>Insertar o actualizar una entrada en nuestro diario, según se indique el identificador o no. Marcar
                especial para incluir la entrada en la sección de especial. Escribir el contenido en formato markdown.</p>
            <form onSubmit={crearActualizarEntrada}>
                <ul className="ul-form">
                    <li><label className="contenedor-label noetiquetaflotante especial admin" htmlFor="especial"><input
                        type="checkbox" className="especial admin" name="especial" onChange={(e) => setEespecial(e.target.checked)}/><span
                        className="checkmark left-cero"></span>Especial</label></li>
                    <li><input type="text" className="id admin" name="id" placeholder="Entrada"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false"
                               onChange={(e) => setEid(Number(e.target.value))}/><label>Id de la entrada</label></li>
                    <li><input type="text" className="idus admin" name="idus" placeholder="Id del usuario"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false"
                               onChange={(e) => setEidus(Number(e.target.value))}/><label>Id del usuario</label></li>
                    <li><input type="text" className="usuario admin" name="usuario" placeholder="Usuario"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false" onChange={(e) => setEusuario(e.target.value)}/><label>Usuario</label>
                    </li>
                    <li><input type="text" className="titulo admin" name="titulo" placeholder="Título"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false" onChange={(e) => setEtitulo(e.target.value)}/><label>Título</label>
                    </li>
                    <li><textarea className="contenido admin" name="contenido"
                                  placeholder="Escribe aquí el contenido de la entrada…" autoComplete="off"
                                  autoCorrect="off" autoCapitalize="off" spellCheck="false"
                                  onChange={(e) => setEcontenido(e.target.value)}></textarea><label>Escribe
                        aquí el contenido de la entrada…</label></li>
                    <li><input type="text" className="fecha admin" name="fecha"
                               placeholder="Fecha (AAAA-MM-DD)" autoComplete="off" autoCorrect="off"
                               autoCapitalize="off" spellCheck="false"
                               onChange={(e) => setEfecha(e.target.value)}/><label>Fecha</label></li>
                    <li>
                        <button type="submit" className="enviar boton-largo"
                                value="Publicar">{eexito ? <span>Ok</span> : <span>Publicar</span>}
                        </button>
                    </li>
                </ul>
            </form>
            <h2>Insertar comentario</h2>
            <p>Insertar o actualizar el comentario de una entrada de nuestro diario. Escribir el comentario en formato markdown.</p>
            <form onSubmit={crearActualizarComentario}>
                <ul className="ul-form">
                    <li><input type="text" className="id admin" name="usuario" placeholder="Id del comentario"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false" onChange={(e) => setCid(Number(e.target.value))}/><label>Id del comentario</label></li>
                    <li><input type="text" className="ident admin" name="usuario" placeholder="Id de la entrada"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false"  onChange={(e) => setCident(Number(e.target.value))}/><label>Id de la entrada</label></li>
                    <li><input type="text" className="usuario admin" name="usuario" placeholder="Usuario"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false" onChange={(e) => setCusuario(e.target.value)}/><label>Usuario</label>
                    </li>
                    <li><input type="text" className="correo admin" name="correo"
                               placeholder="Correo (no será publicado)" autoComplete="off" autoCorrect="off"
                               autoCapitalize="off" spellCheck="false" onChange={(e) => setCcorreo(e.target.value)}/><label>Correo (no será publicado)</label></li>
                    <li><textarea className="contenido admin" name="comentario"
                                  placeholder="Escribe aquí el comentario…" autoComplete="off" autoCorrect="off"
                                  autoCapitalize="off" spellCheck="false" onChange={(e) => setCcomentario(e.target.value)}></textarea><label>Escribe aquí el
                        comentario…</label></li>
                    <li><input type="text" className="fecha admin" name="fecha"
                               placeholder="Fecha (AAAA-MM-DD)" autoComplete="off" autoCorrect="off"
                               autoCapitalize="off" spellCheck="false" onChange={(e) => setCfecha(e.target.value)}/><label>Fecha</label></li>
                    <li>
                        <button type="submit" className="enviar boton-largo">{cexito ? <span>Ok</span> : <span>Comentar</span>}</button>
                    </li>
                </ul>
            </form>
            <Pie/>
        </motion.main>
    )
}

export default Administracion;