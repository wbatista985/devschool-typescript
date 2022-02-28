// Crie uma interface para representar cada um dos objetos abaixo e coloque o tipo apropriado para cada uma das constantes.

import { Tupla } from "../conteudo/tipos-basicos"

export interface Ilinguagem {
    nome: string;
    tipada: boolean;
}

const linguagem = {
    nome: 'Typescript',
    tipada: true,
}

export interface Ipessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    amigos: Iamigos[];
}

export interface Iamigos {
    nome: string;
    sobrenome: string;
    idade: number;
    amigos: string | number;
}

const pessoa = {
    nome: 'Alan',
    sobrenome: 'Jhonnes',
    idade: 31,
    amigos: [
        {
            nome: 'Nathan',
            sobrenome: 'Lima',
            idade: 22,
            amigos: [],
        }
    ]
}



