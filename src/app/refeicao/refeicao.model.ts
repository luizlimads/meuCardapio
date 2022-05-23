import { Alimento } from "../alimento/alimento.model";
import { Receita } from "../receita/receita.model";

export class Refeicao {
    nome: string;
    horario: string;
    itens: [Alimento | Receita];
}