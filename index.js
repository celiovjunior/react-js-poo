class Cliente {
    nome;
    cpf;
}

// # significa atributo privado (nao oficial)
class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor

        }
    };

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor        
    }
}

const contaRodrigo = new Cliente();
contaRodrigo.nome = "Rodrigo";
contaRodrigo.cpf = 11122233310

const RodrigoCorrente = new ContaCorrente();
RodrigoCorrente.agencia = 2020;
RodrigoCorrente._saldo = 0
RodrigoCorrente.depositar(150)
const valorSacado = RodrigoCorrente.sacar(70)
console.log(valorSacado)

console.log(RodrigoCorrente)