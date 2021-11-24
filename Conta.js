export class Conta {
    constructor(saldoInicial, cliente, agencia) {      
        if(this.constructor == Conta) {
            throw new Error("Not allowed to create an instance of class Conta")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // metodo abstrato
    sacar(valor) {
        throw new Error("Abstract method")
    }
    
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado
            
        }
        return 0
    }

    depositar(valor) {
        if(valor <= 100) {
            return;
        }
        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

    // atributos privados
    _cliente;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }


    get saldo() {
        return this._saldo
    }

    teste() {
        console.log("Teste na classe Conta")
    }
}