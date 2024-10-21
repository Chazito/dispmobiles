import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEditarTituloPageRoutingModule } from './admin-editar-titulo-routing.module';

import { AdminEditarTituloPage } from './admin-editar-titulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEditarTituloPageRoutingModule
  ],
  declarations: [AdminEditarTituloPage]
})
export class AdminEditarTituloPageModule {}
