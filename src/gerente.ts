import { Usuario } from "./usuario";


export class Gerente extends Usuario {
    nomeGerente: String;
    email: String;

    constructor(idUsuario: number, senha: String, statusLogin: String,
        nomeGerente: String, email: String) {
        super(idUsuario, senha, statusLogin);
        this.nomeGerente = nomeGerente;
        this.email = email;
    }

    atualizarProdutos() {

    }
}