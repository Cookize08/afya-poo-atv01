class Personagem {
  #classe;
  #nivel;
  #vidaAtual;
  #vidaMaxima;

  constructor(nome, classe) {
    this.nome = nome;

    if (classe !== "Guerreiro" && classe !== "Mago") {
      throw new Error("Classe inválida. Use 'Guerreiro' ou 'Mago'.");
    }

    this.#classe = classe;
    this.#nivel = 1;

    this.#vidaMaxima = classe === "Guerreiro" ? 150 : 80;
    this.#vidaAtual = this.#vidaMaxima;
  }

  // ===== GETTERS =====
  get classe() {
    return this.#classe;
  }

  get nivel() {
    return this.#nivel;
  }

  get vidaAtual() {
    return this.#vidaAtual;
  }

  get vidaMaxima() {
    return this.#vidaMaxima;
  }

  receberDano(pontos) {
    if (pontos <= 0) return;

    this.#vidaAtual -= pontos;

    if (this.#vidaAtual < 0) {
      this.#vidaAtual = 0;
    }
  }

  curar(pontos) {
    if (this.#vidaAtual === 0) {
      return "Personagem morto. Não pode ser curado.";
    }

    if (pontos <= 0) return;

    this.#vidaAtual += pontos;

    if (this.#vidaAtual > this.#vidaMaxima) {
      this.#vidaAtual = this.#vidaMaxima;
    }
  }

  subirNivel() {
    if (this.#vidaAtual === 0) {
      return "Personagem morto. Não pode subir de nível.";
    }

    if (this.#nivel >= 99) {
      return "Nível máximo atingido.";
    }

    this.#nivel++;

    // aumenta 10% da vida máxima
    this.#vidaMaxima = Math.floor(this.#vidaMaxima * 1.1);

    // restaura totalmente a vida
    this.#vidaAtual = this.#vidaMaxima;
  }

  ressuscitar() {
    if (this.#vidaAtual > 0) {
      return "O personagem ainda está vivo.";
    }

    this.#vidaAtual = this.#vidaMaxima;
    return "Personagem ressuscitado!";
  }

  toString() {
    return `${this.nome} (${this.#classe}) - Lvl ${this.#nivel} - HP: ${this.#vidaAtual}/${this.#vidaMaxima}`;
  }
}

const p1 = new Personagem("Arthas", "Guerreiro");

console.log(p1.toString());

p1.receberDano(200);
console.log(p1.toString()); // morto

console.log(p1.curar(50)); // não funciona
console.log(p1.subirNivel()); // não funciona

console.log(p1.ressuscitar());
console.log(p1.toString());

p1.subirNivel();
console.log(p1.toString());
