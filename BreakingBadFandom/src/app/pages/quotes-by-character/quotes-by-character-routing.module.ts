import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotesByCharacterPage } from './quotes-by-character.page';

const routes: Routes = [
  {
    path: '',
    component: QuotesByCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotesByCharacterPageRoutingModule {}
