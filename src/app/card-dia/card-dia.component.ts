import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dia',
  templateUrl: './card-dia.component.html',
  styleUrls: ['./card-dia.component.scss'],
})
export class CardDiaComponent {
  @Input() nome: [];
  @Input() refsDia: [];
  @Input() itens: [];

}
