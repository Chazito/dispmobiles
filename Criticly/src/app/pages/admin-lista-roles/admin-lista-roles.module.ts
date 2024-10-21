import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListaRolesPageRoutingModule } from './admin-lista-roles-routing.module';

import { AdminListaRolesPage } from './admin-lista-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListaRolesPageRoutingModule
  ],
  declarations: [AdminListaRolesPage]
})
export class AdminListaRolesPageModule {}
