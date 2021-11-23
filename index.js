import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente('Rodrigo', 10020030044)
const cliente1Conta = new ContaCorrente(cliente1, 1001)

const contaPoupanca = new ContaPoupanca(200, cliente1, cliente1Conta.agencia)

const conta = new Conta(0, cliente1, 1001)
console.log(conta)