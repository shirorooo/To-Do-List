import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTrainerPageRoutingModule } from './update-trainer-routing.module';

import { UpdateTrainerPage } from './update-trainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTrainerPageRoutingModule
  ],
  declarations: [UpdateTrainerPage]
})
export class UpdateTrainerPageModule {}
