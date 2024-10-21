import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResennaPageRoutingModule } from './resenna-routing.module';

import { ResennaPage } from './resenna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResennaPageRoutingModule
  ],
  declarations: [ResennaPage]
})
export class ResennaPageModule {}
