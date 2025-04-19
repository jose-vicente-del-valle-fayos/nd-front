import React, {SyntheticEvent, useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import Pie from "../componentes/pie";
import {Usuario} from "../modelos/usuario";
import {Helmet} from "react-helmet-async";

const Administracion = () => {
    const [redirigir, setRedirigir] = useState(false);
    const [usuario, setUsuario] = useState(new Usuario());
    const [eid, setEid] = useState(0);
    const [eespecial, setEespecial] = useState(false);
    const [etitulo, setEtitulo] = useState("");
    const [efecha, setEfecha] = useState("2006-01-02");
    const [econtenido, setEcontenido] = useState("");
    const [eimagen, setEimagen] = useState<File | null>(null);
    const [eexito, setEexito] = useState("normal");
    const [cid, setCid] = useState(0);
    const [cident, setCident] = useState(0);
    const [cusuario, setCusuario] = useState("");
    const [ccorreo, setCcorreo] = useState("anonimo");
    const [cfecha, setCfecha] = useState("2006-01-02");
    const [ccomentario, setCcomentario] = useState("");
    const [cexito, setCexito] = useState("normal");

    const crearActualizarEntrada = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            let formData: FormData;
            formData = new FormData();
            formData.append("id", eid.toString());
            formData.append("id_us", usuario.id.toString());
            formData.append("usuario", usuario.sobrenombre);
            formData.append("especial", eespecial.toString());
            formData.append("titulo", etitulo);
            formData.append("fecha", efecha);
            formData.append("contenido", econtenido);
            if(eimagen){
                formData.append("imagen-entrada", eimagen);
            }
            for (let [key, value] of formData.entries()) { console.log(`${key}: ${value}`); }
            if(eid === 0) {
                let {data} = await axios.post(process.env.REACT_APP_BASE_URL + "entrada", formData);
                if(data.mensaje){ setEexito("error"); }
                else{ setEexito("enviado"); }
            } else {
                let {data} = await axios.put(process.env.REACT_APP_BASE_URL + "entrada/" + eid, formData);
                if(data.mensaje) { setEexito("error"); }
                else{ setEexito("enviado"); }
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
                let {data} =  await axios.post(process.env.REACT_APP_BASE_URL + "comentario", nuevoComentario);
                if(data.mensaje) { setCexito("error"); }
                else { setCexito("enviado"); }
            } else {
                let {data} =  await axios.put(process.env.REACT_APP_BASE_URL + "comentario/" + cid, nuevoComentario);
                if(data.mensaje) { setCexito("error"); }
                else { setCexito("enviado"); }
            }
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
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
    if(eexito == "enviado" || eexito == "error") {
        setTimeout(() => {setEexito("normal")}, 2000);
    }
    if(cexito == "enviado" || cexito == "error") {
        setTimeout(() => {setCexito("normal")}, 2000);
    }

    return (
        <main className={"fade-in"}>
            <Helmet>
                <title>Nuestro Diario • Administración</title>
                <meta name="description" content={"Administración de Nuestro Diario."}/>
                <meta property="og:title" content={"Nuestro Diario • Administración"}/>
                <meta property="og:description" content={"Administración de Nuestro Diario."}/>
                <meta property="og:site_name" content="Nuestro Diario"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://" + String(process.env.REACT_APP_DOMINIO_PERMITIDO)}/>
            </Helmet>
            <h2>Insertar entrada</h2>
            <h3>{usuario.nombreCompleto}</h3>
            <p>Insertar o actualizar una entrada en nuestro diario, según se indique el identificador o no. Marcar
                especial para incluir la entrada en la sección de especial. Escribir el contenido en formato
                markdown.</p>
            <form onSubmit={crearActualizarEntrada} encType="multipart/form-data">
                <ul className="ul-form">
                    <li><label className="contenedor-label noetiquetaflotante especial admin" htmlFor="especial"><input
                        type="checkbox" className="especial admin" name="especial"
                        onChange={(e) => setEespecial(e.target.checked)}/><span
                        className="checkmark left-cero"></span>Especial</label></li>
                    <li><input type="text" className="id admin" name="id" placeholder="Entrada"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false"
                               onChange={(e) => setEid(Number(e.target.value))}/><label>Id de la entrada</label></li>
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
                               placeholder="Fecha (AAAA-MM-DD HH:MM)" autoComplete="off" autoCorrect="off"
                               autoCapitalize="off" spellCheck="false"
                               onChange={(e) => setEfecha(e.target.value)}/><label>Fecha</label></li>
                    <li><input type="file" id="imagen-entrada" className="subir-archivo admin" name="imagen-entrada"
                               placeholder="Escribe aquí el comentario…" autoComplete="off" autoCorrect="off"
                               autoCapitalize="off" spellCheck="false"
                               onChange={(e) => (e.target.files && e.target.files.length > 0) ? setEimagen(e.target.files.item(0)) : setEimagen(null)}/>
                        <label htmlFor="imagen-entrada" id="label-imagen-entrada" className="noetiquetaflotante">{eimagen ? eimagen.name: <div>Selecciona
                            un archivo…</div>}</label>
                    </li>
                    <li>
                        <button type="submit" className="enviar boton-largo" value="Publicar">
                            {eexito == "enviado" ? <i className="mdi mdi-button">done</i> : (eexito == "error" ?
                                <i className="mdi mdi-button">close</i> : <span>Publicar</span>)}
                        </button>
                    </li>
                </ul>
            </form>
            <h2>Insertar comentario</h2>
            <h3>{usuario.nombreCompleto}</h3>
            <p>Insertar o actualizar el comentario de una entrada de nuestro diario. Escribir el comentario en formato
                markdown.</p>
            <form onSubmit={crearActualizarComentario}>
                <ul className="ul-form">
                    <li><input type="text" className="id admin" name="usuario" placeholder="Id del comentario"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false" onChange={(e) => setCid(Number(e.target.value))}/><label>Id del
                        comentario</label></li>
                    <li><input type="text" className="ident admin" name="usuario" placeholder="Id de la entrada"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false" onChange={(e) => setCident(Number(e.target.value))}/><label>Id de la
                        entrada</label></li>
                    <li><input type="text" className="usuario admin" name="usuario" placeholder="Usuario"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false" onChange={(e) => setCusuario(e.target.value)}/><label>Usuario</label>
                    </li>
                    <li><input type="text" className="correo admin" name="correo"
                               placeholder="Correo (no será publicado)" autoComplete="off" autoCorrect="off"
                               autoCapitalize="off" spellCheck="false"
                               onChange={(e) => setCcorreo(e.target.value)}/><label>Correo (no será publicado)</label>
                    </li>
                    <li><textarea className="contenido admin" name="comentario"
                                  placeholder="Escribe aquí el comentario…" autoComplete="off" autoCorrect="off"
                                  autoCapitalize="off" spellCheck="false"
                                  onChange={(e) => setCcomentario(e.target.value)}></textarea><label>Escribe aquí el
                        comentario…</label></li>
                    <li><input type="text" className="fecha admin" name="fecha"
                               placeholder="Fecha (AAAA-MM-DD HH:MM)" autoComplete="off" autoCorrect="off"
                               autoCapitalize="off" spellCheck="false"
                               onChange={(e) => setCfecha(e.target.value)}/><label>Fecha</label></li>
                    <li>
                        <button type="submit" className="enviar boton-largo">
                            {cexito == "enviado" ? <i className="mdi mdi-button">done</i> : (cexito == "error" ?
                                <i className="mdi mdi-button">close</i> : <span>Publicar</span>)}
                        </button>
                    </li>
                </ul>
            </form>
            <Pie/>
        </main>
    )
}

export default Administracion;