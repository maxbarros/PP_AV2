"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var observer_1 = require("./observer");
var Pedido = /** @class */ (function () {
    function Pedido(numPedido, preco, detalhes) {
        this.statusEnvio = new observer_1.Subject();
        this.numPedido = numPedido;
        this.preco = preco;
        this.detalhes = detalhes;
    }
    Pedido.prototype.confirmarRecebimento = function () {
        this.statusEnvio.setState("Objeto recebido pelo destinatário");
    };
    return Pedido;
}());
exports.Pedido = Pedido;
