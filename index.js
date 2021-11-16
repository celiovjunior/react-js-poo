import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente()
cliente1.nome = "Mateus"
cliente1.cpf = 55588866610

const cliente1Conta = new ContaCorrente();
cliente1Conta.agencia = 1001

console.log(cliente1)