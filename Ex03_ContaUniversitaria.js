class ContaCorrenteUniversitaria {
  #numeroConta;
  #saldo;
  #limite;

  constructor(numeroConta, titular) {
    this.#numeroConta = numeroConta;
    this.titular = titular;
    this.#saldo = 0;
    this.#limite = 500;
  }

  get numeroConta() {
    return this.#numeroConta;
  }

  get saldo() {
    return this.#saldo;
  }

  get limite() {
    return this.#limite;
  }

  get saldoTotal() {
    return this.#saldo + this.#limite;
  }

  get statusConta() {
    return this.#saldo < 0 ? "Negativo" : "Positivo";
  }

  depositar(valor) {
    if (valor <= 0) {
      return false;
    }

    this.#saldo += valor;
    return true;
  }

  sacar(valor) {
    if (valor <= 0) {
      return false;
    }

    if (valor > this.saldoTotal) {
      return false;
    }

    this.#saldo -= valor;
    return true;
  }

  toString() {
    return `Conta: ${this.#numeroConta} | Titular: ${this.titular} | Saldo: ${this.#saldo} | Limite: ${this.#limite}`;
  }
}

const conta = new ContaCorrenteUniversitaria(12345, "Maria");

console.log(conta.toString());

console.log(conta.depositar(300)); 
console.log(conta.sacar(600));    

console.log(conta.saldo);       
console.log(conta.saldoTotal);  
console.log(conta.statusConta);  

conta.titular = "Maria Silva";
console.log(conta.toString());
