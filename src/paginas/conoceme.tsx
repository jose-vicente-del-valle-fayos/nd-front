import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {variantesPagina} from "../constantes/constantes";
import Pie from "../componentes/pie";

const Conoceme = () => {
    useEffect(() => {
        document.title = "Nuestro Diario · Conóceme";
    }, []);
    return (
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            <article>
                <h2>Conóceme</h2>
                <h3>José Vicente del Valle Fayos
                    <span className="alineado-derecha">
                        <Link to={"/"} title="Copiar enlace" id="clic-conoceme"><i className="mdi">link</i></Link>
                    </span>
                </h3>
                <p>Crecí en un pequeño pueblo del interior de Valencia donde <strong>mis maestros me enseñaron a distinguir lo bueno de lo malo</strong>. Como no quería ser malo, empecé a comportarme como si fuera otro. Y ahora no sé quien soy.</p>
                <p>Ya en el instituto, <strong>intenté llenar el vacío de mi identidad olvidada con la presencia de una chica que renegaba de mí</strong>. Y así acabé en la consulta del especialista.</p>
                <p>El especialista me dijo: “Háblame de tu infancia”. Entonces, <strong>empecé a inventar las mismas historias que mis maestros contaban cuando era niño</strong>. Esas historias iban recorriendo nuestras mejillas y me iban liberando de ser el otro que nunca fui.</p>
                <img src={require("../imagenes/jose-vicente-del-valle-fayos.jpg")} alt={"José Vicente del Valle Fayos"} title={"José Vicente del Valle Fayos"}/>
                <p>Sin embargo, sigo sin saber quien soy. Por eso <strong>compongo mis letras en <Link to={"/"}>un diario</Link> que pretende traer a la luz los tesoros dorados de mi inocencia perdida</strong>.</p>
                <p>Ahora, el cuidado de uno mismo, la familia, los proyectos personales, las lecturas eternas y el descanso diario ocupan mi tiempo. Y ese tiempo soy yo, liberado del juicio. <strong>Convertido en una persona normal, ocupada —eso sí— en asuntos extraordinarios</strong>.</p>
                <p><em>Dicen que la vida es eso que pasa mientras haces otros planes. Y no se me ocurre mejor plan que disfrutar las pequeñas cosas, pues en ellas está la clave de una vida bien aprovechada.</em></p>
                <p>Si necesitas saber algo más sobre mí, si quieres conocerme o si simplemente me quieres saludar, escríbeme un mensaje.</p>
            </article>
            <Pie/>
        </motion.main>
    )
}

export default Conoceme;