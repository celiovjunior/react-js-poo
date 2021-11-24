import { Cliente } from "./Cliente/Cliente.js";

import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor1 = new Diretor("Matheus", 10000, 88552200)
diretor1.cadastrarSenha("123456789")

const gerente1 = new Gerente("Arnaldo", 5000, 99966633300)
gerente1.cadastrarSenha("78899500")

const logado = SistemaAutenticacao.login(gerente1, "78899500")

console.log(logado)