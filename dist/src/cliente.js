"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var usuario_1 = require("./usuario");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(idUsuario, senha, statusLogin, nome, telefone, email, endereco) {
        var _this = _super.call(this, idUsuario, senha, statusLogin) || this;
        _this.nomeCliente = nome;
        _this.telefone = telefone;
        _this.email = email;
        _this.endereco = endereco;
        return _this;
    }
    Cliente.prototype.efetuarCadastro = function () {
        console.log("Cadastro Concluído");
    };
    Cliente.prototype.login = function () {
        console.log("Login efetuado");
    };
    Cliente.prototype.editarPerfil = function () {
        console.log("Perfil Atualizado");
    };
    return Cliente;
}(usuario_1.Usuario));
exports.Cliente = Cliente;
