import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardapioPage } from './cardapio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CardapioPageRoutingModule } from './cardapio-routing.module';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CardapioPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CardapioPage]
})
export class CardapioPageModule {}
