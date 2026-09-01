import React from "react";
import {Link} from "react-router-dom";
import {anoActual} from "../constantes/constantes";
import Pie from "../componentes/pie";
import Voz from "../componentes/voz";
import Portapapeles from "../componentes/portapapeles";
import {Helmet} from "react-helmet-async";

const Conozcame = () => {
    return (
        <main className={"fade-in"}>
            <Helmet>
                <title>Nuestro Diario • Conózcame</title>
                <meta name="description"
                      content={"Me llamo John Smith y soy desarrollador especializado en aplicaciones web, APIs, gestión de bases de datos y seguridad informática."}/>
                <meta property="og:title" content={"Bitácora • Conózcame"}/>
                <meta property="og:description"
                      content={"Me llamo John Smith y soy desarrollador especializado en aplicaciones web, APIs, gestión de bases de datos y seguridad informática."}/>
                <meta property="og:site_name" content="Bitácora"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://" + process.env.REACT_APP_DOMINIO_PERMITIDO}/>
            </Helmet>
            <article>
                <h2>John Smith</h2>
                <h3>Contribuidor Open Source<span className={"alineado-derecha"}><Voz
                    texto={`Me llamo John Smith y soy desarrollador especializado en aplicaciones web, APIs, gestión de bases de datos y seguridad informática. A lo largo de mis ${String(parseInt(anoActual())-1999)} años vinculados al entorno académico he adquirido una formación sólida y diversa, de la que quiero destacar el Máster en Aplicaciones para la Web de la Universidad de Rivendel, donde encontré mi talento y mi vocación. Desde entonces, he trabajado en numerosos proyectos, familiarizándome con una amplia variedad de tecnologías: HTML, CSS, SASS, JavaScript, PHP, Node, Angular, Vue, React, MySQL, PostgreSQL, MongoDB, Firebase y GoLang, entre otras. En lo que se refiere al trabajo, centro mis esfuerzos en desarrollar soluciones eficientes y escalables, prestando especial atención a la precisión, el cuidado en los detalles y el cumplimiento de las mejores prácticas de programación. Mis aplicaciones no solo satisfacen las expectativas de funcionalidad, sino que destacan en rendimiento, seguridad y mantenibilidad. Puede encontrar ejemplos de mi actividad como desarrollador en mi perfil de GitHub, donde comparto proyectos bajo licencia MIT, contribuyendo activamente con la comunidad open source. Actualmente curso el Grado en Ingeniería Informática de la Universidad a Distancia de Castle Rock a tiempo parcial, porque deseo extender mis competencias en el desarrollo de aplicaciones de escritorio, la gestión de sistemas operativos y el uso del machine learning para mejorar la eficiencia de los procesos de cómputo. Compagino dichos estudios con aficiones que me proporcionan salud y propósito: escritura, meditación, senderismo y fotografía. Estoy convencido de que nuestra colaboración ayudará a fortalecer su equipo de trabajo con el compromiso de excelencia profesional que me caracteriza, y que se refleja en propuestas que generan un impacto significativo y duradero. Para ampliar cualquier información, escríbame un mensaje.`}/>
                <Portapapeles url={process.env.REACT_APP_DOMINIO_PERMITIDO + "/conozcame"}/></span></h3>
                <p>Me llamo John Smith y soy <strong>desarrollador especializado en aplicaciones web, APIs, gestión de bases de datos y seguridad informática</strong>. A lo largo de mis {String(parseInt(anoActual())-1999)} años vinculados al entorno académico he adquirido una <strong>formación sólida y diversa</strong>, de la que quiero destacar el <em>Máster en Aplicaciones para la Web de la Universidad de Rivendel</em>, donde encontré mi talento y mi vocación.</p>
                <p className={"sin-margin-bottom"}>Desde entonces, he trabajado en numerosos proyectos, familiarizándome con una <strong>amplia variedad de tecnologías</strong>: <em>HTML</em>, <em>CSS</em>, <em>SASS</em>, <em>JavaScript</em>, <em>PHP</em>, <em>Node</em>, <em>Angular</em>, <em>Vue</em>, <em>React</em>, <em>MySQL</em>, <em>PostgreSQL</em>, <em>MongoDB</em>, <em>Firebase</em> y <em>GoLang</em>, entre otras.</p>
                <img src={require("../imagenes/john-smith.jpg")} alt={"John Smith"} title={"John Smith"}/>
                <p>En lo que se refiere al trabajo, centro mis esfuerzos en desarrollar soluciones <strong>eficientes y escalables</strong>, prestando especial atención a la <strong>precisión</strong>, el <strong>cuidado en los detalles</strong> y el <strong>cumplimiento de las mejores prácticas de programación</strong>. Mis aplicaciones no solo satisfacen las expectativas de funcionalidad, sino que destacan en <strong>rendimiento</strong>, <strong>seguridad</strong> y <strong>mantenibilidad</strong>. Puede encontrar ejemplos de mi actividad como desarrollador en mi perfil de GitHub, donde comparto proyectos bajo licencia MIT, contribuyendo activamente con la <strong>comunidad open source</strong>.</p>
                <p>Actualmente curso el <em>Grado en Ingeniería Informática de la Universidad a Distancia de Castle Rock</em> a tiempo parcial, porque deseo extender mis competencias en el <strong>desarrollo de aplicaciones de escritorio</strong>, la <strong>gestión de sistemas operativos</strong> y el <strong>uso del machine learning para mejorar la eficiencia de los procesos de cómputo</strong>. Compagino dichos estudios con aficiones que me proporcionan salud y propósito: <em>escritura</em>, <em>meditación</em>, <em>senderismo</em> y <em>fotografía</em>.</p>
                <p>Estoy convencido de que nuestra colaboración ayudará a fortalecer su equipo de trabajo con el compromiso de excelencia profesional que me caracteriza, y que se refleja en <strong>propuestas que generan un impacto significativo y duradero</strong>. Para ampliar cualquier información, <Link to={"/escribame"}>escríbame un mensaje</Link>.</p>
            </article>
            <Pie/>
        </main>
    )
}

export default Conozcame;