"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(id, senha, status) {
        this.idUsuario = id;
        this.senha = senha;
        this.statusLogin = status;
    }
    Usuario.prototype.verifLogin = function () {
    };
    return Usuario;
}());
exports.Usuario = Usuario;
