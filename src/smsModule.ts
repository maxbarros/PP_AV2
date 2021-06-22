import { Observer, Subject } from "./observer";

/*Aqui crio uma subclasse de Observer.
Essa subclasse pode ser entendida como um
tipo específico de Assinante

este Assinante pode receber um Publucador
como parâmeto, ou seja, este assinante será
adicionado à lista de Assinantes do Publicador
passado como parâmetro*/

export class SMSModule extends Observer {
    constructor(subject: Subject) {
        super();
        this.subject = subject;
        this.subject.addObserver(this);
    }

    //Função de atualização para este assinante
    update(): void {
        console.log("Novo SMS: O Status do seu pedido foi atualizado: ", this.subject.getState());
    }
}
