export class Entrada {
    constructor(
        public id: number = 0,
        public id_us: number = 0,
        public usuario: string = "",
        public especial: boolean = false,
        public titulo: string = "",
        public fecha: string = "",
        public contenido: string = "",
        public imagen: any,
        public comentarios: any = [],
        public total_com: number = 0,
        public visitas: number = 0,
    ){
    }
}
