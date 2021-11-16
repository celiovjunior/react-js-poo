class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor
        }
    };

    depositar(valor) {
        if(this.valor > 0) {
            this.saldo += valor
        }
    }
}

const contaRodrigo = new Cliente();
contaRodrigo.nome = "Rodrigo";
contaRodrigo.cpf = 11122233310

const RodrigoCorrente = new ContaCorrente();
RodrigoCorrente.agencia = 2020;
RodrigoCorrente.saldo = 10000;

console.log(RodrigoCorrente)