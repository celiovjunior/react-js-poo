import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


// cliente 1
const cliente1Conta = new ContaCorrente();
cliente1Conta.agencia = 1001

// instanciando uma classe dentro de outra classe (REFERENCIA)
cliente1Conta.cliente = new Cliente(); // sem esse instanciamento vai dar erro
cliente1Conta.cliente.nome = 'Arnaldo'
cliente1Conta.cliente.cpf = 1122330055
cliente1Conta.depositar(3800)


console.log(cliente1Conta)