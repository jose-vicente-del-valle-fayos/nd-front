export class Comentario {
    constructor(
        public id: number = 0,
        public id_ent: number = 0,
        public usuario: string = "",
        public correo: string = "",
        public fecha: string = "",
        public comentario: string = "",
    ){
    }
}
