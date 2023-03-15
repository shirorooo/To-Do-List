import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTrainerPage } from './update-trainer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTrainerPageRoutingModule {}
