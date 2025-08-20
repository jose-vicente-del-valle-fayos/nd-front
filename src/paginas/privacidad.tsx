import React from "react";
import {Link} from "react-router-dom";
import Pie from "../componentes/pie";
import {Helmet} from "react-helmet-async";

const Privacidad = () => {
    return (
        <main className={"fade-in"}>
            <Helmet>
                <title>Nuestro Diario • Privacidad</title>
                <meta name="description" content={"Privacidad de Nuestro Diario."}/>
                <meta property="og:title" content={"Nuestro Diario • Privacidad"}/>
                <meta property="og:description" content={"Privacidad de Nuestro Diario."}/>
                <meta property="og:site_name" content="Nuestro Diario"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://" + String(process.env.REACT_APP_DOMINIO_PERMITIDO)}/>
            </Helmet>
            <article>
                <h2>Privacidad</h2>
                <h3>16 mar 2021</h3>

                <h5>Leyes aplicables</h5>
                <p>Respetando lo establecido en la legislación vigente, www.nuestrodiario.es (en adelante, también sitio
                    web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.</p>
                <p>Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:</p>
                <ul>
                    <li>El <em>Reglamento (UE) 2016/679</em> del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</li>
                    <li>La <em>Ley Orgánica 15/1999</em>, de 13 de diciembre, de Protección de Datos de Carácter Personal (LOPD).</li>
                    <li>El <em>Real Decreto 1720/2007</em>, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</li>
                    <li>La <em>Ley 34/2002</em>, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
                </ul>

                <h5>Identidad del responsable</h5>
                <p>El responsable del tratamiento de los datos personales recogidos en www.nuestrodiario.es es José Vicente del Valle Fayos, con NIF: 73568930-A (en adelante, responsable del tratamiento). Puede usted contactar con él desde la sección de <Link to={"/escribeme"}>escríbeme</Link>.</p>
                <h5>Principios aplicables</h5>
                <p>El tratamiento de los datos personales del usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD:</p>
                <ul>
                    <li><em>Principio de licitud, lealtad y transparencia</em>: se requerirá en todo momento el consentimiento del usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.</li>
                    <li><em>Principio de limitación del fin</em>: los datos personales serán recogidos con fines determinados, explícitos y legítimos.</li>
                    <li><em>Principio de minimización de datos</em>: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.</li>
                    <li><em>Principio de exactitud</em>: los datos personales deben ser exactos y estar siempre actualizados.</li>
                    <li><em>Principio de limitación del plazo de conservación</em>: los datos personales solo serán mantenidos de forma que se permita la identificación del usuario durante el tiempo necesario para los fines de su tratamiento.</li>
                    <li><em>Principio de integridad y confidencialidad</em>: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.</li>
                    <li><em>Principio de responsabilidad proactiva</em>: el responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.</li>
                </ul>

                <h5>Categorías</h5>
                <p>Las categorías de datos que se tratan en www.nuestrodiario.es son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.</p>

                <h5>Base legal</h5>
                <p>La base legal para el tratamiento de los datos personales es el consentimiento. www.nuestrodiario.es se compromete a recabar el consentimiento expreso y verificable del usuario para el tratamiento de sus datos personales para uno o varios fines específicos.</p>
                <p>El usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del sitio web.</p>
                <p>En las ocasiones en las que el usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del sitio web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.</p>

                <h5>Fines del tratamiento</h5>
                <p>Los datos personales son recabados y gestionados por www.nuestrodiario.es con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el sitio web y el usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.</p>
                <p>Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de www.nuestrodiario.es, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el contenido ofertado al usuario, así como mejorar la calidad, funcionamiento y navegación por el sitio web.</p>
                <p>En el momento en que se obtengan los datos personales, se informará al usuario acerca del fin o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada.</p>

                <h5>Períodos de retención</h5>
                <p>Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento o hasta que el usuario solicite su supresión.</p>
                <p>En el momento en que se obtengan los datos personales, se informará al usuario acerca del plazo durante el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este plazo.</p>

                <h5>Destinatarios</h5>
                <p>Los datos personales del usuario no serán compartidos con terceros.</p>

                <h5>Menores de edad</h5>
                <p>Respetando lo establecido en los artículos 8 del RGPD y 13 del RDLOPD, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por www.nuestrodiario.es. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.</p>

                <h5>Galletas</h5>
                <p>Las galletas de www.nuestrodiario.es no almacenan datos personales.</p>

                <h5>Secreto y seguridad</h5>
                <p>www.nuestrodiario.es se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.</p>
                <p>El sitio web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el usuario, y en retroalimentación, totalmente cifrada o encriptada.</p>
                <p>Sin embargo, debido a que www.nuestrodiario.es no puede garantizar la inexpugabilidad de internet ni la ausencia total de jaquers u otros que accedan de modo fraudulento a los datos personales, el responsable del tratamiento se compromete a comunicar al usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.</p>
                <p>Los datos personales serán tratados como confidenciales por el responsable del tratamiento, quien se compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.</p>

                <h5>Derechos derivados</h5>
                <p>El usuario tiene sobre www.nuestrodiario.es y podrá, por tanto, ejercer frente al responsable del tratamiento los siguientes derechos reconocidos en el RGPD:</p>
                <ul>
                    <li><em>Derecho de acceso</em>: Es el derecho del usuario a obtener confirmación de si www.nuestrodiario.es está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que www.nuestrodiario.es haya realizado o realice, así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o previstas de los mismos.</li>
                    <li><em>Derecho de rectificación</em>: Es el derecho del usuario a que se modifiquen sus datos personales que resulten ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.</li>
                    <li><em>Derecho de supresión</em> (“el derecho al olvido”): Es el derecho del usuario, siempre que la legislación vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los cuales fueron recogidos o tratados; el usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; el usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados ilícitamentemente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, el responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su aplicación, deberá adoptar medidas razonables para informar a los responsables que estén tratando los datos personales de la solicitud del interesado de supresión de cualquier enlace a esos datos personales.</li>
                    <li><em>Derecho a la limitación del tratamiento</em>: Es el derecho del usuario a limitar el tratamiento de sus datos personales. El usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; el tratamiento sea ilícito; el responsable del tratamiento ya no necesite los datos personales, pero el usuario lo necesite para hacer reclamaciones; y cuando el usuario se haya opuesto al tratamiento.</li>
                    <li><em>Derecho a la portabilidad de los datos</em>: En caso de que el tratamiento se efectúe por medios automatizados, el usuario tendrá derecho a recibir del responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre que sea técnicamente posible, el responsable del tratamiento transmitirá directamente los datos a ese otro responsable.</li>
                    <li><em>Derecho de oposición</em>: Es el derecho del usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos por parte de www.nuestrodiario.es.</li>
                    <li><em>Derecho a no ser a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles</em>: Es el derecho del usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.</li>
                </ul>
                <p>Así pues, el usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al responsable del tratamiento con la referencia “RGPD-https://www.nuestrodiario.es”, especificando:</p>
                <ul>
                    <li><em>Nombre, apellidos del usuario y copia del DNI</em>. En los casos en que se admita la representación, será también necesaria la identificación por el mismo medio de la persona que representa al usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro medio válido en derecho que acredite la identidad.</li>
                    <li><em>Petición con los motivos específicos de la solicitud o información a la que se quiere acceder</em>.</li>
                    <li><em>Domicilio</em> a efecto de notificaciones.</li>
                    <li><em>Fecha y firma</em> del solicitante.</li>
                    <li><em>Todo documento que acredite la petición que formula</em>.</li>
                </ul>
                <p>Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:</p>
                <ul>
                    <li>Dirección postal: Avda de Valencia 33, 46369 Alborache (Valencia)</li>
                    <li>Correo electrónico: chevifayos@gmail.com</li>
                </ul>

                <h5>Enlaces a terceros</h5>
                <p>El sitio web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de www.nuestrodiario.es, y que por tanto no son operados por www.nuestrodiario.es. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.</p>
                <h5>Reclamaciones</h5>
                <p>En caso de que el usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española de Protección de Datos (http://www.agpd.es).</p>

                <h5>Aceptación y cambios</h5>
                <p>Es necesario que el usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta política de privacidad, así como que acepte el tratamiento de sus datos personales para que el responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del sitio web implicará la aceptación de la política de privacidad del mismo.</p>
                <p>www.nuestrodiario.es se reserva el derecho a modificar su política de privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta política de privacidad no serán notificados e forma explícita al usuario. Se recomienda al usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones.</p>
                <p>Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</p>
            </article>
            <Pie/>
        </main>
    )
}

export default Privacidad;