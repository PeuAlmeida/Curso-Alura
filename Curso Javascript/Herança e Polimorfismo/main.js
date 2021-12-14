import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupança.js";

const cliente1 = new Cliente("Pedro", 11122233344);

const contaCorrenteDoPedro = new ContaCorrente(0, cliente1, 1001);

contaCorrenteDoPedro.depositar(500);
contaCorrenteDoPedro.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(20);
console.log(contaCorrenteDoPedro);
console.log(contaPoupanca)

