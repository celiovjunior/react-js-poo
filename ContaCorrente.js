import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    // atributo estatico
    static numeroDeContas = 0
    
    constructor(cliente, agencia) {
        // referencia
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }

    teste() {
        super.teste()
        console.log("Teste na classe ContaCorrente")
    }
}