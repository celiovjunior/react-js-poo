class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg
}

const cliente1 = new Cliente();

cliente1.nome = "Celio";
cliente1.cpf = 11122233300;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 33366699958;

const cliente2 = new Cliente();

cliente2.nome = "Maria";
cliente2.cpf = 99988877711;
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 11122233355;

// const cliente3Nome = "João";
// const cliente3CPF = 55522288800;
// const cliente3Agencia = 1001;
// const cliente3Saldo = 0;

console.log(cliente1, cliente2)