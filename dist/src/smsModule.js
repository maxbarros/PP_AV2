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
exports.SMSModule = void 0;
var observer_1 = require("./observer");
/*Aqui crio uma subclasse de Observer.
Essa subclasse pode ser entendida como um
tipo específico de Assinante

este Assinante pode receber um Publucador
como parâmeto, ou seja, este assinante será
adicionado à lista de Assinantes do Publicador
passado como parâmetro*/
var SMSModule = /** @class */ (function (_super) {
    __extends(SMSModule, _super);
    function SMSModule(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subject.addObserver(_this);
        return _this;
    }
    //Função de atualização para este assinante
    SMSModule.prototype.update = function () {
        console.log("Novo SMS: O Status do seu pedido foi atualizado: ", this.subject.getState());
    };
    return SMSModule;
}(observer_1.Observer));
exports.SMSModule = SMSModule;
