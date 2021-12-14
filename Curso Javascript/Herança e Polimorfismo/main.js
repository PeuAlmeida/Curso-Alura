import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupança.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Pedro", 11122233344);

const contaCorrenteDoPedro = new Conta(0, cliente1, 1001);

contaCorrenteDoPedro.depositar(50);
contaCorrenteDoPedro.sacar(25);

const contaPoupanca = new Conta(50, cliente1, 1001);
console.log(contaCorrenteDoPedro);
console.log(contaPoupanca)

