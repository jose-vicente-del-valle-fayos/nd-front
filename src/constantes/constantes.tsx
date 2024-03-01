export const variantesPagina = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0}
};

export const baseURL = "https://nd-back-0e9fe8b65c95.herokuapp.com/api/";// String(process.env.BASE_URL_PROPIA);

export const entradasPorPagina: number = Number(process.env.ENT_POR_PAG);
export const epEscribeme: string = String(process.env.RUTA_ESC); // endpoint de escríbeme
export const correoDestino: string = String(process.env.CORREO_DEST);