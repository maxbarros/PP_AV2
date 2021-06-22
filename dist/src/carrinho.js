"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = void 0;
var Carrinho = /** @class */ (function () {
    function Carrinho(quant) {
        this.produtos = [];
        this.quantidade = quant;
    }
    Carrinho.prototype.efetuarCompra = function () {
        console.log("Compra concluida");
    };
    return Carrinho;
}());
exports.Carrinho = Carrinho;
