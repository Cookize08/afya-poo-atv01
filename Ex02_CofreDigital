class CofreDigital {
  #senha;
  #estaAberto;
  #tentativasErradas;

  constructor(dono, senhaInicial) {
    this.dono = dono;
    this.#senha = senhaInicial;
    this.#estaAberto = false;
    this.#tentativasErradas = 0;
  }

  get estaAberto() {
    return this.#estaAberto;
  }

  abrir(senhaInformada) {
    if (this.#tentativasErradas >= 3) {
      return "Cofre Bloqueado";
    }

    if (senhaInformada === this.#senha) {
      this.#estaAberto = true;
      this.#tentativasErradas = 0;
      return "Cofre aberto com sucesso";
    } else {
      this.#tentativasErradas++;
      return `Senha incorreta. Tentativas: ${this.#tentativasErradas}`;
    }
  }

  fechar() {
    this.#estaAberto = false;
    return "Cofre fechado";
  }

  alterarSenha(senhaAntiga, novaSenha) {
    if (!this.#estaAberto) {
      return "O cofre precisa estar aberto para alterar a senha";
    }

    if (senhaAntiga !== this.#senha) {
      return "Senha antiga incorreta";
    }

    this.#senha = novaSenha;
    return "Senha alterada com sucesso";
  }

  resetarCofre() {
    this.#tentativasErradas = 0;
    this.#estaAberto = false;
    return "Cofre reiniciado";
  }
}

const cofre = new CofreDigital("Vinicios", "1234");

console.log(cofre.abrir("1111"));
console.log(cofre.abrir("2222")); 
console.log(cofre.abrir("3333")); 
console.log(cofre.abrir("1234"));

console.log(cofre.resetarCofre()); 

console.log(cofre.abrir("1234"));
console.log(cofre.alterarSenha("1234", "abcd"));
console.log(cofre.abrir("abcd"))
console.log(cofre.fechar());
