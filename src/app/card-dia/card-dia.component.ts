import { Component, Input } from '@angular/core';
import { Alimento, GrupoAlimentar } from '../alimento/alimento.model';
import { Receita } from '../receita/receita.model';

@Component({
  selector: 'app-card-dia',
  templateUrl: './card-dia.component.html',
  styleUrls: ['./card-dia.component.scss'],
})
export class CardDiaComponent {
  @Input() nome: [];
  @Input() refsDia: [];
  @Input() itens: [];

  constructor() {
    let alimento: Alimento = {
      nome: 'cenoura',
      grupoAlimentar: GrupoAlimentar.GRUPO1
    }
    let receita: Receita = {
      nome: 'cafe',
      rendimento: 1,
      ingredientes: [
        {
          nome: alimento,
          quantidade: 1
        },
        {
          nome: alimento,
          quantidade: 3
        }
      ]
    };
  }
}
