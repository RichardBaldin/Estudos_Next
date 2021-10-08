export default class Produto {
    #id
    #nome
    #preco

    construtor(id, nome, preco) {
        this.#id = id
        this.#nome = nome
        this.#preco = preco
    }

    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }

    get preco() {
        return this.#preco
    }

}