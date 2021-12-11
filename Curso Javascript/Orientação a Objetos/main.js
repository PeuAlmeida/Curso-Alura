import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Pedro", 11122233344);
const cliente2 = new Cliente("Alice", 22233344455);

const contaCorrenteDoPedro = new ContaCorrente(cliente1, 1001);
const ContaCorrenteDaAlice = new ContaCorrente(cliente2, 1002);

contaCorrenteDoPedro.depositar(50);
ContaCorrenteDaAlice.depositar(30);

contaCorrenteDoPedro.sacar(25);

let valorTransferencia = 25;

ContaCorrenteDaAlice.transferir(valorTransferencia, contaCorrenteDoPedro);

console.log(ContaCorrenteDaAlice);
console.log(contaCorrenteDoPedro);

// cliente1.nome = "Pedro";
// cliente1.cpf = 11122233309;

// cliente2.nome = "Alice";
// cliente2.cpf = 22233344409;

// contaCorrenteDoPedro.agencia = 1001;
// contaCorrenteDoPedro.cliente = new Cliente("Pedro", 11122233344);
// contaCorrenteDoPedro.cliente.nome = "Pedro";
// contaCorrenteDoPedro.cliente.cpf = 11122233344;

// ContaCorrenteDaAlice.agencia = 1001;
// ContaCorrenteDaAlice.cliente = new Cliente("Alice", 22233344455);
// // ContaCorrenteDaAlice.cliente.nome = "Alice";
// // ContaCorrenteDaAlice.cliente.cpf = 22233344455;
