import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    static numeroDeContas = 0;
    
    agencia;

    // Atributos Privados
    // Padrão da comunidade para avisar que um atributo é privado
    // #saldo = 0 > Padrão Private em discurssão 
    _cliente;
    _saldo = 0; 

    constructor(cliente, agencia) {
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    set cliente(pessoa) {
        if (pessoa instanceof Cliente) {
            this._cliente = pessoa;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}