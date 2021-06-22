import { Produto } from "./produto";

export class Carrinho {
    produtos: Produto[] = [];
    quantidade: number;

    constructor(quant: number) {
        this.quantidade = quant;
    }

    efetuarCompra() {
        console.log("Compra concluida");
    }
}