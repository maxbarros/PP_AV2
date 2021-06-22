import { Usuario } from "./usuario";


export class Cliente extends Usuario {
    private nomeCliente: String;
    private telefone: number;
    private email: String;
    private endereco: String;

    constructor(idUsuario: number, senha: String, statusLogin: String,
        nome: String, telefone: number, email: String, endereco: String) {
        super(idUsuario, senha, statusLogin);
        this.nomeCliente = nome;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;

    }
    public efetuarCadastro() {
        console.log("Cadastro Concluído");
    }

    public login() {
        console.log("Login efetuado")
    }

    public editarPerfil() {
        console.log("Perfil Atualizado");
    }
}
