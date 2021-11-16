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
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Celio";
cliente1.cpf = 11122233300;

const cliente2 = new Cliente();
cliente2.nome = "Maria";
cliente2.cpf = 99988877711;

const contaCorrenteCelio = new ContaCorrente();
contaCorrenteCelio.saldo = 100;
contaCorrenteCelio.agencia = 1001;

contaCorrenteCelio.sacar(50)
console.log(contaCorrenteCelio.saldo)




// const cliente3Nome = "João";
// const cliente3CPF = 55522288800;
// const cliente3Agencia = 1001;
// const cliente3Saldo = 0;


// console.table(cliente1)
// console.table(cliente2)