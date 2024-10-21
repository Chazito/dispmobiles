import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListaTitulosPageRoutingModule } from './admin-lista-titulos-routing.module';

import { AdminListaTitulosPage } from './admin-lista-titulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListaTitulosPageRoutingModule
  ],
  declarations: [AdminListaTitulosPage]
})
export class AdminListaTitulosPageModule {}
