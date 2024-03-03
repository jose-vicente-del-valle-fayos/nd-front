export const variantesPagina = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0}
};

export const enviarCorreo = () => {
    window.open("mailto:" + correoDestino);
}

export const baseURL = "https://api.nuestrodiario.es/"; // String(process.env.BASE_URL_BACK);

export const entradasPorPagina: number = 5; // Number(process.env.ENT_POR_PAG);
export const epEscribeme: string = "KzQ987h29KkYem"; // String(process.env.RUTA_ESC); // endpoint de escríbeme
export const correoDestino: string = "musheres.dioxinas.0p@icloud.com"; // String(process.env.CORREO_DEST);