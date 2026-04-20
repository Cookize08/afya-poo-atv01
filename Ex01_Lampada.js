class LampadaInteligente {
  #marca;
  #tecnologia;
  #ligada;
  #brilho;

  constructor(marca, tecnologia) {
    if (!marca || !tecnologia)
      throw new Error("Marca e tecnologia são obrigatórias.");

    this.#marca = marca;
    this.#tecnologia = tecnologia;
    this.#ligada = false;
    this.#brilho = 100;
  }

  get marca() {
    return this.#marca;
  }
  get tecnologia() {
    return this.#tecnologia;
  }
  get ligada() {
    return this.#ligada;
  }
  get brilho() {
    return this.#brilho;
  }
  get estado() {
    return this.#ligada ? "Ligada" : "Desligada";
  }

  alternar() {
    this.#ligada = !this.#ligada;
  }

  ajustarBrilho(novoBrilho) {
    if (!this.#ligada)
      throw new Error("Lâmpada desligada. Ligue antes de ajustar o brilho.");
    if (novoBrilho < 0 || novoBrilho > 100)
      throw new RangeError(`Brilho inválido (${novoBrilho}). Use 0–100.`);
    this.#brilho = novoBrilho;
  }

  toString() {
    return `[LampadaInteligente] ${this.#marca} · ${this.#tecnologia} · ${this.estado} · Brilho: ${this.#brilho}%`;
  }
}

const l = new LampadaInteligente("Philips", "LED");

console.log(l.ligada); // false
console.log(l.brilho); // 100
console.log(l.estado); // Desligada

l.alternar();
console.log(l.ligada); // true
console.log(l.estado); // Ligada

l.ajustarBrilho(60);
console.log(l.brilho); // 60

try {
  l.ajustarBrilho(200);
} catch (e) {
  console.log(e.message); // Brilho inválido (200). Use 0–100.
}

l.alternar();

try {
  l.ajustarBrilho(50);
} catch (e) {
  console.log(e.message); // Lâmpada desligada.
}

l.alternar();
console.log(l.toString()); // [LampadaInteligente] Philips · LED · Ligada · Brilho: 60%
