import { Alimento } from "../alimento/alimento.model";

class Ingrediente {
    nome: Alimento | Receita;
    quantidade: number;
} 

export class Receita {
    nome: string;
    rendimento: number;
    ingredientes: Ingrediente[];
}