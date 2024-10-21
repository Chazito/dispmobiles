import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListaResennasPageRoutingModule } from './admin-lista-resennas-routing.module';

import { AdminListaResennasPage } from './admin-lista-resennas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListaResennasPageRoutingModule
  ],
  declarations: [AdminListaResennasPage]
})
export class AdminListaResennasPageModule {}
