import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardDiaComponent } from './card-dia/card-dia.component';
import { CardRefeicaoComponent } from './card-refeicao/card-refeicao.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardDiaComponent,CardRefeicaoComponent],
  exports: [CardDiaComponent,CardRefeicaoComponent]
})
export class ComponentsModule {}
