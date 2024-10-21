import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListaTiposPageRoutingModule } from './admin-lista-tipos-routing.module';

import { AdminListaTiposPage } from './admin-lista-tipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListaTiposPageRoutingModule
  ],
  declarations: [AdminListaTiposPage]
})
export class AdminListaTiposPageModule {}
