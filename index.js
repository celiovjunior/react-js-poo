import { Cliente } from "./Cliente/Cliente.js";

import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor1 = new Diretor("Matheus", 10000, 88552200)
diretor1.cadastrarSenha("123456789")

const gerente1 = new Gerente("Arnaldo", 5000, 99966633300)
gerente1.cadastrarSenha("78899500")

const cliente1 = new Cliente("Kdu", 15935788800, 405060)

const gerenteLogado = SistemaAutenticacao.login(gerente1, "78899500")
const diretorLogado = SistemaAutenticacao.login(diretor1, "123456789")
const clienteLogado = SistemaAutenticacao.login(cliente1, "405060")

console.log([gerenteLogado, diretorLogado, clienteLogado])