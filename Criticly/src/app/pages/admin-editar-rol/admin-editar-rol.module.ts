import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEditarRolPageRoutingModule } from './admin-editar-rol-routing.module';

import { AdminEditarRolPage } from './admin-editar-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEditarRolPageRoutingModule
  ],
  declarations: [AdminEditarRolPage]
})
export class AdminEditarRolPageModule {}
