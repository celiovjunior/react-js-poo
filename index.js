import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


const cliente1 = new Cliente('Rodrigo', 10020030044)
const cliente1Conta = new ContaCorrente(cliente1, 1001)
const contaPoupanca = new ContaPoupanca(200, cliente1, cliente1Conta.agencia)
const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(1800)
contaSalario.sacar(60)

console.log(contaSalario)