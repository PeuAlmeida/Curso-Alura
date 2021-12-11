class ContaCorrente {
    agencia;
    _saldo; // Padrão da comunidade para avisar que um atributo é privado
    //#saldo = 0 > Private em discurssão 
}

class ContaCorrente {
    agencia;
    _saldo; // Padrão da comunidade para avisar que um atributo é privado
    //#saldo = 0 > Private em discurssão 

    depositar(valor) {
        if(valor <= 0) 
        return;
        
        this._saldo += valor
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    } 
}
// const cliente1 = new Cliente();
// const cliente2 = new Cliente();

// cliente1.nome = "Pedro";
// cliente1.cpf = 11122233309;

// cliente2.nome = "Alice";
// cliente2.cpf = 22233344409;

const contaCorrenteDoPedro = new ContaCorrente();
const ContaCorrenteDaAlice = new ContaCorrente();

contaCorrenteDoPedro.agencia = 1001;
contaCorrenteDoPedro.saldo = 0;

contaCorrenteDoPedro.depositar(50);

ContaCorrenteDaAlice.agencia = 1001;
ContaCorrenteDaAlice.saldo = 0;

// console.log(cliente1);
// console.log(cliente2);

console.log(contaCorrenteDoPedro);

contaCorrenteDoPedro.sacar(25);
console.log(contaCorrenteDoPedro)



