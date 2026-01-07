// Polimorfismo -> Métodos se comportam de maneiras diferentes
// Super classe
function ContaBancaria(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

//Métodos genéricos -> Todas as contas vão ter

ContaBancaria.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log('Saldo Insuficiente!');
        this.verSaldo();
        return;
    } 
    this.saldo -= valor;
    this.verSaldo();
};
ContaBancaria.prototype.depositar = function(valor) {
    this.saldo += valor; 
    this.verSaldo();
};
ContaBancaria.prototype.verSaldo = function() {
    console.log(`Ag.: ${this.agencia}\nConta: ${this.conta}\nSaldo: ${this.saldo}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
    ContaBancaria.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(ContaBancaria.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Polimorfismo
ContaCorrente.prototype.sacar = function(valor){ // Subescrevi o método sacar para CC, logo, esse método vale apenas para ele
    if(valor > (this.saldo + this.limite)){
        console.log('Saldo insuficiente!');
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) { // Conta Poupança tem exatamente os mesmos métodos de ContaBancária
    ContaBancaria.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(ContaBancaria.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta1 = new ContaCorrente('0001', '54', 0, 100);
const conta2 = new ContaPoupanca('0001', '54', 0);

conta1.depositar(10);
conta2.depositar(10);

console.log();

conta1.sacar(20);
conta2.sacar(10);
