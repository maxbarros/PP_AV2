export class Usuario {
    private idUsuario: number;
    private senha: String;
    private statusLogin: String;


    constructor(id: number, senha: String, status: String) {
        this.idUsuario = id;
        this.senha = senha;
        this.statusLogin = status
    }

    public verifLogin() {

    }
}