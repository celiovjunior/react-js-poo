import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


// cliente 1
const cliente1 = new Cliente()
cliente1.nome = "Mateus"
cliente1.cpf = 55588866610

const cliente1Conta = new ContaCorrente();
cliente1Conta.agencia = 1001
cliente1Conta.cliente = cliente1;

// cliente 2
const cliente2 = new Cliente();
cliente2.nome = "Rodrigo"
cliente2.cpf = 44422266600

const cliente2conta = new ContaCorrente();
cliente2conta.depositar(2500)
cliente2conta.agencia = 1001
cliente2conta.cliente = cliente2

// transferencia
cliente2conta.transferir(560, cliente1Conta)

console.log(cliente1Conta)