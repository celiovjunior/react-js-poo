import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Rodrigo', 10020030044)
const cliente1Conta = new ContaCorrente(cliente1, 1001)

const cliente2 = new Cliente('Cesar', 33322211100)
const cliente2Conta = new ContaCorrente(cliente2, 1001)
cliente2Conta.depositar(1600)

console.table([cliente2Conta, cliente1Conta])