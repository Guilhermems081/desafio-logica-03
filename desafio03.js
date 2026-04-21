class ClasseHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipoDoHeroi
    }

    atacar(){

        let ataque = ""

        if(this.tipo === "mago"){
            ataque = "magia"

        } else if(this.tipo === "guerreiro"){
            ataque = "espada"

        } else if(this.tipo === "monge"){
            ataque = "artes marciais"

        }else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi = new ClasseHeroi("Gmdev081", 27, "ninja")

heroi.atacar()