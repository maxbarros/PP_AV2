import { Subject } from "./observer";

export class Pedido {
    private numPedido: number;
    private preco: number;
    private detalhes: String;
    public statusEnvio = new Subject();

    constructor(numPedido: number, preco: number, detalhes: String) {
        this.numPedido = numPedido;
        this.preco = preco;
        this.detalhes = detalhes;
    }

    public confirmarRecebimento() {
        this.statusEnvio.setState("Objeto recebido pelo destinatário")
    }
}