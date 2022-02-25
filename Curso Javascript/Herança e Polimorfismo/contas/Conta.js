//CLASSE ABSTRATA

export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error ("Não deveriamos instanciar um objeto do tipo CONTA diretamente")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
       
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

    //Método abstrato
    sacar(valor) {
        throw new Error("Está usando o método abstrato")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
