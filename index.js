class Cliente {
    nome;
    cpf;
}

// # significa atributo privado
class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        if(this.#saldo >= valor) {
            this.#saldo -= valor
        }
    };

    depositar(valor) {
        if(valor > 0) {
            this.#saldo += valor
        }
        return console.log(this.#saldo)
    }
}

const contaRodrigo = new Cliente();
contaRodrigo.nome = "Rodrigo";
contaRodrigo.cpf = 11122233310

const RodrigoCorrente = new ContaCorrente();
RodrigoCorrente.agencia = 2020;
RodrigoCorrente.depositar(25)
RodrigoCorrente.depositar(25)
RodrigoCorrente.depositar(25)
RodrigoCorrente.depositar(25)

console.log(RodrigoCorrente)