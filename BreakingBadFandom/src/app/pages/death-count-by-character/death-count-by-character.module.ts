import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathCountByCharacterPageRoutingModule } from './death-count-by-character-routing.module';

import { DeathCountByCharacterPage } from './death-count-by-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathCountByCharacterPageRoutingModule
  ],
  declarations: [DeathCountByCharacterPage]
})
export class DeathCountByCharacterPageModule {}
