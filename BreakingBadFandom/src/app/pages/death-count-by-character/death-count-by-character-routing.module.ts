import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathCountByCharacterPage } from './death-count-by-character.page';

const routes: Routes = [
  {
    path: '',
    component: DeathCountByCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathCountByCharacterPageRoutingModule {}
