import React from "react";
import {Link} from "react-router-dom";
import Pie from "../componentes/pie";
import {Helmet} from "react-helmet-async";

const Aviso = () => {
    return (
        <main className={"fade-in"}>
            <Helmet>
                <title>Nuestro Diario • Aviso</title>
                <meta name="description" content={"Aviso de Nuestro Diario."}/>
                <meta property="og:title" content={"Nuestro Diario • Aviso"}/>
                <meta property="og:description" content={"Aviso de Nuestro Diario."}/>
                <meta property="og:site_name" content="Nuestro Diario"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://" + String(process.env.REACT_APP_DOMINIO_PERMITIDO)}/>
            </Helmet>
            <article>
                <h2>Aviso legal</h2>
                <h3>16 mar 2021</h3>
                <h5>Información general</h5>
                <p>En cumplimiento con el deber de información dispuesto en la <em>Ley 34/2002 de servicios de la
                    Sociedad de la Información y el Comercio Electrónico (LSSI-CE)</em> de 11 de julio, se facilitan
                    a continuación los siguientes datos de información general de este sitio web.</p>
                <p>La titularidad de este sitio web, https://www.nuestrodiario.es, (en adelante, sitio web) la tiene
                    José Vicente del Valle Fayos, con NIF: 73568930-A. Puede usted contactar con él desde la sección
                    de <Link to={"/escribeme"}>escríbeme</Link>.</p>

                <h5>Términos y condiciones</h5>
                <p>El objeto de las presentes condiciones generales de uso (en adelante, condiciones) es regular el
                    acceso y la utilización del sitio web. A los efectos de las presentes condiciones se entenderá
                    como sitio web: la apariencia externa de las interfaces de pantalla, tanto de forma estática
                    como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto
                    en los interfaces de pantalla como en el árbol de navegación (en adelante, contenidos) y todos
                    aquellos servicios o recursos en línea que en su caso ofrezca a los usuarios (en adelante,
                    servicios).</p>
                <p>www.nuestrodiario.es se reserva la facultad de modificar, en cualquier momento y sin aviso
                    previo, la presentación y configuración del sitio web y de los contenidos y servicios que en él
                    pudieran estar incorporados. El usuario reconoce y acepta que en cualquier momento
                    www.nuestrodiario.es pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos
                    que se integran en el sitio web o el acceso a los mismos.</p>
                <p>El acceso al sitio web por el usuario tiene carácter libre y, por regla general, es gratuito sin
                    que el usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo
                    en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el
                    proveedor de acceso que hubiere contratado el usuario.</p>
                <p>La utilización de los contenidos no requiere previa suscripción o registro alguno.</p>

                <h5>El usuario</h5>
                <p>El acceso, la navegación y uso del sitio web, así como por los espacios habilitados para
                    interactuar entre los usuarios, y el usuario y www.nuestrodiario.es, como los comentarios y/o
                    espacios del sitio web, confiere la condición de usuario, por lo que se aceptan, desde que se
                    inicia la navegación por el sitio web, todas las condiciones aquí establecidas, así como sus
                    ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal
                    de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda al
                    usuario leerlas cada vez que visite el sitio web.</p>
                <p>El sitio web de www.nuestrodiario.es proporciona gran diversidad de información, servicios y
                    datos. El usuario asume su responsabilidad para realizar un uso correcto del sitio web. Esta
                    responsabilidad se extenderá a:</p>
                <ul>
                    <li>Un uso de la información, contenidos y/o servicios y datos ofrecidos por
                        www.nuestrodiario.es sin que sea contrario a lo dispuesto por las presentes condiciones, la
                        ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los
                        derechos de terceros o del mismo funcionamiento del sitio web.
                    </li>
                    <li>La veracidad y licitud de las informaciones aportadas por el usuario en los formularios
                        extendidos por www.nuestrodiario.es para el acceso a ciertos contenidos o servicios
                        ofrecidos por el sitio web. En todo caso, el usuario notificará de forma inmediata a
                        www.nuestrodiario.es acerca de cualquier hecho que permita el uso indebido de la información
                        registrada en dichos formularios, tales como, pero no sólo, el robo, extravío, o el acceso
                        no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata
                        cancelación.
                    </li>
                    <li>www.nuestrodiario.es se reserva el derecho de retirar todos aquellos comentarios y
                        aportaciones que vulneren la ley, el respeto a la dignidad de la persona, que sean
                        discriminatorios, xenófobos, racistas, pornográficos, spamming, que atenten contra la
                        juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran
                        adecuados para su publicación.
                    </li>
                </ul>
                <p>En cualquier caso, www.nuestrodiario.es no será responsable de las opiniones vertidas por los
                    usuarios a través de comentarios u otras herramientas de participación que pueda haber.</p>
                <p>El mero acceso a este sitio web no supone entablar ningún tipo de relación de carácter comercial
                    entre www.nuestrodiario.es y el usuario.</p>
                <p>Siempre en el respeto de la legislación vigente, este sitio web de www.nuestrodiario.es se dirige
                    a todas las personas, sin importar su edad, que puedan acceder y/o navegar por las páginas del
                    sitio web.</p>

                <h5>Acceso y navegación</h5>
                <p>www.nuestrodiario.es no garantiza la continuidad, disponibilidad y utilidad del sitio web, ni de
                    los contenidos o servicios. www.nuestrodiario.es hará todo lo posible por el buen funcionamiento
                    del sitio web, sin embargo, no se responsabiliza ni garantiza que el acceso a este sitio web no
                    vaya a ser ininterrumpido o que esté libre de error.</p>
                <p>Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través
                    de este sitio web, esté libre de error o cause un daño al sistema informático (software y
                    hardware) del usuario. En ningún caso www.nuestrodiario.es será responsable por las pérdidas,
                    daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y el uso del sitio
                    web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas informáticos o los
                    provocados por la introducción de virus.</p>
                <p>www.nuestrodiario.es tampoco se hace responsable de los daños que pudiesen ocasionarse a los
                    usuarios por un uso inadecuado de este sitio web. En particular, no se hace responsable en modo
                    alguno de las caídas, interrupciones, falta o defecto de las telecomunicaciones que pudieran
                    ocurrir.</p>

                <h5>Política de enlaces</h5>
                <p>Se informa que el sitio web de www.nuestrodiario.es pone o puede poner a disposición de los
                    usuarios medios de enlace, directorios y motores de búsqueda que permiten a los usuarios acceder
                    a sitios web pertenecientes y/o gestionados por terceros.</p>
                <p>La instalación de estos enlaces, directorios y motores de búsqueda en el sitio web tiene por
                    objeto facilitar a los usuarios la búsqueda de y acceso a la información disponible en Internet,
                    sin que pueda considerarse una sugerencia, recomendación o invitación para la visita de los
                    mismos.</p>
                <p>www.nuestrodiario.es no ofrece ni comercializa por sí ni por medio de terceros los productos y/o
                    servicios disponibles en dichos sitios enlazados.</p>
                <p>Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o
                    legalidad de sitios ajenos a su propiedad a los que se pueda acceder por medio de los
                    enlaces.</p>
                <p>www.nuestrodiario.es en ningún caso revisará o controlará el contenido de otros sitios web, así
                    como tampoco aprueba, examina ni hace propios los productos y servicios, contenidos, archivos y
                    cualquier otro material existente en los referidos sitios enlazados.</p>
                <p>www.nuestrodiario.es no asume ninguna responsabilidad por los daños y perjuicios que pudieran
                    producirse por el acceso, uso, calidad o licitud de los contenidos, comunicaciones, opiniones,
                    productos y servicios de los sitios web no gestionados por www.nuestrodiario.es y que sean
                    enlazados en este sitio web.</p>
                <p>El usuario o tercero que realice un hipervínculo desde una página web de otro, distinto, sitio
                    web al sitio web de www.nuestrodiario.es deberá saber que:</p>
                <ul>
                    <li>No se permite la reproducción —total o parcialmente— de ninguno de los contenidos y/o
                        servicios del sitio web sin autorización expresa de www.nuestrodiario.es.
                    </li>
                    <li>No se permite tampoco ninguna manifestación falsa, inexacta o incorrecta sobre el sitio web
                        de www.nuestrodiario.es, ni sobre los contenidos y/o servicios del mismo.
                    </li>
                    <li>A excepción del hipervínculo, el sitio web en el que se establezca dicho hiperenlace no
                        contendrá ningún elemento, de este sitio web, protegido como propiedad intelectual por el
                        ordenamiento jurídico español, salvo autorización expresa de www.nuestrodiario.es.
                    </li>
                    <li>El establecimiento del hipervínculo no implicará la existencia de relaciones entre
                        www.nuestrodiario.es y el titular del sitio web desde el cual se realice, ni el conocimiento
                        y aceptación de www.nuestrodiario.es de los contenidos, servicios y/o actividades ofrecidos
                        en dicho sitio web, y viceversa.
                    </li>
                </ul>

                <h5>Propiedad intelectual o industrial</h5>
                <p>www.nuestrodiario.es por sí o como parte cesionaria, es titular de todos los derechos de
                    propiedad intelectual e industrial del sitio web, así como de los elementos contenidos en el
                    mismo (a título enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o textos,
                    marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales
                    usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.). Serán,
                    por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico
                    español, siéndoles aplicables tanto la normativa española y comunitaria en este campo, como los
                    tratados internacionales relativos a la materia y suscritos por España.</p>
                <p>Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual,
                    quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública,
                    incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta
                    página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la
                    autorización de www.nuestrodiario.es.</p>
                <p>El usuario se compromete a respetar los derechos de propiedad intelectual e industrial de
                    www.nuestrodiario.es. Podrá visualizar los elementos del sitio web o incluso imprimirlos,
                    copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico
                    siempre y cuando sea, exclusivamente, para su uso personal. El usuario, sin embargo, no podrá
                    suprimir, alterar, o manipular cualquier dispositivo de protección o sistema de seguridad que
                    estuviera instalado en el sitio web.</p>
                <p>En caso de que el usuario o tercero considere que cualquiera de los contenidos del sitio web
                    suponga una violación de los derechos de protección de la propiedad intelectual, deberá
                    comunicarlo inmediatamente a www.nuestrodiario.es a través de los datos de contacto del apartado
                    de información general de este aviso legal y condiciones generales de uso.</p>

                <h5>Acciones legales, legislación y jurisdicción</h5>
                <p>www.nuestrodiario.es se reserva la facultad de presentar las acciones civiles o penales que
                    considere necesarias por la utilización indebida del sitio web y contenidos, o por el
                    incumplimiento de las presentes condiciones.</p>
                <p>La relación entre el usuario y www.nuestrodiario.es se regirá por la normativa vigente y de
                    aplicación en el territorio español. De surgir cualquier controversia en relación con la
                    interpretación y/o a la aplicación de estas condiciones las partes someterán sus conflictos a la
                    jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a
                    derecho.</p>
            </article>
            <Pie/>
        </main>
    )
}

export default Aviso;