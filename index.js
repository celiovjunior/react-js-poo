import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


// cliente 1
const cliente1Conta = new ContaCorrente();
cliente1Conta.agencia = 1001

// instanciando uma classe dentro de outra classe (REFERENCIA)

cliente1Conta.cliente = new Cliente(); // sem esse instanciamento vai dar erro
cliente1Conta.cliente.nome = 'Fulano'
cliente1Conta.cliente.cpf = 78945612300
cliente1Conta.depositar(3500)

// exemplo 2
const cliente2Conta = new ContaCorrente();
cliente2Conta.agencia = 1001
cliente2Conta.cliente = new Cliente()
cliente2Conta.cliente.nome = 'Sicrano'
cliente2Conta.cliente.cpf = 77744455511
cliente2Conta.depositar(2200)

// apos configurar os acessores, vai dar erro
cliente2Conta.saldo = 150000

console.log(cliente2Conta)