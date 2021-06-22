"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./src/cliente");
var carrinho_1 = require("./src/carrinho");
var produto_1 = require("./src/produto");
var pedido_1 = require("./src/pedido");
var smsModule_1 = require("./src/smsModule");
//Aqui crio as variáveis para o teste 
var Max = new cliente_1.Cliente(12345, 'maxmax1234', 'conectado', 'Max_Barros_ds', 97984546555, 'maxbds@gmail.com', 'Rua 6 nº77, Bairro Centro, Manaus-AM');
console.log(Max);
Max.login();
Max.verifLogin();
var carrinho1 = new carrinho_1.Carrinho(1);
carrinho1.produtos[carrinho1.quantidade] = new produto_1.Produto('Cel', 'telefone movel');
console.log(carrinho1);
var pedido1 = new pedido_1.Pedido(13234, 79.99, 'pedido feito em 18/05/2021, rastreamento: AB343556');
/*Aqui crio um Assinante do tipo SMSModule
passando como parametro o Sujeito(ou Publicador) que lhe interessa*/
var sms = new smsModule_1.SMSModule(pedido1.statusEnvio);
console.log(pedido1.statusEnvio);
//Defino Variados estados para o Publicador
pedido1.statusEnvio.setState("Enviado.");
pedido1.statusEnvio.setState("Saiu do país de orígem.");
pedido1.statusEnvio.setState("Chegou ao país de destino.");
pedido1.statusEnvio.setState("Encaminhado para a fiscalização aduaneira");
pedido1.statusEnvio.setState("Aguardando pagamento :)");
pedido1.statusEnvio.setState("Objeto em trânsito - por fafor Aguarde");
pedido1.statusEnvio.setState("O carteiro saiu para a entrega");
pedido1.confirmarRecebimento();
//Por fim, removo o Assinante do tipo sms
pedido1.statusEnvio.removeObserver(sms);
console.log(pedido1.statusEnvio);
