import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotesByCharacterPageRoutingModule } from './quotes-by-character-routing.module';

import { QuotesByCharacterPage } from './quotes-by-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotesByCharacterPageRoutingModule
  ],
  declarations: [QuotesByCharacterPage]
})
export class QuotesByCharacterPageModule {}
